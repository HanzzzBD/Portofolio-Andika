import { motion } from 'framer-motion'
import { about, organisations } from '../data/content'
import { Reveal, SectionHeader } from './primitives'
import { staggerChild, staggerParent } from '../lib/motion'

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <SectionHeader index="02" title={<span id="about-title">About</span>} aside="Who I am" />

      <div className="about__grid">
        <Reveal className="about__lead">
          <p className="display-quote">
            {about.lead.split('—')[0]}—<em className="serif">{about.lead.split('—')[1]}</em>
          </p>
        </Reveal>

        <div className="about__body">
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 0.08} className="about__para">
              {p}
            </Reveal>
          ))}

          <Reveal className="about__block">
            <h3 className="mono label">Education</h3>
            <ol className="edu">
              {about.education.map((e) => (
                <li key={e.school} className="edu__item">
                  <span className="mono edu__period">{e.period}</span>
                  <span className="edu__school">{e.school}</span>
                  <span className="edu__detail">{e.detail}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>

      <div className="about__approach">
        <h3 className="mono label">How I work</h3>
        <motion.ol
          className="approach"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
          {about.approach.map((a, i) => (
            <motion.li key={a.title} variants={staggerChild} className="approach__item">
              <span className="mono approach__num">0{i + 1}</span>
              <h4 className="approach__title">{a.title}</h4>
              <p>{a.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      <div className="about__foot">
        <Reveal className="about__orgs">
          <h3 className="mono label">Organisation &amp; beyond</h3>
          <ul className="orgs">
            {organisations.map((o) => (
              <li key={o.title}>
                <span className="orgs__title">{o.title}</span>
                <span className="orgs__text">{o.text}</span>
              </li>
            ))}
            <li>
              <span className="orgs__title">{about.offKeyboard.title}</span>
              <span className="orgs__text">{about.offKeyboard.text}</span>
            </li>
          </ul>
        </Reveal>
        <Reveal className="about__next" delay={0.1}>
          <h3 className="mono label">Where I’m heading</h3>
          <p className="about__aspiration">{about.aspiration}</p>
        </Reveal>
      </div>
    </section>
  )
}
