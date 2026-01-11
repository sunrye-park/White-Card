# Replit.md

## Overview

This is a digital business card (E-명함) web application for an AI instructor named Park Sun-rye. The application presents a single-page profile card with contact information and social media links. It's built as a full-stack TypeScript application with a React frontend and Express backend, featuring visitor tracking analytics stored in PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: Shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for smooth card entry and interactions
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with path aliases (`@/` for client/src, `@shared/` for shared)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Design**: Simple REST endpoints defined in `shared/routes.ts` with Zod validation
- **Development**: tsx for TypeScript execution, Vite dev server with HMR

### Monorepo Structure
- `client/` - React frontend application
- `server/` - Express backend API
- `shared/` - Shared types, schemas, and route definitions
- Single TypeScript configuration with path aliases

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Generated via `drizzle-kit push`
- **Current Tables**: `visitors` table for basic analytics (id, visitedAt, userAgent)

### API Structure
- Routes defined declaratively in `shared/routes.ts` with Zod schemas
- Single endpoint: `POST /api/visitors` for recording page visits
- Type-safe request/response handling with shared schemas

### Build Process
- Development: Vite dev server with Express backend
- Production: Custom build script using esbuild for server, Vite for client
- Output: `dist/public` for static files, `dist/index.cjs` for server

## External Dependencies

### Database
- PostgreSQL (required via `DATABASE_URL` environment variable)
- Connection pooling via `pg` package

### Third-Party UI Libraries
- Radix UI primitives (dialogs, dropdowns, tooltips, etc.)
- Embla Carousel for carousels
- React Day Picker for calendars
- React Hook Form with Zod resolver

### Icons
- Lucide React for general icons
- React Icons (specifically `react-icons/si` for brand icons like Naver, Threads)

### Deployment
- Configured for Vercel deployment (see `vercel.json`)
- Static build output with SPA fallback routing