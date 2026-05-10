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
  {
    company: 'Studio Onestep (가상)',
    role: '프론트엔드 퍼블리셔',
    period: '2022 — 2024',
    summary:
      'SaaS 스타트업의 마케팅 사이트와 어드민 콘솔 UI를 담당. 디자이너 1인·개발자 2인 소규모 팀에서 마크업·스타일·간단한 컴포넌트 개발 전반을 책임짐.',
    highlights: [
      '랜딩페이지 5종·이메일 템플릿 12종 제작 — 다국어(한/영/일) 대응',
      'Sass 토큰·믹스인 라이브러리 정리로 디자인 변경 반영 시간 60% 단축',
      'Storybook 도입과 컴포넌트 문서화로 신규 합류 개발자 온보딩 시간 단축',
      'GA4 이벤트 트래킹 마크업 가이드 정립',
    ],
    stack: ['HTML', 'Sass', 'JavaScript', 'GSAP', 'Storybook'],
  },
  {
    company: '(주)노블픽셀 (가상)',
    role: '웹 퍼블리셔',
    period: '2020 — 2022',
    summary:
      '에이전시 환경에서 이커머스·교육·F&B 등 다양한 산업군 클라이언트 사이트 퍼블리싱. 반응형·크로스브라우저·SEO 마크업 기본기를 다짐.',
    highlights: [
      '이커머스 PDP·체크아웃 플로우 마크업 — IE11 포함 크로스브라우저 대응',
      '교육 플랫폼 LMS UI — 시맨틱 마크업과 키보드 접근성 가이드라인 적용',
      'Gulp 기반 빌드 파이프라인 구성 (Sass 컴파일·이미지 압축·자동 새로고침)',
      'Zeplin·Figma 시안을 픽셀 단위 정합성으로 핸드오프 받아 구현',
    ],
    stack: ['HTML', 'Sass', 'JavaScript', 'Gulp', 'Zeplin'],
  },
]
