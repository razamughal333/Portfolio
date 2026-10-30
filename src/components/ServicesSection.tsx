import { useTranslation } from 'react-i18next'
import { SERVICES } from '../data/services'
import { Section } from './Section'
import { ServiceCard } from './ServiceCard'

export function ServicesSection() {
  const { t } = useTranslation()
  return (
    <Section id="services" title={t('section.services')}>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <li key={service.id} className="flex">
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
