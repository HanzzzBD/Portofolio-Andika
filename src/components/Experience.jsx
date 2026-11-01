import { timeline } from '../data/content'
import { Reveal, SectionHeader } from './primitives'

export function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <SectionHeader index="05" title={<span id="experience-title">Experience &amp; Activities</span>} aside="2024 — 2026" />

      <div className="timeline">
        {/* GSAP scrubs this line's scaleY with scroll progress. */}
        <span className="timeline__track" aria-hidden="true">
          <span className="timeline__progress" data-progress />
        </span>
        <ol className="timeline__list">
          {timeline.map((t) => (
            <li key={t.title} className="timeline__item">
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__when">
                <span className="mono timeline__date">{t.date}</span>
                <span className={`mono chip chip--${t.kind.toLowerCase()}`}>{t.kind}</span>
              </div>
              <Reveal className="timeline__card" y={18}>
                <h3 className="timeline__title">{t.title}</h3>
                <p className="mono timeline__org">{t.org}</p>
                <p className="timeline__text">{t.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
