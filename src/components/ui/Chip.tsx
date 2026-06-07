import type { ButtonHTMLAttributes } from "react";

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** 활성 상태 → .is-active */
  active?: boolean;
};

/**
 * 탭/필터용 chip 버튼.
 * active로 활성 클래스만 토글하고, role·aria-*·onClick 등 나머지 button 속성은
 * 그대로 전달한다(탭 외 용도로도 쓸 수 있게 aria-selected는 호출부에서 지정).
 */
export default function Chip({
  active = false,
  className,
  children,
  ...rest
}: ChipProps) {
  const cls = `chip${active ? " is-active" : ""}${className ? ` ${className}` : ""}`;
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
