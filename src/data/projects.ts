import { faCalendarCheck, faChartLine, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export const GITHUB_USERNAME = 'razamughal333'

export type Project = {
  id: string
  title: string
  description: string
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
    description:
      'Full-stack wedding and event planning platform: browse photographers, venues, decorators, catering and salons. Led frontend, responsive design & MongoDB architecture.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Figma'],
    icon: faCalendarCheck,
    liveUrl: 'https://rangmahaal.netlify.app/',
    codeUrl: 'https://github.com/razamughal333/Rang-Mahal',
  },
  {
    id: 'seekho-pakistan',
    title: 'SeekhoPakistan',
    description:
      'MERN learning platform with student, instructor and admin dashboards, lesson progress tracking and JWT authentication. Final project of the Hunarmand Punjab MERN course.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'JWT'],
    icon: faGraduationCap,
    liveUrl: 'https://seekho-pk.vercel.app/',
    codeUrl: 'https://github.com/razamughal333/SeekhoPk',
  },
  {
    id: 'market-signals',
    title: 'Market Signals',
    description:
      'Live dashboard for gold and crypto that combines RSI, MACD and moving-average crossovers into one 0–100 composite score, updated over WebSockets. Not a buy/sell tool.',
    tags: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Tailwind'],
    icon: faChartLine,
    liveUrl: 'https://market-signals-neon.vercel.app/',
    codeUrl: 'https://github.com/razamughal333/Market-Signals',
  },
]
