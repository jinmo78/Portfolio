export const site = {
  name: '홍길동',
  role: 'Full-Stack Developer',
  tagline: 'SI 웹 개발과 개인 프로젝트를 병행하는 풀스택 개발자',
  email: 'hello@example.com',
  github: 'https://github.com/yourname',
  linkedin: 'https://linkedin.com/in/yourname',
}

export const navItems = [
  { id: 'intro', label: '소개' },
  { id: 'tech', label: '기술스택' },
  { id: 'experience', label: '회사경력' },
  { id: 'projects', label: '프로젝트' },
  { id: 'contact', label: '연락처' },
]

export const techStack = [
  {
    category: '업무 (SI)',
    items: ['PHP', 'MariaDB', 'JavaScript', 'HTML/CSS', 'Linux'],
  },
  {
    category: '프론트엔드',
    items: ['React', 'Tailwind CSS', 'Flutter', 'Dart'],
  },
  {
    category: '백엔드 & DB',
    items: ['Node.js', 'REST API', 'MariaDB', 'MySQL'],
  },
  {
    category: '게임 & 기타',
    items: ['Godot', 'GDScript', 'Git', 'Figma'],
  },
]

export const experiences = [
  {
    company: 'OO SI 업체',
    role: '웹 개발자',
    period: '2022 — 현재',
    description:
      'PHP·MariaDB 기반 웹 서비스 유지보수 및 신규 기능 개발. 레거시 코드 리팩토링과 API 연동 경험.',
    highlights: ['사내 관리 시스템 개발', '레거시 PHP 모듈화', 'MariaDB 쿼리 최적화'],
  },
  {
    company: 'XX IT 회사',
    role: '주니어 개발자',
    period: '2020 — 2022',
    description:
      '고객사 웹 프로젝트 참여. 요구사항 분석부터 배포까지 전 과정 경험.',
    highlights: ['반응형 웹 퍼블리싱', 'PHP 백엔드 API 개발', '크로스 브라우저 대응'],
  },
]

export const projects = [
  {
    title: 'Flutter 모바일 앱',
    category: 'Flutter',
    description: '크로스 플랫폼 일정 관리 앱. Firebase 연동 및 로컬 알림 구현.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    link: '#',
    github: '#',
  },
  {
    title: 'Godot 2D 게임',
    category: 'Godot',
    description: '타일맵 기반 퍼즐 게임. 씬 트리 구조와 상태 머신 패턴 적용.',
    tech: ['Godot 4', 'GDScript'],
    link: '#',
    github: '#',
  },
  {
    title: 'React 포트폴리오',
    category: 'React',
    description: 'Tailwind CSS 기반 다크모드 개발자 포트폴리오 웹사이트.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    link: '#',
    github: '#',
  },
]
