export type Project = {
  title: string
  description: string
  tags: string[]
  role: string
  year: string
  link?: string
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
    title: '브랜드 캠페인 랜딩',
    description:
      '시즌 캠페인을 위한 인터랙티브 랜딩. 스크롤 기반 모션, 반응형 그리드, 라이트/다크 테마를 SCSS 토큰 시스템으로 통일.',
    tags: ['HTML', 'SCSS', 'GSAP', 'Responsive'],
    role: 'Lead Publisher',
    year: '2025',
    link: '#',
  },
  {
    title: '커머스 PDP 리뉴얼',
    description:
      '상품 상세 페이지의 구조를 시맨틱 마크업으로 전면 재정비. CLS 0.02, LCP 1.8s 달성. BEM + ITCSS 도입으로 스타일 충돌 제거.',
    tags: ['BEM', 'ITCSS', 'A11y', 'Performance'],
    role: 'Frontend Publisher',
    year: '2025',
    link: '#',
  },
  {
    title: '핀테크 대시보드 디자인 시스템',
    description:
      '컴포넌트 12종, 토큰 80+ 정의. Storybook 기반 문서화로 디자이너-개발자 협업 사이클 단축.',
    tags: ['Design System', 'React', 'Storybook'],
    role: 'UI Engineer',
    year: '2024',
    link: '#',
  },
  {
    title: '미디어 매거진 사이트',
    description:
      '에디터가 직접 운용하는 매거진. 시맨틱 article 구조와 reading-time UX, RSS 자동 생성. 모바일 가독성에 집중.',
    tags: ['Semantic HTML', 'CSS Grid', 'SEO'],
    role: 'Web Publisher',
    year: '2024',
    link: '#',
  },
  {
    title: '교육 플랫폼 강의 페이지',
    description:
      '비디오 플레이어 접근성(자막, 키보드 컨트롤) 개선과 강의 진도 UI 재설계. 키보드 only 사용자 100% 접근 가능.',
    tags: ['WCAG 2.1 AA', 'Video', 'UX'],
    role: 'Accessibility Lead',
    year: '2023',
    link: '#',
  },
  {
    title: '관리자 콘솔 UI 키트',
    description:
      '내부 운영툴을 위한 폼/테이블/모달 패턴 라이브러리. 10여개 서비스가 공유하는 단일 진실 공급원.',
    tags: ['SCSS', 'Component', 'Patterns'],
    role: 'Publisher',
    year: '2023',
    link: '#',
  },
]
