# Raza Ahmed | Portfolio

My personal portfolio: a responsive, bilingual (English and Urdu) single-page site with dark and
light themes, live GitHub projects, a contact wizard and a persistent like button.

**Live site:** https://razamughal333.github.io/Portfolio/

## Features

- **Dark and light themes** with a jet black / cerulean / neon rose palette (dark) and an ice silver / deep aubergine / marigold palette (light). The choice is remembered, and there is no flash on load.
- **English and Urdu**, including a full right-to-left layout for Urdu. The choice is remembered.
- **Projects from GitHub:** three featured projects on the home page, and an All Projects page listing every public repository. Results are cached in the browser for 30 minutes to stay under GitHub's anonymous rate limit.
- **Contact me wizard:** a four-step modal (services, type of work, job type, details) fixed at the bottom right of every page, plus a simple contact form. Messages are sent with EmailJS, always in English.
- **Like button** in the footer. The count is stored in Supabase, so it survives refreshes and new browsers. If the database cannot be reached, the button hides itself.
- **Skeleton loading** for the first paint, the hero photo and the like count.
- **Accessibility:** keyboard navigation, focus handling in the menu and wizard, skip link, labelled controls, and reduced-motion support.

## Tech stack

React 19, TypeScript, Vite, Tailwind CSS v4, React Router, react-i18next, Font Awesome, EmailJS, Supabase (REST, no SDK).

## Getting started

You need Node.js 20.19 or newer (22 or newer is recommended).

```bash
npm install
cp .env.example .env     # on Windows PowerShell: copy .env.example .env  (then fill in the values)
npm run dev
```

Open http://localhost:5173/Portfolio/ (the `/Portfolio/` part is the base path used on GitHub Pages).

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Starts the development server                 |
| `npm run build`   | Type-checks and builds the site into `dist/`  |
| `npm run preview` | Serves the built site locally                 |
| `npm run lint`    | Runs ESLint                                   |

## Environment variables

Copy `.env.example` to `.env`. The `.env` file is ignored by git. All of these values are public by
design, because they end up in the built site. Never put a secret key (such as a Supabase
`service_role` key) in this project.

| Variable                   | Used for                                                   |
| -------------------------- | ---------------------------------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS email service                                      |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template (fields: from_name, from_email, phone, services, work_type, job_type, message, source) |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key                                         |
| `VITE_SUPABASE_URL`        | Supabase project URL (like button)                         |
| `VITE_SUPABASE_KEY`        | Supabase publishable (anon) key                            |

Without these values the site still works. The contact forms show an error with a fallback email
address, and the like button stays hidden.

### Supabase setup (like button)

Run this once in the Supabase SQL editor. It creates a one-row table that the browser can only
read or increase through two functions, never edit directly.

```sql
create table if not exists public.site_likes (
  id int primary key default 1 check (id = 1),
  count bigint not null default 0
);
insert into public.site_likes (id, count) values (1, 0) on conflict do nothing;
alter table public.site_likes enable row level security;

create or replace function public.get_likes() returns bigint
language sql security definer set search_path = public as $$
  select count from public.site_likes where id = 1;
$$;

create or replace function public.add_like() returns bigint
language sql security definer set search_path = public as $$
  update public.site_likes set count = count + 1 where id = 1 returning count;
$$;

revoke all on function public.get_likes() from public;
revoke all on function public.add_like() from public;
grant execute on function public.get_likes() to anon;
grant execute on function public.add_like() to anon;
```

## Editing content

Almost everything you read on the site lives in a few files:

| What                                  | Where                                   |
| ------------------------------------- | --------------------------------------- |
| All visible text (English and Urdu)   | `src/i18n/locales/en.ts` and `ur.ts`    |
| Skills, roadmap                       | `src/data/about.ts`                     |
| Featured projects, GitHub username    | `src/data/projects.ts`                  |
| Services                              | `src/data/services.ts`                  |
| Name, links, phone, CV path           | `src/data/profile.ts`                   |
| Colours                               | top of `src/index.css`                  |

The Urdu file must have exactly the same keys as the English file. TypeScript checks this, so a
missing translation fails the build.

## Project structure

```
src/
  components/   Page sections, cards, the contact wizard, menu, footer
  pages/        Home, About and Projects pages
  data/         Skills, projects, services and profile details
  hooks/        Theme, typing effect, GitHub repos, active menu section
  i18n/         Language setup and the English and Urdu text
  lib/          EmailJS and Supabase helpers
public/         CV (PDF) and favicon
```

## Deployment

The site is built for GitHub Pages under `/Portfolio/` (see `base` in `vite.config.ts`). A small
build step copies `index.html` to `404.html`, so opening a page such as `/Portfolio/about`
directly still works. The environment variables above must be available at build time.

## License

The source code is released under the [MIT License](LICENSE).

The personal content is **not** covered by that license and remains all rights reserved:
photographs, the CV, the `<RA/>` logo and favicon, and the written text (biography, project
descriptions and translations). Please do not reuse them. If you build on this code, replace them
with your own.
