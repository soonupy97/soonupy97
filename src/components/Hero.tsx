import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'
import { usePointerSpot } from '../hooks/usePointerSpot'
import { useTilt } from '../hooks/useTilt'
import soonupyLogo from '../assets/icons/soonupy.svg'
import './Hero.scss'

const TAGS = [
  'HTML',
  'SCSS',
  'TypeScript',
  'React',
  'Vue',
  'A11y',
  'Vite',
  'Storybook',
  'Figma',
  'BEM',
  'Tailwind',
]

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
      <span className="tile__eyebrow">Web Publisher · Frontend</span>
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
              d="M3 8h10M9 4l4 4-4 4"
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
      <div className="avatar">
        <div className="avatar__sticker s1" aria-hidden="true">
          ✦
        </div>
        <div className="avatar__sticker s2" aria-hidden="true">
          ◆
        </div>
        <div className="avatar__face">
          <img src={soonupyLogo} alt="soonupy" />
        </div>
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

function FocusTile() {
  return (
    <a className="tile tile--focus" href="#about">
      <p>
        디자인 시스템과 <em>마크업 품질</em>을 함께 끌어올리는 일에 몰입중.
      </p>
      <span className="more">자세히 →</span>
    </a>
  )
}

function GitTile() {
  return (
    <a className="tile tile--git" href={profile.github} target="_blank" rel="noreferrer">
      <strong>@soonupy</strong>
      <ul className="grass" aria-hidden="true">
        {Array.from({ length: 35 }).map((_, i) => {
          const lvl = [0, 1, 1, 2, 1, 3, 2, 2, 3, 4, 1][i % 11]
          return <li key={i} data-lvl={lvl} />
        })}
      </ul>
    </a>
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
            <FocusTile />
            <GitTile />
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
