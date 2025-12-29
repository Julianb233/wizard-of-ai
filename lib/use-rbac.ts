'use client';

/**
 * RBAC (Role-Based Access Control) React Hooks
 *
 * Client-side hooks for managing role-based access control in React components.
 * These hooks provide a simple way to check user roles and permissions.
 */

import { useState, useEffect, useCallback, useMemo } from 'react';

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

interface RBACState {
  isAuthenticated: boolean;
  role: Role;
  permissions: string[];
  isLoading: boolean;
}

/**
 * Main RBAC hook - provides all role-based access control functionality
 *
 * @example
 * ```tsx
 * const { isAuthenticated, role, isAdmin, hasPermission } = useRBAC();
 *
 * if (hasPermission('content.delete')) {
 *   // show delete button
 * }
 * ```
 */
export function useRBAC() {
  const [state, setState] = useState<RBACState>({
    isAuthenticated: false,
    role: 'viewer',
    permissions: [],
    isLoading: true,
  });

  useEffect(() => {
    // In a real app, this would fetch from an auth provider
    // For now, we'll check localStorage or default to viewer
    const checkAuth = () => {
      try {
        const storedRole = localStorage.getItem('user_role') as Role | null;
        const isAuth = localStorage.getItem('is_authenticated') === 'true';

        const role = storedRole && ROLE_HIERARCHY.includes(storedRole) ? storedRole : 'viewer';
        const permissions = ROLE_PERMISSIONS[role] || [];

        setState({
          isAuthenticated: isAuth,
          role,
          permissions,
          isLoading: false,
        });
      } catch {
        // SSR or localStorage not available
        setState(prev => ({ ...prev, isLoading: false }));
      }
    };

    checkAuth();
  }, []);

  const isAdmin = useMemo(() => state.role === 'admin', [state.role]);

  const canModerate = useMemo(
    () => state.role === 'admin' || state.role === 'moderator',
    [state.role]
  );

  const hasPermission = useCallback(
    (permission: string): boolean => {
      return state.permissions.includes(permission);
    },
    [state.permissions]
  );

  const hasRole = useCallback(
    (role: string): boolean => {
      return state.role === role;
    },
    [state.role]
  );

  const hasAnyRole = useCallback(
    (roles: string[]): boolean => {
      return roles.includes(state.role);
    },
    [state.role]
  );

  const meetsRoleLevel = useCallback(
    (minimumRole: Role): boolean => {
      const currentIndex = ROLE_HIERARCHY.indexOf(state.role);
      const requiredIndex = ROLE_HIERARCHY.indexOf(minimumRole);
      return currentIndex >= requiredIndex;
    },
    [state.role]
  );

  return {
    ...state,
    isAdmin,
    canModerate,
    hasPermission,
    hasRole,
    hasAnyRole,
    meetsRoleLevel,
  };
}

/**
 * Check if user has a specific role
 *
 * @example
 * ```tsx
 * const isAdmin = useHasRole('admin');
 * ```
 */
export function useHasRole(role: string): boolean {
  const { hasRole } = useRBAC();
  return hasRole(role);
}

/**
 * Check if user has any of the specified roles
 *
 * @example
 * ```tsx
 * const canModerate = useHasAnyRole(['admin', 'moderator']);
 * ```
 */
export function useHasAnyRole(roles: string[]): boolean {
  const { hasAnyRole } = useRBAC();
  return hasAnyRole(roles);
}

/**
 * Check if user has a specific permission
 *
 * @example
 * ```tsx
 * const canDelete = useHasPermission('content.delete');
 * ```
 */
export function useHasPermission(permission: string): boolean {
  const { hasPermission } = useRBAC();
  return hasPermission(permission);
}

/**
 * Helper to set user role (for testing/demo purposes)
 */
export function setUserRole(role: Role, isAuthenticated = true): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user_role', role);
    localStorage.setItem('is_authenticated', String(isAuthenticated));
    // Trigger re-render by dispatching storage event
    window.dispatchEvent(new Event('storage'));
  }
}

/**
 * Helper to clear user auth (logout)
 */
export function clearUserAuth(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user_role');
    localStorage.removeItem('is_authenticated');
    window.dispatchEvent(new Event('storage'));
  }
}
