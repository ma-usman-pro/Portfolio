export interface GithubUser {
  login: string
  public_repos: number
  followers: number
  following: number
  avatar_url: string
  html_url: string
}

export interface GithubRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
}

const GITHUB_API = 'https://api.github.com'

interface GithubStaticData {
  user: GithubUser | null
  repos: GithubRepo[]
  fetchedAt: string
}

// The static snapshot is written once per deploy by scripts/fetch-github-data.mjs
// (see package.json "build" script) and served as a same-origin static file —
// no CORS issues, no per-visitor rate limiting, works even if GitHub is briefly
// down for the visitor. We only fall back to a live call if that file is
// missing entirely (e.g. running `vite dev` without ever running a build).
let staticDataPromise: Promise<GithubStaticData | null> | null = null

function loadStaticData(): Promise<GithubStaticData | null> {
  if (!staticDataPromise) {
    staticDataPromise = fetch('/github-data.json')
      .then((res) => (res.ok ? (res.json() as Promise<GithubStaticData>) : null))
      .catch(() => null)
  }
  return staticDataPromise
}

export async function fetchGithubUser(username: string): Promise<GithubUser | null> {
  const staticData = await loadStaticData()
  if (staticData?.user) return staticData.user

  try {
    const res = await fetch(`${GITHUB_API}/users/${username}`)
    if (!res.ok) return null
    return (await res.json()) as GithubUser
  } catch {
    return null
  }
}

export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  const staticData = await loadStaticData()
  if (staticData?.repos?.length) return staticData.repos

  try {
    const res = await fetch(`${GITHUB_API}/users/${username}/repos?sort=updated&per_page=6`)
    if (!res.ok) return []
    return (await res.json()) as GithubRepo[]
  } catch {
    return []
  }
}

export async function fetchTopLanguages(username: string): Promise<Record<string, number>> {
  const repos = await fetchGithubRepos(username)
  const counts: Record<string, number> = {}
  repos.forEach((repo) => {
    if (repo.language) {
      counts[repo.language] = (counts[repo.language] ?? 0) + 1
    }
  })
  return counts
}
