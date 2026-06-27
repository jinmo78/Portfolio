# 프로젝트 문서

강진모 개발자 포트폴리오 웹사이트의 구조, 디자인, 콘텐츠 관리 방법을 정리한 문서입니다.

## 개요

| 항목 | 내용 |
|------|------|
| **목적** | SI 웹 개발 및 개인 프로젝트(Flutter, Godot, React) 경력을 소개하는 포트폴리오 |
| **기술 스택** | React 19, Vite 8, Tailwind CSS 4 |
| **배포** | GitHub Pages (GitHub Actions 자동 배포) |
| **Live URL** | https://jinmo78.github.io/Portfolio/ |
| **저장소** | https://github.com/jinmo78/Portfolio |

---

## 폴더 구조

```
portfolio/
├── .github/workflows/deploy.yml   # GitHub Pages 자동 배포
├── public/                        # 정적 파일 (favicon, 프로필 이미지 등)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx         # Sticky 글래스모피즘 네비게이션
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Intro.jsx          # Hero (소개)
│   │   │   ├── TechStack.jsx      # 기술 스택 배지
│   │   │   ├── Projects.jsx       # 개인 프로젝트 목록
│   │   │   ├── Experience.jsx     # 회사 경력 타임라인
│   │   │   └── Contact.jsx        # 연락처
│   │   └── ui/
│   │       ├── GlowBackground.jsx # 배경 글로우·그리드
│   │       ├── SectionHeading.jsx # 섹션 공통 헤더
│   │       ├── TechBadge.jsx      # 기술 스택 배지
│   │       └── ProjectCard.jsx    # 프로젝트 카드
│   ├── data/
│   │   └── portfolio.js           # ★ 모든 콘텐츠 데이터
│   ├── App.jsx
│   ├── index.css                  # 글로벌 스타일·테마
│   └── main.jsx
├── index.html
├── vite.config.js                 # base: '/Portfolio/' (GitHub Pages)
└── package.json
```

---

## 페이지 섹션 구성

스크롤 순서:

1. **Navbar** — 상단 고정, 앵커 링크 네비게이션
2. **Hero (소개)** — 아이덴티티 헤드라인 + 프로필 이미지 영역
3. **Tech Stack** — 인터랙티브 기술 배지 클라우드
4. **Projects** — Flutter / Godot / React 프로젝트 카드
5. **Experience** — SI 웹 개발 경력 버티컬 타임라인
6. **Contact** — 이메일, GitHub, LinkedIn

---

## 디자인 가이드라인

### 컬러

| 용도 | Tailwind 클래스 |
|------|-----------------|
| 베이스 배경 | `#0B0F19` (`--color-base`) |
| 카드 배경 | `bg-slate-900` |
| 테두리 | `border-slate-800` |
| 본문 텍스트 | `text-slate-400` |
| 제목 | `text-slate-50`, `font-bold`, `tracking-tight` |
| 포인트 (에메랄드) | `text-emerald-400` — 라벨, CTA, 체크 아이콘 |
| 포인트 (스카이) | `text-sky-400` — 보조 강조, 기간, 아이콘 |

### 공통 UI 패턴

- **네비게이션**: `sticky top-0 backdrop-blur-md bg-slate-900/60`
- **섹션 구분**: `border-t border-slate-800/50`
- **카드 호버**: `hover:scale-[1.02] duration-300` + 테두리·그림자 강조
- **배지**: `bg-slate-800/50 border-slate-700` + `hover:-translate-y-0.5`

### 폰트

- **본문**: Inter (`--font-sans`)
- **코드·라벨**: JetBrains Mono (`--font-mono`)

---

## 섹션별 상세

### Hero (`Intro.jsx`)

- 2열 레이아웃: 왼쪽 아이덴티티 텍스트, 오른쪽 프로필 영역
- 헤드라인 예시: *"플랫폼을 넘나드는 솔루션 빌더, 개발자 강진모입니다."*
- 프로필 이미지 미설정 시 이니셜 플레이스홀더 표시

### Tech Stack (`TechStack.jsx` + `TechBadge.jsx`)

- 카테고리 카드 대신 **배지 클라우드** 형태
- `skillBadges` 배열에서 기술명·accent 색상 관리

### Projects (`Projects.jsx` + `ProjectCard.jsx`)

- 카테고리 네온 라벨: `FLUTTER APP`, `GODOT GAME`, `REACT WEBAPP`
- 하단 CTA: **Live Demo** (filled) + **GitHub Code** (outline)

### Experience (`Experience.jsx`)

- `border-l-2 border-slate-800` 버티컬 타임라인
- 왼쪽: 기간 · 직무 · SI 배지 · 회사명
- 오른쪽: 설명 · 에메랄드 체크 아이콘 성과 목록 · 기술 태그

### Contact (`Contact.jsx`)

- 이메일 / GitHub / LinkedIn 버튼

---

## 콘텐츠 수정 가이드

모든 텍스트 데이터는 **`src/data/portfolio.js`** 한 곳에서 관리합니다.

### 프로필 정보

```javascript
export const site = {
  name: '강진모',
  identityLead: '플랫폼을 넘나드는 솔루션 빌더,',
  identityTail: '개발자',
  tagline: '...',
  email: 'ilovejs97@gmail.com',
  github: 'https://github.com/jinmo78',
  linkedin: 'https://linkedin.com/in/...',
  profileImage: '/profile.jpg',  // public/ 폴더에 이미지 추가 후 경로 지정
}
```

### 기술 스택 배지 추가

```javascript
export const skillBadges = [
  { name: 'React', accent: 'emerald' },  // emerald | sky
  // ...
]
```

### 프로젝트 추가

```javascript
{
  title: '프로젝트명',
  category: 'Flutter',           // Flutter | Godot | React
  categoryLabel: 'FLUTTER APP',  // 카드 상단 네온 라벨
  description: '...',
  tech: ['Flutter', 'Dart'],
  link: 'https://...',
  github: 'https://github.com/...',
}
```

### 경력 추가

```javascript
{
  company: '회사명',
  role: '웹 개발자',
  sector: 'SI',
  period: '2022 — 현재',
  description: '...',
  highlights: ['성과 1', '성과 2'],
  tech: ['PHP 8.4', 'MariaDB'],
}
```

---

## 로컬 개발

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ 프로덕션 빌드
npm run preview    # 빌드 결과 미리보기
```

---

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 실행되어 GitHub Pages에 자동 배포됩니다.

### 사전 조건

1. 저장소가 **Public**이어야 함
2. Settings → Pages → Source: **GitHub Actions**

### Vite base 경로

GitHub Pages 프로젝트 사이트이므로 `vite.config.js`에 `base: '/Portfolio/'`가 설정되어 있습니다.

---

## 변경 이력

자세한 커밋별 기록은 [CHANGELOG.md](../CHANGELOG.md)를 참고하세요.
