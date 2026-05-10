import { careers } from '../data/career'
import './Career.scss'

function Career() {
  return (
    <section id="career" className="career">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Career</span>
          <div className="section-title__body">
            <h2>걸어온 길.</h2>
            <p>웹 퍼블리셔로서의 재직 이력과 핵심 기여를 정리합니다.</p>
          </div>
        </div>

        <ol className="bento bento--career">
          {careers.map((c, i) => (
            <li key={c.company} className="ccard">
              <div className="ccard__head">
                <span className="ccard__period">{c.period}</span>
                {c.current && <span className="ccard__badge">재직 중</span>}
                <span className="ccard__index" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>

              <h3 className="ccard__company">
                {c.company}
                <span className="ccard__dot" aria-hidden="true">
                  ·
                </span>
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
      </div>
    </section>
  )
}

export default Career
