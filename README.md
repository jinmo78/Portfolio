# Portfolio

강진모 — Full-Stack Developer 포트폴리오 웹사이트

React + Tailwind CSS 기반의 테크 감성 다크모드 포트폴리오입니다.

- **Live:** https://jinmo78.github.io/Portfolio/
- **문서:** [docs/PROJECT.md](docs/PROJECT.md)
- **변경 이력:** [CHANGELOG.md](CHANGELOG.md)

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.

### 최초 1회 설정

1. [Settings → Pages](https://github.com/jinmo78/Portfolio/settings/pages) → **Source: GitHub Actions**
2. 저장소가 **Public**이어야 합니다

## 기술 스택

- React 19 · Vite 8 · Tailwind CSS 4
- GitHub Actions · GitHub Pages

## 콘텐츠 수정

`src/data/portfolio.js`에서 프로필, 경력, 프로젝트, 기술 스택을 수정합니다.

자세한 구조·디자인 가이드·필드 설명은 [docs/PROJECT.md](docs/PROJECT.md)를 참고하세요.

## 프로젝트 구조 (요약)

```
src/
├── components/
│   ├── layout/     Header, Footer
│   ├── sections/   Intro, TechStack, Projects, Experience, Contact
│   └── ui/         GlowBackground, TechBadge, ProjectCard, SectionHeading
└── data/
    └── portfolio.js   ← 모든 콘텐츠 데이터
```
