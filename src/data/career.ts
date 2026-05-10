export type CareerEntry = {
  company: string
  role: string
  period: string
  current?: boolean
  summary: string
  highlights: string[]
  stack: string[]
}

export const careers: CareerEntry[] = [
  {
    company: 'Cadian (캐디안)',
    role: '웹 퍼블리셔',
    period: '2024 — 현재',
    current: true,
    summary:
      '약 2년간 8개 서비스의 UI 구현·유지보수와 사내 디자인 시스템(cadian-ui)을 단독 설계·구현. 개발 환경 표준화도 주도.',
    highlights: [
      '사내 디자인 시스템 cadian-ui 단독 설계·구현 — Foundations·Atoms·Blocks·Overlays·Pages 전 영역과 EDM 페이지까지',
      '조직 관리 콘솔(organization)·개발자 문서 사이트(developers)·마이페이지 등 8개 서비스 UI 담당',
      '개발 환경 표준화 — ESLint·Prettier·Husky 자동화, WASM 연동 환경 도입',
      'Figma 토큰 1:1 매핑 기반 디자이너 협업과 QA 테스트 케이스 100건 이상 수정·반영',
    ],
    stack: ['React', 'TypeScript', 'SCSS', 'BEM', 'Figma', 'Storybook'],
  },
]
