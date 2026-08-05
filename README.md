# VENDETTA DC CINEMATIC TIMELINE
A cinematic, responsive timeline experience inspired by classified sci-fi archives. The page chronicles a fictional first-contact event through staggered timeline entries, chapter markers, searchable records, faction filters, and a current-status intelligence panel.

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Tailwind CSS 4 with a custom global design system
- Lucide React icons
- Netlify deployment through the TanStack Start adapter

## Local development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The standard Vite development server runs at `http://localhost:3000`. When Netlify platform emulation is needed, use:

```bash
netlify dev --port 8889
```

## Project structure

- `src/routes/index.tsx` contains the timeline data, filtering logic, and complete page composition.
- `src/routes/__root.tsx` defines the document shell and SEO metadata.
- `src/styles.css` contains the visual system, animation, and responsive layouts.
- `public/` contains static assets served directly by the application.
- `netlify.toml` configures deployment and local Netlify development.
