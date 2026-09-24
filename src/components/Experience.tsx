import { motion } from 'framer-motion'
import { experience } from '@/data/experience'
import { fadeUp } from '@/animations/variants'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="eyebrow">{'// experience'}</p>
      <h2 className="section-title mt-2">Experience & training</h2>

      <div className="relative mt-12 space-y-10 border-l border-base-border pl-8">
        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="relative"
          >
            <span className="absolute -left-[38px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-py-yellow bg-base" />
            <div className="rounded-2xl p-6 glass shadow-glass">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-ink">{item.role}</h3>
                <span className="font-mono text-xs text-py-yellow">{item.period}</span>
              </div>
              <p className="mt-1 font-mono text-sm text-ink-muted">
                {item.company} · {item.location}
              </p>
              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-1 text-py-blue">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
