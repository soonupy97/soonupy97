import { useMemo, useState } from 'react'
import {
  projects,
  type Project,
  type ProjectCategory,
} from '../data/portfolio'
import './Projects.scss'

function splitDescription(desc: string): { summary: string; rest: string } {
  const i = desc.indexOf('. ')
  if (i === -1) return { summary: desc, rest: '' }
  return {
    summary: desc.slice(0, i + 1),
    rest: desc.slice(i + 2),
  }
}

function ProjectAccordionItem({
  project,
  index,
  isOpen,
  onToggle,
}: {
  project: Project
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const accent = project.accent ?? 'blue'
  const headerId = `pacc-h-${index}`
  const panelId = `pacc-p-${index}`
  const { summary, rest } = splitDescription(project.description)

  return (
    <li className={`pacc pacc--${accent}${isOpen ? ' is-open' : ''}`}>
      <button
        id={headerId}
        type="button"
        className="pacc__header"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="pacc__accent" aria-hidden="true" />
        <div className="pacc__head-body">
          <div className="pacc__title-row">
            <h3 className="pacc__title">{project.title}</h3>
            <span className="pacc__year">{project.year}</span>
          </div>
          <div className="pacc__meta-row">
            <span className="pacc__role">{project.role}</span>
            <ul className="pacc__cats">
              {project.categories.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <p className="pacc__summary">{summary}</p>
        </div>
        <span className="pacc__chevron" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M4 6l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className="pacc__panel"
      >
        <div className="pacc__panel-clip">
          <div className="pacc__panel-content">
            {rest && <p className="pacc__desc">{rest}</p>}

          {project.highlights && project.highlights.length > 0 && (
            <ul className="pacc__highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          {project.stack && project.stack.length > 0 && (
            <ul className="pacc__stack">
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
              className="pacc__visit"
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
    </li>
  )
}

function Projects() {
  const allCategories = useMemo<string[]>(() => {
    const set = new Set<string>()
    projects.forEach((p) => p.categories.forEach((c) => set.add(c)))
    return ['All', ...Array.from(set)]
  }, [])

  const [filter, setFilter] = useState<string>('All')

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((p) =>
            p.categories.includes(filter as ProjectCategory),
          ),
    [filter],
  )

  const [openTitle, setOpenTitle] = useState<string | null>(
    projects[0]?.title ?? null,
  )

  const handleFilter = (next: string) => {
    setFilter(next)
    const upcoming =
      next === 'All'
        ? projects
        : projects.filter((p) =>
            p.categories.includes(next as ProjectCategory),
          )
    setOpenTitle(upcoming[0]?.title ?? null)
  }

  const handleToggle = (title: string) => {
    setOpenTitle((prev) => (prev === title ? null : title))
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Projects</span>
          <div className="section-title__body">
            <h2>최근 작업.</h2>
            <p>마크업 품질, 접근성, 협업 효율을 끌어올린 작업들입니다.</p>
          </div>
        </div>

        <div className="projects__filters" role="tablist" aria-label="필터">
          {allCategories.map((tag) => (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={filter === tag}
              className={`chip${filter === tag ? ' is-active' : ''}`}
              onClick={() => handleFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <ol className="bento bento--projects">
          {filtered.map((p) => (
            <ProjectAccordionItem
              key={p.title}
              project={p}
              index={projects.indexOf(p)}
              isOpen={openTitle === p.title}
              onToggle={() => handleToggle(p.title)}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Projects
