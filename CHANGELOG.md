# Changelog

이 프로젝트의 주요 변경 이력입니다.

## [1.5.0] — 2026-06-28

### 콘텐츠 · 브랜딩 · 배포 준비

- 표시 이름 **John.K**로 통일, 태그라인·연락처(이메일만) 정리
- 애니메 스타일 프로필 이미지 및 OG 공유 이미지(`og-image.png`) 추가
- Open Graph / Twitter Card 메타 태그 (카카오톡 링크 미리보기)

### 프로젝트 · 경력

- 실제 프로젝트 7개 등록, Live Demo URL 연결
- `ProjectCarousel.jsx` — 모바일 4개+더보기, 데스크톱 6개 슬라이드 캐러셀
- 이력서 기반 경력 10건, 22년+ 라벨, 기술 스택·성과 상세 보강
- 경력 섹션 데스크톱 내부 스크롤 + 스크롤 체이닝

### UI / UX

- Intro 모바일·PC 레이아웃 조정 (헤드라인, CTA, 프로필 간격)
- `ScrollToTopButton` 추가
- 경력 섹션 설명 2줄 고정 표시
- 푸터 단순화 (`© {year} John.K`)

자세한 작업 기록: [docs/WORKLOG-2026-06-28.md](docs/WORKLOG-2026-06-28.md)

---

## [1.4.0] — 2026-06-26

### Experience 섹션 리디자인

- 버티컬 타임라인 (`border-l-2 border-slate-800`) 적용
- 2단 분할: 왼쪽 기간·직무·SI 배지 / 오른쪽 업무 성과
- 에메랄드 체크 아이콘 성과 목록
- 경력 카드 하단 기술 태그 (`PHP 8.4`, `MariaDB` 등) 노출
- `portfolio.js`에 `sector`, `tech` 필드 추가

---

## [1.3.0] — 2026-06-26

### Project 카드 UI 개편

- `ProjectCard.jsx` 컴포넌트 분리
- 네온 카테고리 라벨 (`FLUTTER APP`, `GODOT GAME`, `REACT WEBAPP`)
- 호버 시 `scale-[1.02]` + 에메랄드/스카이 테두리·그림자
- **Live Demo** (filled) / **GitHub Code** (outline) CTA 버튼

---

## [1.2.0] — 2026-06-26

### Hero · Tech Stack 업그레이드

- Hero 2열 레이아웃 (아이덴티티 + 프로필 이미지 영역)
- 대형 헤드라인: *"플랫폼을 넘나드는 솔루션 빌더, 개발자 강진모입니다."*
- `TechBadge.jsx` — 인터랙티브 기술 배지 스타일
- `skillBadges` 데이터 분리
- 프로필 정보 업데이트: 강진모, ilovejs97@gmail.com

---

## [1.1.0] — 2026-06-26

### 테크 다크모드 테마 전면 개편

- 배경 `#0B0F19` + `GlowBackground` 글로우·그리드 패턴
- Slate 팔레트 + Emerald/Sky 포인트 컬러
- Sticky 글래스모피즘 네비게이션
- 섹션 순서 재배치: Hero → Tech → Projects → Experience → Contact
- `max-w-5xl` 레이아웃 확장

---

## [1.0.1] — 2026-06-26

### GitHub Pages 배포

- `.github/workflows/deploy.yml` GitHub Actions 워크플로우
- `vite.config.js` `base: '/Portfolio/'` 설정
- README 배포 가이드 추가

---

## [1.0.0] — 2026-06-26

### 초기 프로젝트 생성

- Vite + React + Tailwind CSS 4 스캐폴딩
- 섹션: 소개, 기술스택, 회사경력, 개인프로젝트, 연락처
- `portfolio.js` 데이터 분리 구조
- GitHub 저장소 생성 및 최초 push
