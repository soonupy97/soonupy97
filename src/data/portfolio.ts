export type ProjectAccent =
  | 'blue'
  | 'pink'
  | 'mint'
  | 'yellow'
  | 'purple'
  | 'coral'

// 제품 유형(메인 필터) / 접근 권한 / 상태(카드 배지)
export type ProjectType =
  | 'console'
  | 'admin'
  | 'devtool'
  | 'marketing'
  | 'viewer'
export type ProjectAccess = 'public' | 'auth' | 'private'
export type ProjectStatus = 'live' | 'wip' | 'maintenance' | 'ondemand'

export const PROJECT_TYPE_ORDER: ProjectType[] = [
  'console',
  'admin',
  'devtool',
  'marketing',
  'viewer',
]

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  console: 'SaaS 콘솔',
  admin: '어드민·운영자',
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
  wip: '개발 중',
  maintenance: '유지보수',
  ondemand: '수시 제작',
}

/**
 * 데모 영상 — SSO/로그인 게이트라 사이트 방문 CTA가 사실상 막힌 프로젝트용.
 * poster를 주지 않으면 그라데이션 플레이스홀더로 대체된다.
 */
export type ProjectMedia = {
  src: string
  poster?: string
  caption?: string
  /**
   * 화면에 보일 **콘텐츠** 비율(CSS aspect-ratio 값). 파일 자체의 비율이 아니다 —
   * 자세한 건 ProjectMedia의 DEFAULT_RATIO 주석 참고. 생략하면 16 / 10.
   */
  ratio?: string
}

export type Project = {
  title: string
  description: string
  type: ProjectType
  access: ProjectAccess
  status: ProjectStatus
  year: string
  link?: string
  caseStudy?: string // 케이스 스터디(Notion 등) URL — 로그인 게이트 프로젝트의 메인 CTA
  media?: ProjectMedia
  accent?: ProjectAccent
  highlights?: string[]
  stack?: string[]
}

export const profile = {
  name: 'soonupy',
  role: 'Web Publisher / UI Developer',
  tagline: '시맨틱 마크업과 반응형 UI로 브랜드를 짓습니다.',
  intro:
    '시맨틱·SCSS·접근성을 기본기로, 디자인과 개발 사이의 빈틈을 메웁니다. 모든 프로젝트에 Claude 등 AI 도구를 적극 활용해 반복 작업을 자동화하고, 판단과 검증은 직접 합니다.',
  email: 'soonupy97@naver.com',
  github: 'https://github.com/soonupy97',
  notion: 'https://app.notion.com/p/Web-Publisher-Portfolio-9e9d8b3c5b6e827487cb81496e061f9e',
  instagram: 'https://www.instagram.com/soonupy',
  location: 'Seoul, Korea',
}

export const projects: Project[] = [
  {
    title: 'cadian-ui — 디자인 시스템',
    description:
      'Cadian 공통 UI 라이브러리를 Figma 기반으로 단독 설계·구현. Foundations·Atoms·Blocks·Overlays·Pages 전 영역을 BEM 기반 SCSS와 디자인 토큰 시스템으로 구축하고, 실서비스 전면 적용까지 직접 수행.',
    type: 'devtool',
    access: 'public',
    status: 'live',

    year: '2026',
    link: 'https://dev-design.cadian.com',
    media: {
      src: '/media/cadian-ui.mp4',
      ratio: '16 / 9',
      caption: '@cadian/ui 문서 사이트 기능 투어',
    },
    accent: 'purple',
    highlights: [
      'Foundations · Atoms · Blocks · Overlays · Pages 전 영역 단독 설계·구현 — 컴포넌트 50여 종, v2.0 개편 후 30회 이상 릴리즈',
      'BEM 기반 SCSS 아키텍처 + Figma 1:1 매핑 디자인 토큰, CSS Variables 토큰과 data-theme 다크모드 기본 제공',
      '중복 API 통합(IconButton→Button, ContextMenu→DropdownMenu, Select/Combobox)으로 API 표면 축소',
      '실서비스 적용 — 조직 관리 콘솔(Organization)을 초기 버전 0.1.x부터 @cadian/ui 기반으로 구축, CADian Drive 전면 마이그레이션 직접 수행(2.8 → 2.10 연속 업그레이드 대응), Help Center v2 등 타 팀 신규 서비스의 UI 기반으로 채택',
      '자체 문서 사이트에 Component Playground · API 문서 · 패턴 53종 · 템플릿 갤러리 9종 · 사이트 검색 구축',
      '컴포넌트 단위 분할 빌드(트리셰이킹) + GitLab CI 배포 파이프라인 운영',
      'Claude Code + MCP 기반 릴리즈 워크플로우로 단독 운영 — 이슈 생성 → 커밋·머지 → npm 게시 → 배포 검증 → 팀 공유(릴리즈 노트)',
      '이메일 클라이언트 호환 EDM 페이지 컴포넌트 별도 제작',
    ],
    stack: ['React', 'TypeScript', 'SCSS', 'BEM', 'Figma', 'npm', 'Claude Code'],
  },
  {
    title: 'cadian-ui-admin — 어드민 디자인 시스템',
    description:
      '사내 어드민 서비스군의 공통 UI 기반이 되는 전용 컴포넌트 라이브러리를 초기 빌드부터 단독 구축하고 npm으로 배포·운영. 통합 관리자 콘솔·계정 관리·WebCAD 관리·헬프센터 관리 등 소비 서비스의 요청을 받아 고난도 컴포넌트를 빠른 주기로 릴리즈.',
    type: 'devtool',
    access: 'public',
    status: 'live',

    year: '2026',
    link: 'https://dev-admin-design.cadian.com',
    media: {
      src: '/media/cadian-ui-admin.mp4',
      ratio: '16 / 9',
      caption: '@cadian/ui-admin 문서 사이트 기능 투어',
    },
    accent: 'blue',
    highlights: [
      '초기 빌드부터 npm 등록·배포까지 단독 구축 — 두 달간 22회 릴리즈 (v1.0.0 ~ v1.11.0)',
      '초기 빌드에서 컴포넌트 45종 · 문서 페이지 54종 구축 — Radix Primitives 내장 + 산출물 자체 네이밍(cd_a-) 치환 아키텍처',
      '소비 서비스(헬프센터 어드민 CMS) 개발자 요청·이슈 14건을 요청 당일~익일 릴리즈로 해소',
      'RichTextEditor 확장 — JSON 출력, 콜아웃·아코디언·표 커스텀 노드, 이미지 업로드·리사이즈, 하이퍼링크, 구문강조',
      'Sortable 교차 컨테이너 드래그(트리 부모 변경), TreeSelect · Transfer · Command 팔레트 구현',
      '다크모드 · 한/영 다국어 문서 사이트 운영, v* 태그 기반 CI 자동 게시 파이프라인',
      'Claude Code + MCP 기반 릴리즈 워크플로우로 단독 운영 — 이슈 생성 → 커밋·머지 → npm 게시 → 배포 검증 → 팀 공유(릴리즈 노트)',
    ],
    stack: ['React', 'TypeScript', 'SCSS', 'npm', 'Claude Code'],
  },
  {
    title: 'organization — 조직 관리 콘솔',
    description:
      'Cadian 조직 관리 콘솔의 프론트엔드를 처음부터 구축. 그룹·멤버 관리, SSO 인증, 시리얼·활동 로그, i18n까지 전 기능을 단일 SPA로 구현.',
    type: 'console',
    access: 'auth',
    status: 'live',

    year: '2026',
    link: 'https://organization.cadian.com',
    media: {
      src: '/media/organization.mp4',
      ratio: '16 / 9',
      caption: '조직 관리 콘솔 기능 투어',
    },
    accent: 'mint',
    highlights: [
      '그룹·멤버 관리, SSO 인증, 시리얼 관리, 활동 로그, i18n 등 콘솔 전 기능 UI 구축',
      '화면 전반을 자체 디자인 시스템(@cadian/ui 0.1.x) 기반으로 구축 — 초기 버전부터 실서비스에 적용한 사례',
      'rolecode 기반 Owner / Admin / Member 권한 UX 차별화',
      'QA 테스트 케이스 100건 이상 수정·반영',
    ],
    stack: ['React', 'TypeScript', 'SCSS', '@cadian/ui', '다국어'],
  },
  {
    title: 'developers — SDK 개발자 문서',
    description:
      'Web CAD SDK인 ViewQ의 공식 개발자 문서 사이트 구축. 뷰어 제품인 web cad(ViewQ)와 짝을 이루는 SDK 문서로, WASM 연동 환경 위에 API 예제 25종을 인터랙티브하게 퍼블리싱하고 ESLint·Prettier·Husky 사내 표준을 자동화.',
    type: 'devtool',
    access: 'public',
    status: 'live',

    year: '2025 — 2026',
    link: 'https://developers.cadian.com',
    media: {
      src: '/media/developers.mp4',
      ratio: '16 / 9',
      caption: 'ViewQ SDK 개발자 문서 사이트 기능 투어',
    },
    accent: 'pink',
    highlights: [
      'WASM 기반 ViewQ SDK 개발 환경 초기 구성',
      'API 인터랙티브 예제 25종 전량 퍼블리싱',
      'Anchor Navigation 컴포넌트 — 스크롤 위치 실시간 하이라이팅',
      'ESLint · Prettier · Husky 사내 표준 + Git Hooks 자동화 도입',
    ],
    stack: ['React', 'TypeScript', 'SCSS'],
  },
  {
    title: 'file converter — 파일 컨버터',
    description:
      'Cadian 파일 컨버터 서비스의 UI 퍼블리싱과 기능 개선. 업로드 UX·글로벌 네비게이션·다국어 텍스트와 아이콘 정비로 한/영 서비스 일관성 확보.',
    type: 'viewer',
    access: 'public',
    status: 'live',

    year: '2024 — 2025',
    link: 'https://converter.cadian.com',
    media: {
      src: '/media/file-converter.mp4',
      ratio: '16 / 9',
      caption: '파일 컨버터 기능 투어',
    },
    accent: 'coral',
    highlights: [
      '파일 업로드 영역 UI 개선 + 비로그인 알럿 UI 추가',
      '글로벌 네비게이션 도입으로 서비스 페이지 일관성 확보',
      'Pricing · 404 · 헤더 언어 설정 다국어(한/영) 대응',
      '컨버터 확장자 리스트 디자인 시안 제작 및 퍼블리싱',
    ],
    stack: ['React', 'TypeScript', 'SCSS', '다국어'],
  },
  {
    title: 'mypage — 조직 관리',
    description:
      '마이페이지 조직 생성·초대·권한 관리 UI 구현 및 API 연동. 3단계 위자드, 도메인 debounce 검증, rolecode 권한 표기, SSO authorize 연동까지 담당.',
    type: 'console',
    access: 'auth',
    status: 'live',

    year: '2025 ~',
    link: 'https://mypage.cadian.com',
    media: {
      src: '/media/mypage.mp4',
      ratio: '16 / 9',
      caption: '마이페이지 조직 관리 기능 투어',
    },
    accent: 'blue',
    highlights: [
      '조직 생성 3단계 위자드 플로우 + 사이드메뉴 구현',
      '도메인 중복 체크 debounce 검증 로직 + API 연동',
      'rolecode 기반 권한 표기 + 조직 초대 수락·에러 처리 UI',
      'SSO authorize 연동 + token 미전달 버그 수정',
    ],
    stack: ['React', 'TypeScript', 'SCSS', '다국어'],
  },
  {
    title: 'sso admin — 계정·라이선스 통합 관리 콘솔',
    description:
      'Cadian 계정과 라이선스를 통합 관리하는 사내 운영자 콘솔의 UI를 구축. 사용자·시리얼·발주서·조직·파트너사 등 9개 관리 도메인을 하나의 사이드 네비게이션으로 묶고, 대량 데이터를 다루는 테이블·폼 패턴을 표준화.',
    type: 'admin',
    access: 'private',
    status: 'live',

    year: '2024 — 2026',
    media: {
      src: '/media/admin-sso.mp4',
      ratio: '16 / 9',
      caption: 'SSO 어드민 기능 투어',
    },
    accent: 'purple',
    highlights: [
      '사용자 관리 — 정렬·검색·필터가 붙는 전체 사용자 테이블, 사용자 추가 폼, 엑셀 다운로드 UI 구현',
      '시리얼·발주서 관리 — 시리얼 사용 이력, 권한코드 발급 정보, 발주서 리스트·시리얼 등록 화면 퍼블리싱',
      '조직 관리 — 전체·활성·정지·삭제 요약 카드 + 조직명/도메인 검색과 상태 필터를 갖춘 조직 목록 구성',
      '파트너사 관리와 NW 외부 사용(S/N 발급권한 ID) 관리 테이블·등록 폼 구현',
      '리스트 관리 — 산업분야를 한/영 병기 카드 그리드로 배치하고 추가·그룹추가·수정·삭제 액션 구성',
      '환경설정 — 프로필 메뉴 추가/수정, 아이콘팩 리스트 등 운영 설정 화면 구현',
    ],
    stack: ['React', 'TypeScript', 'SCSS'],
  },
  {
    title: 'help admin — 헬프센터 운영자 콘솔',
    description:
      '헬프센터 도움말 문서를 운영하는 CMS 콘솔에 @cadian/ui-admin 공급자로 협업. 팀원이 주도하는 개발에 맞춰 RichTextEditor를 CMS 에디터 수준으로 확장하고, 요청·이슈를 당일~익일 릴리즈로 대응하며 대시보드·통계·그룹·게시물 관리 화면의 UI 기반을 책임.',
    type: 'admin',
    access: 'private',
    status: 'live',

    year: '2026',
    media: {
      src: '/media/admin-help.mp4',
      ratio: '16 / 9',
      caption: '헬프센터 운영자 콘솔 기능 투어',
    },
    accent: 'blue',
    highlights: [
      '@cadian/ui-admin을 UI 기반으로 공급 — 대시보드·통계·그룹·게시물 관리 화면이 라이브러리 컴포넌트로 구축되도록 지원',
      'RichTextEditor를 CMS 에디터 수준으로 확장 — 콜아웃·아코디언·표 커스텀 노드, 이미지 업로드·리사이즈, 구문강조',
      'Sortable 교차 컨테이너 드래그(트리 부모 변경) 구현 — L1/L2 카테고리 트리 정렬 요구 대응',
      '개발 담당 팀원의 요청·이슈 14건을 당일~익일 릴리즈로 해소',
      '라이브러리와 동일한 인터랙션·다크모드 규칙이 콘솔 전 화면에 유지되도록 동기화',
    ],
    stack: ['React', 'TypeScript', 'SCSS', '@cadian/ui-admin'],
  },
  {
    title: 'webcad admin — 웹캐드 운영 관리자',
    description:
      'WASM 기반 웹캐드 서비스의 운영 관리자 콘솔을 구축. 도입 고객사·도메인·서비스 로그를 한눈에 보는 대시보드와 wasm 도메인·웹캐드·Naver Works 3개 영역의 관리 화면을 퍼블리싱.',
    type: 'admin',
    access: 'private',
    status: 'live',

    year: '2025 — 2026',
    media: {
      src: '/media/admin-webcad.mp4',
      ratio: '16 / 9',
      caption: '웹캐드 운영 관리자 기능 투어',
    },
    accent: 'coral',
    highlights: [
      '대시보드 — WASM·WebCAD 서비스별 요약 카드(고객사·도메인·서비스 로그·도면 수·폰트·유저)와 일자별 로그 활동 차트',
      'wasm 도메인 관리 — 온라인/오프라인 인증 방식 배지와 활성 상태를 표기하는 고객사 목록, 라이선스 발급 서비스 로그 뷰',
      '웹캐드 관리 — 고객사별 CLIENT ID·API KEY·PLAN 수를 노출하는 테이블과 고객사·클라이언트 등록 화면',
      'Naver Works 연동 — 클라이언트 관리, 도메인, 이벤트 콜백 화면 구성',
      '보기·수정·삭제 액션 아이콘과 검색 + 페이지네이션 패턴을 전 목록 화면에 통일',
    ],
    stack: ['React', 'TypeScript', 'SCSS'],
  },
  {
    title: 'homepage admin — 웹 통합 관리 시스템',
    description:
      '캐디안 공식 홈페이지를 운영하는 통합 관리 시스템(V3.0)의 UI 구축·유지보수. 홈페이지 설정부터 팝업관리까지 10개 대메뉴를 국문/영문 이중 구조로 운영하며, 홈페이지 콘텐츠와 문의·견적 접수를 한곳에서 처리.',
    type: 'admin',
    access: 'private',
    status: 'maintenance',

    year: '2024 ~',
    media: {
      src: '/media/admin-homepage.mp4',
      caption: '홈페이지 통합 관리 시스템 기능 투어',
    },
    accent: 'yellow',
    highlights: [
      '홈페이지 설정 — 배너, CADian·3rd Party 제품 소개, 주요 고객사, 사업분야, 추천 키워드 관리 화면 구성',
      '커뮤니티·기술지원 — 공지사항·뉴스·이벤트 게시판, FAQ(일반/개발자), 자료실, 동영상 강좌, 교육 신청 관리',
      '견적 요청 — 자동·상담·업그레이드·용역개발 견적과 카탈로그 다운로드 접수 목록 처리 UI',
      '구매관리·파트너센터·회사소개 — 결제 내역, 파트너 문의·영업보호 신청, 기업연혁·수상/인증 콘텐츠 관리',
      '팝업관리 — 사이트 팝업 등록과 노출 기간 제어 화면',
      '모든 메뉴에 국문/영문 관리 화면을 대응해 한·영 사이트 콘텐츠 일관성 유지',
    ],
    stack: ['PHP', 'HTML', 'CSS', '다국어'],
  },
  {
    title: 'file drive — 디자인 시스템 적용 · 문서 뷰어 연동',
    description:
      '클라우드 파일 드라이브 서비스의 UI 구조를 초기부터 설계·퍼블리싱하고, 2026년에는 직접 만든 디자인 시스템 @cadian/ui를 전면 적용. 레이아웃·헤더·사이드바·테이블·모달·대시보드·파일 화면을 재구축하며 Polaris Office 기반 문서 뷰어 연동까지 대응.',
    type: 'viewer',
    access: 'auth',
    status: 'live',

    year: '2024 — 2026',
    link: 'https://file.cadian.com',
    media: {
      src: '/media/file-drive.mp4',
      ratio: '16 / 9',
      caption: 'CADian Drive 기능 투어',
    },
    accent: 'yellow',
    highlights: [
      '클라우드 파일 드라이브의 UI 구조 설계·퍼블리싱 — Drag & Drop, 파일 리스트 등 파일 탐색·관리 인터페이스',
      '모바일·태블릿 반응형과 인터랙션 퍼블리싱, GNB·외부 저장소·구독 결제 스토리보드 작성 등 기획 참여',
      '@cadian/ui 전면 적용 마이그레이션 — 레이아웃·헤더·사이드바·테이블·모달·대시보드·파일 화면 재구축',
      '@cadian/ui 2.8 → 2.10 연속 업그레이드 대응 — 직접 만든 라이브러리를 실서비스에 적용하며 Claude Code로 변경분 추적·일괄 치환 자동화',
      '드라이브 시스템 내 문서 뷰어 연동 프로젝트 초기 구축 (완료)',
      'Polaris Office 뷰어 통합 대응',
    ],
    stack: ['React', 'TypeScript', 'SCSS', '@cadian/ui', '다국어'],
  },
  {
    title: 'cadian — 공식 홈페이지',
    description:
      '캐디안 공식 홈페이지의 콘텐츠 업데이트와 UI 유지보수. GNB·CEO 인사말·제품 비교표 등 다국어 콘텐츠 정비와 모바일 햄버거 메뉴 버그 대응.',
    type: 'marketing',
    access: 'public',
    status: 'maintenance',

    year: '2024 ~',
    link: 'https://www.cadian.com',
    media: {
      src: '/media/homepage.mp4',
      ratio: '16 / 9',
      caption: '공식 홈페이지 기능 투어',
    },
    accent: 'pink',
    highlights: [
      'GNB 구성 변경, CEO 인사말 · 제품 비교표 콘텐츠 수정',
      '다국어(한/영) 페이지 수정 및 상호명 변경 전사 반영',
      '모바일 햄버거 메뉴 깨짐 버그 수정',
    ],
    stack: ['PHP', 'HTML', 'CSS', 'GSAP', 'Swiper', '다국어'],
  },
  {
    title: 'help center — 사용자 지원 포털',
    description:
      'CADian Drive · ViewQ · File Converter 사용법을 한곳에 모은 사용자 지원 포털을 MkDocs 기반으로 초기 구축·퍼블리싱. 이후 v2가 @cadian/ui를 UI 기반으로 채택하면서, 소비 서비스로서의 컴포넌트 공급·동기화까지 이어서 담당.',
    type: 'marketing',
    access: 'public',
    status: 'live',

    year: '2024 — 2026',
    link: 'https://dev-help-v2.cadian.com/ko/',
    media: {
      src: '/media/help-center.mp4',
      ratio: '16 / 9',
      caption: '헬프센터 기능 투어',
    },
    accent: 'mint',
    highlights: [
      'MkDocs 기반 사용자 지원 포털 퍼블리싱 · 디자인 커스터마이징',
      'FAQ · 튜토리얼 · 업데이트 내역을 검색 중심 구조로 재구성',
      '중앙 검색창 + 통합 검색 결과 페이지 국문/영문 제작',
      '제품별 도움말 카테고리 → 상세 문서 탐색 구조 설계',
      'v2에 @cadian/ui 공급 — 직접 만든 디자인 시스템의 실사용 사례',
    ],
    stack: ['HTML', 'CSS', 'MkDocs', '다국어'],
  },
  {
    title: 'web cad — 웹 CAD 뷰어 (ViewQ)',
    description:
      'Cadian WebCAD 뷰어&에디터 ViewQ의 전체 화면 디자인·퍼블리싱. developers 사이트가 문서화한 ViewQ SDK의 뷰어 제품으로, 리본 메뉴 아이콘 체계부터 도면 뷰어 전용 인터랙션 UI까지 담당.',
    type: 'viewer',
    access: 'public',
    status: 'live',

    year: '2024 — 2026',
    link: 'https://drawing.cadian.com',
    media: {
      src: '/media/web-cad.mp4',
      ratio: '16 / 9',
      caption: 'ViewQ 웹 CAD 뷰어 기능 투어',
    },
    accent: 'mint',
    highlights: [
      '서비스 전체 화면 디자인·퍼블리싱 — 리본 메뉴 아이콘 체계 제작',
      '레이어 토글·줌·팬 등 도면 뷰어 전용 인터랙션 UI 구현',
      'PDF Plot/Export UI, 카메라 컨트롤 커서 등 CAD 특화 요소 디자인',
      '모바일 가로모드 등 해상도 대응',
      '리본 메뉴 프리 드로우(스케치) 항목 추가, MTEXT 영역 디자인·한/영 번역 오류 수정',
    ],
    stack: ['React', 'TypeScript', 'SCSS', 'SVG', '다국어'],
  },
  {
    title: 'News Letter Edm — 이메일 마크업',
    description:
      '이메일/뉴스레터·이벤트 프로모션용 EDM 페이지를 단독 제작. Figma 레이아웃을 이메일 클라이언트 호환 마크업으로 구현하고, cadian-ui 디자인 토큰과 일관성 유지.',
    type: 'marketing',
    access: 'private',
    status: 'ondemand',

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
