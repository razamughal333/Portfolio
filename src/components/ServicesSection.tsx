import { SERVICES } from '../data/services'
import { Section } from './Section'
import { ServiceCard } from './ServiceCard'

export function ServicesSection() {
  return (
    <Section id="services" title="Services">
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
