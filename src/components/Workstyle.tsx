import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import "./Workstyle.scss";

// 자기소개서 '협업 방식과 업무 스타일' + 경력기술서 수치 기반.
// 좌측 히어로 타일(AI Orchestration + 워크플로 데모 GIF)과
// 우측 원칙 카드 3장이 비대칭 벤토를 이룬다.
const HERO = {
  label: "AI Orchestration",
  title: "AI로 팀을 꾸리고, 책임은 사람이 집니다",
  desc: "Claude Code에 Jira·GitLab·Slack·npm을 연동해 이슈 생성부터 배포 검증, 팀 공유까지 잇는 릴리즈 파이프라인을 직접 설계해 운영합니다. 독립적인 작업은 서브 에이전트에 나눠 맡기고, 배포처럼 되돌리기 어려운 단계 앞에는 반드시 검증 게이트를 둡니다. AI가 아무리 많은 일을 대신해도 최종 품질의 책임은 사람인 제가 집니다.",
  media: {
    // 무한 루프 인코딩(NETSCAPE loop=0) — 항상 재생이 의도된 동작이라
    // prefers-reduced-motion에도 정지 프레임으로 바꾸지 않는다
    gif: "/media/claude-workflow.gif",
    alt: "Claude Code 4개 세션이 퍼블리싱 업무를 병렬로 처리하는 터미널 데모",
    caption:
      "Claude Code 세션 4개가 퍼블리싱 업무를 병렬로 처리하는 워크플로 데모",
  },
} as const;

const PRINCIPLES = [
  {
    label: "Design ↔ Dev",
    title: "디자인과 개발 사이, 통역이 필요 없습니다",
    desc: "디자이너로 일한 경험 덕분에 Figma 시안을 열면 수치보다 의도가 먼저 읽힙니다. 이 간격이 왜 8px인지, 이 색이 왜 회색이 아니라 반투명 검정인지 이해하고 구현하기 때문에, 디자이너·개발자 양쪽과의 커뮤니케이션 비용을 줄입니다.",
  },
  {
    label: "Response",
    title: "요청은 당일, 늦어도 다음 날 릴리즈로",
    desc: "팀원들이 만드는 서비스의 컴포넌트 요청과 이슈를 디자인 시스템 릴리즈로 빠르게 되돌려줍니다. 어드민 라이브러리는 두 달간 이슈 54건을 처리하며 22회 릴리즈했고, 변경 사항은 CHANGELOG와 문서 사이트에 실시간으로 기록해 팀이 늘 최신 상태를 보게 합니다.",
  },
  {
    label: "Priority",
    title: "전체를 먼저, 디테일은 우선순위대로",
    desc: "1px 어긋남을 그냥 넘기지 못하는 꼼꼼함이 있지만, 디테일에 매몰되지 않도록 전체를 먼저 완성한 뒤 우선순위대로 다듬습니다. 코드는 다른 사람이 설명 없이 읽을 수 있게 쓰고, 마감 기한은 어긴 적이 없습니다.",
  },
] as const;

function Workstyle() {
  return (
    <Section id="workstyle" className="workstyle">
      <SectionTitle
        eyebrow="Work Style"
        title="일하는 방식."
        desc="협업에서 지키는 원칙과 그 근거가 되는 기록입니다."
      />

      <div className="workstyle__bento">
        <article className="workstyle__hero">
          <span className="workstyle__label">{HERO.label}</span>
          <h3 className="workstyle__hero-title">{HERO.title}</h3>
          <p className="workstyle__desc">{HERO.desc}</p>
          <figure className="workstyle__hero-media">
            <img src={HERO.media.gif} alt={HERO.media.alt} loading="lazy" />
            <figcaption>{HERO.media.caption}</figcaption>
          </figure>
        </article>

        <ul className="workstyle__side">
          {PRINCIPLES.map((p, i) => (
            <li key={p.label} className="workstyle__card">
              <span className="workstyle__label">
                {String(i + 1).padStart(2, "0")} · {p.label}
              </span>
              <h3 className="workstyle__card-title">{p.title}</h3>
              <p className="workstyle__desc">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Workstyle;
