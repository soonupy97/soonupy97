import { profile } from "../data/portfolio";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import InfoTile from "./ui/InfoTile";
import "./About.scss";

const VALUES = [
  {
    label: "Markup",
    title: "시맨틱 우선",
    desc: "의미를 가진 마크업으로 구조와 접근성을 동시에.",
  },
  {
    label: "Architecture",
    title: "재사용 SCSS",
    desc: "BEM · ITCSS · 토큰으로 일관된 스타일 아키텍처.",
  },
  {
    label: "Collaboration",
    title: "협업 친화",
    desc: "디자이너와 개발자 사이를 매끄럽게 잇는 가교 역할.",
  },
  {
    label: "Quality",
    title: "성능과 접근성",
    desc: "Lighthouse 95+, WCAG 2.1 AA 를 기본값으로.",
  },
] as const;

function ValueTile({ value }: { value: (typeof VALUES)[number] }) {
  return (
    <InfoTile
      as="li"
      label={value.label}
      title={value.title}
      titleAs="h3"
      sub={value.desc}
    />
  );
}

function About() {
  return (
    <Section id="about" className="about">
      <SectionTitle
        eyebrow="About"
        title="깨끗한 마크업으로 UI를 짓습니다."
        desc={profile.intro}
      />

      <ul className="bento bento--values">
        {VALUES.map((v) => (
          <ValueTile key={v.title} value={v} />
        ))}
      </ul>
    </Section>
  );
}

export default About;
