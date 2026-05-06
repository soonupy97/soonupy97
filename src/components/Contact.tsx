import { profile } from '../data/portfolio'
import './Contact.scss'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="bento bento--contact">
          <div className="ctile ctile--cta">
            <span className="eyebrow">Contact</span>
            <h2>
              새 프로젝트가 있나요?
              <br />
              <span className="hl">함께 만들어요.</span>
            </h2>
            <p>
              기획 단계의 가벼운 자문부터 풀 마크업/프론트엔드 작업까지
              환영합니다. 아래 채널 중 편한 곳으로 연결해 주세요.
            </p>
            <div className="emoji" aria-hidden="true">
              ✦
            </div>
          </div>

          <a
            className="ctile ctile--git"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="ctile__label">GitHub</span>
            <strong>@publisher</strong>
            <span className="ctile__cta">방문하기 →</span>
          </a>

          <a
            className="ctile ctile--blog"
            href="https://velog.io/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="ctile__label">Blog</span>
            <strong>velog.io/@publisher</strong>
            <span className="ctile__cta">읽으러 가기 →</span>
          </a>

          <div className="ctile ctile--info">
            <span className="ctile__label">Where &amp; When</span>
            <strong>{profile.location}</strong>
            <span className="ctile__sub">Mon — Fri, 10:00 — 19:00 KST</span>
            <span className="ctile__chip">
              <span className="dot" aria-hidden="true" />
              새 프로젝트 가능
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
