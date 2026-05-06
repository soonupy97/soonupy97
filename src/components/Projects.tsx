import { useMemo, useState } from 'react'
import { projects, type Project } from '../data/portfolio'
import { usePointerSpot } from '../hooks/usePointerSpot'
import './Projects.scss'

const SHAPES = ['shape-a', 'shape-b', 'shape-c', 'shape-d', 'shape-e', 'shape-f']
const ACCENTS = ['blue', 'pink', 'mint', 'yellow', 'purple', 'coral']

type Size = 'lg' | 'md' | 'sm'
const SIZE_PATTERN: Size[] = ['lg', 'md', 'md', 'sm', 'sm', 'md']

function ProjectTile({
  project,
  index,
  size,
}: {
  project: Project
  index: number
  size: Size
}) {
  const spot = usePointerSpot<HTMLAnchorElement>()
  const accent = ACCENTS[index % ACCENTS.length]
  const shape = SHAPES[index % SHAPES.length]

  return (
    <a
      ref={spot.ref}
      {...spot.handlers}
      style={spot.style}
      href={project.link ?? '#'}
      className={`pcard pcard--${size} pcard--${accent}`}
    >
      <div className="pcard__cover" aria-hidden="true">
        <div className={`shape ${shape}`} />
        <div className={`shape ${shape} shape--echo`} />
        <div className="spot" />
      </div>

      <div className="pcard__body">
        <div className="pcard__meta">
          <span>{project.year}</span>
          <span aria-hidden="true">·</span>
          <span>{project.role}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags">
          {project.tags.slice(0, 4).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      <span className="pcard__arrow" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 18 18">
          <path
            d="M4 9h10M9 4l5 5-5 5"
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

function Projects() {
  const allTags = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)))
    return ['All', ...Array.from(set)]
  }, [])

  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Projects</span>
          <h2>최근 작업.</h2>
          <p>마크업 품질, 접근성, 협업 효율을 끌어올린 작업들입니다.</p>
        </div>

        <div className="projects__filters" role="tablist" aria-label="필터">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={filter === tag}
              className={`chip${filter === tag ? ' is-active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="bento bento--projects">
          {filtered.map((p, i) => (
            <ProjectTile
              key={p.title}
              project={p}
              index={projects.indexOf(p)}
              size={SIZE_PATTERN[i % SIZE_PATTERN.length]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
