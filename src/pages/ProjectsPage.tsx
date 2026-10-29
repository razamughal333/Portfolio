import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  useDocumentTitle('Projects | Raza Ahmed')
  const repos = useGithubRepos(GITHUB_USERNAME)

  return (
    <div className="mx-auto max-w-5xl px-5 pt-28 pb-24 sm:px-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Home
      </Link>

      <header className="mt-8 text-center">
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
          All <span className="text-primary">Projects</span>
        </h1>
        <p className="mt-4 text-muted">
          Featured work + all public GitHub repositories, kept up to date from GitHub.
        </p>
      </header>

      <section className="mt-16">
        <Heading label="Handpicked" title="Featured Projects" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <Heading label="GitHub repos" title="All Public Repositories" />

        <div className="mt-8" aria-live="polite">
          {repos.status === 'loading' && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label="Loading repositories">
              {[0, 1, 2].map((n) => (
                <div key={n} className="h-52 animate-pulse rounded-2xl border border-line bg-surface motion-reduce:animate-none" />
              ))}
            </div>
          )}

          {repos.status === 'error' && (
            <div className="rounded-2xl border border-dashed border-line p-8 text-center text-muted">
              <p>Couldn't load the repositories right now. GitHub may be limiting requests.</p>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent"
              >
                View all repos on GitHub
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          )}

          {repos.status === 'ready' && repos.repos.length === 0 && (
            <p className="rounded-2xl border border-dashed border-line p-8 text-center text-muted">
              No public repositories to show yet.
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
