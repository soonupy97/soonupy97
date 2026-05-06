import { profile } from '../data/portfolio'
import { useTilt } from '../hooks/useTilt'
import './About.scss'

const VALUES = [
  {
    n: '01',
    title: '시맨틱 우선',
    desc: '의미를 가진 마크업으로 구조와 접근성을 동시에.',
    color: 'blue',
    icon: '◇',
  },
  {
    n: '02',
    title: '재사용 SCSS',
    desc: 'BEM · ITCSS · 토큰으로 일관된 스타일 아키텍처.',
    color: 'pink',
    icon: '✦',
  },
  {
    n: '03',
    title: '협업 친화',
    desc: '디자이너의 의도를 정확히 옮기고 개발자가 잇기 쉽게.',
    color: 'mint',
    icon: '✺',
  },
  {
    n: '04',
    title: '성능과 접근성',
    desc: 'Lighthouse 95+, WCAG 2.1 AA 를 기본값으로.',
    color: 'yellow',
    icon: '✱',
  },
] as const

function ValueTile({
  value,
}: {
  value: (typeof VALUES)[number]
}) {
  const tilt = useTilt<HTMLLIElement>(6)
  return (
    <li
      ref={tilt.ref}
      {...tilt.handlers}
      className={`vtile vtile--${value.color}`}
    >
      <div className="vtile__inner">
        <span className="vtile__num">{value.n}</span>
        <span className="vtile__icon" aria-hidden="true">
          {value.icon}
        </span>
        <h3>{value.title}</h3>
        <p>{value.desc}</p>
      </div>
    </li>
  )
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">About</span>
          <h2>마크업으로 사용자 경험을 설계합니다.</h2>
          <p>{profile.intro}</p>
        </div>

        <ul className="bento bento--values">
          {VALUES.map((v) => (
            <ValueTile key={v.title} value={v} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
