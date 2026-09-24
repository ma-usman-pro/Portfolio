import { motion } from 'framer-motion'
import { GraduationCap, BadgeCheck, ExternalLink } from 'lucide-react'
import { education } from '@/data/education'
import { certifications } from '@/data/certifications'
import { fadeUp, staggerContainer } from '@/animations/variants'

export default function EducationCerts() {
  return (
    <section id="education" className="section">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="eyebrow">{'// education'}</p>
          <h2 className="section-title mt-2">Academic background</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 space-y-4"
          >
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                custom={i}
                className="flex items-start gap-4 rounded-2xl p-5 glass shadow-glass"
              >
                <GraduationCap className="mt-1 shrink-0 text-py-yellow" size={22} />
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{item.degree}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{item.institution}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <p className="eyebrow">{'// certifications'}</p>
          <h2 className="section-title mt-2">Certifications</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 space-y-4"
          >
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.id}
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                custom={i}
                whileHover={{ x: 4 }}
                className="flex items-start justify-between gap-4 rounded-2xl p-5 glass shadow-glass"
              >
                <div className="flex items-start gap-4">
                  <BadgeCheck className="mt-1 shrink-0 text-py-blue" size={22} />
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">{cert.title}</h3>
                    <p className="mt-1 font-mono text-xs text-ink-muted">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </div>
                {cert.verifyUrl && <ExternalLink size={16} className="mt-1 shrink-0 text-ink-dim" />}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
