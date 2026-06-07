import type { ReactNode } from "react";
import InfoTile from "./ui/InfoTile";
import { IconChevronRight } from "./ui/icons";

type ContactTileProps = {
  /** info-tile--{variant} 식별자 (예: 'git', 'notion') */
  variant: string;
  href: string;
  icon: ReactNode;
  label: string;
  /** 핸들/주소 표시 (예: '@soonupy') */
  handle: string;
  /** 행동 문구 (예: '방문하기') */
  action: string;
  /** 외부 링크면 새 탭으로 (mailto 등은 false) */
  external?: boolean;
};

/** Contact 섹션의 링크 타일 — 공통 InfoTile을 링크(interactive)로 사용. */
export default function ContactTile({
  variant,
  href,
  icon,
  label,
  handle,
  action,
  external = false,
}: ContactTileProps) {
  return (
    <InfoTile
      as="a"
      variant={variant}
      href={href}
      external={external}
      interactive
      icon={icon}
      label={label}
      title={handle}
      sub={
        <>
          {action}
          <IconChevronRight />
        </>
      }
    />
  );
}
