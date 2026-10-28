import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  children?: ReactNode
}

// Every page section uses this wrapper, so spacing and headings stay consistent.
export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8">
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
      <div className="mt-10">{children}</div>
    </section>
  )
}
