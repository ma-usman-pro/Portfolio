import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, BookMarked, Users, UserPlus, Star } from 'lucide-react'
import { profile } from '@/data/profile'
import { fetchGithubUser, fetchGithubRepos, type GithubUser, type GithubRepo } from '@/utils/github'
import { fadeUp, staggerContainer } from '@/animations/variants'

const username = profile.social.github.split('/').pop() ?? ''

export default function GithubStats() {
  const [user, setUser] = useState<GithubUser | null>(null)
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    Promise.all([fetchGithubUser(username), fetchGithubRepos(username)]).then(([u, r]) => {
      if (!mounted) return
      setUser(u)
      setRepos(r)
      setLoading(false)
    })
    return () => {
      mounted = false
    }
  }, [])

  const stats = [
    { label: 'Public Repos', value: user?.public_repos, icon: BookMarked },
    { label: 'Followers', value: user?.followers, icon: Users },
    { label: 'Following', value: user?.following, icon: UserPlus },
  ]

  return (
    <section id="github" className="section">
      <p className="eyebrow">{'// github'}</p>
      <h2 className="section-title mt-2">Live from GitHub</h2>

      {(loading || user) && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid gap-5 sm:grid-cols-3"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              custom={i}
              className="flex flex-col items-center gap-2 rounded-2xl p-6 text-center glass shadow-glass"
            >
              <s.icon className="text-py-yellow" size={22} />
              <span className="font-display text-3xl font-bold text-ink">
                {loading ? '—' : (s.value ?? 0)}
              </span>
              <span className="font-mono text-xs uppercase tracking-wide text-ink-muted">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="mt-10">
        <h3 className="mb-4 font-mono text-sm uppercase tracking-wide text-ink-muted">
          Recent repositories
        </h3>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {!loading && repos.length === 0 && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="col-span-full flex flex-col items-center gap-3 rounded-xl p-8 text-center glass shadow-glass transition-shadow hover:shadow-glow"
            >
              <Github size={22} className="text-py-yellow" />
              <span className="font-mono text-sm text-ink">Browse the full repository list on GitHub</span>
              <span className="font-mono text-xs text-ink-dim">github.com/{username}</span>
            </a>
          )}
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-2 rounded-xl p-5 glass shadow-glass"
            >
              <div className="flex items-center gap-2 font-mono text-sm text-ink">
                <Github size={14} className="text-py-yellow" /> {repo.name}
              </div>
              <p className="line-clamp-2 text-xs text-ink-muted">
                {repo.description ?? 'No description provided.'}
              </p>
              <div className="mt-1 flex items-center gap-3 font-mono text-[11px] text-ink-dim">
                {repo.language && <span>{repo.language}</span>}
                <span className="flex items-center gap-1">
                  <Star size={11} /> {repo.stargazers_count}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
