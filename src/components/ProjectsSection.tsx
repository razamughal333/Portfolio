import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { FEATURED_PROJECTS } from '../data/projects'
import { btnPrimary } from './buttonStyles'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

// Home-page projects: the handpicked ones, then a button to the page with every repo.
export function ProjectsSection() {
  const { t } = useTranslation()
  return (
    <Section id="projects" title={t('section.projects')}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-line p-6 text-center text-muted">
          <span className="grid size-11 place-items-center rounded-xl border border-line text-primary">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <h3 className="mt-4 font-display text-lg font-bold text-text">{t('projects.moreTitle')}</h3>
          <p className="mt-1 text-sm">{t('projects.moreText')}</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/projects" className={btnPrimary}>
          {t('projects.viewAll')}
          <FontAwesomeIcon icon={faArrowRight} className="rtl:rotate-180" />
        </Link>
      </div>
    </Section>
  )
}
