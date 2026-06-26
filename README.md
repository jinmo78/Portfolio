# Portfolio

React + Tailwind CSS 기반 개발자 포트폴리오 웹사이트입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.

- **Live:** https://jinmo78.github.io/Portfolio/

### 최초 1회 설정 (필수)

404가 나오면 아래 설정이 빠진 경우입니다.

1. [Settings → Pages](https://github.com/jinmo78/Portfolio/settings/pages) 이동
2. **Build and deployment** → **Source**를 **GitHub Actions**로 선택
3. [Actions](https://github.com/jinmo78/Portfolio/actions) 탭에서 실패한 워크플로우 **Re-run all jobs** 클릭

배포 완료까지 1~3분 정도 걸릴 수 있습니다.

## 기술 스택

- React 19
- Vite 8
- Tailwind CSS 4

## 콘텐츠 수정

`src/data/portfolio.js`에서 이름, 경력, 프로젝트 정보를 수정할 수 있습니다.
