// Menu links. `id` must match the id of the section on the page.
// The visible words live in i18n/locales (nav.<id>).
export const NAV_ITEMS = [
  { id: 'home' },
  { id: 'about' },
  { id: 'skills' },
  { id: 'experience' },
  { id: 'services' },
  { id: 'contact' },
] as const

export const NAV_IDS: string[] = NAV_ITEMS.map((item) => item.id)
