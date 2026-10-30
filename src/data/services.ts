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
  id: string // matches services.items.<id> in the language files (title + description)
  icon: IconDefinition
}

// The services I offer. The Contact wizard reuses this same list.
export const SERVICES: Service[] = [
  { id: 'fullstack', icon: faCode },
  { id: 'frontend', icon: faLaptopCode },
  { id: 'responsive', icon: faMobileScreenButton },
  { id: 'backend', icon: faServer },
  { id: 'business', icon: faStore },
  { id: 'deploy', icon: faRocket },
]
