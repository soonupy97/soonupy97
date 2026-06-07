import type { ReactNode } from "react";

type SectionTitleProps = {
  /** 상단 라벨 (예: 'About') */
  eyebrow: string;
  /** 제목 — 텍스트 또는 마크업 */
  title: ReactNode;
  /** 설명 문단. 없으면 <p>를 렌더하지 않는다. */
  desc?: ReactNode;
};

/**
 * 섹션 헤더 — eyebrow + 제목 + 설명.
 * 루트가 .section-title 이라 Section의 .container 직계 자식으로 두면 된다.
 */
export default function SectionTitle({
  eyebrow,
  title,
  desc,
}: SectionTitleProps) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <div className="section-title__body">
        <h2>{title}</h2>
        {desc != null && <p>{desc}</p>}
      </div>
    </div>
  );
}
