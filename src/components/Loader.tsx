import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  show: boolean
}

export default function Loader({ show }: LoaderProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-mono text-2xl text-ink"
          >
            <span className="text-py-yellow">$</span> booting_portfolio
            <span className="caret" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
