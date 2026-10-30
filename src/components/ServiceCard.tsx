import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import type { Service } from '../data/services'

export function ServiceCard({ service }: { service: Service }) {
  const { t } = useTranslation()
  return (
    <article className="group flex w-full flex-col rounded-2xl border border-line bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/60">
      <span className="grid size-12 place-items-center rounded-xl border border-line bg-bg text-xl text-primary transition duration-200 group-hover:border-accent group-hover:text-accent">
        <FontAwesomeIcon icon={service.icon} />
      </span>
      <h3 className="mt-5 font-display text-lg font-bold">{t(`services.items.${service.id}.title`)}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{t(`services.items.${service.id}.description`)}</p>
    </article>
  )
}
