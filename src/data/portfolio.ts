export type ProjectAccent =
  | 'blue'
  | 'pink'
  | 'mint'
  | 'yellow'
  | 'purple'
  | 'coral'

export type Project = {
  title: string
  description: string
  tags: string[]
  role: string
  year: string
  link?: string
  accent?: ProjectAccent
}

export type SkillGroup = {
  title: string
  items: { name: string; level: number }[]
}

export const profile = {
  name: '김퍼블',
  role: 'Web Publisher / Frontend',
  tagline: '시맨틱 마크업과 반응형 UI로 브랜드를 짓습니다.',
  intro:
    '6년차 웹 퍼블리셔로 시맨틱 HTML, 모듈화된 SCSS, 그리고 웹 접근성을 기반으로 견고한 프론트엔드를 구축합니다. 디자이너와 개발자 사이의 흐름을 매끄럽게 잇는 일을 좋아합니다.',
  email: 'hello@soonupy.dev',
  github: 'https://github.com/',
  location: 'Seoul, Korea',
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Markup & Style',
    items: [
      { name: 'HTML5 / Semantic', level: 95 },
      { name: 'CSS3 / SCSS', level: 95 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Web Accessibility (WAI-ARIA)', level: 85 },
    ],
  },
  {
    title: 'Script & Framework',
    items: [
      { name: 'JavaScript (ES2022+)', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'React', level: 78 },
      { name: 'Vue', level: 70 },
    ],
  },
  {
    title: 'Tooling & Workflow',
    items: [
      { name: 'Vite / Webpack', level: 80 },
      { name: 'Git / GitHub', level: 88 },
      { name: 'Figma / Zeplin', level: 90 },
      { name: 'Gulp / SCSS Architecture', level: 85 },
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'cadian-ui — 디자인 시스템',
    description:
      'Cadian 공통 UI 라이브러리를 Figma 기반으로 단독 설계·구현. Foundations·Atoms·Blocks·Overlays·Pages 전 영역을 BEM 기반 SCSS와 디자인 토큰 시스템으로 구축.',
    tags: ['React', 'TypeScript', 'SCSS', 'HTML Email'],
    role: '웹 퍼블리셔 (단독)',
    year: '2026.04 ~',
    link: 'https://design.cadian.com',
    accent: 'purple',
  },
  {
    title: 'organization.cadian.com — 조직 관리 콘솔',
    description:
      'Cadian 조직 관리 콘솔의 프론트엔드를 처음부터 구축. 그룹·멤버 관리, SSO 인증, 시리얼·활동 로그, i18n까지 전 기능을 단일 SPA로 구현.',
    tags: ['React', 'TypeScript', 'SSO', 'i18n'],
    role: '웹 퍼블리셔 / 프론트엔드',
    year: '2024 — 2026',
    link: 'https://organization.cadian.com',
    accent: 'mint',
  },
  {
    title: 'developers.cadian.com',
    description:
      'Web CAD SDK인 ViewQ의 공식 개발자 문서 사이트 구축. WASM 연동 환경 위에 API 예제 25종을 인터랙티브하게 퍼블리싱하고, ESLint·Prettier·Husky 사내 표준을 자동화.',
    tags: ['React', 'TypeScript', 'WASM', 'Vite'],
    role: '웹 퍼블리셔 / 프론트엔드',
    year: '2025 — 2026',
    link: 'https://developers.cadian.com',
    accent: 'pink',
  },
  {
    title: 'converter.cadian.com',
    description:
      'Cadian 파일 컨버터 서비스의 UI 퍼블리싱과 기능 개선. 업로드 UX·글로벌 네비게이션·다국어 텍스트와 아이콘 정비로 한/영 서비스 일관성 확보.',
    tags: ['HTML', 'SCSS', 'JavaScript', '다국어'],
    role: '웹 퍼블리셔',
    year: '운영 참여',
    link: 'https://converter.cadian.com',
    accent: 'coral',
  },
  {
    title: 'mypage.cadian.com — 조직 관리',
    description:
      '마이페이지 조직 생성·초대·권한 관리 UI 구현 및 API 연동. 3단계 위자드, 도메인 debounce 검증, rolecode 권한 표기, SSO authorize 연동까지 담당.',
    tags: ['React', 'TypeScript', 'SSO', 'REST API'],
    role: '프론트엔드 퍼블리셔',
    year: '2026 ~',
    link: 'https://mypage.cadian.com',
    accent: 'blue',
  },
  {
    title: 'file.cadian.com — 문서 뷰어 연동',
    description:
      'Cadian 드라이브 서비스에 Polaris Office 기반 문서 뷰어를 연동. 드라이브 내 뷰어 환경 초기 구축 완료, 현재 Polaris 뷰어 통합 작업 진행 중.',
    tags: ['React', 'TypeScript', 'Polaris Office'],
    role: '프론트엔드 퍼블리셔',
    year: '2026 ~',
    link: 'https://file.cadian.com',
    accent: 'yellow',
  },
  {
    title: 'www.cadian.com — 공식 홈페이지',
    description:
      '캐디안 공식 홈페이지의 콘텐츠 업데이트와 UI 유지보수. GNB·CEO 인사말·제품 비교표 등 다국어 콘텐츠 정비와 모바일 햄버거 메뉴 버그 대응.',
    tags: ['HTML', 'CSS', '다국어', '퍼블리싱'],
    role: '웹 퍼블리셔',
    year: '운영 참여',
    link: 'https://www.cadian.com',
    accent: 'pink',
  },
  {
    title: 'web.cadian.com — 웹 CAD 뷰어',
    description:
      'Cadian 웹 CAD 뷰어의 UI 개선과 다국어 번역 정비. 리본 메뉴(스케치) 항목 추가·아이콘 디자인, MTEXT 영역 디자인 수정, 한/영 번역 오류 수정 담당.',
    tags: ['HTML', 'CSS', 'SVG', '다국어'],
    role: '웹 퍼블리셔',
    year: '운영 참여',
    link: 'https://web.cadian.com',
    accent: 'mint',
  },
  {
    title: '뉴스레터 EDM 페이지',
    description:
      '이메일/뉴스레터·이벤트 프로모션용 EDM 페이지를 단독 제작. Figma 레이아웃을 이메일 클라이언트 호환 마크업으로 구현하고, cadian-ui 디자인 토큰과 일관성 유지.',
    tags: ['HTML', 'CSS', 'Figma', 'HTML Email'],
    role: '웹 퍼블리셔 (단독)',
    year: '2026 ~',
    accent: 'coral',
  },
]
