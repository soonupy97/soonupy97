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
    company: '위즈코어 (구 캐디안 · CADian)',
    role: '클라우드플랫폼팀 · 주임연구원',
    period: '2024.04 — 현재',
    current: true,
    summary:
      '2024년부터 8개 서비스·디자인 시스템 2종의 UI를 담당. 사내 디자인 시스템 2종을 단독 설계·구현하고, 개발 환경 표준화와 릴리즈 자동화도 주도.',
    highlights: [
      '사내 공용 디자인 시스템 cadian-ui 단독 설계·구현 — 컴포넌트 50여 종과 EDM 페이지',
      '어드민 전용 cadian-ui-admin 별도 구축·운영 — 사내 관리자 서비스군 공통 UI 공급',
      '조직 관리 콘솔·개발자 문서·마이페이지·스토어 결제(도로명 API) 등 8개 서비스 UI 담당',
      '헬프센터 초기 구축·퍼블리싱(MkDocs), v2에는 @cadian/ui 공급·동기화 대응',
      'GNB·구독 결제 스토리보드, 서비스 로고(CI) 시안 등 기획·디자인 단계 참여',
      '개발 환경 표준화 — ESLint·Prettier·Husky 자동화, WASM 연동 도입',
      'Claude Code + MCP(Jira·GitLab·Slack)로 릴리즈 파이프라인 자동화 — 디자인 시스템 2종의 배포·문서·팀 공유를 단독 운영',
      'Figma 토큰 1:1 매핑 협업, QA 테스트 케이스 100건 이상 반영',
    ],
    stack: [
      'React',
      'TypeScript',
      'SCSS',
      'BEM',
      'Figma',
      'npm',
      'Claude Code',
    ],
  },
  {
    company: '건은 (삼안)',
    role: '건설사업관리본부 · 사원',
    period: '2022.10 — 2023.10',
    summary:
      '건설사업관리본부에서 토목·건설 제안서·보고서의 삽도 편집디자인을 담당.',
    highlights: [
      'CAD 도면·설계 자료를 발주처가 이해하기 쉬운 시각 자료로 가공',
      '제안서 레이아웃 편집 및 제출 기한 엄수',
    ],
    stack: ['Photoshop', 'Illustrator'],
  },
  {
    company: '구랩 (GOOLAB)',
    role: '웹디자인팀 · 주임',
    period: '2021.05 — 2022.08',
    summary:
      '웹디자인팀에서 쇼핑몰 상세페이지·프로모션 콘텐츠 디자인과 반응형 마크업 퍼블리싱을 담당.',
    highlights: [
      '쇼핑몰 상세페이지·프로모션 콘텐츠 디자인 제작',
      '디자인 시안의 반응형 마크업 퍼블리싱',
      '디자인 시안과 마크업 사이의 시각 일관성 유지',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Photoshop'],
  },
  {
    company: '하나컴퓨터학원',
    role: '디자인·OA 자격증 강사',
    period: '2019.12 — 2021.02',
    summary:
      'GTQ(포토샵·일러스트)·ITQ(한글·엑셀·파워포인트) 자격증 과정 강사로 수강생 실기·이론 지도.',
    highlights: [
      '포토샵·일러스트레이터 GTQ 실기 강의',
      '한글·엑셀·파워포인트 ITQ 실기 강의',
    ],
    stack: ['Photoshop', 'Illustrator', 'MS Office'],
  },
]
