import { faCalendarCheck, faChartLine, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export const GITHUB_USERNAME = 'razamughal333'

// Titles and tags are names, so they are not translated. Descriptions are in the language files (projects.desc.<id>).
export type Project = {
  id: string
  title: string
  tags: readonly string[]
  icon: IconDefinition
  liveUrl?: string // leave out if the project has no live site yet
  codeUrl: string
}

// The handpicked projects shown on the home page and at the top of the Projects page.
export const FEATURED_PROJECTS: readonly Project[] = [
  {
    id: 'rang-mahal',
    title: 'Rang Mahal',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Figma'],
    icon: faCalendarCheck,
    liveUrl: 'https://rangmahaal.netlify.app/',
    codeUrl: 'https://github.com/razamughal333/Rang-Mahal',
  },
  {
    id: 'seekho-pakistan',
    title: 'SeekhoPakistan',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'JWT'],
    icon: faGraduationCap,
    liveUrl: 'https://seekho-pk.vercel.app/',
    codeUrl: 'https://github.com/razamughal333/SeekhoPk',
  },
  {
    id: 'market-signals',
    title: 'Market Signals',
    tags: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Tailwind'],
    icon: faChartLine,
    liveUrl: 'https://market-signals-neon.vercel.app/',
    codeUrl: 'https://github.com/razamughal333/Market-Signals',
  },
]
