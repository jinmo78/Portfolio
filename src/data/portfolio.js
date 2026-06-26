export const site = {
  name: '강진모',
  role: 'Full-Stack Developer',
  identityLead: '플랫폼을 넘나드는 솔루션 빌더,',
  identityTail: '개발자',
  tagline:
    'SI 웹부터 Flutter 앱, Godot 게임, React 웹앱까지 — 비즈니스와 사용자 경험을 잇는 코드를 만듭니다.',
  email: 'ilovejs97@gmail.com',
  github: 'https://github.com/yourname',
  linkedin: 'https://linkedin.com/in/yourname',
  profileImage: null,
}

export const navItems = [
  { id: 'intro', label: '소개' },
  { id: 'tech', label: '기술스택' },
  { id: 'projects', label: '프로젝트' },
  { id: 'experience', label: '경력' },
  { id: 'contact', label: '연락처' },
]

export const skillBadges = [
  { name: 'React', accent: 'emerald' },
  { name: 'Next.js', accent: 'sky' },
  { name: 'Flutter', accent: 'sky' },
  { name: 'Dart', accent: 'sky' },
  { name: 'Godot', accent: 'emerald' },
  { name: 'GDScript', accent: 'emerald' },
  { name: 'PHP', accent: 'emerald' },
  { name: 'MariaDB', accent: 'emerald' },
  { name: 'JavaScript', accent: 'sky' },
  { name: 'Tailwind CSS', accent: 'sky' },
  { name: 'Node.js', accent: 'emerald' },
  { name: 'Git', accent: 'sky' },
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
    sector: 'SI',
    period: '2022 — 현재',
    description:
      'PHP·MariaDB 기반 웹 서비스 유지보수 및 신규 기능 개발. 레거시 코드 리팩토링과 API 연동을 담당했습니다.',
    highlights: [
      '사내 관리 시스템 신규 모듈 설계 및 개발',
      '레거시 PHP 코드 모듈화 및 유지보수성 개선',
      'MariaDB 쿼리 최적화로 목록 조회 성능 개선',
    ],
    tech: ['PHP 8.4', 'MariaDB', 'JavaScript', 'Linux'],
  },
  {
    company: 'XX IT 회사',
    role: '주니어 개발자',
    sector: 'SI',
    period: '2020 — 2022',
    description:
      '고객사 웹 프로젝트에 참여하며 요구사항 분석부터 배포까지 전 과정을 경험했습니다.',
    highlights: [
      '반응형 웹 퍼블리싱 및 크로스 브라우저 대응',
      'PHP 기반 백엔드 API 개발 및 연동',
      '고객사 요구사항 기반 기능 구현 및 배포 지원',
    ],
    tech: ['PHP', 'MariaDB', 'HTML/CSS', 'jQuery'],
  },
]

export const projects = [
  {
    title: 'Flutter 모바일 앱',
    category: 'Flutter',
    categoryLabel: 'FLUTTER APP',
    description: '크로스 플랫폼 일정 관리 앱. Firebase 연동 및 로컬 알림 구현.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    link: '#',
    github: '#',
  },
  {
    title: 'Godot 2D 게임',
    category: 'Godot',
    categoryLabel: 'GODOT GAME',
    description: '타일맵 기반 퍼즐 게임. 씬 트리 구조와 상태 머신 패턴 적용.',
    tech: ['Godot 4', 'GDScript'],
    link: '#',
    github: '#',
  },
  {
    title: 'React 포트폴리오',
    category: 'React',
    categoryLabel: 'REACT WEBAPP',
    description: 'Tailwind CSS 기반 다크모드 개발자 포트폴리오 웹사이트.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    link: '#',
    github: '#',
  },
]
