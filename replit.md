# Aarogyam Ayurveda Clinic - Full Stack Application

## Overview

This is a full-stack web application for Aarogyam Ayurveda Clinic, showcasing authentic Ayurvedic treatments and Panchakarma procedures. The application features a modern, responsive design with a focus on traditional Ayurvedic healing services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom Ayurvedic color palette
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Component Structure**: Modular component architecture with reusable UI components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Development Mode**: Vite dev server integration for seamless full-stack development

### Design System
- **Theme**: Custom Ayurvedic color palette with green forest (#1B5E20) as primary color
- **Components**: shadcn/ui component library with Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Typography**: Custom font styling with serif fonts for headings

## Key Components

### Frontend Components
1. **Navigation System**: Sticky navigation with smooth scrolling to sections
2. **Hero Section**: Landing area with call-to-action buttons
3. **Services Sections**: Display of core Ayurvedic services and treatments
4. **Panchakarma Section**: Detailed showcase of five traditional procedures
5. **Doctor Profile**: Information about Dr. Asmita and her expertise
6. **Clinic Information**: Contact details, facilities, and location info
7. **Service Cards**: Reusable components for displaying treatment information with navigation
8. **Service Detail Pages**: Individual pages for each service and treatment with comprehensive information

### Backend Components
1. **Express Server**: Main application server with middleware setup
2. **Route Registration**: Modular route handling system
3. **Storage Interface**: Abstracted storage layer for database operations
4. **Memory Storage**: In-memory storage implementation for development
5. **Database Schema**: User management schema with Drizzle ORM

### Shared Components
1. **Schema Definitions**: Shared TypeScript types and Zod validation schemas
2. **Database Models**: User entity definitions with type inference

## Data Flow

### Frontend Data Flow
1. React components use TanStack React Query for server state
2. API requests handled through centralized query client
3. Form submissions and user interactions trigger API calls
4. Real-time updates through query invalidation and refetching

### Backend Data Flow
1. Express middleware processes incoming requests
2. Route handlers interact with storage interface
3. Storage layer abstracts database operations
4. Responses formatted as JSON with error handling

### Development Workflow
1. Vite dev server serves frontend with hot module replacement
2. Express server handles API routes with automatic restart
3. Shared TypeScript types ensure type safety across stack
4. Database migrations managed through Drizzle Kit

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Data Fetching**: TanStack React Query
- **Forms**: React Hook Form with Hookform resolvers
- **Date Handling**: date-fns library

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon serverless PostgreSQL driver
- **Development**: tsx for TypeScript execution, ESBuild for production builds
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development Dependencies
- **Build Tools**: Vite, ESBuild, TypeScript compiler
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Replit Integration**: Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend integration
- **Hot Reloading**: Frontend changes reflected immediately
- **API Development**: Express server restarts automatically on changes
- **Database**: Local PostgreSQL or Neon serverless for development

### Production Build
- **Frontend**: Vite builds optimized React application to dist/public
- **Backend**: ESBuild bundles Express server to dist/index.js
- **Assets**: Static assets served from built frontend
- **Environment**: NODE_ENV=production enables production optimizations

### Database Strategy
- **ORM**: Drizzle ORM provides type-safe database operations
- **Migrations**: Drizzle Kit handles schema migrations
- **Connection**: Neon serverless PostgreSQL for scalable database hosting
- **Development Storage**: In-memory storage implementation for rapid prototyping

### Hosting Considerations
- **Full-Stack Deployment**: Single deployment with frontend and backend
- **Static Asset Serving**: Express serves built frontend assets
- **Environment Variables**: DATABASE_URL required for production
- **Session Management**: PostgreSQL-based session storage for scalability