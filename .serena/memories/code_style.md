# Code Style & Conventions
- React components are TypeScript function components (often `React.FC`) that live under `src/components` or `src/app/<route>/page.tsx`; client interactivity uses `'use client'` directives.
- Styling relies on `src/app/globals.css` (CSS custom properties for colors, typography, spacing, transitions) plus per-route CSS files (e.g., `contact/contact.css`). Tailwind utilities can be used inline via the imported Tailwind 4 layer.
- Media assets such as profile photos and video posters use Next `Image`; external domains must be listed in `next.config.ts`.
- Accessibility: focus states, ARIA labels, keyboard handlers (`onKeyDown`, `aria-pressed`) are present and should be preserved when editing interactive elements like filters or play buttons.
- Data for repeated UI (videos, timeline steps) is defined as typed arrays near the component and iterated with `.map`, passing props to small presentational components (`<VideoCard {...video} />`).