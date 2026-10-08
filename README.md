# Pavan Kolasani — portfolio

**Live site:** https://portfolio-tau-six-66.vercel.app

My personal portfolio, covering my experience, projects, education and certifications. Built with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4 and Framer Motion, and deployed on Vercel.

## Structure

```
src/data/portfolio.ts    all content: profile, skills, projects, experience, education, certifications
src/components/          one component per section (Hero, About, Skills, Projects, Experience, Education, Contact)
src/app/                 layout, metadata and global styles
public/                  CV (PDF) and static assets
```

Content is kept separate from presentation, so updating the site usually means editing only `src/data/portfolio.ts`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Every push to `main` deploys automatically on Vercel.
