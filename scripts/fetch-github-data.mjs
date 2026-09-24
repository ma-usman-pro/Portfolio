// Runs at build time (see package.json "build" script). Fetches this profile's
// GitHub user info + recent repos ONCE per deploy and writes them to
// public/github-data.json. The site then reads that static file at runtime
// instead of calling api.github.com from every visitor's browser, which was
// hitting GitHub's 60-requests/hour-per-IP limit on shared networks.
//
// If this fetch fails (offline build, GitHub down, etc.) the build does NOT
// fail — it just skips writing the file, and the site falls back to the old
// live client-side fetch (see src/utils/github.ts).

import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = resolve(__dirname, '../public/github-data.json')
const USERNAME = 'ma-usman-pro'

async function main() {
  try {
    const headers = { 'User-Agent': 'portfolio-build-script' }
    // Optional: set a GITHUB_TOKEN env var (Vercel project settings) to raise
    // the build-time rate limit from 60/hr to 5,000/hr. A public token with
    // no scopes is enough — this only reads public profile/repo data.
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { headers }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`, { headers }),
    ])

    if (!userRes.ok || !reposRes.ok) {
      console.warn(
        `[fetch-github-data] GitHub API returned ${userRes.status}/${reposRes.status} — skipping, site will fall back to live fetch.`
      )
      return
    }

    const user = await userRes.json()
    const repos = await reposRes.json()

    const data = {
      user: {
        login: user.login,
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
      },
      repos: repos.map((r) => ({
        id: r.id,
        name: r.name,
        html_url: r.html_url,
        description: r.description,
        language: r.language,
        stargazers_count: r.stargazers_count,
        updated_at: r.updated_at,
      })),
      fetchedAt: new Date().toISOString(),
    }

    await writeFile(OUTPUT_PATH, JSON.stringify(data, null, 2))
    console.log(`[fetch-github-data] Wrote ${repos.length} repos to public/github-data.json`)
  } catch (err) {
    console.warn('[fetch-github-data] Failed, skipping (site will fall back to live fetch):', err.message)
  }
}

main()
