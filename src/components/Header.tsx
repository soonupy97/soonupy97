import { useEffect, useState } from 'react'
import soonupyLogo from '../assets/icons/soonupy.svg'
import './Header.scss'

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a className="site-header__logo" href="#top" aria-label="홈">
          <span className="logo-mark" aria-hidden="true">
            <img src={soonupyLogo} alt="" />
          </span>
          <span className="logo-text">soonupy</span>
        </a>

        <nav
          className={`site-header__nav${open ? ' is-open' : ''}`}
          aria-label="주요 메뉴"
        >
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn--primary site-header__cta">
          Hire me
        </a>

        <button
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
