# AGENTS.md

## Project overview

The Arrival is a single-page fictional sci-fi timeline built with TanStack Start and deployed on Netlify. Its design uses a dark classified-archive aesthetic, editorial typography, asymmetrical event cards, restrained motion, and accessible interactive filtering.

## Architecture

- `src/routes/__root.tsx` owns the HTML shell, global metadata, and stylesheet import.
- `src/routes/index.tsx` owns the home route, static timeline records, faction filtering, text search, empty state, and page markup.
- `src/styles.css` owns global tokens, responsive layouts, clipping treatments, animations, and component-level visual rules.
- `src/data/` and `src/routes/products/` are inherited starter files and are not part of the primary timeline experience.
- `public/` holds static files.
- `netlify.toml` and `vite.config.ts` define Netlify and Vite integration.

## Coding conventions

- Use TypeScript and functional React components.
- Keep route-specific data and behavior near the route unless reuse justifies extraction.
- Use PascalCase for components and types, camelCase for values and functions, and descriptive names rather than abbreviations.
- Preserve the CSS custom-property palette and existing typography hierarchy when extending the interface.
- Prefer CSS Grid for large composition changes and transform/opacity for motion.
- Include keyboard-visible, hover, active, empty, and reduced-motion states for new interactions.
- Keep the mobile timeline single-column and maintain a minimum practical touch target for controls.

## Non-obvious decisions

- Timeline records are intentionally local static content because they are editorial page content and do not require persistence.
- Filtering is client-side and derived with `useMemo`; no server function or database is needed.
- Google Fonts are loaded from CSS to preserve the distinct condensed editorial look without adding font files to the repository.
- The decorative grain is an inline SVG data texture, avoiding an additional bitmap asset and network request.

## Commands

- `pnpm dev` starts Vite locally.
- `netlify dev --port 8889` starts the project with Netlify emulation.
- `pnpm build` creates a production build; automated project validation runs this after changes.
