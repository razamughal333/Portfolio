// Shared button looks, so every button on the site matches.
const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 sm:text-base'

export const btnPrimary = `${base} bg-primary text-on-primary hover:-translate-y-0.5 hover:brightness-110`
export const btnOutline = `${base} border border-line bg-surface/70 text-text backdrop-blur hover:border-accent hover:text-accent`
