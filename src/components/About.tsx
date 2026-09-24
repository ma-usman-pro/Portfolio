import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'
import { profile } from '@/data/profile'
import { fadeUp } from '@/animations/variants'

export default function About() {
  return (
    <section id="about" className="section">
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="eyebrow">
        {'// about'}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="section-title mt-2"
      >
        How I approach building software.
      </motion.h2>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="text-lg leading-relaxed text-ink-muted"
        >
          {profile.about}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="flex flex-col gap-4 rounded-2xl p-6 glass shadow-glass"
        >
          <div className="flex items-center gap-3 text-sm text-ink-muted">
            <MapPin size={16} className="text-py-yellow" /> {profile.location}
          </div>
          <div className="flex items-center gap-3 text-sm text-ink-muted">
            <Mail size={16} className="text-py-yellow" /> {profile.email}
          </div>
          <div className="flex items-center gap-3 text-sm text-ink-muted">
            <Phone size={16} className="text-py-yellow" /> {profile.phone}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
