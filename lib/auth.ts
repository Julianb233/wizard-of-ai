/**
 * Server-Side Authentication Utilities
 *
 * These utilities provide server-side role checking and authentication
 * for use in Server Components, Server Actions, and API routes.
 */

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

// Role hierarchy (higher index = more permissions)
const ROLE_HIERARCHY = ['viewer', 'user', 'moderator', 'admin'] as const;
type Role = (typeof ROLE_HIERARCHY)[number];

// Default permissions by role
const ROLE_PERMISSIONS: Record<Role, string[]> = {
  viewer: ['content.read'],
  user: ['content.read', 'content.create', 'profile.edit'],
  moderator: ['content.read', 'content.create', 'content.edit', 'content.moderate', 'profile.edit'],
  admin: ['content.read', 'content.create', 'content.edit', 'content.delete', 'content.moderate', 'users.manage', 'settings.manage', 'profile.edit'],
};

/**
 * Get the current user's authentication status
 */
export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get('auth_token');
    return !!authToken?.value;
  } catch {
    return false;
  }
}

/**
 * Get the current user's role
 */
export async function getUserRole(): Promise<Role> {
  try {
    const cookieStore = await cookies();
    const roleValue = cookieStore.get('user_role')?.value as Role | undefined;

    if (roleValue && ROLE_HIERARCHY.includes(roleValue)) {
      return roleValue;
    }

    return 'viewer';
  } catch {
    return 'viewer';
  }
}

/**
 * Get all roles the user has (for multi-role systems)
 */
export async function getUserRoles(): Promise<Role[]> {
  const primaryRole = await getUserRole();

  // In a multi-role system, you might parse multiple roles from a cookie or database
  // For now, we return the single role in an array
  return [primaryRole];
}

/**
 * Check if user has a specific role
 */
export async function checkRole(role: Role): Promise<boolean> {
  const userRole = await getUserRole();
  return userRole === role;
}

/**
 * Check if user has any of the specified roles
 */
export async function hasAnyRole(roles: Role[]): Promise<boolean> {
  const userRole = await getUserRole();
  return roles.includes(userRole);
}

/**
 * Check if user's role meets or exceeds the minimum role level
 */
export async function meetsRoleLevel(minimumRole: Role): Promise<boolean> {
  const userRole = await getUserRole();
  const currentIndex = ROLE_HIERARCHY.indexOf(userRole);
  const requiredIndex = ROLE_HIERARCHY.indexOf(minimumRole);
  return currentIndex >= requiredIndex;
}

/**
 * Check if user has a specific permission
 */
export async function checkPermission(permission: string): Promise<boolean> {
  const userRole = await getUserRole();
  const permissions = ROLE_PERMISSIONS[userRole] || [];
  return permissions.includes(permission);
}

/**
 * Get all permissions for the current user
 */
export async function getUserPermissions(): Promise<string[]> {
  const userRole = await getUserRole();
  return ROLE_PERMISSIONS[userRole] || [];
}

/**
 * Require authentication - throws or redirects if not authenticated
 */
export async function requireAuth(redirectTo = '/login'): Promise<void> {
  const isAuth = await isAuthenticated();

  if (!isAuth) {
    redirect(redirectTo);
  }
}

/**
 * Require a specific role - throws error if user doesn't have the role
 */
export async function requireRole(role: Role): Promise<void> {
  const hasRole = await checkRole(role);

  if (!hasRole) {
    throw new Error(`Access denied. Required role: ${role}`);
  }
}

/**
 * Require any of the specified roles
 */
export async function requireAnyRole(roles: Role[]): Promise<void> {
  const hasRole = await hasAnyRole(roles);

  if (!hasRole) {
    throw new Error(`Access denied. Required one of: ${roles.join(', ')}`);
  }
}

/**
 * Require minimum role level
 */
export async function requireRoleLevel(minimumRole: Role): Promise<void> {
  const meetsLevel = await meetsRoleLevel(minimumRole);

  if (!meetsLevel) {
    throw new Error(`Access denied. Minimum role required: ${minimumRole}`);
  }
}

/**
 * Require a specific permission
 */
export async function requirePermission(permission: string): Promise<void> {
  const hasPermission = await checkPermission(permission);

  if (!hasPermission) {
    throw new Error(`Access denied. Required permission: ${permission}`);
  }
}

/**
 * Create a protected route handler wrapper
 */
export function withRoleProtection(
  handler: () => Promise<Response>,
  requiredRole: Role
) {
  return async (): Promise<Response> => {
    try {
      await requireRole(requiredRole);
      return handler();
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }
  };
}
