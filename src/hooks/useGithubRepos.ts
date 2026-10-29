import { useEffect, useState } from 'react'

export type Repo = {
  id: number
  name: string
  description: string | null
  url: string // the repo page on GitHub
  homepage: string | null // a live site, if the repo lists one
  language: string | null
  pushedAt: string
}

type State =
  | { status: 'loading' }
  | { status: 'ready'; repos: Repo[]; fromCache: boolean }
  | { status: 'error' }

const CACHE_KEY = 'github-repos-v1'
const FRESH_FOR_MS = 30 * 60 * 1000 // reuse the saved list for 30 minutes

type Cache = { savedAt: number; repos: Repo[] }

// GitHub only allows ~60 anonymous requests per hour per visitor,
// so we save the answer in the browser and reuse it.
function readCache(): Cache | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      'savedAt' in parsed &&
      typeof parsed.savedAt === 'number' &&
      'repos' in parsed &&
      Array.isArray(parsed.repos)
    ) {
      return { savedAt: parsed.savedAt, repos: parsed.repos as Repo[] }
    }
  } catch {
    // Storage blocked or the saved text is broken: act as if nothing was saved.
  }
  return null
}

function writeCache(repos: Repo[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), repos }))
  } catch {
    // Not being able to save is fine.
  }
}

const asString = (value: unknown): string | null => (typeof value === 'string' && value ? value : null)

// Turns GitHub's big answer into just the fields we show. Forks are skipped: they're not my work.
function parseRepos(data: unknown, username: string): Repo[] {
  if (!Array.isArray(data)) return []
  const repos: Repo[] = []
  for (const item of data) {
    if (typeof item !== 'object' || item === null) continue
    const r = item as Record<string, unknown>
    const name = asString(r.name)
    const url = asString(r.html_url)
    const pushedAt = asString(r.pushed_at)
    if (!name || !url || !pushedAt || typeof r.id !== 'number') continue
    if (r.fork === true || name.toLowerCase() === username.toLowerCase()) continue
    repos.push({
      id: r.id,
      name,
      description: asString(r.description),
      url,
      homepage: asString(r.homepage),
      language: asString(r.language),
      pushedAt,
    })
  }
  return repos.sort((a, b) => b.pushedAt.localeCompare(a.pushedAt)) // most recently updated first
}

export function useGithubRepos(username: string): State {
  const [state, setState] = useState<State>(() => {
    const cached = readCache()
    return cached && Date.now() - cached.savedAt < FRESH_FOR_MS
      ? { status: 'ready', repos: cached.repos, fromCache: true }
      : { status: 'loading' }
  })

  useEffect(() => {
    const cached = readCache()
    if (cached && Date.now() - cached.savedAt < FRESH_FOR_MS) return // already showing the saved list

    const controller = new AbortController()
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub answered ${response.status}`)
        return response.json() as Promise<unknown>
      })
      .then((data) => {
        const repos = parseRepos(data, username)
        writeCache(repos)
        setState({ status: 'ready', repos, fromCache: false })
      })
      .catch(() => {
        if (controller.signal.aborted) return
        // Rate limit or no internet: an older saved list is better than an error message.
        const old = readCache()
        setState(old ? { status: 'ready', repos: old.repos, fromCache: true } : { status: 'error' })
      })

    return () => controller.abort()
  }, [username])

  return state
}
