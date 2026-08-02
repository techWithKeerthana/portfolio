# Keerthana M Portfolio

A personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Lucide React + React Icons

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

## Deployment (Vercel)

1. Push this project to your GitHub repository.
2. Go to https://vercel.com and sign in.
3. Click New Project.
4. Import your GitHub repository.
5. Keep default Vite settings (these are usually auto-detected):
- Build Command: `npm run build`
- Output Directory: `dist`
6. Click Deploy.
7. After deploy succeeds, copy your production domain (for example: `https://your-name.vercel.app`).

### Set Custom Domain (Recommended)

1. In your Vercel project, open Settings -> Domains.
2. Add your custom domain (for example: `portfolio.yourdomain.com`).
3. Configure DNS records as Vercel instructs.
4. Wait until domain status is Active.

### Update OG/Twitter URL Meta Tag

After your final domain is ready, update the `og:url` tag in [index.html](index.html):

```html
<meta property="og:url" content="https://your-real-domain.com" />
```

You can also keep the same domain for social consistency in related tags in [index.html](index.html), such as `twitter:image` and `og:image` if you move assets to a different host.

## Pre-Launch Checklist

- [ ] Add your real resume file at [public/resume.pdf](public/resume.pdf)
- [ ] Replace all 4 project live demo placeholder URLs in [src/data/portfolioData.ts](src/data/portfolioData.ts)
- [ ] Replace `og:url` with your real domain in [index.html](index.html)

## Notes

- Project cards always show View Code.
- Live Demo appears only when a real non-placeholder URL is present.
- Placeholder live demo URLs are intentionally marked in [src/data/portfolioData.ts](src/data/portfolioData.ts) with:

```ts
// TODO: replace with live deployed URL
```
