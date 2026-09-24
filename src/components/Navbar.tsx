import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun, Github, Linkedin } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { profile } from '@/data/profile'

const links = [
  { id: 'featured-projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(links.map((l) => l.id))

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 glass shadow-glass">
        <button
          onClick={() => scrollTo('hero')}
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          <span className="text-py-yellow">&gt;</span>_m.ahmad.usman
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`rounded-full px-4 py-2 font-mono text-sm transition-colors ${
                activeId === link.id
                  ? 'bg-py-blue/20 text-py-yellow'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full p-2 text-ink-muted transition-colors hover:text-py-yellow sm:block"
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full p-2 text-ink-muted transition-colors hover:text-py-yellow sm:block"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={onToggleTheme}
            className="rounded-full p-2 text-ink-muted transition-colors hover:text-py-yellow"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-2 text-ink-muted hover:text-ink md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-3 glass shadow-glass md:hidden"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`rounded-xl px-4 py-3 text-left font-mono text-sm ${
                activeId === link.id ? 'bg-py-blue/20 text-py-yellow' : 'text-ink-muted'
              }`}
            >
              {link.label}
            </button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  )
}
