# 경력기술서

---

## 기본 정보

| 항목 | 내용 |
|---|---|
| 이름 | 권순우 |
| 직무 | 웹 퍼블리셔 (Web Publisher) |
| 경력 | 약 2년 |
| 핵심 기술 | HTML · CSS/SCSS · React · TypeScript · BEM · Figma · Storybook |

---

## 경력 요약

Cadian(캐디안)에서 약 2년간 웹 퍼블리셔로 근무하며 공식 홈페이지·파일 컨버터·조직 관리 콘솔·개발자 문서 사이트·마이페이지 등 8개 서비스의 UI 구현 및 유지보수를 담당했습니다. 단순 퍼블리싱에 그치지 않고 사내 디자인 시스템(cadian-ui)을 단독 설계·구현하고, 개발 환경 표준화(ESLint · Prettier · Husky)를 주도하는 등 팀의 생산성과 코드 품질 향상에 기여했습니다.

---

## 재직 이력

### Cadian (캐디안) · 웹 퍼블리셔
*재직 기간: 약 2년*

---

## 주요 프로젝트

---

### 1. cadian-ui — 사내 디자인 시스템 구축
**기간**: 2026.04 ~ 현재 &nbsp;|&nbsp; **역할**: 웹 퍼블리셔 (단독 설계·구현) &nbsp;|&nbsp; **URL**: https://design.cadian.com

Cadian 전 서비스에서 사용하는 공통 UI 컴포넌트 라이브러리를 단독으로 설계하고 구현했습니다. Figma 컴포넌트와 1:1 대응하는 디자인 토큰 체계부터 복합 Overlay 컴포넌트까지 일관된 시스템을 구축했습니다.

**담당 업무**
- 디자인 토큰(color · spacing · radii · typography) 체계 설계 — Figma 변수와 코드 변수 1:1 매핑
- BEM 방법론 기반 SCSS 아키텍처 설계 및 전체 컴포넌트 구현
- 계층별 컴포넌트 구현
  - Foundations: Design style · Typography tokens · Layout
  - Atoms: Icons · Buttons · Inputs · Selection · Badge · Indicator
  - Blocks: Heading · Table · Aside · Header · Footer · Main · Section
  - Overlays: Tooltip · Modal Composite · Calendar Composite · Selected List
  - Pages: Skeleton Page · Error Page · Notification · EDM Page
- 이메일·뉴스레터·이벤트 프로모션용 EDM 페이지 제작 (이메일 클라이언트 호환 마크업)
- Storybook 스토리 등록 및 Component Playground 구현

**기술 스택**: `React` `TypeScript` `SCSS` `BEM` `Storybook` `Figma` `HTML Email`

**성과**
- 전 서비스에 일관된 UI를 제공하는 단일 디자인 시스템 완성 (단독 구현)
- Figma 수정사항이 토큰을 통해 코드에 즉시 반영되는 구조 구축
- 퍼블리셔 고유 역량인 이메일 호환 마크업 경험 확보

---

### 2. organization.cadian.com — 조직 관리 콘솔 구축
**기간**: 2024 ~ 현재 &nbsp;|&nbsp; **역할**: 웹 퍼블리셔 / 프론트엔드 &nbsp;|&nbsp; **URL**: https://organization.cadian.com

Cadian 조직 관리 콘솔의 프론트엔드를 초기부터 구축했습니다. 그룹·멤버 관리부터 SSO 인증, 시리얼 관리, 활동 로그까지 SaaS 서비스의 전 기능을 담당했습니다.

**담당 업무**
- 대시보드: 조직 정보 카드 · 시리얼 요약 통계 · 최근 활동 피드 구현
- 그룹 관리: 그룹 생성·수정·삭제, 그룹 내 멤버 관리, 그룹 트리 시각화
- 멤버 관리: 초대 발송·수락·만료·취소, Owner / Admin / Member 역할 기반 권한 UI
- SSO 인증: 조직 계정 SSO 연동, AuthCallback · CSRF state 검증 처리
- 조직 설정: 조직명·도메인·로고·파비콘 수정, DNS 소유권 검증 토큰 발급 UI
- 시리얼 관리: 목록 조회·사전 검증·등록·삭제·CSV 내보내기
- 활동 로그: 로그 조회·필터링·CSV 내보내기·신규 API 연동
- 국제화(i18n): 한국어 ↔ 영어 전환 구성
- QA 기반 버그 수정: 토큰 만료 처리, 401 인터셉터 redirect 누락, 모바일 Safari 100vh 충돌 등

**기술 스택**: `React` `TypeScript` `SCSS` `SSO` `REST API` `i18n` `Ant Design`

**성과**
- 조직 관리 전 기능을 단일 SPA로 구현 (이슈 OCC-7 ~ OCC-446 전 참여)
- rolecode 기반 권한 분기로 역할별 UX 명확히 차별화
- QA 테스트 케이스 100건 이상 직접 수정·반영하며 서비스 품질 안정화 기여

---

### 3. developers.cadian.com — ViewQ 개발자 문서 사이트 구축
**기간**: 2025 ~ 2026 (완료) &nbsp;|&nbsp; **역할**: 웹 퍼블리셔 / 프론트엔드 &nbsp;|&nbsp; **URL**: https://developers.cadian.com

Cadian의 Web CAD SDK ViewQ의 공식 개발자 문서 사이트를 구축하고, API 예제 25종을 인터랙티브하게 전량 구현했습니다.

**담당 업무**
- WASM SDK 기반 개발 환경 초기 구성 (BAS-01: DwgOpen)
- API 예제 25종 퍼블리싱: 레이어 조작 · 블록 생성 · PDF 내보내기 · 기하 도형 그리기 · 그립 포인트 · 거리 측정 · 동적 블록 등
- Anchor Navigation 컴포넌트 개발 — 스크롤 위치에 따른 현재 섹션 실시간 하이라이팅
- SSO 로그인 컴포넌트 개발 및 API 연동
- `.env.development` / `.env.production` 환경변수 분리
- ESLint · Prettier 사내 표준 설정 및 Git Hooks(Husky) 자동화 도입
- `stat.js` 메모리 상태 모니터링 도입

**기술 스택**: `React` `TypeScript` `WASM` `Vite` `ESLint` `Prettier` `Husky`

**성과**
- API 예제 25종 전량 완료
- ESLint · Prettier · Husky 표준화로 팀 코드 일관성 확보 및 온보딩 비용 절감
- Anchor Nav 스크롤 연동으로 긴 문서 탐색 UX 개선

---

### 4. converter.cadian.com — 파일 컨버터 서비스 UI 개선
**기간**: 재직 중 (완료) &nbsp;|&nbsp; **역할**: 웹 퍼블리셔 &nbsp;|&nbsp; **URL**: https://converter.cadian.com

Cadian 파일 컨버터 서비스의 UI 퍼블리싱 및 다국어 대응 개선을 담당했습니다.

**담당 업무**
- 파일 업로드 영역 UI 개선 퍼블리싱
- 컨버터 확장자 리스트 디자인 시안 제작 및 퍼블리싱
- 글로벌 네비게이션 추가 및 기능 구현
- Pricing 페이지 영문 텍스트·아이콘 수정 (한/영 다국어 대응)
- 404 페이지 · 헤더 언어 설정 · 푸터 디자인 수정
- 비로그인 상태 브라우저 알럿 UI 추가 및 업로드 UI 깨짐 버그 수정

**기술 스택**: `HTML` `CSS/SCSS` `JavaScript` `다국어(한/영)`

**성과**
- 파일 업로드 흐름 전반 UX 개선
- 글로벌 네비게이션 도입으로 서비스 페이지 간 일관성 확보

---

### 5. mypage.cadian.com — 마이페이지 조직 관리 기능 구현
**기간**: 2026 ~ 현재 &nbsp;|&nbsp; **역할**: 프론트엔드 퍼블리셔 &nbsp;|&nbsp; **URL**: https://mypage.cadian.com

마이페이지 내 조직 생성 위자드·초대·권한 관리 기능의 UI 구현 및 API 연동을 담당했습니다.

**담당 업무**
- 조직 생성 3단계 위자드 플로우 UI 구현 (step 1 · 2 · 3) 및 사이드메뉴 수정
- 조직 API 서비스 레이어 구축 및 기존 마이페이지 코드베이스 병합
- 도메인 중복 체크 debounce 검증 로직 구현 및 API 연동
- 조직 초대 수락·에러 처리 UI, rolecode 기반 권한 표기
- SSO authorize 연동 및 token 미전달 버그 수정

**기술 스택**: `React` `TypeScript` `SSO` `REST API`

---

## 운영·유지보수 참여

---

### file.cadian.com — 드라이브 문서 뷰어 연동
**역할**: 프론트엔드 퍼블리셔 &nbsp;|&nbsp; **URL**: https://file.cadian.com

- 드라이브 시스템 내 문서 뷰어 연동 프로젝트 초기 구축
- Polaris Office 뷰어 연동 작업 진행 중

**기술 스택**: `React` `TypeScript` `Polaris Office Viewer`

---

### www.cadian.com — 캐디안 공식 홈페이지
**역할**: 웹 퍼블리셔 &nbsp;|&nbsp; **URL**: https://www.cadian.com

- GNB 구성 변경, CEO 인사말·AI 솔루션 페이지·제품 비교표 콘텐츠 수정
- 다국어(한/영) 페이지 수정 및 상호명 변경 전사 반영
- 모바일 햄버거 메뉴 깨짐 버그 수정

**기술 스택**: `HTML` `CSS` `다국어(한/영)`

---

### web.cadian.com — 웹 CAD 뷰어
**역할**: 웹 퍼블리셔 &nbsp;|&nbsp; **URL**: https://web.cadian.com

- 리본 메뉴 프리 드로우 항목 추가 및 아이콘 디자인
- MTEXT text area 디자인 수정 및 한/영 번역 오류 수정

**기술 스택**: `HTML` `CSS` `SVG` `다국어(한/영)`

---

## 보유 기술 요약

| 구분 | 기술 |
|---|---|
| 마크업 · 스타일 | HTML5 · CSS3 · SCSS · BEM · HTML Email |
| 프레임워크 | React · TypeScript |
| 디자인 협업 | Figma · Storybook |
| 개발 도구 | Vite · ESLint · Prettier · Git · Husky |
| 기타 | REST API 연동 · SSO 연동 · i18n · WASM · Polaris Office Viewer |
