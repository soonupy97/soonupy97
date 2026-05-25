import { useEffect, useState } from 'react'
import { projects, type Project } from '../data/portfolio'
import useScrollReveal from '../hooks/useScrollReveal'
import './Projects.scss'

function splitDescription(desc: string): { summary: string; rest: string } {
  const i = desc.indexOf('. ')
  if (i === -1) return { summary: desc, rest: '' }
  return {
    summary: desc.slice(0, i + 1),
    rest: desc.slice(i + 2),
  }
}

function splitTitle(title: string): { main: string; subtitle: string } {
  const i = title.indexOf(' — ')
  if (i === -1) return { main: title, subtitle: '' }
  return {
    main: title.slice(0, i),
    subtitle: title.slice(i + 3),
  }
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (title: string) => void
}) {
  const accent = project.accent ?? 'blue'
  const { summary } = splitDescription(project.description)
  const { main: titleMain, subtitle } = splitTitle(project.title)

  return (
    <li>
      <button
        type="button"
        className={`pacc pacc--${accent}`}
        onClick={() => onOpen(project.title)}
      >
        <div className="pacc__head-body">
          <div className="pacc__title-row">
            <h3 className="pacc__title">{titleMain}</h3>
            <span className="pacc__year">{project.year}</span>
          </div>
          {subtitle && (
            <div className="pacc__meta-row">
              <span className="pacc__subtitle">{subtitle}</span>
            </div>
          )}
          <p className="pacc__summary">{summary}</p>
        </div>
      </button>
    </li>
  )
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const accent = project.accent ?? 'blue'
  const { summary, rest } = splitDescription(project.description)
  const { main: titleMain, subtitle } = splitTitle(project.title)
  const titleId = 'pdialog-title'

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div
      className={`pdialog pdialog--${accent}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div
        className="pdialog__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="pdialog__panel">
        <header className="pdialog__header">
          <div className="pdialog__head-body">
            <span className="pdialog__year">{project.year}</span>
            <h3 id={titleId} className="pdialog__title">
              {titleMain}
              {subtitle && (
                <span className="pdialog__subtitle">{subtitle}</span>
              )}
            </h3>
          </div>
          <button
            type="button"
            className="pdialog__close"
            onClick={onClose}
            aria-label="닫기"
            autoFocus
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M5 5l10 10M15 5l-10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>

        <div className="pdialog__body">
          {summary && <p className="pdialog__summary">{summary}</p>}
          {rest && <p className="pdialog__desc">{rest}</p>}

          {project.highlights && project.highlights.length > 0 && (
            <ul className="pdialog__highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          {project.stack && project.stack.length > 0 && (
            <ul className="pdialog__stack">
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pdialog__visit"
            >
              방문하기
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
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)
  const selected = projects.find((p) => p.title === selectedTitle) ?? null

  const revealRef = useScrollReveal<HTMLElement>()
  return (
    <section ref={revealRef} id="projects" className="projects scroll-reveal">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Projects</span>
          <div className="section-title__body">
            <h2>최근 작업.</h2>
            <p>마크업 품질, 접근성, 협업 효율을 끌어올린 작업들입니다.</p>
          </div>
        </div>

        <ul className="bento bento--projects">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              project={p}
              onOpen={setSelectedTitle}
            />
          ))}
        </ul>
      </div>

      {selected && (
        <ProjectDialog
          project={selected}
          onClose={() => setSelectedTitle(null)}
        />
      )}
    </section>
  )
}

export default Projects
