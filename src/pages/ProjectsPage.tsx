import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { ProjectCard } from '../components/ProjectCard'
import { RepoCard } from '../components/RepoCard'
import { FEATURED_PROJECTS, GITHUB_USERNAME } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useGithubRepos } from '../hooks/useGithubRepos'

const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`

function Heading({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-widest text-primary uppercase">{label}</p>
      <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
    </div>
  )
}

export function ProjectsPage() {
  const { t } = useTranslation()
  useDocumentTitle(t('pages.projectsTitle'))
  const repos = useGithubRepos(GITHUB_USERNAME)

  return (
    <div className="mx-auto max-w-5xl px-5 pt-28 pb-24 sm:px-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent">
        <FontAwesomeIcon icon={faArrowLeft} className="rtl:rotate-180" />
        {t('common.backHome')}
      </Link>

      <header className="mt-8 text-center">
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
          <Trans i18nKey="projects.pageTitle" components={{ hl: <span className="text-primary" /> }} />
        </h1>
        <p className="mt-4 text-muted">{t('projects.pageSubtitle')}</p>
      </header>

      <section className="mt-16">
        <Heading label={t('projects.featuredLabel')} title={t('projects.featuredTitle')} />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <Heading label={t('projects.reposLabel')} title={t('projects.reposTitle')} />

        <div className="mt-8" aria-live="polite">
          {repos.status === 'loading' && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label={t('projects.loading')}>
              {[0, 1, 2].map((n) => (
                <div key={n} className="h-52 animate-pulse rounded-2xl border border-line bg-surface motion-reduce:animate-none" />
              ))}
            </div>
          )}

          {repos.status === 'error' && (
            <div className="rounded-2xl border border-dashed border-line p-8 text-center text-muted">
              <p>{t('projects.error')}</p>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent"
              >
                {t('projects.errorLink')}
                <FontAwesomeIcon icon={faArrowRight} className="rtl:rotate-180" />
              </a>
            </div>
          )}

          {repos.status === 'ready' && repos.repos.length === 0 && (
            <p className="rounded-2xl border border-dashed border-line p-8 text-center text-muted">
              {t('projects.empty')}
            </p>
          )}

          {repos.status === 'ready' && repos.repos.length > 0 && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {repos.repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
