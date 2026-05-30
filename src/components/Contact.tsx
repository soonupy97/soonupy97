import { profile } from '../data/portfolio'
import soonupyLogo from '../assets/icons/soonupy.svg'
import useScrollReveal from '../hooks/useScrollReveal'
import './Contact.scss'

function Contact() {
  const revealRef = useScrollReveal<HTMLElement>()
  return (
    <section ref={revealRef} id="contact" className="contact scroll-reveal">
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
            <span className="ctile__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </span>
            <span className="ctile__label">GitHub</span>
            <div className="ctile__body">
              <strong>@soonupy</strong>
              <span className="ctile__meta">
                방문하기
                <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
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
            </div>
          </a>

          <a
            className="ctile ctile--notion"
            href={profile.notion}
            target="_blank"
            rel="noreferrer"
          >
            <span className="ctile__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.327L17.86 1.7c-.42-.327-.981-.7-2.055-.607L3.01 2.03c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936.962l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06C.42 18.434.233 17.92.233 17.314V2.609C.233 1.769.607 1.068 1.936.962z" />
              </svg>
            </span>
            <span className="ctile__label">Notion</span>
            <div className="ctile__body">
              <strong>soonupy</strong>
              <span className="ctile__meta">
                둘러보기
                <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
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
            </div>
          </a>

          <a
            className="ctile ctile--instagram"
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <span className="ctile__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </span>
            <span className="ctile__label">Instagram</span>
            <div className="ctile__body">
              <strong>@soonupy</strong>
              <span className="ctile__meta">
                팔로우하기
                <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
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
            </div>
          </a>

          <a className="ctile ctile--email" href={`mailto:${profile.email}`}>
            <span className="ctile__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </span>
            <span className="ctile__label">Email</span>
            <div className="ctile__body">
              <strong>{profile.email}</strong>
              <span className="ctile__meta">
                메일 보내기
                <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
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
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
