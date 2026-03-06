# Lumina Intelligence

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/strats360/lumina-intelligence-ai-solutions-landing-page)

## Introduction

Lumina Intelligence is a modern, full-stack web application built on Cloudflare Workers and Pages. It features a performant React frontend with TypeScript, a powerful Hono-based API backend, and a beautiful UI powered by shadcn/ui and Tailwind CSS. Designed for rapid development and seamless deployment, this starter template includes dark mode, error handling, data fetching with TanStack Query, and production-ready tooling.

## Features

- **Full-Stack TypeScript**: End-to-end type safety with Cloudflare Workers types.
- **React 18 + Vite**: Lightning-fast development server and builds.
- **Hono API Backend**: Lightweight, fast routing with CORS and error handling.
- **shadcn/ui Components**: Fully customizable, accessible UI library.
- **Tailwind CSS**: Utility-first styling with custom animations and themes.
- **Dark Mode**: Automatic and manual theme switching with persistence.
- **State Management**: TanStack Query for caching and React Router for navigation.
- **Error Reporting**: Client-side error boundaries and server logging.
- **Mobile-Responsive**: Hooks and utilities for responsive design.
- **Production-Ready**: Bundled assets, Workers compatibility, and one-command deployment.

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide React, Framer Motion, React Router, TanStack Query, Sonner, Zustand |
| **Backend** | Cloudflare Workers, Hono, TypeScript |
| **UI/UX** | Radix UI Primitives, Tailwind Animate, clsx, class-variance-authority |
| **Utilities** | Zod (validation), Date-fns, Immer, UUID |
| **Dev Tools** | Bun, ESLint, TypeScript ESLint, Wrangler |
| **Deployment** | Cloudflare Pages & Workers |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed (≥1.0)
- [Cloudflare Account](https://dash.cloudflare.com/) with Workers/Pages enabled
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (installed via `bun add -g wrangler`)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd lumina-intelligence-3tuopujv6zd2znhlkzivd
   ```

2. Install dependencies:
   ```
   bun install
   ```

### Development

- Start the development server:
  ```
  bun dev
  ```
  Opens at `http://localhost:3000` (or `$PORT` in Cloudflare environments).

- Generate Worker types (after `wrangler login`):
  ```
  bun cf-typegen
  ```

- Add custom API routes in `worker/userRoutes.ts` (do not modify `worker/index.ts`).

- Customize the UI in `src/pages/` and `src/components/`. Update routes in `src/main.tsx`.

### Build for Production

```
bun build
```

Assets are output to `dist/`, ready for Cloudflare deployment.

### Project Structure

```
├── src/              # React app (pages, components, hooks, lib)
├── worker/           # Cloudflare Workers API (add routes in userRoutes.ts)
├── public/           # Static assets
├── tailwind.config.js # Custom theme & animations
└── wrangler.jsonc    # Deployment config
```

## Usage Examples

### API Development

Extend the API in `worker/userRoutes.ts`:

```typescript
import { Hono } from 'hono';

export function userRoutes(app: Hono<{ Bindings: Env }>) {
  app.get('/api/data', (c) => c.json({ message: 'Hello from Worker!' }));
  app.post('/api/submit', async (c) => {
    const data = await c.req.json();
    return c.json({ success: true, data });
  });
}
```

Test at `/api/data`.

### Frontend Pages

Add routes in `src/main.tsx`:

```typescript
const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/dashboard', element: <DashboardPage /> },
]);
```

### Theme & Layout

- Use `AppLayout` from `src/components/layout/AppLayout.tsx` for sidebar layouts.
- Toggle theme with `ThemeToggle` component.

## Deployment

Deploy to Cloudflare Pages & Workers with a single command:

1. Login to Cloudflare:
   ```
   wrangler login
   ```

2. Deploy:
   ```
   bun deploy
   ```
   This builds the app and runs `wrangler deploy`.

Your app will be live at `<project-name>.workers.dev` with automatic asset handling.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/strats360/lumina-intelligence-ai-solutions-landing-page)

**Configure Custom Domain**: Update `wrangler.jsonc` with your `routes` and run `wrangler deploy`.

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start dev server |
| `bun build` | Build for production |
| `bun lint` | Run ESLint |
| `bun preview` | Local preview of production build |
| `bun deploy` | Build + deploy to Cloudflare |
| `bun cf-typegen` | Generate Worker types |

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit changes (`git commit -m 'Add amazing feature'`).
4. Push to branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- File issues on GitHub.

Built with ❤️ for Cloudflare.