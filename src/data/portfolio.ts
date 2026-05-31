export type ProjectAccent =
  | 'blue'
  | 'pink'
  | 'mint'
  | 'yellow'
  | 'purple'
  | 'coral'

export type ProjectCategory = 'Design' | 'Publishing' | 'Frontend'

// 제품 유형(메인 필터) / 접근 권한 / 상태(카드 배지)
export type ProjectType = 'console' | 'devtool' | 'marketing' | 'viewer'
export type ProjectAccess = 'public' | 'auth' | 'private'
export type ProjectStatus = 'live' | 'wip' | 'maintenance'

export const PROJECT_TYPE_ORDER: ProjectType[] = [
  'console',
  'devtool',
  'marketing',
  'viewer',
]

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  console: 'SaaS 콘솔',
  devtool: '개발자·시스템',
  marketing: '마케팅·홈페이지',
  viewer: '뷰어·도구',
}

export const PROJECT_ACCESS_LABELS: Record<ProjectAccess, string> = {
  public: '공개',
  auth: '로그인 필요', // 사내 전용이 아니라 회원가입 후 누구나 이용 가능
  private: '비공개',
}

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  live: '운영 중',
  wip: '진행 중',
  maintenance: '유지보수',
}

export type Project = {
  title: string
  description: string
  categories: ProjectCategory[]
  type: ProjectType
  access: ProjectAccess
  status: ProjectStatus
  year: string
  link?: string
  caseStudy?: string // 케이스 스터디(Notion 등) URL — 로그인 게이트 프로젝트의 메인 CTA
  accent?: ProjectAccent
  highlights?: string[]
  stack?: string[]
}

export const profile = {
  name: 'soonupy',
  role: 'Web Publisher / Frontend',
  tagline: '시맨틱 마크업과 반응형 UI로 브랜드를 짓습니다.',
  intro:
    '시맨틱·SCSS·접근성을 기본기로, 디자인과 개발 사이의 빈틈을 메웁니다.',
  email: 'soonupy97@naver.com',
  github: 'https://github.com/',
  notion: 'https://www.notion.so/226d8b3c5b6e803780e9f5e769a06f8d',
  instagram: 'https://www.instagram.com/soonupy',
  location: 'Seoul, Korea',
}

export const projects: Project[] = [
  {
    title: 'cadian-ui — 디자인 시스템',
    description:
      'Cadian 공통 UI 라이브러리를 Figma 기반으로 단독 설계·구현. Foundations·Atoms·Blocks·Overlays·Pages 전 영역을 BEM 기반 SCSS와 디자인 토큰 시스템으로 구축.',
    categories: ['Design', 'Publishing'],
    type: 'devtool',
    access: 'public',
    status: 'wip',

    year: '2026 ~',
    link: 'https://design.cadian.com',
    accent: 'purple',
    highlights: [
      'Foundations · Atoms · Blocks · Overlays · Pages 전 영역을 단독 설계·구현',
      'BEM 기반 SCSS 아키텍처 + Figma 1:1 매핑 디자인 토큰 시스템 구축',
      '이메일 클라이언트 호환 EDM 페이지 컴포넌트 별도 제작',
      'Storybook 등록 및 Component Playground 구축',
    ],
    stack: ['React', 'TypeScript', 'SCSS', 'BEM', 'Storybook', 'Figma'],
  },
  {
    title: 'organization — 조직 관리 콘솔',
    description:
      'Cadian 조직 관리 콘솔의 프론트엔드를 처음부터 구축. 그룹·멤버 관리, SSO 인증, 시리얼·활동 로그, i18n까지 전 기능을 단일 SPA로 구현.',
    categories: ['Design', 'Publishing', 'Frontend'],
    type: 'console',
    access: 'auth',
    status: 'live',

    year: '2024 — 2026',
    link: 'https://organization.cadian.com',
    accent: 'mint',
    highlights: [
      '조직 관리 전 기능을 단일 SPA로 구축 (OCC-7 ~ OCC-446 참여)',
      '그룹·멤버 관리, SSO 인증, 시리얼 관리, 활동 로그, i18n 핵심 기능 구현',
      'rolecode 기반 Owner / Admin / Member 권한 UX 차별화',
      'QA 테스트 케이스 100건 이상 수정·반영',
    ],
    stack: ['React', 'TypeScript', 'SCSS', 'i18n'],
  },
  {
    title: 'developers — SDK 개발자 문서',
    description:
      'Web CAD SDK인 ViewQ의 공식 개발자 문서 사이트 구축. WASM 연동 환경 위에 API 예제 25종을 인터랙티브하게 퍼블리싱하고, ESLint·Prettier·Husky 사내 표준을 자동화.',
    categories: ['Design', 'Publishing', 'Frontend'],
    type: 'devtool',
    access: 'public',
    status: 'live',

    year: '2025 — 2026',
    link: 'https://developers.cadian.com',
    accent: 'pink',
    highlights: [
      'WASM 기반 ViewQ SDK 개발 환경 초기 구성 (BAS-01: DwgOpen)',
      'API 인터랙티브 예제 25종 전량 퍼블리싱 (BAS-01 ~ BAS-25)',
      'Anchor Navigation 컴포넌트 — 스크롤 위치 실시간 하이라이팅',
      'ESLint · Prettier · Husky 사내 표준 + Git Hooks 자동화 도입',
    ],
    stack: ['React', 'TypeScript', 'SCSS'],
  },
  {
    title: 'converter — 파일 컨버터',
    description:
      'Cadian 파일 컨버터 서비스의 UI 퍼블리싱과 기능 개선. 업로드 UX·글로벌 네비게이션·다국어 텍스트와 아이콘 정비로 한/영 서비스 일관성 확보.',
    categories: ['Publishing'],
    type: 'viewer',
    access: 'public',
    status: 'live',

    year: '2025 ~',
    link: 'https://converter.cadian.com',
    accent: 'coral',
    highlights: [
      '파일 업로드 영역 UI 개선 + 비로그인 알럿 UI 추가',
      '글로벌 네비게이션 도입으로 서비스 페이지 일관성 확보',
      'Pricing · 404 · 헤더 언어 설정 다국어(한/영) 대응',
      '컨버터 확장자 리스트 디자인 시안 제작 및 퍼블리싱',
    ],
    stack: ['HTML', 'SCSS', 'JavaScript', '다국어'],
  },
  {
    title: 'mypage — 조직 관리',
    description:
      '마이페이지 조직 생성·초대·권한 관리 UI 구현 및 API 연동. 3단계 위자드, 도메인 debounce 검증, rolecode 권한 표기, SSO authorize 연동까지 담당.',
    categories: ['Publishing', 'Frontend'],
    type: 'console',
    access: 'auth',
    status: 'live',

    year: '2025 ~',
    link: 'https://mypage.cadian.com',
    accent: 'blue',
    highlights: [
      '조직 생성 3단계 위자드 플로우 + 사이드메뉴 구현',
      '도메인 중복 체크 debounce 검증 로직 + API 연동',
      'rolecode 기반 권한 표기 + 조직 초대 수락·에러 처리 UI',
      'SSO authorize 연동 + token 미전달 버그 수정',
    ],
    stack: ['React', 'TypeScript', 'SCSS'],
  },
  {
    title: 'file drive — 문서 뷰어 연동',
    description:
      'Cadian 드라이브 서비스에 Polaris Office 기반 문서 뷰어를 연동. 드라이브 내 뷰어 환경 초기 구축 완료, 현재 Polaris 뷰어 통합 작업 진행 중.',
    categories: ['Frontend', 'Publishing'],
    type: 'viewer',
    access: 'auth',
    status: 'wip',

    year: '2026 ~',
    link: 'https://file.cadian.com',
    accent: 'yellow',
    highlights: [
      '드라이브 시스템 내 문서 뷰어 연동 프로젝트 초기 구축 (완료)',
      'Polaris Office 뷰어 통합 작업 진행 중',
    ],
    stack: ['React', 'TypeScript', 'SCSS'],
  },
  {
    title: 'cadian — 공식 홈페이지',
    description:
      '캐디안 공식 홈페이지의 콘텐츠 업데이트와 UI 유지보수. GNB·CEO 인사말·제품 비교표 등 다국어 콘텐츠 정비와 모바일 햄버거 메뉴 버그 대응.',
    categories: ['Publishing'],
    type: 'marketing',
    access: 'public',
    status: 'maintenance',

    year: '2024 ~',
    link: 'https://www.cadian.com',
    accent: 'pink',
    highlights: [
      'GNB 구성 변경, CEO 인사말 · 제품 비교표 콘텐츠 수정',
      '다국어(한/영) 페이지 수정 및 상호명 변경 전사 반영',
      '모바일 햄버거 메뉴 깨짐 버그 수정',
    ],
    stack: ['HTML', 'CSS', '다국어'],
  },
  {
    title: 'web cad — 웹 CAD 뷰어',
    description:
      'Cadian 웹 CAD 뷰어의 UI 개선과 다국어 번역 정비. 리본 메뉴(스케치) 항목 추가·아이콘 디자인, MTEXT 영역 디자인 수정, 한/영 번역 오류 수정 담당.',
    categories: ['Publishing', 'Design'],
    type: 'viewer',
    access: 'public',
    status: 'live',

    year: '2025 ~',
    link: 'https://drawing.cadian.com',
    accent: 'mint',
    highlights: [
      '리본 메뉴 프리 드로우(스케치) 항목 추가 및 아이콘 디자인',
      'MTEXT(다중행 문자) text area 디자인 수정',
      '웹 브라우저 한/영 번역 오류 수정',
    ],
    stack: ['HTML', 'CSS', 'SVG', '다국어'],
  },
  {
    title: 'News Letter Edm — 이메일 마크업',
    description:
      '이메일/뉴스레터·이벤트 프로모션용 EDM 페이지를 단독 제작. Figma 레이아웃을 이메일 클라이언트 호환 마크업으로 구현하고, cadian-ui 디자인 토큰과 일관성 유지.',
    categories: ['Design', 'Publishing'],
    type: 'marketing',
    access: 'private',
    status: 'wip',

    year: '2024 ~',
    accent: 'coral',
    highlights: [
      '이메일/뉴스레터 · 이벤트 프로모션용 EDM 페이지 단독 제작',
      'Figma 레이아웃을 이메일 클라이언트 호환 마크업으로 구현',
      'cadian-ui 디자인 토큰과 시각 일관성 유지',
    ],
    stack: ['HTML', 'CSS', 'Figma', 'HTML Email'],
  },
]
