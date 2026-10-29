import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Service } from '../data/services'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex w-full flex-col rounded-2xl border border-line bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/60">
      <span className="grid size-12 place-items-center rounded-xl border border-line bg-bg text-xl text-primary transition duration-200 group-hover:border-accent group-hover:text-accent">
        <FontAwesomeIcon icon={service.icon} />
      </span>
      <h3 className="mt-5 font-display text-lg font-bold">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
    </article>
  )
}
