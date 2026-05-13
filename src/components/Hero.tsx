import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'
import { careers } from '../data/career'
import { certs } from '../data/certs'
import { skillGroups } from '../data/skills'
import { usePointerSpot } from '../hooks/usePointerSpot'
import { useTilt } from '../hooks/useTilt'
import soonupyLogo from '../assets/icons/soonupy.svg'
import './Hero.scss'

const TAGS = skillGroups.flatMap((g) => g.items.map((i) => i.name))

function useSeoulClock() {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const fmt = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Seoul',
  })
  return fmt.format(time)
}

function NameTile() {
  const spot = usePointerSpot<HTMLDivElement>()
  return (
    <div
      ref={spot.ref}
      {...spot.handlers}
      style={spot.style}
      className="tile tile--hero"
    >
      <div className="spot" aria-hidden="true" />
      <span className="tile__eyebrow">Design · Web Publisher · Frontend</span>
      <h1>
        Hi, I'm <em>{profile.name}</em>.
        <br />I craft <span className="hl">accessible</span>
        <br />
        UI from clean markup.
      </h1>
      <div className="tile__actions">
        <a className="btn btn--primary" href="#projects">
          See projects
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M6 4l4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a className="btn btn--ghost" href="#contact">
          Contact
        </a>
      </div>
    </div>
  )
}

function AvatarTile() {
  const tilt = useTilt<HTMLDivElement>(5)
  return (
    <div
      ref={tilt.ref}
      {...tilt.handlers}
      className="tile tile--avatar"
    >
      <div className="orbit" aria-hidden="true">
        <span className="orbit__ring orbit__ring--outer" />
        <span className="orbit__ring orbit__ring--inner" />
        <span className="orbit__dot orbit__dot--1" />
        <span className="orbit__dot orbit__dot--2" />
        <span className="orbit__dot orbit__dot--3" />
      </div>
      <div className="avatar">
        <img src={soonupyLogo} alt="soonupy" />
      </div>
      <div className="tile__caption">
        <strong>@soonupy</strong>
        <span>Seoul · Web Publisher</span>
      </div>
    </div>
  )
}

function StatsTile() {
  return (
    <div className="tile tile--stats">
      <div className="stat">
        <strong>6+</strong>
        <span>Years</span>
      </div>
      <div className="stat">
        <strong>40+</strong>
        <span>Projects</span>
      </div>
      <div className="stat">
        <strong>AA</strong>
        <span>WCAG 2.1</span>
      </div>
    </div>
  )
}

function ClockTile() {
  const time = useSeoulClock()
  return (
    <div className="tile tile--clock">
      <strong>{time}</strong>
      <span className="tile__hint">
        <span className="dot" /> Available for briefs
      </span>
    </div>
  )
}

function StackTile() {
  return (
    <div className="tile tile--stack">
      <span className="tile__label">Skills</span>
      <div className="ticker">
        <ul className="ticker__track">
          {[...TAGS, ...TAGS].map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function CareerTile() {
  return (
    <a className="tile tile--career" href="#career">
      <span className="tile__eyebrow">Career</span>
      <ol className="career-list">
        {careers.map((c) => (
          <li key={c.company} className={c.current ? 'is-current' : undefined}>
            <span className="dot" aria-hidden="true" />
            <div>
              <strong>{c.company}</strong>
              <span>
                {c.role} · {c.period}
              </span>
            </div>
          </li>
        ))}
      </ol>
      <span className="more">
        커리어 보기
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path
            d="M5 3l4 4-4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  )
}

function CertsTile() {
  return (
    <div className="tile tile--certs">
      <span className="tile__eyebrow">Certifications</span>
      <ul className="cert-list">
        {certs.map((c) => (
          <li key={c.name}>
            <strong>{c.name}</strong>
            <span>
              {c.issuer} · {c.year}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="bento bento--hero">
          <div className="row row--main">
            <NameTile />
            <div className="col col--right">
              <AvatarTile />
              <StatsTile />
            </div>
          </div>
          <div className="row row--secondary">
            <CareerTile />
            <CertsTile />
            <div className="col col--narrow">
              <ClockTile />
              <StackTile />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
