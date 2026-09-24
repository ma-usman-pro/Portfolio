import { motion } from 'framer-motion'
import {
  LayoutTemplate,
  Layers,
  BrainCircuit,
  AppWindow,
  Plug,
  PenTool,
  Code,
  type LucideIcon,
} from 'lucide-react'
import { services } from '@/data/services'
import { fadeUp, staggerContainer } from '@/animations/variants'

// Explicit map instead of `import * as Icons` — the wildcard import pulls
// in every icon in the library (700KB+) and defeats tree-shaking. Only
// the icon names actually used in src/data/services.ts need to be listed
// here; add new ones as they're used.
const iconMap: Record<string, LucideIcon> = {
  LayoutTemplate,
  Layers,
  BrainCircuit,
  AppWindow,
  Plug,
  PenTool,
}

export default function Services() {
  return (
    <section id="services" className="section">
      <p className="eyebrow">{'// services'}</p>
      <h2 className="section-title mt-2">How I can help</h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Code
          return (
            <motion.div
              key={service.id}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6 glass shadow-glass transition-shadow hover:shadow-glow"
            >
              <div className="mb-4 inline-flex rounded-xl bg-py-blue/15 p-3 text-py-blue">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{service.description}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
