import { useMemo, useState } from 'react'
import { skillGroups } from '../data/skills'
import './Skills.scss'

function Skills() {
  const tabs = useMemo(
    () => [
      { title: 'All', items: skillGroups.flatMap((g) => g.items) },
      ...skillGroups,
    ],
    [],
  )

  const [active, setActive] = useState(0)
  const activeGroup = tabs[active]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Skills</span>
          <div className="section-title__body">
            <h2>일하는 도구들.</h2>
            <p>디자인부터 개발, 협업까지 매일 손에 잡히는 도구들입니다.</p>
          </div>
        </div>

        <div className="skills__filters" role="tablist" aria-label="도구 분류">
          {tabs.map((g, i) => (
            <button
              key={g.title}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-controls={`skill-panel-${i}`}
              className={`chip${active === i ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              {g.title}
            </button>
          ))}
        </div>

        <ul
          key={activeGroup.title}
          id={`skill-panel-${active}`}
          role="tabpanel"
          className="skill-icons"
        >
          {activeGroup.items.map((item) => (
            <li key={item.name} className="skill-icons__item">
              <span className="skill-icons__logo" aria-hidden="true">
                <img
                  src={item.url ?? `https://cdn.simpleicons.org/${item.slug}`}
                  alt=""
                  loading="lazy"
                  width="32"
                  height="32"
                />
              </span>
              <span className="skill-icons__name">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
