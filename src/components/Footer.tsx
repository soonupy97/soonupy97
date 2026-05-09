import { profile } from '../data/portfolio'
import soonupyLogo from '../assets/icons/soonupy.svg'
import './Footer.scss'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="brand">
          <span className="mark" aria-hidden="true">
            <img src={soonupyLogo} alt="" />
          </span>
          <span className="name">soonupy.</span>
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
