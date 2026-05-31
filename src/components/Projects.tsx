import { useState } from 'react'
import {
  projects,
  type Project,
  type ProjectType,
  PROJECT_TYPE_ORDER,
  PROJECT_TYPE_LABELS,
  PROJECT_ACCESS_LABELS,
  PROJECT_STATUS_LABELS,
} from '../data/portfolio'
import useScrollReveal from '../hooks/useScrollReveal'
import './Projects.scss'

type TypeFilter = ProjectType | 'all'

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

function ProjectDetail({ project }: { project: Project }) {
  const { summary, rest } = splitDescription(project.description)
  const { main: titleMain, subtitle } = splitTitle(project.title)

  return (
    <div className="pdetail">
      <div className="pdetail__head">
        <h3 className="pdetail__title">{titleMain}</h3>
        {subtitle && <p className="pdetail__subtitle">{subtitle}</p>}
        <div className="pdetail__badges">
          <span className={`pbadge pbadge--status pbadge--${project.status}`}>
            {PROJECT_STATUS_LABELS[project.status]}
          </span>
          <span className={`pbadge pbadge--access pbadge--${project.access}`}>
            {project.access === 'auth' && (
              <svg
                className="pbadge__lock"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <path
                  d="M2.6 4.3V3.2a2.4 2.4 0 0 1 4.8 0v1.1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <rect
                  x="1.8"
                  y="4.3"
                  width="6.4"
                  height="4.4"
                  rx="0.8"
                  fill="currentColor"
                />
              </svg>
            )}
            {PROJECT_ACCESS_LABELS[project.access]}
          </span>
        </div>
      </div>

      <div className="pdetail__body">
        {summary && <p className="pdetail__summary">{summary}</p>}
        {rest && <p className="pdetail__desc">{rest}</p>}

        {project.highlights && project.highlights.length > 0 && (
          <ul className="pdetail__highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {project.stack && project.stack.length > 0 && (
          <ul className="pdetail__stack">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}

        {(project.caseStudy || project.link) && (
          <div className="pdetail__cta">
            {project.caseStudy && (
              <a
                href={project.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="pdetail__visit pdetail__visit--primary"
              >
                케이스 스터디 보기
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
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pdetail__visit"
              >
                {project.access === 'auth'
                  ? '사이트 방문 (로그인 필요)'
                  : '사이트 방문하기'}
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
        )}
      </div>
    </div>
  )
}

const COLLAPSED_COUNT = 5

function Projects() {
  const [activeType, setActiveType] = useState<TypeFilter>('all')
  const [activeIndex, setActiveIndex] = useState(0)
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(0)
  const [expanded, setExpanded] = useState(false)

  const revealRef = useScrollReveal<HTMLElement>()

  const filteredProjects =
    activeType === 'all'
      ? projects
      : projects.filter((p) => p.type === activeType)

  const selectType = (t: TypeFilter) => {
    setActiveType(t)
    setActiveIndex(0)
    setOpenMobileIndex(0)
    setExpanded(false)
  }

  const activeProject = filteredProjects[activeIndex] ?? filteredProjects[0]
  // 더보기/접기는 전체 보기에서만 (필터 선택 시 항목 수가 적어 불필요)
  const canCollapse =
    activeType === 'all' && filteredProjects.length > COLLAPSED_COUNT
  const visibleProjects =
    canCollapse && !expanded
      ? filteredProjects.slice(0, COLLAPSED_COUNT)
      : filteredProjects
  const hiddenCount = filteredProjects.length - COLLAPSED_COUNT

  return (
    <section ref={revealRef} id="projects" className="projects scroll-reveal">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Projects</span>
          <div className="section-title__body">
            <h2>주요 작업.</h2>
            <p>마크업 품질, 접근성, 협업 효율을 끌어올린 작업들입니다.</p>
          </div>
        </div>

        <div
          className="projects__filters"
          role="tablist"
          aria-label="프로젝트 유형"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeType === 'all'}
            className={`projects__filter${activeType === 'all' ? ' is-active' : ''}`}
            onClick={() => selectType('all')}
          >
            All
            <span className="projects__filter-count">{projects.length}</span>
          </button>
          {PROJECT_TYPE_ORDER.map((t) => {
            const count = projects.filter((p) => p.type === t).length
            if (count === 0) return null
            return (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={activeType === t}
                className={`projects__filter${activeType === t ? ' is-active' : ''}`}
                onClick={() => selectType(t)}
              >
                {PROJECT_TYPE_LABELS[t]}
                <span className="projects__filter-count">{count}</span>
              </button>
            )
          })}
        </div>

        <div className="projects__split">
          <div className="projects__list-wrap">
            <ul className="projects__list" role="tablist">
              {visibleProjects.map((p, i) => {
                const { main } = splitTitle(p.title)
                const isActive = i === activeIndex
                return (
                  <li key={p.title} className="projects__list-item">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`projects__list-btn${isActive ? ' is-active' : ''}`}
                      onMouseEnter={() => setActiveIndex(i)}
                      onFocus={() => setActiveIndex(i)}
                      onClick={() => setActiveIndex(i)}
                    >
                      <span className="projects__list-title">{main}</span>
                      <span className="projects__list-year">{p.year}</span>
                    </button>
                  </li>
                )
              })}
            </ul>

            {canCollapse && (
              <button
                type="button"
                className="projects__toggle"
                aria-expanded={expanded}
                onClick={() => setExpanded((v) => !v)}
              >
                <span>
                  {expanded ? '접기' : `더보기 +${hiddenCount}`}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className={`projects__toggle-icon${expanded ? ' is-up' : ''}`}
                >
                  <path
                    d="M3 6l5 5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="projects__detail" role="tabpanel">
            <ProjectDetail project={activeProject} />
          </div>
        </div>

        <ul className="projects__accordion">
          {filteredProjects.map((p, i) => {
            const { main } = splitTitle(p.title)
            const isOpen = openMobileIndex === i
            return (
              <li
                key={p.title}
                className={`projects__acc-item${isOpen ? ' is-open' : ''}`}
              >
                <button
                  type="button"
                  className="projects__acc-trigger"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenMobileIndex(isOpen ? null : i)
                  }
                >
                  <span className="projects__acc-title">{main}</span>
                  <span className="projects__acc-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path
                        d="M3 6l5 5 5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className="projects__acc-panel">
                  <div className="projects__acc-panel-inner">
                    <ProjectDetail project={p} />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Projects
