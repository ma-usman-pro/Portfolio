import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { fadeUp, staggerContainer } from '@/animations/variants'

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
  { label: 'GitHub', value: '@ma-usman-pro', href: profile.social.github, icon: Github },
  { label: 'LinkedIn', value: 'mahmad-usman', href: profile.social.linkedin, icon: Linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <p className="eyebrow">{'// contact'}</p>
      <h2 className="section-title mt-2">Let's build something</h2>
      <p className="mt-3 flex items-center gap-2 text-ink-muted">
        <MapPin size={16} className="text-py-yellow" /> {profile.location}
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 grid gap-4 sm:grid-cols-2"
      >
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            variants={fadeUp}
            custom={i}
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 rounded-2xl p-5 glass shadow-glass transition-shadow hover:shadow-glow"
          >
            <span className="rounded-xl bg-py-yellow/15 p-3 text-py-yellow">
              <link.icon size={20} />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ink-dim">{link.label}</p>
              <p className="font-medium text-ink">{link.value}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
