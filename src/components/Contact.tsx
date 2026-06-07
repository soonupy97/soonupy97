import { profile } from "../data/portfolio";
import soonupyLogo from "../assets/icons/soonupy.svg";
import Section from "./ui/Section";
import ContactTile from "./ContactTile";
import { IconGitHub, IconNotion, IconInstagram, IconEmail } from "./ui/icons";
import "./Contact.scss";

const tiles = [
  {
    variant: "git",
    href: profile.github,
    icon: <IconGitHub />,
    label: "GitHub",
    handle: "@soonupy",
    action: "방문하기",
    external: true,
  },
  {
    variant: "notion",
    href: profile.notion,
    icon: <IconNotion />,
    label: "Notion",
    handle: "soonupy",
    action: "둘러보기",
    external: true,
  },
  {
    variant: "instagram",
    href: profile.instagram,
    icon: <IconInstagram />,
    label: "Instagram",
    handle: "@soonupy",
    action: "팔로우하기",
    external: true,
  },
  {
    variant: "email",
    href: `mailto:${profile.email}`,
    icon: <IconEmail />,
    label: "Email",
    handle: profile.email,
    action: "메일 보내기",
    external: false,
  },
];

function Contact() {
  return (
    <Section id="contact" className="contact">
      <div className="bento bento--contact">
        <div className="contact-cta">
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

        {tiles.map((t) => (
          <ContactTile key={t.variant} {...t} />
        ))}
      </div>
    </Section>
  );
}

export default Contact;
