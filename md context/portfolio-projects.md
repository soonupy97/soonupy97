# 권순우 — 웹 퍼블리셔 포트폴리오

> 포트폴리오 카드 UI 생성 및 Notion 정리에 사용할 구조화된 프로젝트 데이터입니다.
> 각 프로젝트는 독립적인 카드 단위로 설계되어 있습니다.
>
> **경력 사실(기간·소속·스택)의 1차 출처는 `경력기술서_권순우.txt`입니다.**
> 실제 사이트에 렌더되는 데이터는 `src/data/portfolio.ts`이며, 이 문서는 그 원본 자료입니다.

---

## 메타 정보

- **이름**: 권순우
- **직무**: 웹 퍼블리셔 (Web Publisher)
- **소속**: 위즈코어㈜ (구 ㈜캐디안 · CADian) · 클라우드 플랫폼팀 · 주임연구원
- **재직 기간**: 2024.04 ~ 현재
- **주요 기술**: HTML · CSS/SCSS · React · TypeScript · BEM · Figma
- **이슈 트래커**: Jira (cadian.atlassian.net) — 재직 기간 처리 이슈 500건 이상
- **레포지토리**: GitLab (gitlab.cadian.com)

> 제품·도메인·라이브러리 이름은 상호 변경과 무관하게 **캐디안/CADian** 표기를 유지합니다
> (cadian.com, @cadian/ui 등). 회사명만 위즈코어㈜입니다.

---

## 프로젝트 목록

### 1. cadian-ui — 공용 디자인 시스템

```yaml
id: DCC
name: "@cadian/ui 디자인 시스템 개발·운영"
site: design.cadian.com
url: https://design.cadian.com
repo: https://gitlab.cadian.com/CP/cadian-ui
period: 2026.04 ~ 2026.07
role: 웹 퍼블리셔 (단독 설계·구현)
status: in-progress
jira: DCC-1 ~
```

**한 줄 소개**
Cadian 서비스 전체에서 공유하는 공통 UI 컴포넌트 라이브러리와 문서 사이트를 Figma 기반으로 처음부터 단독 설계·구현하고 npm으로 배포·운영했습니다.

**구현 완료 컴포넌트**
- Foundations: Design style (color · spacing · radii) · Typography tokens · Layout
- Atoms: Icons · Buttons · Inputs · Selection · Badge · Indicator
- Blocks: Heading · Table · Aside · Header · Footer · Main · Section
- Overlays: Overlay · Tooltip · Modal Composite · Calendar Composite · Selected List
- Pages: Skeleton Page · Error Page · Notification · EDM Page · Body 페이지 레이아웃
- 컴포넌트 50여 종, v2.0 개편 후 30회 이상 릴리즈

**문서 사이트 (자체 구축 — Storybook 미사용)**
- Component Playground · API 문서 표 · 패턴 53종 · 템플릿 갤러리 9종 · 사이트 검색
- CSS Variables 디자인 토큰과 `data-theme` 다크모드 기본 제공

**EDM 페이지 제작 (DCC-26)**
- 이메일/뉴스레터·이벤트 프로모션용 EDM 페이지 컴포넌트 설계
- Figma 기반 레이아웃을 코드 컴포넌트로 구현 (퍼블리셔 단독 작업)
- 이메일 클라이언트 호환성을 고려한 마크업 구조 적용

**기술 스택**
`React` `TypeScript` `SCSS` `BEM` `Figma` `npm` `HTML Email`

**성과**
- Figma 컴포넌트와 1:1 대응하는 디자인 토큰 시스템 설계
- 중복 컴포넌트 통합(IconButton→Button 등)과 deprecated 정리로 API 표면 축소
- CADian Drive 전면 마이그레이션 직접 수행, Help Center v2 등 타 팀 신규 서비스의 UI 기반으로 채택
- 컴포넌트 단위 분할 빌드(트리셰이킹), GitLab CI 배포 파이프라인 운영

---

### 2. cadian-ui-admin — 어드민 디자인 시스템

```yaml
id: ADCC
name: "@cadian/ui-admin 어드민 디자인 시스템 개발·운영"
site: dev-admin-design.cadian.com
url: https://dev-admin-design.cadian.com
period: 2026.06 ~ 2026.07
role: 웹 퍼블리셔 (단독 구축)
status: in-progress
```

**한 줄 소개**
사내 어드민 서비스군의 공통 UI 기반이 되는 전용 컴포넌트 라이브러리를 초기 빌드부터 단독 구축하고 npm으로 배포·운영했습니다.

**주요 작업**
- 초기 빌드에서 컴포넌트 45종 · 문서 페이지 54종 구축
- Radix Primitives를 내장하되 산출물에는 자체 네이밍(`cd_a-`)만 노출되도록 치환하는 아키텍처 설계
- RichTextEditor를 CMS 에디터 수준으로 확장 — JSON 출력, 콜아웃·아코디언·표 커스텀 노드, 이미지 업로드·리사이즈, 하이퍼링크, 구문강조
- Sortable 교차 컨테이너 드래그(트리 부모 변경), TreeSelect · Transfer · Command 팔레트 구현
- 소비 서비스(헬프센터 어드민 CMS) 개발자 요청·이슈 14건을 요청 당일~익일 릴리즈로 해소
- 다크모드 · 한/영 다국어 문서 사이트 운영, 태그 기반 CI 자동 게시 파이프라인, 15회 이상 릴리즈

**기술 스택**
`React` `TypeScript` `SCSS` `npm` `Radix Primitives`

**소비 서비스**
통합 관리자 콘솔(SSO Admin) · WebCAD 관리 · 헬프센터 관리 등 사내 어드민 서비스군

---

### 3. organization.cadian.com — 조직 관리 콘솔

```yaml
id: OCC
name: organization.cadian.com 프론트엔드 개발
site: organization.cadian.com
url: https://organization.cadian.com
period: 2024 ~ 2026
role: 웹 퍼블리셔 / 프론트엔드
status: in-progress
jira: OCC-7 ~ OCC-446
```

> 경력기술서에는 `2026.03 ~ 2026.06`으로 적혀 있으나, Jira 이슈 범위(OCC-7 ~ OCC-446)와
> 사이트 표기는 장기 참여를 가리킵니다. **확인 후 한쪽으로 통일 필요.**

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
`React` `TypeScript` `SCSS` `SSO` `REST API` `i18n`

**성과**
- 조직 관리 전 기능을 단일 SPA로 구현 (OCC-7 ~ OCC-446 전 이슈 참여)
- rolecode 기반 권한 분기로 Owner / Admin / Member 역할별 UX 차별화
- QA 테스트 케이스 100건 이상 수정·반영

---

### 4. developers.cadian.com — ViewQ 개발자 문서 사이트

```yaml
id: DVC
name: ViewQ 개발자 문서 사이트 구축
site: developers.cadian.com
url: https://developers.cadian.com
period: 2025.07 ~ 2026.05
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
- API Reference / Document 페이지 구조화, 사이트 검색 구현
- Anchor Navigation 컴포넌트 개발 (페이지 스크롤 상태 실시간 연동)
- SSO 로그인 컴포넌트 개발 및 API 연동
- 환경변수 분리 (`.env.development` / `.env.production`)
- ESLint · Prettier 사내 표준 설정 + Git Hooks(Husky) 자동화
- 운영정책·이용약관 등 부속 페이지 정비

**기술 스택**
`React` `TypeScript` `SCSS` `WASM` `Vite` `ESLint` `Prettier` `Husky`

**성과**
- API 예제 25종 완전 완료
- Anchor Nav 스크롤 연동으로 문서 탐색 UX 개선
- 개발 환경 표준화로 팀 온보딩 비용 절감

---

### 5. mypage.cadian.com — 마이페이지 조직 관리

```yaml
id: MYP
name: 마이페이지 조직 관리 기능 구현
site: mypage.cadian.com
url: https://mypage.cadian.com
period: 2025 ~ 진행 중
role: 프론트엔드 퍼블리셔
status: in-progress
jira: MYP-55 ~ MYP-67
```

**한 줄 소개**
마이페이지 내 조직 생성 위자드·초대·권한 표기 기능의 UI 구현과 API 연동을 담당했습니다.

**주요 작업**
- 조직 생성 3단계 위자드 플로우 디자인 적용 (step 1 · 2 · 3) 및 사이드메뉴 수정
- 조직 API 서비스 레이어 구축 및 기존 마이페이지 코드베이스 병합
- 도메인 중복 체크 debounce 검증 로직 구현 및 API 연동
- 조직 초대 수락 · 에러 처리 UI
- 조직 목록 — rolecode 기반 사용자 권한 표기
- SSO authorize 연동, 신규 조직 생성 후 대시보드 이동 시 token 미전달 버그 수정

**기술 스택**
`React` `TypeScript` `SCSS` `SSO` `REST API`

---

### 6. SSO Admin — 계정·라이선스 통합 관리 콘솔

```yaml
id: SSOA
name: SSO 어드민 (계정·라이선스 통합 관리)
access: 사내 전용 (비공개)
period: 2024 ~ 2026
role: 웹 퍼블리셔 / 프론트엔드
status: in-progress
```

**한 줄 소개**
Cadian 계정과 라이선스를 통합 관리하는 사내 운영자 콘솔의 UI를 구축했습니다.

**주요 작업**
- **사용자 관리**: 정렬·검색·필터가 붙는 전체 사용자 테이블, 사용자 추가 폼, 엑셀 다운로드
- **시리얼 관리**: 시리얼 사용 이력, 권한코드(응용코드 · HDD 번호) 발급 정보
- **발주서 관리**: 발주서 리스트, 시리얼 등록 화면
- **조직 관리**: 전체·활성·정지·삭제 요약 카드, 조직명/도메인 검색과 상태 필터를 갖춘 조직 목록, 대행 생성
- **파트너사 관리**: 전체 파트너사 테이블(로고·주소·연락처), 파트너 등록 폼
- **NW 외부 사용 관리**: S/N 발급권한 ID 관리
- **리스트 관리**: 산업분야를 한/영 병기 카드 그리드로 배치, 추가·그룹추가·수정·삭제
- **환경설정**: 프로필 메뉴 추가/수정, 아이콘팩 리스트

**기술 스택**
`React` `TypeScript` `SCSS`

---

### 7. Help Admin — 헬프센터 운영자 콘솔

```yaml
id: HLPA
name: 헬프센터 운영자 콘솔 (CMS)
access: 사내 전용 (비공개)
period: 2026
role: 웹 퍼블리셔 / 프론트엔드
status: in-progress
```

**한 줄 소개**
헬프센터 도움말 문서를 운영하는 CMS 콘솔의 프론트엔드를 @cadian/ui-admin 기반으로 구축했습니다.

**주요 작업**
- **대시보드**: 도움됨/도움 안 됨 비율 Top10, 조회수 Top10, 일·주·월 및 날짜 지정 필터에 반응하는 전체 조회수 추이 차트
- **게시물 통계**: 조회수·피드백(네/아니오)·네 비율·공유·발행일 정렬 테이블, 기간·그룹·태그 필터
- **그룹 관리**: L1/L2 계층 카테고리 트리, 드래그 정렬(순위), 공개 여부 토글, 하위그룹·아티클·발행 수 집계
- **게시물 관리**: 초안/발행 상태 배지, 그룹·키워드 검색, 신규 작성과 리치 텍스트 문서 편집

**기술 스택**
`React` `TypeScript` `SCSS` `@cadian/ui-admin`

---

### 8. WebCAD Admin — 웹캐드 운영 관리자

```yaml
id: WCA
name: 웹캐드(WASM) 운영 관리자 콘솔
access: 사내 전용 (비공개)
period: 2025 ~ 2026
role: 웹 퍼블리셔 / 프론트엔드
status: in-progress
```

**한 줄 소개**
WASM 기반 웹캐드 서비스의 도입 고객사·도메인·라이선스 발급 로그를 관리하는 운영자 콘솔을 구축했습니다.

**주요 작업**
- **대시보드**: WASM·WebCAD 서비스별 요약 카드(고객사 · 도메인 · 서비스 로그 · 도면 수 · 폰트 · 유저), 일자별 로그 활동 차트
- **wasm 도메인 관리**: 온라인/오프라인(폐쇄망) 인증 방식 배지와 활성 상태를 표기하는 고객사 목록, 라이선스 발급 서비스 로그
- **웹캐드 관리**: 고객사별 CLIENT ID · API KEY 수 · PLAN 수 테이블, 고객사·클라이언트 등록
- **Naver Works 연동**: 클라이언트 관리, 도메인, 이벤트 콜백
- 보기·수정·삭제 액션과 검색 + 페이지네이션 패턴을 전 목록 화면에 통일

**기술 스택**
`React` `TypeScript` `SCSS`

---

### 9. Homepage Admin — 웹 통합 관리 시스템 V3.0

```yaml
id: HMPA
name: 홈페이지 웹 통합 관리 시스템
access: 사내 전용 (비공개)
period: 2024.04 ~ 진행 중
role: 웹 퍼블리셔
status: maintenance
```

**한 줄 소개**
캐디안 공식 홈페이지를 운영하는 통합 관리 시스템의 UI를 구축·유지보수했습니다. 10개 대메뉴 전부를 국문/영문 이중 구조로 운영합니다.

**주요 작업**
- **홈페이지 설정**: 배너, CADian·3rd Party 제품 소개, 주요 고객사, 사업분야, 추천 키워드
- **구매관리**: 결제 내역, 장바구니 제품 공지
- **견적 요청**: 자동·상담·업그레이드·용역개발 견적, 카탈로그 다운로드 접수 처리
- **커뮤니티**: 공지사항 · 뉴스 · 이벤트 게시판
- **기술지원**: FAQ(일반/개발자), 질문과 답변, 자료실, 동영상 강좌, 교육 리스트·신청 관리
- **파트너센터**: 파트너 문의, 영업보호 신청, 파트너사 자료실
- **회사소개**: 기업연혁, 수상/인증, 문의하기
- **팝업관리**: 사이트 팝업 등록과 노출 기간 제어
- 모든 메뉴에 국문/영문 관리 화면 대응

**기술 스택**
`PHP 템플릿` `HTML` `CSS` `다국어(한/영)`

---

### 10. converter.cadian.com — 파일 컨버터 서비스

```yaml
id: CVT
name: converter.cadian.com 디자인·퍼블리싱
site: converter.cadian.com
url: https://converter.cadian.com
period: 2024.12 ~ 2025.03
role: 웹 퍼블리셔
status: done
jira: CVT-4 ~ CVT-57
```

**한 줄 소개**
CAD 파일을 이미지·PDF로 변환하는 서비스의 단계별 UI를 설계·퍼블리싱했습니다.

**주요 작업**
- 업로드 → 변환 진행 → 다운로드 흐름 구성, 진행률·상태 피드백 UI
- 파일 업로드 영역 UI 개선 퍼블리싱, 업로드 영역 깨짐 버그 수정
- 컨버터 확장자 리스트 디자인 시안 제작 및 퍼블리싱
- 글로벌 네비게이션 추가 및 기능 구현, 푸터 구성 변경
- 비로그인 상태 브라우저 알럿 UI 추가
- Pricing 페이지 영문 텍스트·아이콘 수정, 헤더 언어 설정·404 페이지 디자인 수정
- 파일 변환 시나리오 직접 테스트 후 가이드 문서화

**기술 스택**
`React` `SCSS` `다국어(한/영)`

**성과**
- 파일 업로드 UX 개선 및 다국어(한/영) 대응 UI 완성
- 글로벌 네비게이션 도입으로 서비스 일관성 확보

---

### 11. file.cadian.com — CADian Drive

```yaml
id: FMS
name: CADian Drive 퍼블리싱 · 디자인 시스템 적용 · 문서 뷰어 연동
site: file.cadian.com
url: https://file.cadian.com
period: 2024.10 ~ 2026.07
role: 프론트엔드 퍼블리셔
status: in-progress
jira: FMS-405, FMS-406
```

**한 줄 소개**
클라우드 파일 드라이브 서비스의 UI 구조를 설계·퍼블리싱하고, 2026년에는 직접 만든 디자인 시스템을 전면 적용했습니다.

**주요 작업**
- 파일 드라이브 서비스의 UI 구조 설계·퍼블리싱
- Drag & Drop, 파일 리스트 등 파일 탐색·관리 인터페이스 구현
- 모바일·태블릿 반응형, 인터랙션 퍼블리싱
- @cadian/ui 전면 적용 마이그레이션 — 레이아웃·헤더·사이드바·테이블·모달·대시보드·파일 화면 재구축
- 디자인 시스템 2.8 → 2.10 연속 업그레이드 대응
- 드라이브 시스템 내 문서 뷰어 연동 프로젝트 초기 구축 (완료), Polaris Office 뷰어 통합 진행 중
- GNB·외부 저장소·구독 결제 스토리보드 작성 등 기획 참여

**기술 스택**
`React` `TypeScript` `SCSS` `Polaris Office Viewer`

---

### 12. www.cadian.com — 캐디안 공식 홈페이지

```yaml
id: HMP
name: www.cadian.com 홈페이지 유지보수
site: www.cadian.com
url: https://www.cadian.com
period: 2024.04 ~ 진행 중
role: 웹 퍼블리셔
status: in-progress
jira: HMP-320 ~ HMP-328
```

**한 줄 소개**
캐디안 공식 홈페이지의 콘텐츠 업데이트 및 UI 유지보수를 담당했습니다.

**주요 작업**
- 시맨틱 HTML·CSS 퍼블리싱, 반응형 최적화
- 헤더/GNB 구조 개편, 서비스 간 헤더·스타일시트 공통화
- GNB 파트너센터 구성 변경, CEO 인사말 변경
- AI 솔루션 개발 페이지 콘텐츠 수정, 제품 비교 CAD 기능 비교표 수정
- Find Local Partners 영문 페이지 수정
- 제품 신청·구매 페이지 배송지 항목 숨김 처리
- 모바일 햄버거 메뉴 깨짐 버그 대응
- 상호명 변경(위즈코어㈜) 전사 반영

**기술 스택**
`PHP 템플릿` `HTML` `CSS` `GSAP` `Swiper` `다국어(한/영)`

---

### 13. drawing.cadian.com — ViewQ 웹 CAD 뷰어

```yaml
id: VMS
name: ViewQ 웹 CAD 뷰어 디자인·퍼블리싱
site: drawing.cadian.com
url: https://drawing.cadian.com
period: 2024.11 ~ 2026.01
role: 웹 퍼블리셔 / 디자인
status: in-progress
jira: VMS-83 ~ VMS-98
```

**한 줄 소개**
WebCAD 뷰어&에디터 서비스(ViewQ)의 전체 화면을 디자인하고 퍼블리싱했습니다. `developers.cadian.com`이 문서화하는 ViewQ SDK의 뷰어 제품입니다.

**주요 작업**
- 전체 화면 디자인·퍼블리싱, 리본 메뉴 아이콘 체계 제작
- 레이어 토글·줌·팬 등 도면 뷰어 전용 인터랙션 UI
- PDF Plot/Export UI, 카메라 컨트롤 커서 등 CAD 특화 요소 디자인
- 리본 메뉴 프리 드로우(스케치) 항목 추가 및 아이콘 디자인
- MTEXT(다중행 문자) text area 디자인 수정
- 모바일 가로모드 등 해상도 대응, 한/영 번역 오류 수정

**기술 스택**
`React` `TypeScript` `SCSS` `SVG` `다국어(한/영)`

---

### 14. Help Center — 사용자 지원 포털

```yaml
id: HLP
name: Help Center 퍼블리싱
period: 2024.11 ~ 2025.01
role: 웹 퍼블리셔
status: done
```

**한 줄 소개**
MkDocs 기반 사용자 지원 포털을 퍼블리싱하고 디자인을 커스터마이징했습니다.

**주요 작업**
- FAQ·튜토리얼·업데이트 내역을 검색 중심 구조로 재구성
- 통합 검색 결과 페이지 국문/영문 제작

**기술 스택**
`HTML` `CSS` `MkDocs` `다국어(한/영)`

---

### 15. News Letter eDM — 이메일 마크업

```yaml
id: EDM
name: 자사 홍보성 eDM 퍼블리싱
period: 2024.04 ~ 진행 중
role: 웹 퍼블리셔 (단독 제작)
status: ondemand
```

**한 줄 소개**
월간 뉴스레터와 프로모션 eDM을 단독으로 제작·발송했습니다.

**주요 작업**
- 월간 뉴스레터 정기 퍼블리싱·발송, 프로모션 eDM 다수 제작
- 인라인 CSS, 테이블 레이아웃 기반 반응형 메일 제작
- Gmail · Outlook · 네이버 등 메일 클라이언트별 호환성 확인 후 발송
- cadian-ui 디자인 토큰과 시각 일관성 유지

**기술 스택**
`HTML` `CSS` `Figma` `HTML Email`

---

### 16. AI 에이전트 기반 릴리즈 워크플로우

```yaml
id: AIW
name: Claude Code · MCP 기반 릴리즈 파이프라인 구축·운영
period: 2026.04 ~ 2026.07
role: 단독 구축·운영
status: in-progress
```

**한 줄 소개**
Jira·GitLab·Slack을 MCP로 연동해 이슈 생성부터 배포·팀 공유까지 이어지는 릴리즈 파이프라인을 자동화했습니다. 상세 내용은 `ai-usage.md` 참고.

**기술 스택**
`Claude Code` `MCP`

---

## 프로젝트 도메인 목록

| 프로젝트 | 도메인 | URL |
|---|---|---|
| cadian-ui 디자인 시스템 | design.cadian.com | https://design.cadian.com |
| cadian-ui-admin 어드민 디자인 시스템 | dev-admin-design.cadian.com | https://dev-admin-design.cadian.com |
| organization | organization.cadian.com | https://organization.cadian.com |
| developers | developers.cadian.com | https://developers.cadian.com |
| converter | converter.cadian.com | https://converter.cadian.com |
| mypage | mypage.cadian.com | https://mypage.cadian.com |
| file drive | file.cadian.com | https://file.cadian.com |
| 공식 홈페이지 | www.cadian.com | https://www.cadian.com |
| web cad (ViewQ) | drawing.cadian.com | https://drawing.cadian.com |
| SSO Admin · Help Admin · WebCAD Admin · Homepage Admin | — | 사내 전용 (비공개) |

---

## 카드 데이터 작성 규칙

포트폴리오 사이트의 실제 데이터는 `src/data/portfolio.ts`의 `projects` 배열입니다.
카드 한 장은 아래 필드로 구성됩니다.

| 필드 | 내용 |
|---|---|
| `type` | 필터 탭 — `console` / `admin` / `devtool` / `marketing` / `viewer` |
| `access` | `public` / `auth`(로그인 필요) / `private`(비공개) |
| `status` | `live`(운영 중) / `wip`(개발 중) / `maintenance`(유지보수) / `ondemand`(수시 제작) |
| `year` | 기간 표기 |
| `link` | 사이트 URL (비공개 프로젝트는 생략) |
| `media` | 데모 영상 — 로그인 게이트·비공개라 사이트 방문 CTA가 막힌 프로젝트용 |
| `highlights` | 주요 작업 bullet |
| `stack` | 기술 스택 태그 |

**표기 규칙**
- i18n 관련 태그는 `다국어`로 통일
- 회사명은 위즈코어, 제품·도메인·라이브러리는 캐디안/CADian 유지
- 노코드·템플릿 기반 사이트는 포함하지 않음 (손코딩 craft가 희석됨)

---

## Notion 정리용 추가 메모

- DVCC는 DVC의 백업/이관 프로젝트 — 포트폴리오에서는 DVC로 통합 표기 권장
- OCC는 이슈 번호 범위(OCC-7 ~ OCC-446)로 보아 규모가 가장 큰 핵심 프로젝트
- DCC(cadian-ui)·ADCC(cadian-ui-admin)는 단독 오너십 — "설계부터 구현까지 1인 담당" 문구 강조 권장
- WASM 연동(DVC)은 CAD 도메인 특수 기술 — 차별화 포인트
- OCC QA 테스트 케이스(TC-ORG*)는 품질 기여 근거로 활용 가능
- EDM 페이지(DCC-26)는 Jira 이슈로 실존 — 이메일 클라이언트 호환 마크업은 퍼블리셔 고유 역량이므로 별도 태그(`HTML Email`)로 노출 권장
- 어드민 4종(SSO · Help · WebCAD · Homepage)은 전부 비공개라 **데모 영상이 유일한 근거 자료** — `public/media/admin-*.mp4`
