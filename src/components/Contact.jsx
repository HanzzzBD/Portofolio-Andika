import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { profile, socials } from '../data/content'
import { brandIcons } from '../lib/brandIcons'
import { Reveal, SectionHeader } from './primitives'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <SectionHeader index="07" title={<span id="contact-title">Contact</span>} aside="Bandung · GMT+7" />

      <Reveal className="contact__headline">
        <p className="contact__big">
          Have a project, a team <br className="br-desk" />
          or an opportunity? <em className="serif">Let’s talk.</em>
        </p>
      </Reveal>

      <div className="contact__grid">
        <Reveal className="contact__mail">
          <span className="mono label">Email</span>
          <div className="contact__mail-row">
            <a href={`mailto:${profile.email}`} className="contact__email">
              <Mail size={22} aria-hidden="true" />
              {profile.email}
            </a>
            <motion.button type="button" className="icon-btn icon-btn--outline" onClick={copy} whileTap={{ scale: 0.92 }} aria-label="Copy email address">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={copied ? 'ok' : 'copy'} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} transition={{ duration: 0.18 }} style={{ display: 'inline-flex' }}>
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
            <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
          </div>
          <p className="contact__note">Write about collaboration, team projects or professional opportunities.</p>
        </Reveal>

        <Reveal className="contact__socials" delay={0.08}>
          <span className="mono label">Elsewhere</span>
          <ul>
            {socials.map(({ id, label, handle, href }) => {
              const Icon = brandIcons[id]
              return (
                <li key={id}>
                  <motion.a href={href} target="_blank" rel="noreferrer" className="social-row" whileHover="hover">
                    <Icon width={20} height={20} />
                    <span className="social-row__label">{label}</span>
                    <span className="mono social-row__handle">{handle}</span>
                    <motion.span variants={{ hover: { x: 4, y: -4 } }} className="social-row__arrow">
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </motion.span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </motion.a>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
