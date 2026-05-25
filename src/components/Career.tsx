import { useEffect, useState } from 'react'
import { careers } from '../data/career'
import { certs } from '../data/certs'
import useScrollReveal from '../hooks/useScrollReveal'
import './Career.scss'

type Tab = 'career' | 'certs'

function Career() {
  const [active, setActive] = useState<Tab>('career')

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<Tab>).detail
      if (detail === 'career' || detail === 'certs') {
        setActive(detail)
      }
    }
    window.addEventListener('career:tab', handler)
    return () => window.removeEventListener('career:tab', handler)
  }, [])

  const revealRef = useScrollReveal<HTMLElement>()
  return (
    <section ref={revealRef} id="career" className="career scroll-reveal">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Career</span>
          <div className="section-title__body">
            <h2>지나온 시간.</h2>
            <p>디자이너 · 웹퍼블리셔의 재직 이력과 받은 자격을 정리합니다.</p>
          </div>
        </div>

        <div
          className="career__tabs"
          role="tablist"
          aria-label="Career and certification"
        >
          <button
            type="button"
            role="tab"
            aria-selected={active === 'career'}
            aria-controls="career-panel-career"
            className={`chip${active === 'career' ? ' is-active' : ''}`}
            onClick={() => setActive('career')}
          >
            Career
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={active === 'certs'}
            aria-controls="career-panel-certs"
            className={`chip${active === 'certs' ? ' is-active' : ''}`}
            onClick={() => setActive('certs')}
          >
            Certification
          </button>
        </div>

        {active === 'career' ? (
          <ol
            id="career-panel-career"
            role="tabpanel"
            className="bento bento--career"
          >
            {careers.map((c) => (
              <li key={c.company} className="ccard">
                <div className="ccard__head">
                  <span className="ccard__period">{c.period}</span>
                  {c.current && <span className="ccard__badge">재직 중</span>}
                </div>

                <h3 className="ccard__company">
                  {c.company}
                  <span className="ccard__role">{c.role}</span>
                </h3>

                <p className="ccard__summary">{c.summary}</p>

                <ul className="ccard__highlights">
                  {c.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <ul className="ccard__stack">
                  {c.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        ) : (
          <ul
            id="career-panel-certs"
            role="tabpanel"
            className="bento bento--certs"
          >
            {certs.map((c) => (
              <li key={c.name} className="ccert">
                <strong className="ccert__name">{c.name}</strong>
                <span className="ccert__meta">
                  {c.issuer} · {c.year}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Career
