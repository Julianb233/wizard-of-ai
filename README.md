# The Wizard of AI

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwindcss)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)

The official website for AI Acrobatics - transforming businesses through strategic AI implementation, custom AI agents, and workflow automation. Follow the yellow brick road to AI mastery.

## Overview

AI Acrobatics (The Wizard of AI) helps business owners, executives, and innovators harness the power of AI to scale operations without proportional hiring. We provide expert-guided AI implementation, custom agent development, and proven ROI-focused automation solutions.

**What We Do:**
- Custom AI Agent Development
- Workflow Automation & Integration
- AI Strategy & Implementation
- Executive AI Coaching
- Content Creation & Marketing Automation

**Target Audiences:**
- Business Owners seeking operational efficiency
- Executives & Managers driving competitive advantage
- Startup Founders scaling without massive hiring
- Agency Owners delivering at scale
- Content Creators automating production

## Features

### Core Functionality
- **AI Agents Showcase** - Browse pre-built AI agents (24/7 Support Bot, Content Factory, Lead Gen Machine)
- **Blog Platform** - SEO-optimized content with markdown support, dynamic routing
- **Service Pages** - Detailed breakdowns of coaching, apps, and custom solutions
- **Audience-Specific Landing Pages** - Targeted content for B2B, B2C, executives, startups, etc.
- **Resource Library** - AI Playbook, Prompt Library, ROI Calculator, Community access
- **Booking Integration** - Direct consultation scheduling

### Technical Features
- Server-side rendering (SSR) with Next.js App Router
- Dynamic blog with markdown support and metadata
- SEO-optimized with structured data and meta tags
- Responsive design with Tailwind CSS 4.1
- 3D graphics with React Three Fiber
- Smooth animations with Framer Motion
- Form handling with React Hook Form + Zod validation
- Analytics with Vercel Analytics
- Dark mode support with next-themes
- Accessible UI components with Radix UI

### Content Highlights
- **AI Playbook** - Comprehensive guide to AI implementation
- **Prompt Library** - Curated AI prompts for business use
- **ROI Calculator** - Calculate potential AI automation savings
- **Blog** - Regular insights on AI strategy, automation, and industry trends
- **Getting Started Guide** - Step-by-step AI adoption framework

## Tech Stack

### Core Framework
- **Next.js 16.1** - React framework with App Router, SSR, and static generation
- **React 19.2** - Latest React with concurrent features
- **TypeScript 5.7** - Type-safe development

### Styling & UI
- **Tailwind CSS 4.1** - Utility-first CSS with custom configuration
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **class-variance-authority** - Component variant management

### Data & Forms
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation
- **React Markdown** - Blog content rendering

### 3D & Graphics
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Three.js** - 3D graphics library

### Developer Experience
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **Vercel Analytics** - Performance monitoring

## Project Structure

```
v0-the-wizard-of-ai-/
├── app/                          # Next.js App Router
│   ├── (routes)/
│   │   ├── about/               # About page
│   │   ├── agents/              # AI agents showcase
│   │   │   └── [id]/           # Dynamic agent detail pages
│   │   ├── blog/                # Blog platform
│   │   │   └── [slug]/         # Dynamic blog posts
│   │   ├── book/                # Consultation booking
│   │   ├── coaching/            # Coaching services
│   │   ├── pricing/             # Pricing tiers
│   │   ├── resources/           # Resource library
│   │   │   ├── ai-playbook/
│   │   │   ├── prompt-library/
│   │   │   ├── roi-calculator/
│   │   │   ├── community/
│   │   │   └── masterclass/
│   │   ├── serve/               # Audience-specific pages
│   │   │   ├── b2b/
│   │   │   ├── b2c/
│   │   │   ├── business-owners/
│   │   │   ├── executives/
│   │   │   ├── startups/
│   │   │   ├── agency-owners/
│   │   │   └── content-creators/
│   │   └── work-with-julian/   # Contact/engagement
│   ├── api/                     # API routes
│   ├── admin/                   # Admin dashboard
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # Reusable React components
│   ├── ui/                      # Radix UI components
│   └── ...                      # Custom components
├── lib/                         # Utility functions
├── public/                      # Static assets
│   ├── images/                  # Optimized images
│   ├── 3d/                      # 3D models
│   └── fonts/                   # Custom fonts
├── docs/                        # Documentation
├── styles/                      # Global styles
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── components.json              # shadcn/ui configuration
└── package.json                 # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd v0-the-wizard-of-ai-
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration (see Environment Variables section).

4. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Required for production
NEXT_PUBLIC_SITE_URL=https://wizardofai.com

# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id

# Optional: Booking/Forms
NEXT_PUBLIC_CALENDLY_URL=your-calendly-url

# Optional: API integrations
# Add your API keys here
```

**Note:** Never commit `.env.local` to version control.

## Build & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in `.next/` directory.

### Vercel Deployment

This project is optimized for Vercel deployment:

**Automatic Deployment:**
1. Connect repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

**Manual Deployment:**
```bash
vercel deploy
```

**Live Site:**
[https://vercel.com/ai-acrobatics/v0-lorenzo-motocross-landing-pag-4y](https://vercel.com/ai-acrobatics/v0-lorenzo-motocross-landing-pag-4y)

### Build Configuration

- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Node Version:** 18.x

## SEO Features

### Implemented Optimizations

1. **AI-Optimized Content Structure**
   - LLM-friendly content parsing
   - Structured data markup
   - Semantic HTML

2. **Traditional SEO**
   - Optimized meta tags (title, description, keywords)
   - Open Graph tags for social sharing
   - Twitter Card metadata
   - Canonical URLs
   - Sitemap generation

3. **Content Strategy**
   - Captivating hooks and headlines
   - Actionable insights and takeaways
   - Clear calls-to-action
   - Internal linking structure

4. **Technical SEO**
   - Featured snippet optimization
   - Mobile-first responsive design
   - Fast page load times
   - Accessibility (WCAG compliance)
   - Clean URL structure

### SEO Documentation

Detailed SEO strategy and implementation guides:
- `/SEO-OPTIMIZATION-PLAN.md` - Comprehensive SEO strategy
- `/SEO-CONTENT-INDEX.md` - Content inventory and optimization status
- `/METADATA-SCHEMA-GUIDE.md` - Metadata and schema markup guide
- `/BLOG-ENHANCEMENT-GUIDE.md` - Blog content optimization
- `/CONTENT-CALENDAR-TEMPLATE.md` - Content planning framework

## Development Guidelines

### Code Style

- TypeScript strict mode enabled
- ESLint configuration for consistency
- Prettier for code formatting (recommended)
- Component-based architecture
- Tailwind CSS for styling

### Adding New Pages

1. Create route in `app/` directory structure
2. Add metadata export for SEO:
```tsx
export const metadata: Metadata = {
  title: "Page Title | The Wizard of AI",
  description: "SEO-optimized description",
  keywords: ["ai", "automation", "business"],
  openGraph: {
    title: "Page Title",
    description: "Social sharing description",
    images: ["/images/og-image.png"]
  }
};
```

3. Test locally
4. Create responsive design
5. Verify SEO optimization

### Adding Blog Posts

Blog posts use markdown with frontmatter:

```markdown
---
title: "Post Title"
description: "Post description"
date: "2025-12-24"
author: "Julian Bradley"
tags: ["ai", "automation"]
image: "/images/blog/post-image.jpg"
---

Your markdown content here...
```

## Performance

- **Vercel Edge Network** - Global CDN
- **Image Optimization** - Next.js Image component with automatic optimization
- **Code Splitting** - Automatic with Next.js App Router
- **Dynamic Imports** - Lazy loading for heavy components
- **Caching Strategy** - Optimized cache headers
- **Bundle Analysis** - Regular bundle size monitoring

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## Documentation

Comprehensive documentation available:
- `OPTIMIZATION-SUMMARY.md` - Overall optimization status
- `IMAGE-OPTIMIZATION-REPORT.md` - Image optimization guide
- `AGENT-PAGES-ENHANCEMENT.md` - Agent showcase implementation

## License

Copyright 2025 AI Acrobatics. All rights reserved.

## Contact

**Julian Bradley** - Founder, The Wizard of AI
- Website: [wizardofai.com](https://wizardofai.com)
- Email: julian@aiacrobatics.com
- Book a consultation: [/book](https://wizardofai.com/book)

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components from [Radix UI](https://radix-ui.com)
- Deployed on [Vercel](https://vercel.com)
- Design inspiration from v0.dev

---

**Follow the yellow brick road to AI mastery** 🧙‍♂️✨
