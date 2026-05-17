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
    company: '위즈코어 (Wizcore)',
    role: '클라우드플랫폼팀 · 주임연구원',
    period: '2024.04 — 현재',
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
  {
    company: '삼안 (SAMAN)',
    role: '경영지원본부 디자인팀 · 사원',
    period: '2022.10 — 2023.10',
    summary: '경영지원본부 디자인팀에서 사내 디자인 업무 수행.',
    highlights: ['사내 디자인 가이드·인쇄물 보조 작업'],
    stack: ['Photoshop', 'Illustrator'],
  },
  {
    company: '구랩 (GOOLAB)',
    role: '웹디자인팀 · 주임',
    period: '2021.03 — 2022.09',
    summary: '웹디자인팀에서 클라이언트 웹사이트 디자인과 퍼블리싱을 담당.',
    highlights: [
      '반응형 웹사이트 디자인·퍼블리싱',
      '디자인 시안과 마크업 일관성 관리',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Photoshop'],
  },
  {
    company: '하나컴퓨터학원',
    role: 'GTQ 자격증 강사',
    period: '2019.12 — 2021.02',
    summary: 'GTQ 그래픽 자격증 과정 강사로 수강생 실기·이론 지도.',
    highlights: ['포토샵·일러스트레이터 실기 강의'],
    stack: ['Photoshop', 'Illustrator'],
  },
]
