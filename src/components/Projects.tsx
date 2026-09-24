import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'
import type { Project } from '@/types'

type SortKey = 'newest' | 'oldest' | 'title'
type DifficultyFilter = Project['difficulty'] | 'All'

const categories: Array<Project['category'] | 'All'> = [
  'All',
  'Full Stack',
  'AI/ML',
  'Frontend',
  'Mobile',
]

const difficulties: DifficultyFilter[] = ['All', 'Ultimate', 'Advanced', 'Intermediate', 'Beginner']

export default function Projects() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Project['category'] | 'All'>('All')
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('All')
  const [sort, setSort] = useState<SortKey>('newest')

  const ultimateProjects = useMemo(
    () => projects.filter((p) => p.difficulty === 'Ultimate'),
    [],
  )

  const filtered = useMemo(() => {
    let list = projects.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const matchesDifficulty = difficulty === 'All' || p.difficulty === difficulty
      const matchesQuery =
        query.trim() === '' ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      return matchesCategory && matchesDifficulty && matchesQuery
    })

    list = [...list].sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title)
      if (sort === 'oldest') return a.date.localeCompare(b.date)
      return b.date.localeCompare(a.date)
    })

    return list
  }, [query, category, difficulty, sort])

  return (
    <>
      {/* ───────────── Featured / Ultimate showcase ───────────── */}
      <section id="featured-projects" className="section">
        <p className="eyebrow">{'// featured work'}</p>
        <h2 className="section-title mt-2">The strongest evidence of what I can build</h2>
        <p className="mt-3 max-w-2xl text-sm text-ink-muted">
          A handful of complete, production-style builds — full-stack apps with real
          authentication and security, and AI/ML work that goes past calling a hosted API.
        </p>

        <motion.div layout className="mt-10 grid gap-6 lg:grid-cols-2">
          {ultimateProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} large />
          ))}
        </motion.div>
      </section>

      {/* ───────────── Full, filterable project catalog ───────────── */}
      <section id="projects" className="section">
        <p className="eyebrow">{'// all projects'}</p>
        <h2 className="section-title mt-2">Full project catalog</h2>

        <div className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-xs">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-dim" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects or tech..."
                className="w-full rounded-full py-2.5 pl-10 pr-4 font-mono text-sm text-ink placeholder:text-ink-dim glass focus:outline-none"
              />
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-full px-3 py-2 font-mono text-xs text-ink-muted glass focus:outline-none"
              aria-label="Sort projects"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="title">Title A–Z</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wide text-ink-dim">
              Difficulty:
            </span>
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition-colors ${
                  difficulty === d
                    ? 'bg-py-yellow text-base'
                    : 'text-ink-muted glass hover:text-ink'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wide text-ink-dim">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition-colors ${
                  category === cat
                    ? 'bg-py-blue text-white'
                    : 'text-ink-muted glass hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center font-mono text-sm text-ink-dim">
            No projects match "{query}" in {category} / {difficulty}.
          </p>
        )}
      </section>
    </>
  )
}
