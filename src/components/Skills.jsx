import { motion } from 'framer-motion'
import { skillGroups, softSkills } from '../data/content'
import { SectionHeader } from './primitives'
import { staggerChild, staggerParent } from '../lib/motion'

export function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <SectionHeader index="04" title={<span id="skills-title">Skills &amp; Tools</span>} aside="Backed by real work" />

      <div className="skills__grid">
        {skillGroups.map((g, gi) => (
          <div key={g.title} className="skills__group">
            <h3 className="skills__title">
              <span className="mono">0{gi + 1}</span> {g.title}
            </h3>
            <motion.ul
              className="tags"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            >
              {g.items.map((s) => (
                <motion.li key={s} className="tag" variants={staggerChild} whileHover={{ y: -2 }}>
                  {s}
                </motion.li>
              ))}
            </motion.ul>
            <p className="mono skills__evidence">
              <span aria-hidden="true">↳ </span>
              <span className="sr-only">Evidence: </span>
              {g.evidence}
            </p>
          </div>
        ))}
      </div>

      <div className="skills__soft">
        <span className="mono label">Also</span>
        <p>{softSkills.join(' / ')}</p>
      </div>
    </section>
  )
}
