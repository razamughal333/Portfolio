// Menu links. `id` must match the id of the section on the page.
export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
] as const

export const NAV_IDS: string[] = NAV_ITEMS.map((item) => item.id)
