import { motion } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import type { Project } from '@/types'

const difficultyColor: Record<Project['difficulty'], string> = {
  Beginner: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  Intermediate: 'text-py-yellow border-py-yellow/30 bg-py-yellow/10',
  Advanced: 'text-rose-400 border-rose-400/30 bg-rose-400/10',
  Ultimate: 'text-py-yellow border-py-yellow/50 bg-py-yellow/15',
}

export default function ProjectCard({
  project,
  index,
  large = false,
}: {
  project: Project
  index: number
  /** Ultimate-tier cards render with more visual space and a longer feature list. */
  large?: boolean
}) {
  const isUltimate = project.difficulty === 'Ultimate'
  const featureCount = large ? 5 : 3

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group flex flex-col overflow-hidden rounded-2xl glass shadow-glass transition-shadow hover:shadow-glow ${
        isUltimate ? 'ring-1 ring-py-yellow/30' : ''
      }`}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-glow-blue-yellow ${
          large ? 'h-52' : 'h-40'
        }`}
      >
        <span
          className={`font-mono font-bold text-white/10 transition-transform duration-500 group-hover:scale-110 ${
            large ? 'text-6xl' : 'text-4xl'
          }`}
        >
          {'</>'}
        </span>
        {project.featured && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-py-yellow/90 px-2.5 py-1 font-mono text-[10px] font-semibold text-base">
            <Star size={11} fill="currentColor" /> Featured
          </span>
        )}
        <span
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold ${difficultyColor[project.difficulty]}`}
        >
          {project.difficulty}
        </span>
      </div>

      <div className={`flex flex-1 flex-col ${large ? 'p-8' : 'p-6'}`}>
        <div className="flex items-center justify-between gap-2">
          <h3 className={`font-display font-semibold text-ink ${large ? 'text-2xl' : 'text-lg'}`}>
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-xs text-ink-dim">{project.date}</span>
        </div>
        <p className="mt-2 font-mono text-xs uppercase tracking-wide text-py-yellow">
          {project.category}
        </p>
        <p
          className={`mt-3 flex-1 leading-relaxed text-ink-muted ${large ? 'text-base' : 'text-sm'}`}
        >
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.features.slice(0, featureCount).map((f) => (
            <li key={f} className="flex gap-2 text-xs text-ink-muted">
              <span className="text-py-blue">▹</span> {f}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-base-border bg-base-raised px-2.5 py-1 font-mono text-[11px] text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-base-border pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-py-yellow"
            >
              <Github size={14} /> Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-py-yellow"
            >
              <ExternalLink size={14} /> LinkedIn Demo
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-py-yellow"
            >
              <ExternalLink size={14} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
