# 권순우 — 웹 퍼블리셔 포트폴리오

> Claude가 카드 UI 생성 및 Notion 정리에 사용할 구조화된 프로젝트 데이터입니다.
> 각 프로젝트는 독립적인 카드 단위로 설계되어 있습니다.

---

## 메타 정보

- **이름**: 권순우
- **직무**: 웹 퍼블리셔 (Web Publisher)
- **소속**: Cadian (캐디안)
- **재직 기간**: 약 2년
- **주요 기술**: HTML · CSS/SCSS · React · TypeScript · BEM · Figma
- **이슈 트래커**: Jira (cadian.atlassian.net)
- **레포지토리**: GitLab (gitlab.cadian.com)

---

## 프로젝트 목록

### 1. cadian-ui — 디자인 시스템 구축

```yaml
id: DCC
name: cadian-ui v1.0 디자인 시스템 구현
site: design.cadian.com
url: https://design.cadian.com
repo: https://gitlab.cadian.com/CP/cadian-ui
period: 2026.04 ~ 진행 중
role: 웹 퍼블리셔 (단독 설계·구현)
status: in-progress
jira: DCC-1
```

**한 줄 소개**
Cadian 서비스 전체에서 공유하는 공통 UI 컴포넌트 라이브러리를 Figma 기반으로 처음부터 단독 설계·구현했습니다.

**구현 완료 컴포넌트**
- Foundations: Design style (color · spacing · radii) · Typography tokens · Layout
- Atoms: Icons · Buttons · Inputs · Selection · Badge · Indicator
- Blocks: Heading · Table · Aside · Header · Footer · Main · Section
- Overlays: Overlay · Tooltip · Modal Composite · Calendar Composite · Selected List
- Pages: Skeleton Page · Error Page · Notification · Body 페이지 레이아웃
- 개발 도구: Component Playground · Utilities

**EDM 페이지 제작 (DCC-26)**
- cadian-ui 디자인 시스템 내 이메일/뉴스레터·이벤트 프로모션용 EDM 페이지 컴포넌트 설계
- Figma 기반 레이아웃을 코드 컴포넌트로 구현 (퍼블리셔 단독 작업)
- 이메일 클라이언트 호환성을 고려한 마크업 구조 적용

**기술 스택**
`React` `TypeScript` `SCSS` `BEM` `Storybook` `Figma` `HTML Email`

**성과**
- Figma 컴포넌트와 1:1 대응하는 디자인 토큰 시스템 설계
- BEM 기반 SCSS 아키텍처로 서비스 전 제품에 일관된 UI 제공
- EDM 페이지 포함 전 페이지 타입 컴포넌트화 — 단독 구현으로 디자인 시스템 전체 오너십 보유

---

### 2. organization.cadian.com — 조직 관리 콘솔

```yaml
id: OCC
name: organization.cadian.com 프론트엔드 개발
site: organization.cadian.com
url: https://organization.cadian.com
period: 2024 ~ 2026 (장기 운영)
role: 웹 퍼블리셔 / 프론트엔드
status: in-progress
jira: OCC-7 ~ OCC-446
```

**한 줄 소개**
Cadian 조직 관리 콘솔의 프론트엔드를 처음부터 구축하고, 그룹 관리부터 SSO 인증·시리얼 관리·활동 로그까지 전 기능을 개발했습니다.

**주요 작업**
- **대시보드**: 조직 정보 카드, 시리얼 요약 통계, 최근 활동 피드 구현
- **그룹 관리**: 그룹 생성·수정·삭제, 그룹 내 멤버 관리, 그룹 트리 시각화
- **멤버 관리**: 초대 발송·수락·만료·취소, 역할(Owner / Admin / Member) 기반 권한 표기
- **SSO 인증**: 조직 계정 SSO 연동, AuthCallback · CSRF state 검증
- **조직 설정**: 조직명·도메인·로고·파비콘 수정, DNS 소유권 검증 토큰 발급
- **시리얼 관리**: 시리얼 목록·사전 검증·등록·삭제·CSV 내보내기
- **활동 로그**: 로그 조회·필터링·CSV 내보내기·신규 API 연동
- **국제화(i18n)**: 한국어 ↔ 영어 전환 구성
- **계정 드롭다운 메뉴** 및 공통 레이아웃 컴포넌트 구현
- QA 기반 버그 수정: 토큰 만료 처리, 401 인터셉터, 모바일 Safari 100vh 충돌 등 다수

**기술 스택**
`React` `TypeScript` `SCSS` `SSO` `REST API` `i18n` `Ant Design`

**성과**
- 조직 관리 전 기능을 단일 SPA로 구현 (OCC-7 ~ OCC-446 전 이슈 참여)
- rolecode 기반 권한 분기로 Owner / Admin / Member 역할별 UX 차별화
- 장기 운영 중 QA 테스트 케이스 100건 이상 수정·반영

---

### 3. developers.cadian.com — ViewQ 개발자 문서 사이트

```yaml
id: DVC
name: ViewQ 개발자 문서 사이트 구축
site: developers.cadian.com
url: https://developers.cadian.com
period: 2025 ~ 2026 (완료)
role: 웹 퍼블리셔 / 프론트엔드
status: done
jira: DVC-16 ~ DVC-67
```

**한 줄 소개**
Cadian의 Web CAD SDK(ViewQ)의 공식 개발자 문서 사이트를 구축하고, 25종의 API 인터랙티브 예제 페이지를 전량 구현했습니다.

**주요 작업**
- WASM SDK 기반 개발 환경 초기 구성 (BAS-01: DwgOpen)
- API 예제 25종 퍼블리싱 (BAS-01 ~ BAS-25)
  - 레이어 조작 · 블록 생성 · 텍스트 스타일 · PDF 내보내기
  - Xref 연동 · 팔레트 전환 · 기하 도형 그리기 · 그립 포인트
  - 이미지 삽입 · 거리 측정 · 동적 블록 · 파일 버전 표시 등
- Anchor Navigation 컴포넌트 개발 (페이지 스크롤 상태 실시간 연동)
- SSO 로그인 컴포넌트 개발 및 API 연동
- 환경변수 분리 (`.env.development` / `.env.production`)
- ESLint · Prettier 사내 표준 설정 + Git Hooks(Husky) 자동화
- `stat.js` 메모리 상태 모니터링 도입

**기술 스택**
`React` `TypeScript` `WASM` `Vite` `ESLint` `Prettier` `Husky`

**성과**
- API 예제 25종 완전 완료
- Anchor Nav 스크롤 연동으로 문서 탐색 UX 개선
- 개발 환경 표준화로 팀 온보딩 비용 절감

---

### 4. mypage.cadian.com — 마이페이지 조직 관리

```yaml
id: MYP
name: 마이페이지 조직 관리 기능 구현
site: mypage.cadian.com
url: https://mypage.cadian.com
period: 2026 ~ 진행 중
role: 프론트엔드 퍼블리셔
status: in-progress
jira: MYP-55 ~ MYP-67
```

**한 줄 소개**
마이페이지 내 조직 생성 위자드·초대·권한 표기 기능의 UI 구현과 API 연동을 담당했습니다.

**주요 작업**
- 조직 생성 3단계 위자드 플로우 디자인 적용 (step 1 · 2 · 3)
- 조직 API 서비스 레이어 구축 및 기존 마이페이지 코드베이스 병합
- 도메인 중복 체크 debounce 검증 로직 구현 및 API 연동
- 조직 초대 수락 · 에러 처리 UI
- 조직 목록 — rolecode 기반 사용자 권한 표기
- SSO authorize 연동
- 신규 조직 생성 후 대시보드 이동 시 token 미전달 버그 수정

**기술 스택**
`React` `TypeScript` `SSO` `REST API`

---

### 5. converter.cadian.com — 파일 컨버터 서비스

```yaml
id: CVT
name: converter.cadian.com 퍼블리싱 및 UI 개선
site: converter.cadian.com
url: https://converter.cadian.com
period: ~ (운영 참여)
role: 웹 퍼블리셔
status: done
jira: CVT-4 ~ CVT-57
```

**한 줄 소개**
Cadian 파일 컨버터 서비스의 UI 퍼블리싱과 기능 개선 전반을 담당했습니다.

**주요 작업**
- 파일 업로드 영역 UI 개선 퍼블리싱
- 컨버터 확장자 리스트 디자인 시안 제작 및 퍼블리싱
- 글로벌 네비게이션 추가 및 기능 구현
- 푸터 구성 변경
- 비로그인 상태 브라우저 알럿 UI 추가
- Pricing 페이지 영문 텍스트·아이콘 수정 (글로벌 대응)
- 헤더 언어 설정 디자인 수정
- 404 페이지 디자인 수정
- 업로드 영역 UI 깨짐 버그 수정

**기술 스택**
`HTML` `CSS/SCSS` `JavaScript` `퍼블리싱`

**성과**
- 파일 업로드 UX 개선 및 다국어(한/영) 대응 UI 완성
- 글로벌 네비게이션 도입으로 서비스 일관성 확보

---

### 6. file.cadian.com — 드라이브 문서 뷰어 연동

```yaml
id: FMS
name: 드라이브 문서 뷰어 연동
site: file.cadian.com
url: https://file.cadian.com
period: 2026 ~ 진행 중
role: 프론트엔드 퍼블리셔
status: in-progress
jira: FMS-405, FMS-406
```

**한 줄 소개**
Cadian 드라이브 서비스에 Polaris Office 기반 문서 뷰어를 연동하는 프로젝트를 구축했습니다.

**주요 작업**
- 드라이브 시스템 내 문서 뷰어 연동 프로젝트 초기 구축 (완료)
- Polaris Office 뷰어 연동 (진행 중)

**기술 스택**
`React` `TypeScript` `Polaris Office Viewer`

---

### 7. www.cadian.com — 캐디안 공식 홈페이지

```yaml
id: HMP
name: www.cadian.com 홈페이지 유지보수
site: www.cadian.com
url: https://www.cadian.com
period: (운영 참여)
role: 웹 퍼블리셔
status: in-progress
jira: HMP-320 ~ HMP-328
```

**한 줄 소개**
캐디안 공식 홈페이지의 콘텐츠 업데이트 및 UI 유지보수를 담당했습니다.

**주요 작업**
- GNB 파트너센터 구성 변경
- CEO 인사말 변경
- AI 솔루션 개발 페이지 콘텐츠 수정
- Find Local Partners 영문 페이지 수정
- 제품 비교 CAD 기능 비교표 수정
- 제품 신청·구매 페이지 배송지 항목 숨김 처리
- 모바일 햄버거 메뉴 깨짐 버그 대응
- 상호명 변경 반영 (위즈코어(주))

**기술 스택**
`HTML` `CSS` `퍼블리싱` `다국어(한/영)`

---

### 8. web.cadian.com — 웹 캐드 뷰어

```yaml
id: VMS
name: web.cadian.com UI 개선
site: web.cadian.com
url: https://web.cadian.com
period: (운영 참여)
role: 웹 퍼블리셔
status: in-progress
jira: VMS-83 ~ VMS-98
```

**한 줄 소개**
Cadian 웹 CAD 뷰어의 UI 개선 및 다국어 번역 오류 수정을 담당했습니다.

**주요 작업**
- 리본 메뉴(주석) 프리 드로우(스케치) 항목 추가 및 아이콘 디자인
- MTEXT(다중행 문자) text area 디자인 수정
- 웹 브라우저 한/영 번역 문제 수정

**기술 스택**
`HTML` `CSS` `SVG` `다국어(한/영)`

---

## 프로젝트 도메인 목록

| 프로젝트 | 도메인 | URL |
|---|---|---|
| cadian-ui 디자인 시스템 | design.cadian.com | https://design.cadian.com |
| organization.cadian.com | organization.cadian.com | https://organization.cadian.com |
| developers.cadian.com | developers.cadian.com | https://developers.cadian.com |
| converter.cadian.com | converter.cadian.com | https://converter.cadian.com |
| mypage.cadian.com | mypage.cadian.com | https://mypage.cadian.com |
| file.cadian.com | file.cadian.com | https://file.cadian.com |
| www.cadian.com | www.cadian.com | https://www.cadian.com |
| web.cadian.com | web.cadian.com | https://web.cadian.com |

---

## 카드 UI 생성 가이드 (Claude용)

### 카드 구성 요소

| 요소 | 내용 |
|---|---|
| `badge` | 상태 — `완료` / `진행 중` |
| `tag` | 기술 스택 태그 (최대 4개) |
| `title` | 프로젝트명 |
| `description` | 한 줄 소개 |
| `period` | 기간 |
| `role` | 역할 |
| `highlights` | 주요 작업 bullet (최대 3개) |
| `link` | 사이트 URL (선택) |

### 권장 카드 레이아웃 순서
1. `cadian-ui` — 단독 설계·구현, 디자인 시스템 오너십
2. `organization.cadian.com` — 가장 규모 크고 장기 운영 중인 프로젝트
3. `developers.cadian.com` — 완료된 기술 집약 프로젝트
4. `converter.cadian.com` — 다국어 서비스 UI, 완료된 퍼블리싱
5. `mypage.cadian.com` — 복합 기능 구현
6. `file.cadian.com` — 뷰어 연동 특수 케이스
7. `www.cadian.com` — 공식 홈페이지 유지보수
8. `web.cadian.com` — 웹 CAD 뷰어 UI 개선

### 색상 제안
- `cadian-ui` → 보라/인디고 계열 (디자인 시스템)
- `organization` → 청록/사이안 계열 (조직·어드민)
- `developers` → 초록/에메랄드 계열 (개발 문서)
- `converter` → 오렌지/레드 계열 (파일 변환 서비스)
- `mypage` → 파랑/슬레이트 계열 (서비스 앱)
- `file` → 노랑/앰버 계열 (파일/문서)
- `www.cadian.com` → 회색/뉴트럴 계열 (공식 홈페이지)
- `web.cadian.com` → 딥블루/네이비 계열 (CAD 뷰어)

---

## Notion 정리용 추가 메모

- DVCC는 DVC의 백업/이관 프로젝트 — 포트폴리오에서는 DVC로 통합 표기 권장
- OCC는 이슈 번호 범위(OCC-7 ~ OCC-446)로 보아 약 1~2년 이상 장기 참여한 핵심 프로젝트
- DCC(cadian-ui)는 단독 오너십 — "설계부터 구현까지 1인 담당" 문구 강조 권장
- WASM 연동(DVC)은 CAD 도메인 특수 기술 — 차별화 포인트
- OCC QA 테스트 케이스(TC-ORG*)는 품질 기여 근거로 활용 가능
- EDM 페이지(DCC-26)는 Jira 이슈로 실존 — 이메일 마크업 경험 포인트로 강조 가능. 이메일 클라이언트 호환 마크업은 퍼블리셔 고유 역량이므로 카드에서 별도 태그(`HTML Email`)로 노출 권장
