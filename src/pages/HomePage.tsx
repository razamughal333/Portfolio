import { ContactSection } from '../components/ContactSection'
import { useTranslation } from 'react-i18next'
import { AboutSummary } from '../components/AboutSummary'
import { ExperienceSection } from '../components/ExperienceSection'
import { Hero } from '../components/Hero'
import { ProjectsSection } from '../components/ProjectsSection'
import { ServicesSection } from '../components/ServicesSection'
import { SkillsSection } from '../components/SkillsSection'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function HomePage() {
  const { t } = useTranslation()
  useDocumentTitle(t('pages.homeTitle'))
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
