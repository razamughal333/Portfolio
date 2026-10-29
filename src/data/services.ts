import {
  faCode,
  faLaptopCode,
  faMobileScreenButton,
  faRocket,
  faServer,
  faStore,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type Service = {
  id: string
  title: string
  description: string
  icon: IconDefinition
}

// The services I offer. The Contact wizard will reuse this same list,
// so a service added here shows up in both places.
export const SERVICES: Service[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Apps',
    description:
      'End-to-end apps with the MERN stack, from idea to deployment: dashboards, platforms and internal tools.',
    icon: faCode,
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'Clean, fast interfaces with React, TypeScript and Tailwind CSS. Pixel-accurate and easy to maintain.',
    icon: faLaptopCode,
  },
  {
    id: 'responsive',
    title: 'Responsive UI/UX',
    description:
      'Layouts that work on phone, tablet and desktop, with light and dark themes and accessibility built in.',
    icon: faMobileScreenButton,
  },
  {
    id: 'backend',
    title: 'REST APIs & Backend',
    description:
      'Node.js and Express APIs with authentication (JWT), validation and database integration.',
    icon: faServer,
  },
  {
    id: 'business',
    title: 'Business & Landing Sites',
    description:
      'Fast, good-looking websites for shops, restaurants and small businesses, ready to share and easy to update.',
    icon: faStore,
  },
  {
    id: 'deploy',
    title: 'Deployment & Optimization',
    description:
      'Putting your site live on Vercel, Netlify or GitHub Pages, plus speed, SEO and bug-fix improvements.',
    icon: faRocket,
  },
]
