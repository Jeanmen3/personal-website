# AI Coding Guidelines for Personal Website

## Project Overview
This is a Next.js 16 personal website for Jean Mendez, MD, showcasing clinical operations expertise. Built with React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack & Setup
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Linting**: ESLint with Next.js config
- **Development**: `npm run dev` (auto-reload enabled)
- **Build**: `npm run build` (production optimized)
- **Start**: `npm run start` (production server)

## Architecture Patterns
- **App Router Structure**: Pages in `app/` directory with `layout.tsx` as root
- **Single-Page Design**: Main content in `app/page.tsx` with section anchors
- **Component Organization**: Inline components in page files, no separate component directory
- **Data Management**: Hardcoded arrays for content (publications, pillars) - see `app/page.tsx` lines 5-32

## Styling Conventions
- **Color Palette**: Zinc grays (zinc-900, zinc-700, zinc-600) for text, white/zinc-50 for backgrounds
- **Typography**: 
  - Headings: `font-semibold tracking-tight` (e.g., `text-4xl md:text-6xl`)
  - Body: `text-base leading-relaxed text-zinc-700`
  - Small text: `text-sm text-zinc-600`
- **Layout**: 
  - Container: `mx-auto max-w-6xl px-6`
  - Grid: `grid gap-6 md:grid-cols-2` or `md:grid-cols-3`
  - Cards: `rounded-2xl border border-zinc-200 p-6`
- **Interactive Elements**: 
  - Buttons: `rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800`
  - Links: `hover:text-zinc-950` or `hover:border-zinc-400`
- **Responsive**: Mobile-first with `md:` breakpoints for larger screens

## Navigation & Structure
- **Header**: Sticky navigation with section links (`#about`, `#impact`, etc.)
- **Sections**: ID-anchored sections with consistent spacing (`py-14`)
- **Footer**: Simple copyright with dynamic year
- **External Links**: `target="_blank" rel="noreferrer"` for external sites

## Key Files
- `app/layout.tsx`: Root layout with metadata and OpenGraph
- `app/page.tsx`: Main page with all content sections
- `app/publications/page.tsx`: Publications page (currently placeholder)
- `app/globals.css`: Tailwind imports and custom CSS variables
- `public/`: Static assets (headshot.jpg, og-image.png, CV PDF)

## Development Workflow
- Edit content in `app/page.tsx` arrays for publications/pillars
- Use Next.js `Image` component for optimized images
- Run `npm run lint` before commits
- Deploy via Vercel (standard Next.js deployment)

## Code Patterns
- **Data Arrays**: Define content arrays at top of component, map over them for rendering
- **Inline Styles**: Extensive Tailwind classes, minimal custom CSS
- **Accessibility**: Semantic HTML with proper alt text for images
- **Performance**: `priority` prop on hero image, optimized fonts via `next/font`