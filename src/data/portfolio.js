import profileImage from '../assets/profile-anime.png'
import certAiEngineering from '../assets/certificates/ai-engineering.jpg'
import certPythonData from '../assets/certificates/python-data.jpg'

export const site = {
  name: 'John.K',
  role: 'AI Agent Developer',
  identityLead: '웹 서비스를 출시해 온,',
  identityTail: 'AI Agent 개발자',
  tagline:
    '웹 서비스를 출시·운영해 온 개발자가, 국비지원 AI 과정에서 RAG·LangChain·LangGraph Agent를 배우고, 루미(스토어)와 PDF OCR 웹앱(배포)으로 시작합니다.',
  email: 'ilovejs97@gmail.com',
  profileImage,
}

export const navItems = [
  { id: 'intro', label: '소개' },
  { id: 'tech', label: '기술스택' },
  { id: 'projects', label: '프로젝트' },
  { id: 'experience', label: '경력' },
  { id: 'certificates', label: '수료증' },
  { id: 'contact', label: '연락처' },
]

export const certificates = [
  {
    title: '프로 캠프 AI 서비스 엔지니어링 트랙 9기',
    issuer: '스파르타클럽',
    period: '2026.04.20 — 2026.08.11',
    issued: '2026.09.03',
    image: certAiEngineering,
  },
  {
    title: '데이터 분석 파이썬 종합반',
    issuer: '스파르타클럽',
    period: '2026.04.13 — 2026.08.12',
    issued: '2026.09.03',
    image: certPythonData,
  },
]

export const skillBadges = [
  { name: 'Python', accent: 'emerald' },
  { name: 'FastAPI', accent: 'emerald' },
  { name: 'OpenAI', accent: 'emerald' },
  { name: 'LangChain', accent: 'emerald' },
  { name: 'LangGraph', accent: 'emerald' },
  { name: 'RAG', accent: 'emerald' },
  { name: 'OCR', accent: 'emerald' },
  { name: 'Streamlit', accent: 'emerald' },
  { name: 'Flutter', accent: 'sky' },
  { name: 'React', accent: 'sky' },
  { name: 'Next.js', accent: 'sky' },
  { name: 'TypeScript', accent: 'sky' },
  { name: 'Supabase', accent: 'sky' },
  { name: 'Node.js', accent: 'emerald' },
  { name: 'PHP', accent: 'emerald' },
  { name: 'MariaDB', accent: 'emerald' },
  { name: 'Git', accent: 'sky' },
]

export const techStack = [
  {
    category: 'AI / Agent',
    items: ['Python', 'FastAPI', 'OpenAI', 'LangChain', 'LangGraph', 'RAG', 'OCR', 'Streamlit'],
  },
  {
    category: '앱·프론트',
    items: ['Flutter', 'React', 'Next.js', 'TypeScript'],
  },
  {
    category: '백엔드·DB',
    items: ['Supabase', 'Node.js', 'PHP', 'MariaDB'],
  },
  {
    category: '업무 (SI)',
    items: ['PHP', 'MariaDB', 'JavaScript', 'HTML/CSS', 'Linux'],
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
    sector: 'AI',
    period: '2020.07 — 현재',
    description:
      '웹 서비스를 출시·운영해 온 기반 위에, Agent·RAG를 익히고 루미와 PDF OCR 배포부터 시작합니다.',
    highlights: [
      '스파르타클럽 프로캠프 AI 서비스 엔지니어링 트랙 9기 수료(2026.04–08, 국비지원). LangChain/LangGraph Agent, RAG(FAISS), OCR/PDF, n8n 업무 자동화.',
      '개인 앱 루미에 OpenAI 대화 Agent(메모리·발화 제안·에피소드)를 붙여 스토어 배포.',
      'Windows 및 Linux 서버 환경 운영·관리',
      'Oracle, MariaDB, MySQL, MS-SQL 데이터베이스 연동 및 유지보수',
    ],
    tech: [
      'Python',
      'FastAPI',
      'OpenAI',
      'ASP',
      'PHP',
      'JSP',
      'JavaScript',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
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
    title: '루미',
    slogan: '대화를 기억하고 이어 쓰는 AI 캐릭터',
    category: 'AI',
    categoryLabel: 'AI AGENT APP',
    description:
      '장면 선택, 자유 채팅/에피소드, 대화 기억, 다음 발화 제안, 스튜디오. Flutter + FastAPI + OpenAI + Supabase. Android/iOS 배포.',
    tech: ['Flutter', 'FastAPI', 'OpenAI', 'Supabase'],
    link: 'https://my-app-policies-blond.vercel.app/ko/apps/lumi',
    linkLabel: '앱 소개',
    appStoreUrl: 'https://apps.apple.com/kr/app/id6794529020',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.jinmo78.lumi',
  },
  {
    title: 'PDF OCR 웹앱',
    category: 'Python',
    categoryLabel: 'PYTHON WEBAPP',
    description:
      'FastAPI+Streamlit 웹앱. EasyOCR로 영수증 상품명·금액을 추출하고, Render 메모리 한계로 OCR을 Hugging Face Space로 분리했습니다.',
    tech: ['Python', 'FastAPI', 'Streamlit', 'EasyOCR'],
    status: '준비중',
    github: 'https://github.com/jinmo78/pdf-ocr-webapp',
  },
  {
    title: '나의 스크랩',
    slogan: '웹에서 본 좋은 정보, 기기 안에만 모아 두는 스크랩 앱',
    category: 'Flutter',
    categoryLabel: 'ON-DEVICE OCR',
    description:
      '온디바이스 OCR·로컬 SQLite·공유하기·백업을 지원합니다. 데이터는 서버에 올리지 않습니다.',
    tech: ['Flutter', 'Dart', 'SQLite'],
    link: 'https://my-app-policies-blond.vercel.app/ko/apps/my-scrap',
    linkLabel: '앱 소개',
    appStoreUrl: 'https://apps.apple.com/kr/app/%EB%82%98%EC%9D%98-%EC%8A%A4%ED%81%AC%EB%9E%A9/id6793531420',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.jinmo.myscrap&hl=ko',
  },
  {
    title: 'insquare',
    slogan: '초대한 사람들과만 나누는 프라이빗 사진 공간',
    category: 'Flutter',
    categoryLabel: 'FLUTTER APP',
    description:
      '공개 피드가 없는 프라이빗 사진 공간. 방을 만들고 초대·QR로만 입장하며, Google·Apple·카카오 로그인을 지원합니다.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://my-app-policies-blond.vercel.app/ko/apps/insquare',
    linkLabel: '앱 소개',
  },
  {
    title: '우리말 달인',
    slogan: '실시간으로 겨루는 우리말 퀴즈',
    category: 'Game',
    categoryLabel: 'MULTIPLAYER GAME',
    description:
      '맞춤법·어휘를 부저 퀴즈로 겨루는 실시간 멀티플레이 게임. 솔로 연습, 초대 코드 친구 플레이, 실시간 대전을 지원하고 Google 로그인으로 기록을 이어갈 수 있습니다.',
    tech: ['Expo', 'TypeScript', 'Socket.io', 'Fastify'],
    link: 'https://woorimal-dalin.onrender.com',
  },
  {
    title: '정산 계산기',
    slogan: '모임 지출을 나눠 계산하고 계좌로 안내하는 정산 도구',
    category: 'Next.js',
    categoryLabel: 'NEXT.JS WEBAPP',
    description:
      '이메일 가입 후 모임을 만들고 지출을 나눠 계산합니다. 이름·계좌를 저장하고 초대 코드로 참가자를 부르며, 송금은 하지 않는 계산 도구입니다.',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    link: 'https://jeongsan-calculator.vercel.app',
  },
  {
    title: '1941 Galaxy',
    slogan: '한 손으로 즐기는 종스크롤 슈팅',
    category: 'Godot',
    categoryLabel: 'GODOT GAME',
    description:
      '프롭 전투기로 탄막을 피하고 보스를 격파하는 캐주얼 슈팅 게임. 자동 발사·캠페인·협동 모드를 제공하며, 최고 점수는 기기에 저장됩니다.',
    tech: ['Godot 4', 'GDScript'],
    link: 'https://my-app-policies-blond.vercel.app/ko/apps/shooter-1941',
    linkLabel: '앱 소개',
  },
  {
    title: '앱 소개 · 약관',
    slogan: '출시 앱의 소개와 개인정보·이용약관을 한곳에',
    category: 'Next.js',
    categoryLabel: 'APP HUB',
    description:
      '루미, 나의 스크랩, INSQUARE 등 개인 앱의 소개·개인정보처리방침·이용약관을 제공하는 허브. Markdown을 Next.js로 렌더링합니다.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://my-app-policies-blond.vercel.app/ko',
    linkLabel: '사이트 보기',
    github: 'https://github.com/jinmo78/my-app-policies',
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
    title: 'React 포트폴리오',
    category: 'React',
    categoryLabel: 'REACT WEBAPP',
    description: 'Tailwind CSS 기반 다크모드 개발자 포트폴리오 웹사이트.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://jinmo78.github.io/Portfolio/',
  },
]
