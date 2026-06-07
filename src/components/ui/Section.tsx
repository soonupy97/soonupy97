import type { ReactNode } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

type SectionProps = {
  /** 앵커 네비게이션용 id (예: 'about') */
  id: string;
  /** 섹션 베이스 클래스 (예: 'about'). 'scroll-reveal'은 자동으로 덧붙는다. */
  className: string;
  children: ReactNode;
};

/**
 * 섹션 공통 껍데기 — 스크롤 등장(scroll-reveal) ref + .container 래핑.
 *
 * 주의: children은 .container의 '직계 자식'으로 렌더된다. 등장 stagger가
 * `.scroll-reveal .container > *` 를 노리므로, 호출부에서 children 사이에
 * 추가 wrapper <div>를 끼우면 stagger 타이밍이 깨진다.
 */
export default function Section({ id, className, children }: SectionProps) {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} id={id} className={`${className} scroll-reveal`}>
      <div className="container">{children}</div>
    </section>
  );
}
