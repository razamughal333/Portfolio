// Runs before the build (in GitHub Actions). Saves my public repo list into
// public/repos.json so visitors read a plain file instead of calling GitHub's
// API, which limits anonymous requests. If anything fails, the build carries
// on and the site falls back to calling GitHub live.
import { mkdir, writeFile } from 'node:fs/promises'

const username = 'razamughal333'
const token = process.env.GITHUB_TOKEN // provided automatically in Actions

try {
  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })
  if (!response.ok) throw new Error(`GitHub answered ${response.status}`)
  const data = await response.json()
  if (!Array.isArray(data)) throw new Error('Unexpected answer from GitHub')
  await mkdir('public', { recursive: true })
  await writeFile('public/repos.json', JSON.stringify(data))
  console.log(`Saved ${data.length} repos to public/repos.json`)
} catch (error) {
  console.warn(`Could not save repos (${error.message}). The site will ask GitHub live instead.`)
}
