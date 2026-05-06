import { useEffect, useRef, useState } from 'react'
import { skillGroups } from '../data/portfolio'
import './Skills.scss'

const COLORS = ['blue', 'pink', 'mint'] as const

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (seen || !ref.current) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [seen])
  return { ref, seen }
}

function SkillCard({
  group,
  color,
  index,
}: {
  group: (typeof skillGroups)[number]
  color: (typeof COLORS)[number]
  index: number
}) {
  const { ref, seen } = useInView<HTMLElement>()
  return (
    <article
      ref={ref}
      className={`skill-card skill-card--${color}${seen ? ' is-in' : ''}`}
    >
      <header>
        <h3>{group.title}</h3>
        <span aria-hidden="true">0{index + 1}</span>
      </header>
      <ul>
        {group.items.map((skill) => (
          <li key={skill.name}>
            <div className="row">
              <span className="name">{skill.name}</span>
              <span className="pct">{skill.level}%</span>
            </div>
            <div
              className="bar"
              role="progressbar"
              aria-label={skill.name}
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <span style={{ width: seen ? `${skill.level}%` : 0 }} />
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Skills</span>
          <h2>일하는 도구들.</h2>
          <p>마크업부터 컴포넌트 시스템까지, 가장 자주 쓰는 스택입니다.</p>
        </div>

        <div className="bento bento--skills">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.title} group={g} color={COLORS[i % 3]} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
