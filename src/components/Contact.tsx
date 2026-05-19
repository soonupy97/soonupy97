import { profile } from '../data/portfolio'
import soonupyLogo from '../assets/icons/soonupy.svg'
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
              기획 단계의 가벼운 자문부터 풀 마크업·프론트엔드 작업까지
              환영합니다. 작업 문의는 Email, 그 외 작업 기록과 일상은 아래
              채널에서 편하게 만나주세요.
            </p>
            <img className="emoji" src={soonupyLogo} alt="" aria-hidden="true" />
          </div>

          <a
            className="ctile ctile--git"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="ctile__label">GitHub</span>
            <strong>@soonupy</strong>
            <span className="ctile__cta">
              방문하기
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M6 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <a
            className="ctile ctile--notion"
            href={profile.notion}
            target="_blank"
            rel="noreferrer"
          >
            <span className="ctile__label">Notion</span>
            <strong>soonupy</strong>
            <span className="ctile__cta">
              둘러보기
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M6 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <a
            className="ctile ctile--instagram"
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <span className="ctile__label">Instagram</span>
            <strong>@soonupy</strong>
            <span className="ctile__cta">
              팔로우하기
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M6 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <a className="ctile ctile--email" href={`mailto:${profile.email}`}>
            <span className="ctile__label">Email</span>
            <strong>{profile.email}</strong>
            <span className="ctile__cta">
              메일 보내기
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M6 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
