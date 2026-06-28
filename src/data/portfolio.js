import profileImage from '../assets/profile-anime.png'

export const site = {
  name: '강진모',
  role: 'Full-Stack Developer',
  identityLead: '플랫폼을 넘나드는 솔루션 빌더,',
  identityTail: '개발자',
  tagline: '비즈니스와 사용자 경험을 잇는 코드를 만듭니다.',
  email: 'ilovejs97@gmail.com',
  profileImage,
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
    title: 'PDF OCR 웹앱',
    category: 'Python',
    categoryLabel: 'PYTHON WEBAPP',
    description:
      'FastAPI + Streamlit 기반 PDF 파싱·EasyOCR 이미지 OCR 웹앱. Render와 Hugging Face Spaces 분리 배포.',
    tech: ['Python', 'FastAPI', 'Streamlit', 'EasyOCR'],
    link: 'https://pdf-ocr-app-f189.onrender.com',
  },
  {
    title: 'React 포트폴리오',
    category: 'React',
    categoryLabel: 'REACT WEBAPP',
    description: 'Tailwind CSS 기반 다크모드 개발자 포트폴리오 웹사이트.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://jinmo78.github.io/Portfolio/',
  },
  {
    title: '정산 계산기',
    category: 'Next.js',
    categoryLabel: 'NEXT.JS WEBAPP',
    description:
      '모임 생성·초대·참여와 멤버별 비용 정산을 관리하는 웹앱. Supabase 인증 및 Vercel 배포.',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    link: 'https://jeongsan-calculator.vercel.app/login',
  },
  {
    title: '우리말 달인',
    category: 'Game',
    categoryLabel: 'MULTIPLAYER GAME',
    description:
      '실시간 멀티플랫폼 국어 퀴즈 게임. Expo + Fastify + Socket.io 모노레포.',
    tech: ['Expo', 'TypeScript', 'Socket.io', 'Fastify'],
    link: 'https://woorimal-dalin.onrender.com',
  },
  {
    title: '금손95 재고관리',
    category: 'PHP',
    categoryLabel: 'INVENTORY SYSTEM',
    description:
      '의료기기 재고·입출고·주문·거래처를 관리하는 웹 기반 재고관리 시스템. ABC 분석·재고 실사 지원.',
    tech: ['PHP', 'MariaDB', 'PhpSpreadsheet'],
    link: '#',
  },
  {
    title: 'Flutter 모바일 앱',
    category: 'Flutter',
    categoryLabel: 'FLUTTER APP',
    description: '크로스 플랫폼 일정 관리 앱. Firebase 연동 및 로컬 알림 구현.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    link: '#',
  },
  {
    title: 'Godot 2D 게임',
    category: 'Godot',
    categoryLabel: 'GODOT GAME',
    description: '타일맵 기반 퍼즐 게임. 씬 트리 구조와 상태 머신 패턴 적용.',
    tech: ['Godot 4', 'GDScript'],
    link: '#',
  },
]
