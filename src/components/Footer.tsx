import { profile } from '../data/portfolio'
import './Footer.scss'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="brand">
          <span className="mark" aria-hidden="true">
            P
          </span>
          <span className="name">publisher.</span>
        </div>
        <p className="copy">
          © {new Date().getFullYear()} {profile.name}. Crafted with HTML, SCSS,
          and care.
        </p>
        <a href="#top" className="top">
          맨 위로 ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer
