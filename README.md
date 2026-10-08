# Anwar — Portfolio

Personal portfolio website for **Anwar**, AI Automation & Web Developer. The
site is a working product demo of the systems described in the projects
section — dark, minimal, and built for clients on Fiverr and direct.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (section reveals, staggered nav, background motion)
- **Lucide** + **Simple Icons**

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Environment variables

| Variable                        | Required | Purpose                                                        |
| ------------------------------- | -------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | No       | Canonical site URL used for sitemap, robots, and Open Graph.   |
| `NEXT_PUBLIC_CONTACT_ENDPOINT`  | No       | External POST endpoint for the contact form (overrides the built-in `/api/contact` route). |
| `RESEND_API_KEY`                | No       | Resend API key. When set, the form sends emails via the built-in `/api/contact` route. |
| `CONTACT_TO`                    | No       | Inbox for contact messages (defaults to `elboukharianwar0@gmail.com`). |
| `CONTACT_FROM`                  | No       | Sender shown on messages (defaults to `Anwar Portfolio <onboarding@resend.dev>`). |

Copy `.env.example` to `.env.local` and fill in as needed. Without a contact
endpoint or `RESEND_API_KEY` the form validates client-side and shows an honest
notice instead of pretending to send email.

Social links (GitHub, Fiverr, Email) live in `data/social.ts`.
Set real URLs there when ready; empty URLs fall back to the contact section.

## Deployment

Deploys to Vercel. No server is required to run the build.

```bash
vercel login     # once
vercel --prod
```

Set `NEXT_PUBLIC_SITE_URL` to the production domain as a Vercel environment
variable for accurate SEO metadata.

## Project structure

```
app/          routes, layout, SEO (metadata, robots, sitemap, icon)
components/   sections + project UI mockups
components/ui  design-system primitives (buttons, reveals, headings)
data/         central content: projects, skills, services, process, social
lib/          site config, contact submission, utilities
public/       static assets (portrait)
```