# Changelog

이 프로젝트의 주요 변경 이력입니다.

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
