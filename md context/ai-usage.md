# AI 활용 사례 — 권순우

> Jira 이슈 이력과 Slack 메시지 기록을 기반으로 실제 활용 사례를 정리한 문서입니다.
> 추측이나 일반론이 아닌, 실제 작업 기록에서 추출한 내용입니다.

---

## 사용 도구

| 도구 | 활용 영역 |
|---|---|
| **Claude Code** | 컴포넌트 구현 · Slack 자동 전송 · Jira 데이터 분석 · 리팩토링 · 문서 작성 |
| **Figma MCP** | Figma 디자인 스펙 직독 · node ID 기반 컴포넌트 추적 · 업데이트 반영 자동화 |
| **MCP (Model Context Protocol)** | Slack · Jira · Figma · GitLab 등 외부 서비스와 Claude Code 직접 연동 |

---

## 핵심 워크플로우

### Figma → 코드 → Slack 자동화 파이프라인

Claude Code를 단순한 코드 생성 도구가 아닌 **개발 워크플로우 전체를 자동화하는 도구**로 활용했습니다.

```
Figma 스펙 확인
     ↓
Claude Code로 컴포넌트 구현
(TSX + SCSS + Storybook 스토리)
     ↓
Slack MCP로 #x-design 채널에 작업 완료 자동 전송
     ↓
GitLab MR 생성 (브랜치명 · 제목 · 설명 자동 작성)
```

모든 작업 공유 메시지 말미의 `🤖 sent via Claude Code`는 이 파이프라인의 결과물입니다.

---

## 활용 사례

---

### 1. 디자인 시스템 컴포넌트 구현 자동화

**배경**
cadian-ui 디자인 시스템을 단독으로 구축하며, Figma 컴포넌트를 코드로 변환하는 반복 작업이 많았습니다.

**활용 방식**
- Figma 컴포넌트의 Variant · Props · 토큰 정보를 입력하면 `TSX + SCSS + Storybook stories` 초안 생성
- BEM 클래스명 · 디자인 토큰 네이밍 컨벤션을 사전 지정하면 일관된 구조로 출력
- Figma 업데이트 반영 시 변경된 스펙만 설명하면 해당 부분만 수정

**Slack 기록으로 확인된 구현 컴포넌트 (Claude Code 활용)**

| 컴포넌트 | 브랜치 | 주요 내용 |
|---|---|---|
| Accordion | DCC-62 | plain · card · filled · compact 4가지 Variant, 토큰 11개 |
| Avatar | DCC-63 | Type × Status × Size 조합, 토큰 6개 |
| Divider | DCC-64 | Orientation × Style × Label, 토큰 7개 |
| ProgressBar | DCC-65 | Semantic × Size × Value, 토큰 12개 |
| Tabs | DCC-67 | Tabs + TabPanel, 상태별 Figma 색상 매핑, 토큰 13개 |
| Tag | DCC-68 | 7가지 색상, Dismissible · Selectable 인터랙션 |
| Skeleton | DCC-24 | Shape × Size × Tone, pulse 애니메이션, 스토리 17개 |
| ErrorPage | DCC-25 | 404 · 401 · 403 · 500 에러 코드 대응 |
| Breadcrumb | — | items · size Props, aria-current 자동 처리 |
| Body 레이아웃 | DCC-71 | SideNav + Main + AnchorNav 3컬럼 구조, 모바일 분기 |

**성과**
- 컴포넌트 초안 생성 시간 단축 → 검토·수정·Figma 정합성 확인에 집중
- 스토리북 스토리 파일 반복 구조를 자동 생성하여 문서화 누락 방지

---

### 2. Slack MCP 연동 — 작업 완료 자동 알림

**배경**
컴포넌트 구현 후 팀에 공유하는 메시지를 매번 수동 작성하던 비용을 줄이고, 포맷 일관성을 유지하고 싶었습니다.

**활용 방식**
- Claude Code에 Slack MCP를 직접 설정하고 연동 테스트 진행 (DM 자가 테스트 확인)
- 작업 완료 시 아래 정보가 자동 포함된 메시지를 #x-design 채널로 전송

```
[작업: 컴포넌트명 구현 완료]
• 구현 파일 목록 (TSX / SCSS / Storybook)
• Figma 매핑 정보 (Variant · Props · 색상값)
• 브랜치명
🤖 sent via Claude Code
```

- Figma 업데이트 반영 시에는 변경 전후 값을 비교하는 별도 포맷으로 전송
- 메시지에 레포지토리 정보(repo URL)가 누락된 문제를 스스로 발견하고, 스레드 추가 댓글로 개선 조치 (2026-05-08 기록)

**성과**
- 작업 공유 메시지 작성 시간 제거
- 팀 내 작업 내역 포맷 표준화

---

### 3. Figma MCP 연동 — 디자인 직독(直讀) 구현

**배경**
컴포넌트 구현 시 Figma 스펙을 텍스트로 옮겨 Claude에게 전달하는 과정이 번거롭고, 스펙 누락 또는 오독의 위험이 있었습니다.

**활용 방식**
- Claude Code에 Figma MCP를 연결하여 Figma URL · node ID만으로 디자인 스펙 직접 조회
- Figma 컴포넌트의 Variant · 색상값 · 간격 · 반경 값을 자동으로 읽어 코드에 반영
- Slack 메시지에 기록된 Figma node ID(`4381:3060`, `3394:9380` 등)를 추적 근거로 활용

```
Figma URL / node ID 입력
         ↓
Claude Code → Figma MCP → 스펙 자동 추출
         ↓
TSX Props · SCSS 토큰 · Storybook Variant에 직접 반영
```

**Slack 기록으로 확인된 Figma 직독 사례**

| 컴포넌트 | Figma node | 반영 내용 |
|---|---|---|
| Body | 4381:3060 | SideNav · Main · AnchorNav 3컬럼 레이아웃 |
| AnchorNav | 3394:9380 | 신규 구현, 컬럼 폭 144px → 192px |
| SideMenuSubItem | 3136:4221 | hover: 배경 없음, bold 처리 |
| SideNav 래퍼 | 3222:5057 | padding pl:32 / pr:0 / py:32 |
| LayoutShell | — | body gap 0, 컬럼별 padding 구조 전환 |

**Figma 업데이트 반영 워크플로우**
- Figma 디자인 변경 → Claude Code에 변경 포인트만 설명
- Claude가 기존 코드에서 해당 부분만 수정 → 변경 전후 diff 확인
- 수정 완료 후 `[작업: Figma 업데이트 반영]` 포맷으로 Slack 자동 전송

**성과**
- Figma 스펙 수동 옮기기 과정 제거 → 오독·누락 위험 감소
- Figma 변경 반영 → 코드 수정 → 팀 공유까지 한 흐름으로 처리

---

### 4. SCSS 중복 제거 및 mixin 추출 리팩토링

**배경**
컴포넌트가 늘어나면서 `inline-flex + center`, `focus-ring`, `button-reset`, `truncate` 같은 스타일 패턴이 여러 파일에 중복 작성되고 있었습니다.

**활용 방식**
- 전체 SCSS 파일을 분석하여 반복 패턴 탐지 요청
- 공통 mixin으로 추출할 후보 목록 제안 → 직접 검토 후 채택 결정
- `_typography.scss`에 4개 mixin 추가, 10개 컴포넌트 파일 일괄 적용

**추출된 mixin (Slack 기록 확인)**
- `cd-flex-center` — inline-flex / align-items / justify-content: center
- `cd-focus-ring` — 키보드 포커스 링 ($radius, $offset 파라미터)
- `cd-button-reset` — 브라우저 버튼 크롬 초기화
- `cd-truncate` — 한 줄 텍스트 말줄임

**성과**
- 10개 컴포넌트 파일에서 중복 스타일 제거
- 이후 신규 컴포넌트 작성 시 mixin 재사용으로 코드 일관성 유지

---

### 4. Jira 데이터 분석 — 포트폴리오 자동 생성

**배경**
2년치 프로젝트 경력을 포트폴리오로 정리해야 하는데, 어떤 프로젝트에서 어떤 작업을 했는지 기억과 기록이 분산되어 있었습니다.

**활용 방식**
- Claude Code에 Jira MCP 연결 → 전체 프로젝트 목록(25개) 일괄 조회
- 담당자·보고자·팔로워 기준 3가지 조건으로 관련 이슈 전수 검색
- 검색된 이슈를 프로젝트별로 분류 · 주요 작업 요약
- 구조화된 `.md` 파일(카드 UI 가이드 포함)로 자동 정리
- 경력기술서 · 자기소개서까지 한 세션 내에서 완성

**결과**
- 8개 서비스, 300건 이상의 이슈에서 포트폴리오 데이터 자동 추출
- 기억에서 누락된 프로젝트(OCC, CVT 등) 발굴
- 포트폴리오 · 경력기술서 · 자기소개서 · AI 활용 문서까지 한 번에 생성

---

### 5. MCP 서버 직접 설정 및 자동 복구

**배경**
Jira · Slack · GitLab 등 다양한 서비스를 Claude Code에서 직접 제어하기 위해 MCP 서버를 직접 설정하고 관리했습니다.

**활용 방식**
- Slack MCP: Claude Code에서 Slack 채널로 직접 메시지 전송 설정
- Jira MCP (`@rui.branco/jira-mcp`): 인증 정보 설정 및 연결 불안정 시 자동 복구 스크립트 구성
- GitLab MCP: MR 생성 자동화 연동

**성과**
- AI 도구와 실무 협업 도구(Slack · Jira · GitLab)를 하나의 워크플로우로 통합
- MCP 연결 오류 발생 시 복구 절차를 문서화하여 반복 작업 최소화

---

## AI 활용 원칙

```
1. AI는 반복·구조적 작업을 담당하고, 판단·검토·확정은 내가 직접 한다.
2. 생성된 코드는 반드시 Figma 스펙과 대조하여 직접 검증 후 사용한다.
3. 워크플로우 자동화는 포맷을 먼저 정의하고, AI가 그 포맷을 따르도록 설정한다.
4. AI가 틀리거나 부족하면 즉시 수정 지시하고, 결과물의 정확도는 내가 책임진다.
```

---

## 요약

| 활용 영역 | AI 역할 | 내 역할 | 근거 |
|---|---|---|---|
| 컴포넌트 구현 | Figma 스펙 → TSX·SCSS·Storybook 초안 | Figma 정합성 검토 · 수정 · 확정 | Slack #x-design 기록 |
| 작업 공유 자동화 | Slack MCP로 포맷 메시지 자동 전송 | 전송 전 내용 확인 | `sent via Claude Code` 메시지 다수 |
| SCSS 리팩토링 | 중복 패턴 탐지 · mixin 추출 초안 | 채택 여부 결정 · 적용 범위 확정 | Slack 리팩토링 공유 메시지 |
| 포트폴리오 생성 | Jira 전수 검색 · 분류 · 요약 | 사실 확인 · 추가 지시 | 오늘 세션 |
| Figma 스펙 직독 | Figma MCP로 node 스펙 자동 추출 · 코드 반영 | Figma 정합성 최종 확인 | Slack 메시지 내 Figma node ID 기록 |
| MCP 인프라 설정 | 연동 스크립트 · 복구 절차 | 설정 확인 · 적용 결정 | Jira·Slack·Figma MCP 설정 기록 |
