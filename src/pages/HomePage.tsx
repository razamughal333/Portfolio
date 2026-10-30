import { ContactSection } from '../components/ContactSection'
import { AboutSummary } from '../components/AboutSummary'
import { ExperienceSection } from '../components/ExperienceSection'
import { Hero } from '../components/Hero'
import { ProjectsSection } from '../components/ProjectsSection'
import { ServicesSection } from '../components/ServicesSection'
import { SkillsSection } from '../components/SkillsSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSummary />

      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
