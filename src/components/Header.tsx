import { useEffect, useRef, useState } from 'react'
import soonupyLogo from '../assets/icons/soonupy.svg'
import './Header.scss'

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#career', label: 'Career' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<string>('')
  const navRef = useRef<HTMLElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null
      if (!target) return
      if (navRef.current?.contains(target)) return
      if (toggleRef.current?.contains(target)) return
      setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  useEffect(() => {
    const update = () => {
      const threshold = window.innerHeight * 0.3
      let current = ''
      for (const item of NAV) {
        const el = document.querySelector<HTMLElement>(item.href)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= threshold && rect.bottom > threshold) {
          current = item.href
          break
        }
      }
      setActiveHref(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <header className={`container  site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <a className="site-header__logo" href="#top" aria-label="홈">
          <span className="logo-mark" aria-hidden="true">
            <img src={soonupyLogo} alt="" />
          </span>
          <span className="logo-text">soonupy</span>
        </a>

        <nav
          ref={navRef}
          className={`site-header__nav${open ? ' is-open' : ''}`}
          aria-label="주요 메뉴"
        >
          <ul>
            {NAV.map((item) => (
              <li
                key={item.href}
                className={activeHref === item.href ? 'is-active' : undefined}
              >
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={`site-header__toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-label="메뉴"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
