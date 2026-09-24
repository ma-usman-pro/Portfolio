import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin } from 'lucide-react'
import { profile } from '@/data/profile'
import NodeField from './NodeField'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid-fade"
    >
      <NodeField />
      <div className="section flex flex-col items-center gap-10 pt-32 text-center md:pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="animate-float rounded-full p-1 shadow-glow">
            <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-py-yellow/40 bg-base-raised md:h-44 md:w-44">
              <img
                src="/profile.jpg"
                alt="Muhammad Ahmad Usman"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="eyebrow"
        >
          {'// available for opportunities'}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-7xl"
        >
          Muhammad Ahmad <span className="text-gradient">Usman</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-8 font-mono text-lg text-ink-muted md:text-xl"
        >
          <span className="text-py-blue">def</span>{' '}
          <span className="text-py-yellow">role</span>():{' '}
          <span className="text-ink">"{profile.tagline}</span>
          <span className="caret" />"
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-2xl text-balance text-ink-muted"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-py-blue to-py-blueDeep px-6 py-3 font-mono text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-medium text-ink glass transition-transform hover:scale-[1.03]"
          >
            <Mail size={16} /> Contact Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-5 pt-2"
        >
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-py-yellow"
          >
            <Download size={14} /> Resume
          </a>
          <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-py-yellow" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-py-yellow" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
