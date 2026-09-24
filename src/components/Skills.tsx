import { motion } from 'framer-motion'
import { skillCategories } from '@/data/skills'
import { fadeUp, staggerContainer } from '@/animations/variants'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="eyebrow">{'// skills'}</p>
      <h2 className="section-title mt-2">What I work with</h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.id}
            variants={fadeUp}
            custom={i}
            whileHover={{ y: -6 }}
            className="rounded-2xl p-6 glass shadow-glass transition-shadow hover:shadow-glow"
          >
            <h3 className="font-display text-lg font-semibold text-ink">{cat.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-py-blue/30 bg-py-blue/10 px-3 py-1 font-mono text-xs text-ink-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
