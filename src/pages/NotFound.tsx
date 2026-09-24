import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-py-yellow"
      >
        Traceback (most recent call last):
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-6xl font-bold text-ink"
      >
        404
      </motion.h1>
      <p className="max-w-md font-mono text-sm text-ink-muted">
        PageNotFoundError: the route you requested does not exist in this scope.
      </p>
      <Link
        to="/"
        className="rounded-full bg-gradient-to-r from-py-blue to-py-blueDeep px-6 py-3 font-mono text-sm text-white shadow-glow"
      >
        return home()
      </Link>
    </div>
  )
}
