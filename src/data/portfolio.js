import profileImage from '../assets/profile-anime.png'

export const site = {
  name: 'John.K',
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
    company: 'DEJAY',
    role: '개발팀 수석연구원',
    sector: 'WEB',
    period: '2020.07 — 현재',
    description: '시스템 및 사이트 운영·개발 및 서버 관리를 담당하며 서비스를 유지보수합니다.',
    highlights: [
      'Windows 및 Linux 서버 환경 운영·관리',
      'Oracle, MariaDB, MySQL, MS-SQL 데이터베이스 연동 및 유지보수',
    ],
    tech: [
      'ASP',
      'PHP',
      'JSP',
      'JavaScript',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'Flutter',
      'Dart',
      'Oracle',
      'MySQL',
      'MS-SQL',
      'MariaDB',
      'Supabase',
      'Node.js',
      'Git',
      'Linux',
    ],
  },
  {
    company: '내일투어',
    role: 'E-BIZ팀 차장(수석연구원)',
    sector: 'WEB',
    period: '2019.05 — 2020.01',
    description: '여행·E-BIZ 플랫폼 사이트 개발 및 유지보수 업무를 수행했습니다.',
    highlights: ['사이트 신규 기능 개발', '운영 중 이슈 대응 및 유지보수'],
    tech: ['ASP', 'PHP', 'MySQL'],
  },
  {
    company: '기가월드',
    role: '웹개발팀',
    sector: 'WEB',
    period: '2018.04 — 2019.04',
    description: '쇼핑몰 구축·운영과 Windows 서버 세팅·운영을 담당했습니다.',
    highlights: ['쇼핑몰 구축 및 운영', 'Windows 서버 환경 구성·관리'],
    tech: ['ASP', 'PHP', 'MySQL', 'Windows Server', 'Wowza', 'WebRTC'],
  },
  {
    company: '더이엔엠',
    role: '웹팀 사원(연구원)',
    sector: 'WEB',
    period: '2014.12 — 2018.04',
    description: '팝콘티비·셀럽티비 등 미디어 플랫폼 신규 런칭, 리뉴얼 및 사이트 운영을 담당했습니다.',
    highlights: [
      '팝콘티비 홈페이지 리뉴얼 및 운영',
      '셀럽티비 신규 런칭·리뉴얼 및 운영',
    ],
    tech: ['Classic ASP', 'MS-SQL', 'Windows', 'Wowza', 'WebRTC'],
  },
  {
    company: '애드캡슐소프트',
    role: '개발팀 과장(선임연구원)',
    sector: 'SI',
    period: '2011.10 — 2014.12',
    description: '대기업·공공기관 웹사이트 구축 및 유지보수 SI 프로젝트를 다수 수행했습니다.',
    highlights: [
      '후지필름 아스타리프트 브랜드 사이트 신규 구축',
      'KT 올레비즈·S-OIL·세븐일레븐 등 사이트 개발·운영',
      '한국전파진흥협회 PHP 기반 사이트 유지보수',
    ],
    tech: ['Classic ASP', 'PHP', 'MySQL', 'MS-SQL'],
  },
  {
    company: '드림교육',
    role: '시스템운영 대리(주임연구원)',
    sector: 'WEB',
    period: '2010.10 — 2011.08',
    description: 'Classic ASP·MS-SQL 기반 LMS 시스템 유지보수, 사이트 리뉴얼 및 운영을 담당했습니다.',
    highlights: ['LMS 시스템 유지보수', '교육 사이트 리뉴얼 및 운영'],
    tech: ['Classic ASP', 'MS-SQL', 'Windows'],
  },
  {
    company: '워킹홀리데이협회',
    role: '마케팅 대리(주임연구원)',
    sector: 'WEB',
    period: '2008.03 — 2010.09',
    description: 'Classic ASP·MS-SQL 기반 회사 홈페이지 신규 개발 및 운영을 담당했습니다.',
    highlights: ['홈페이지 신규 개발', '콘텐츠·채널 관리 및 사이트 운영'],
    tech: ['Classic ASP', 'MS-SQL'],
  },
  {
    company: '프리랜서',
    role: '웹개발자',
    sector: 'FREELANCE',
    period: '2007.04 — 2008.02',
    description: 'Classic ASP·PHP로 쇼핑몰 및 기업 사이트 신규 개발·유지보수 업무를 수행했습니다.',
    highlights: ['쇼핑몰 신규 개발', '기업 홈페이지 구축 및 유지보수'],
    tech: ['Classic ASP', 'PHP', 'MySQL'],
  },
  {
    company: '비바빅스',
    role: '개발팀 대리(주임연구원)',
    sector: 'WEB',
    period: '2005.11 — 2007.03',
    description: 'Classic ASP·PHP로 쇼핑몰 및 기업 사이트 신규 개발·유지보수 업무를 수행했습니다.',
    highlights: ['쇼핑몰 신규 개발', '기업 홈페이지 구축 및 유지보수'],
    tech: ['Classic ASP', 'PHP', 'MySQL'],
  },
  {
    company: '오티에이치이',
    role: 'R&D사업부 사원(연구원)',
    sector: 'WEB',
    period: '2004.05 — 2005.10',
    description: 'Classic ASP·PHP를 활용한 쇼핑몰·기업 사이트 신규 개발 및 유지보수를 담당했습니다.',
    highlights: ['쇼핑몰·기업 사이트 신규 개발', '사이트 유지보수 및 기능 개선'],
    tech: ['Classic ASP', 'PHP'],
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
