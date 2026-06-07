import type { ElementType, ReactNode } from "react";
import "./InfoTile.scss";

type InfoTileProps = {
  /** 렌더 엘리먼트 — 정적 카드는 'li'/'div', 링크는 'a' */
  as?: ElementType;
  /** info-tile--{variant} 식별자 (레이아웃/색 훅) */
  variant?: string;
  /** 상단 블루 모노 라벨 */
  label?: ReactNode;
  /** 우상단 코너 아이콘 (글리프 또는 SVG) */
  icon?: ReactNode;
  /** 제목(강조) */
  title: ReactNode;
  /** 제목 엘리먼트 — 시맨틱 heading이 필요하면 'h3' 등 지정 (기본 strong) */
  titleAs?: ElementType;
  /** 보조 텍스트 (설명 / 행동 문구) */
  sub?: ReactNode;
  /** 링크처럼 호버 피드백을 줄지 — 정적 카드는 false */
  interactive?: boolean;
  href?: string;
  /** 외부 링크면 새 탭 (mailto 등은 false) */
  external?: boolean;
  className?: string;
};

/**
 * About 가치 카드와 Contact 링크 카드가 공유하는 단일 카드 컴포넌트.
 * 높이·타이포·라벨·코너 아이콘 구조의 단일 소스.
 */
export default function InfoTile({
  as: Tag = "div",
  variant,
  label,
  icon,
  title,
  titleAs: Title = "strong",
  sub,
  interactive = false,
  href,
  external = false,
  className = "",
}: InfoTileProps) {
  const classes = [
    "info-tile",
    interactive && "info-tile--interactive",
    variant && `info-tile--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const linkProps =
    Tag === "a"
      ? { href, ...(external ? { target: "_blank", rel: "noreferrer" } : {}) }
      : {};

  return (
    <Tag className={classes} {...linkProps}>
      {label && <span className="info-tile__label">{label}</span>}
      {icon && (
        <span className="info-tile__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <div className="info-tile__body">
        <Title className="info-tile__title">{title}</Title>
        {sub && <span className="info-tile__sub">{sub}</span>}
      </div>
    </Tag>
  );
}
