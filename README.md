# Jason Lawrence — Portfolio

Personal portfolio for Jason Lawrence, founder of [KaiBlu](https://kaiblu.co.za) — a Cape Town studio building mobile apps, AI-powered automation, and web platforms.

Built with Next.js 15 (App Router), TypeScript, and custom CSS. No UI library, no framework overhead — just clean, intentional code that ships.

---

## Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — Custom CSS with CSS variables (no Tailwind)
- **Fonts** — Instrument Serif, DM Sans, DM Mono via `next/font/google`
- **Deployment** — Vercel

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

```bash
# Type check
npx tsc --noEmit

# Production build
npm run build
```

---

## Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css       # All styles — CSS variables, animations, layout
│   ├── layout.tsx        # Root layout — fonts, metadata, Cursor, Loader
│   └── page.tsx          # Page — assembles all sections
├── components/
│   ├── Cursor.tsx        # Custom cursor (client)
│   ├── Loader.tsx        # Intro loading screen (client)
│   ├── ScrollRevealProvider.tsx  # IntersectionObserver for .reveal (client)
│   ├── Nav.tsx           # Fixed navigation
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About + stack
│   ├── Work.tsx          # Selected projects
│   ├── Experience.tsx    # Work history
│   ├── Contact.tsx       # Contact grid
│   └── Footer.tsx        # Footer
└── public/
    └── jason.jpg         # Profile photo
```

---

## Deployment

The project is deployed on Vercel. Every push to `main` triggers a new deployment automatically.

To deploy your own fork:

1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo — Next.js is auto-detected, no config needed
4. Hit Deploy

---

## License

Personal portfolio — not intended as a template. Please don't reuse the design or copy content without permission.

&copy; 2026 Jason Lawrence
