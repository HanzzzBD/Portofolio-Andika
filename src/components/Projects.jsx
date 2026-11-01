import { motion } from 'framer-motion'
import { ArrowUpRight, Award, Lock } from 'lucide-react'
import { archive, projects } from '../data/content'
import { Picture, Reveal, SectionHeader } from './primitives'
import { staggerChild, staggerParent } from '../lib/motion'
import { GithubIcon } from './BrandIcons'

function ProjectLinks({ links }) {
  return (
    <ul className="project__links">
      {links.map((l) => (
        <li key={l.href}>
          <motion.a href={l.href} target="_blank" rel="noreferrer" className="link-arrow" whileHover="hover">
            <GithubIcon width={15} height={15} />
            <span>{l.label}</span>
            <motion.span variants={{ hover: { x: 3, y: -3 } }} className="link-arrow__icon">
              <ArrowUpRight size={16} aria-hidden="true" />
            </motion.span>
            <span className="sr-only"> (opens in a new tab)</span>
          </motion.a>
        </li>
      ))}
    </ul>
  )
}

function Project({ p, flip }) {
  return (
    <article className={`project${flip ? ' project--flip' : ''}`} aria-labelledby={`${p.id}-title`}>
      <div className="project__head">
        <span className="project__index" aria-hidden="true">{p.index}</span>
        <div>
          <p className="mono project__kicker">
            {p.kicker} <span aria-hidden="true">·</span> {p.year}
          </p>
          <h3 id={`${p.id}-title`} className="project__title">{p.title}</h3>
          {p.award ? (
            <p className="badge">
              <Award size={14} aria-hidden="true" /> {p.award}
            </p>
          ) : null}
        </div>
      </div>

      {/* GSAP: clip reveal on .media, parallax on .media__inner. */}
      <figure className="project__cover media" data-clip>
        <div className="media__inner" data-parallax>
          <Picture
            base={p.cover.base}
            widths={[800, 1440]}
            sizes="(min-width: 1024px) 70vw, 100vw"
            width={1440}
            height={900}
            alt={p.cover.alt}
          />
        </div>
      </figure>

      <div className="project__body">
        <dl className="project__meta">
          <div>
            <dt className="mono">Role</dt>
            <dd>{p.role}</dd>
          </div>
          <div>
            <dt className="mono">Stack</dt>
            <dd>
              <ul className="tags tags--small">
                {p.stack.map((s) => (
                  <li key={s} className="tag">{s}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className="project__text">
          <Reveal>
            <h4 className="mono label">Overview</h4>
            <p>{p.overview}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h4 className="mono label">Problem</h4>
            <p>{p.problem}</p>
          </Reveal>
          <div>
            <h4 className="mono label">What I built</h4>
            <motion.ul
              className="checklist"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            >
              {p.contributions.map((c) => (
                <motion.li key={c} variants={staggerChild}>{c}</motion.li>
              ))}
            </motion.ul>
          </div>
          {p.links.length ? <ProjectLinks links={p.links} /> : null}
          {p.privateRepo ? (
            <p className="private-repo mono">
              <Lock size={13} aria-hidden="true" /> Private repository
            </p>
          ) : null}
          {p.note ? <p className="mono project__note">{p.note}</p> : null}
        </div>
      </div>

      {p.gallery.length ? (
        <div className="project__gallery">
          {p.gallery.map((g) => (
            <figure key={g.base} className="media media--small" data-clip>
              <div className="media__inner">
                <Picture base={g.base} widths={[800, 1440]} sizes="(min-width: 768px) 45vw, 100vw" width={1440} height={900} alt={g.alt} />
              </div>
              <figcaption className="mono">{g.alt.split(' with ')[0]}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <SectionHeader index="03" title={<span id="projects-title">Selected Projects</span>} aside={`${projects.length} featured`} />
      <div className="projects__list">
        {projects.map((p, i) => (
          <Project key={p.id} p={p} flip={i % 2 === 1} />
        ))}
      </div>

      <div className="archive">
        <h3 className="mono label">Also on GitHub</h3>
        <ul>
          {archive.map((a) => (
            <li key={a.name}>
              <a href={a.href} target="_blank" rel="noreferrer" className="archive__row">
                <span className="archive__name">{a.name}</span>
                <span className="archive__desc">{a.desc}</span>
                <span className="mono archive__tags">{a.tags.join(' · ')}</span>
                <ArrowUpRight size={18} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
