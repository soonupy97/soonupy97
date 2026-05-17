import { profile } from '../data/portfolio'
import './Footer.scss'

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p className="copy">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
      <a href="#top" className="top" aria-label="scroll to top">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6 14l6-6 6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="top__tooltip">scroll to top</span>
      </a>
    </>
  )
}

export default Footer
