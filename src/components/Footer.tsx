import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-base-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-ink-dim sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.</p>
        <p>
          <span className="text-py-yellow">$</span> echo "thanks for scrolling"
        </p>
      </div>
    </footer>
  )
}
