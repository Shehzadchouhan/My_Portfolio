/**
 * SHEHZAD — THE SERIES
 * Central portfolio data for Mohd Shehzad: Full-Stack Developer, Video Editor & Public Speaker.
 * Single source of truth.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const monochrome1: Palette = { from: '#000000', via: '#16161d', to: '#050507', accent: '#ffffff' };
const monochrome2: Palette = { from: '#0a0a0f', via: '#20202a', to: '#050507', accent: '#e4e4e7' };
const monochrome3: Palette = { from: '#121218', via: '#272733', to: '#050507', accent: '#d4d4d8' };
const silver: Palette = { from: '#09090b', via: '#3f3f46', to: '#050507', accent: '#f4f4f5' };

export const profile = {
  fullName: 'Mohd Shehzad',
  displayName: 'Mohd Shehzad',
  firstName: 'SHEHZAD',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SHEHZAD ORIGINAL',
  role: 'Full-Stack Developer • Video Editor • Public Speaker',
  tagline: ['Full-Stack Developer', 'Final-Year B.Tech CSE', 'Video Editor', 'Public Speaker'],
  intro:
    'A final-year B.Tech Computer Science and Engineering student at Guru Nanak Dev Engineering College (CGPA 8.5) and Full-Stack Developer. Beyond building web applications, I work with C++ and Python, applying my programming and problem-solving skills to software projects. I also create cinematic video edits and deliver technical presentations.',
  location: 'Malerkotla, Punjab, India',
  phone: '+91 9988059285',
  email: 'shehzadchouna260@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/shehzad23/',
    github: 'https://github.com/ShehzadChouhan',
  },
  resumePdf: '/assets/Mohd_Shehzad_Resume.pdf',
  portrait: {
    src: '/assets/portrait.jpg',
    srcSet: '/assets/portrait.jpg 720w',
    alt: 'Portrait of Mohd Shehzad',
  },
  interests: ['Software Engineering', 'System Design', 'Video Editing & Color Grading', 'Public Speaking & Teaching', 'Cinematic Storytelling', 'AI & Automation Tools'],
};

export const education = [
  {
    school: 'Guru Nanak Dev Engineering College (GNDEC)',
    place: 'Ludhiana, Punjab',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    period: '2023 – 2027',
    score: 'CGPA 8.5',
  },
  {
    school: 'Islamia Sen Sec School',
    place: 'Malerkotla, Punjab',
    degree: 'Senior Secondary (12th Grade)',
    period: '2021 – 2023',
    score: 'Score 89%',
  },
  {
    school: 'Islamia Sen Sec School',
    place: 'Malerkotla, Punjab',
    degree: 'Metriculation (10th Grade)',
    period: '2020 – 2021',
    score: 'Score 87%',
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  image?: string;
  coverImage?: string;
  github?: string;
  live?: string;
  palette: Palette;
  motif?: 'shield' | 'flow' | 'tenants';
  telemetry: {
    latency?: string;
    stack?: string;
    role: string;
    resolution?: string;
    fps?: string;
  };
};

export const projects: Project[] = [
  {
    id: 'omnilab-studio',
    title: 'OmniLab Studio',
    year: '2026',
    genre: 'EdTech • Scientific Simulation • Computational Physics',
    logline: 'A browser-based scientific workbench that transforms undergraduate physics experiments into interactive simulations, rigorous analysis tools, and ready-to-print lab records.',
    image: '/assets/omnilab_cover.png',
    coverImage: '/assets/omnilab_cover.png',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'HTML5 Canvas', 'KaTeX'],
    build: [
      'Modernized early C++ physics practical programs into a full scientific web application with eight interactive Canvas workbenches.',
      'Implemented OLS regression, R² fit scores, uncertainty analysis, NIST CODATA constants, and generated printable laboratory reports.',
    ],
    features: [
      'Eight interactive physics experiments, including optics and virtual instruments',
      'Hardware-accelerated Canvas simulations targeting 60 FPS',
      'Automated A4 lab reports with LaTeX equations and measured observation tables',
      'Interactive Viva Voce tutor with difficulty-based questions and flashcard self-assessment',
    ],
    metrics: [
      { value: '8', label: 'interactive experiments' },
      { value: '60 FPS', label: 'Canvas simulations' },
      { value: 'A4', label: 'print-ready lab records' },
    ],
    github: 'https://github.com/Shehzadchouhan/Omni_Physics_Lab',
    live: 'https://omni-physics-lab.vercel.app/',
    palette: silver,
    motif: 'flow',
    telemetry: {
      role: 'Full-Stack Developer • Scientific Computing',
      stack: 'React 19 • TypeScript • Canvas • KaTeX',
      fps: '60 FPS',
    },
  },
  {
    id: 'expense-tracker',
    title: 'Track Expenser',
    year: '2026',
    genre: 'FinTech • Personal Finance • WhatsApp Integration',
    logline: 'A bilingual personal finance dashboard for tracking income and expenses, monitoring budgets, and capturing transactions through WhatsApp.',
    image: '/assets/track_expenser_cover.png',
    coverImage: '/assets/track_expenser_cover.png',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Supabase'],
    build: [
      'Built a responsive Next.js finance dashboard with transaction management, balance summaries, spending analytics, and category breakdowns.',
      'Integrated Supabase-backed account and transaction workflows with local persistence for offline-friendly use.',
    ],
    features: [
      'Track income and expenses with transaction history and category breakdowns',
      'Weekly and monthly spending views with daily budget and safe-to-spend insights',
      'Link WhatsApp to record expenses from text or payment screenshots',
      'English and Hindi interface with account-linked data and local fallback storage',
    ],
    metrics: [
      { value: '2 Languages', label: 'English and Hindi interface' },
      { value: 'WhatsApp', label: 'text and payment screenshot entries' },
      { value: 'Live', label: 'deployed on Vercel' },
    ],
    github: 'https://github.com/Shehzadchouhan/Track_Expenser.git',
    live: 'https://track-expenser.vercel.app/',
    palette: monochrome3,
    telemetry: {
      role: 'Full-Stack Developer',
      stack: 'Next.js • React • TypeScript • Supabase',
    },
  },
  {
    id: 'tasky-todo',
    title: 'Taskly — Task & Notes Workspace',
    year: '2026',
    genre: 'Productivity • Full-Stack Task Management',
    logline: 'A full-stack productivity workspace combining task management, rich-text notes, real-time analytics, and an intelligent AI assistant.',
    image: '/assets/tasky_cover.png',
    coverImage: '/assets/tasky_cover.png',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'Express', 'MongoDB'],
    build: [
      'Built a full-stack workspace with a React and TypeScript client, Express API, and MongoDB persistence.',
      'Implemented secure, user-isolated task and note workflows with validation, analytics, and an AI assistant.',
    ],
    features: [
      'Drag-and-drop Kanban board and searchable, filterable task list with due dates',
      'Rich-text notes with image, audio, and video attachments plus voice memos',
      'Analytics dashboard with task counts, overdue items, completion rates, and trends',
      'Gemini-powered assistant with natural-language task actions and voice input',
    ],
    metrics: [
      { value: 'Full Stack', label: 'React, Express & MongoDB' },
      { value: 'AI Assistant', label: 'natural-language task actions' },
      { value: 'Secure', label: 'isolated user task and note data' },
    ],
    github: 'https://github.com/Shehzadchouhan/Tasky.git',
    live: 'https://tasky-six-flax.vercel.app/',
    palette: silver,
    telemetry: {
      role: 'Full-Stack Developer',
      stack: 'React • TypeScript • Express • MongoDB',
    },
  },
  {
    id: 'zid-fitness',
    title: 'ZID Fitness Zone',
    year: '2026',
    genre: 'Fitness Platform • Full-Stack Web Application',
    logline: 'A full-stack fitness club platform with a responsive public experience, member accounts, progress tracking, and a role-protected gym owner dashboard.',
    image: '/assets/proj_gym.png',
    coverImage: '/assets/zid_fitness_cover.png',
    stack: ['React 19', 'Vite 8', 'Tailwind CSS 4', 'Node.js', 'Express 5'],
    build: [
      'Built a responsive React experience backed by an Express REST API for member accounts, enquiries, and gym-owner workflows.',
      'Implemented role-protected member and owner features, progress-photo uploads, and JSON-backed persistence.',
    ],
    features: [
      'Member registration, sign-in, profile editing, and progress history',
      'Owner dashboard for leads, members, attendance, and payment records',
      'Fitness calculators for body metrics, nutrition targets, and estimated one-rep max',
      'Progress-photo uploads and lead export to CSV',
    ],
    metrics: [
      { value: 'Full Stack', label: 'React client + Express API' },
      { value: 'Role-Based', label: 'member and owner workflows' },
      { value: 'Live', label: 'deployed on Render' },
    ],
    github: 'https://github.com/Shehzadchouhan/Zid-Fitness-Zone',
    live: 'https://zid-fitness-zone.onrender.com',
    palette: monochrome1,
    telemetry: {
      role: 'Full-Stack Developer',
      stack: 'React • Tailwind CSS • Express • REST API',
    },
  },
  {
    id: 'hostelease',
    title: 'HostelEase',
    year: '2026',
    genre: 'MERN • Location-Based Service Discovery',
    logline: 'A full-stack platform helping hostel residents find nearby essential services, from laundry and groceries to food, pharmacies, and transport.',
    image: '/assets/hosteleaze_cover.png',
    coverImage: '/assets/hosteleaze_cover.png',
    stack: ['React', 'Vite', 'Leaflet', 'Node.js', 'Express', 'MongoDB'],
    build: [
      'Built a location-aware service discovery experience with nearby listings, category filters, and interactive maps.',
      'Implemented a MERN backend with JWT authentication and role-based student and admin workflows.',
    ],
    features: [
      'Discover nearby shops within an approximately 2 km radius',
      'Interactive Leaflet map with category-specific markers and directions',
      'Student registration, sign-in, and profile management',
      'Service listings with ratings, reviews, hours, contact details, and admin management',
    ],
    metrics: [
      { value: '~2 km', label: 'nearby service discovery radius' },
      { value: 'MERN', label: 'full-stack application' },
      { value: '2 Roles', label: 'student and admin access' },
    ],
    github: 'https://github.com/Shehzadchouhan/HostelEase',
    live: 'https://hostel-ease-sigma.vercel.app/',
    palette: monochrome2,
    telemetry: {
      role: 'Full-Stack Developer',
      stack: 'React • Express • MongoDB • Leaflet',
    },
  },
  {
    id: 'shudh-loha',
    title: 'Shudh Loha Business Site',
    year: '2026',
    genre: 'E-Commerce • Product Catalog • Business Website',
    logline: 'A responsive storefront for traditional pure-iron cookware and kitchen essentials, showcasing the Shudh Loha brand from Malerkotla, Punjab.',
    image: '/assets/shudh_loha_cover.png',
    coverImage: '/assets/shudh_loha_cover.png',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Supabase'],
    build: [
      'Created a product-focused storefront and catalog for traditional iron cookware, kitchen essentials, and household products.',
      'Integrated Supabase for product data, enquiry leads, analytics, and admin management.',
    ],
    features: [
      'Responsive storefront with image-led product presentation',
      'Product catalog with category filtering and detail pages',
      'Customer enquiries through contact forms, phone, and WhatsApp',
      'Supabase-powered product, lead, analytics, and admin workflows',
    ],
    metrics: [
      { value: 'Supabase', label: 'products, leads & analytics' },
      { value: 'Responsive', label: 'desktop and mobile storefront' },
      { value: 'Live', label: 'deployed on Netlify' },
    ],
    github: 'https://github.com/Shehzadchouhan/Shudh-Loha-business-site',
    live: 'https://shudh-loha.netlify.app/',
    palette: silver,
    telemetry: {
      role: 'Web Developer',
      stack: 'HTML • CSS • JavaScript • Supabase',
    },
  },
  {
    id: 'ai-ml-training-diary',
    title: 'AI/ML Training Diary',
    year: '2025',
    genre: 'TR-102 • Training Portfolio • Academic Documentation',
    logline: 'A professional training portfolio webpage documenting TR-102 work, including projects, daily diary entries, reports, presentations, and contact information.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    build: [
      'Created a clear, light-themed training portfolio for B.Tech Computer Science (CSC2) at Guru Nanak Dev Engineering College.',
      'Organized training work and resources into dedicated project, daily diary, report, presentation, and contact sections.',
    ],
    features: [
      'Student and training-program introduction',
      'Links to training projects and repositories',
      'Daily training diary and progress updates',
      'Report, final presentation, and contact sections',
    ],
    metrics: [
      { value: 'TR-102', label: 'training portfolio' },
      { value: '5 Sections', label: 'projects, diary, reports, presentation & contact' },
      { value: 'Static Site', label: 'HTML, CSS & JavaScript' },
    ],
    github: 'https://github.com/Shehzadchouhan/ai-ml-training-diary',
    palette: monochrome3,
    telemetry: {
      role: 'Web Developer',
      stack: 'HTML5 • CSS3 • JavaScript',
    },
  },
  {
    id: 'video-editing-reel',
    title: 'Cinematic Motion & Video Suite',
    year: '2026',
    genre: 'Video Editing • Color Science • Motion Design',
    logline: 'Commercial editing reels, rhythm-matched cuts, color grading in DaVinci Resolve, and kinetic typography for digital storytelling.',
    image: '/assets/portrait.jpg',
    stack: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Figma'],
    build: [
      'Mastered 4K footage editing with rhythm-matched sound design, Foley layering, and pacing.',
      'Developed custom LUT and curve balance workflows in DaVinci Resolve for consistent cinematic contrast.',
    ],
    features: [
      'Multi-track timeline pacing and beat-matched cuts',
      'ACES & Rec.709 color management and curve grading',
      'Kinetic motion titles and lower-thirds compositing',
      'Spatial sound design and audio stem leveling',
    ],
    metrics: [
      { value: '4K DCI', label: 'cinematic master outputs' },
      { value: '24 FPS', label: 'authentic film cadence' },
    ],
    palette: monochrome2,
    telemetry: {
      role: 'Lead Video Editor & Colorist',
      stack: 'DaVinci Resolve • Premiere Pro • After Effects',
      resolution: '4K DCI',
      fps: '24.000 FPS',
    },
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
  image?: string;
  date?: string;
  credentialId?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'arya-tech-disha',
    title: '3rd Prize — C Debugging',
    org: 'Arya College • Tech Disha 2024',
    detail: 'Won 3rd Prize on the podium in the competitive "Debugging using C" contest at Tech Disha 2024, competing against engineering students across the region.',
    laurel: 'Podium Finish',
    image: '/assets/certificates/arya_college_tech_disha_3rd.jpg',
    link: '/assets/certificates/arya_college_tech_disha_3rd.jpg',
    date: '29-02-2024',
    credentialId: 'Won IIIrd Prize • NAAC "A" Grade',
  },
  {
    id: 'declamation-awake-foundation',
    title: '2nd Position — Declamation',
    org: 'Awake Foundation • "WE ARE ONE"',
    detail: 'Secured 2nd Position on the podium in the grand inter-school and college Declamation Contest competing among 510+ participants from 51+ institutions before 5,100+ attendees.',
    laurel: 'Podium Speaker',
    image: '/assets/certificates/declamation_2nd_prize.jpg',
    link: '/assets/certificates/declamation_2nd_prize.jpg',
    date: 'Islamia Sen Sec School',
    credentialId: '2nd Position • 51+ Schools & Colleges',
  },
  {
    id: 'think-a-thon-2026',
    title: 'THINK-A-THON 2026',
    org: 'ITian Club • GNDEC Ludhiana',
    detail: 'Awarded Certificate of Appreciation for active participation in the 8-Hour Inter-College Hackathon "Where Ideas Ignite Impact" on April 7, 2026.',
    laurel: 'Hackathon Contender',
    image: '/assets/certificates/thinkathon_2026.jpg',
    link: '/assets/certificates/thinkathon_2026.jpg',
    date: '07-04-2026',
    credentialId: 'CRN: 2315157 • 3rd Year CSE',
  },
  {
    id: 'smart-traffic-ideathon',
    title: 'IDEATHON Presenter & Architect',
    org: 'GNDEC Data Science Club',
    detail: 'Presented architectural proposal and algorithmic concepts for Smart Traffic Management at the GNDEC Data Science Club Ideathon on Sep 06, 2024.',
    laurel: 'Stage Presenter',
    image: '/assets/certificates/ideathon_2024.jpg',
    link: '/assets/certificates/ideathon_2024.jpg',
    date: '06-09-2024',
    credentialId: 'Ref: CSE/DSC/1905 • CRN: 2315157',
  },
  {
    id: 'jpal-digital-wellness',
    title: 'Digital Wellness Research Contributor',
    org: 'J-PAL South Asia • Columbia, Stanford & UIUC',
    detail: 'Awarded Certificate of Participation by Abdul Latif Jameel Poverty Action Lab (J-PAL) South Asia for contributing to the research study "Digital Wellness in India" with researchers from Columbia, Stanford, and UIUC.',
    laurel: 'Global Research',
    image: '/assets/certificates/jpal_digital_wellness.jpg',
    link: '/assets/certificates/jpal_digital_wellness.jpg',
    date: '2024',
    credentialId: 'J-PAL South Asia Academic Study',
  },
  {
    id: 'rebrand-challenge',
    title: 'RE:BRAND Strategy Participant',
    org: 'GNDEC Data Science Club',
    detail: 'Competed in RE:BRAND, an event organized by GNDEC Data Science Club focusing on creative product repositioning, brand identity systems, and design thinking pitches.',
    laurel: 'Brand Strategy',
    image: '/assets/certificates/rebrand_2025.jpg',
    link: '/assets/certificates/rebrand_2025.jpg',
    date: '06-02-2025',
    credentialId: 'Ref: CSE/DSC/3385 • URN: 2302612',
  },
  {
    id: 'iot-international-webinar',
    title: 'International IoT Credential',
    org: 'GNDEC DSC & AAEIO (USA)',
    detail: 'Completed international webinar on "Introduction to Internet of Things (IoT) Technology and Its Relevance to Engineering" organized in collaboration with the American Association of Engineers of Indian Origin (AAEIO).',
    laurel: 'International Tech',
    image: '/assets/certificates/iot_webinar_2024.jpg',
    link: '/assets/certificates/iot_webinar_2024.jpg',
    date: '02-03-2024',
    credentialId: 'Ref: CSE/DSC/1277 • URN: 2302612',
  },
  {
    id: 'python-infosys',
    title: 'Python Foundation Certified',
    org: 'Infosys Springboard',
    detail: 'Completed the comprehensive accredited Python curriculum by Infosys Springboard (Part 1, Part 2, and capstone exam) covering object-oriented programming, data structures, and algorithms.',
    laurel: 'Industry Certified',
    image: '/assets/certificates/infosys_python_foundation.jpg',
    link: '/assets/certificates/infosys_python_foundation.jpg',
    date: '20-07-2024',
    credentialId: 'Infosys Springboard • onwingspan verified',
  },
  {
    id: 'be10x-ai',
    title: 'AI Tools & Productivity Certified',
    org: 'BE10x AI Workshop',
    detail: 'Completed the intensive 1-Day AI Tools Workshop on March 24, 2024, mastering generative AI acceleration, prompt engineering workflows, and developer productivity tooling.',
    laurel: 'AI Practitioner',
    image: '/assets/certificates/be10x_ai_workshop.jpg',
    link: '/assets/certificates/be10x_ai_workshop.jpg',
    date: '24-03-2024',
    credentialId: 'Awarded by Aditya Kachave & Aditya Goenka',
  },
  {
    id: 'gndec-athletic',
    title: 'Long Jump University Athlete',
    org: '64th Annual Athletics Meet • GNDEC',
    detail: 'Competed in Men\'s Long Jump at the 64th Annual Athletics Meet 2025, demonstrating speed, stamina, and representing the CSE department.',
    laurel: 'University Athlete',
    image: '/assets/certificates/gndec_athletics_2025.jpg',
    link: '/assets/certificates/gndec_athletics_2025.jpg',
    date: '20th & 21st Feb 2025',
    credentialId: 'Serial No: SP/ATH/24-25/451 • Roll: 2302612',
  },
  {
    id: 'thinknext-ai-ml',
    title: 'Grade A — AI & ML Training',
    org: 'ThinkNEXT Technologies (ISO 9001:2015)',
    detail: 'Completed institutional industrial training in AI & ML using Python with Grade A (Outstanding), building predictive models and ML pipelines.',
    laurel: 'Grade A Outstanding',
    image: '/assets/certificates/thinknext_ai_ml_training_grade_a.jpg',
    link: '/assets/certificates/thinknext_ai_ml_training_grade_a.jpg',
    date: 'June – July 2025',
    credentialId: 'Cert ID: 939895 • Ref: TNT/C-25/16718',
  },
  {
    id: 'cml-case-study',
    title: '2nd Position — Case Study',
    org: 'Center for Multi-Faceted Learning • GNDEC',
    detail: 'Awarded Certificate of Appreciation for securing 2nd Position in the Online Case Study Making Competition, recognized for creative problem structuring and analytical presentation.',
    laurel: 'Podium Case Study',
    image: '/assets/certificates/cml_case_study_2nd_prize_2025.jpg',
    link: '/assets/certificates/cml_case_study_2nd_prize_2025.jpg',
    date: 'September 2025',
    credentialId: 'Ref: CML/2025/SA/09/002 • 2nd Position',
  },
  {
    id: 'web-forge-2026',
    title: 'WEB FORGE Web Developer',
    org: 'GNDEC Data Science Club',
    detail: 'Participated in WEB FORGE on February 9, 2026, building responsive web interfaces, modern layouts, and reactive client components.',
    laurel: 'Web Architect',
    image: '/assets/certificates/gndec_web_forge_2026.jpg',
    link: '/assets/certificates/gndec_web_forge_2026.jpg',
    date: '09-02-2026',
    credentialId: 'Ref: CSE/DSC/4681 • URN: 2302612',
  },
  {
    id: 'gndec-68th-foundation-day',
    title: 'GNDEC 68th Foundation Day Honor',
    org: 'Guru Nanak Dev Engineering College',
    detail: 'Honored on stage by Principal Dr. Sehijpal Singh and college leadership on GNDEC\'s 68th Foundation Day in recognition of academic excellence, student initiatives, and university participation.',
    laurel: 'College Honor',
    image: '/assets/moments/gndec_68th_foundation_day_award.jpg',
    link: '/assets/moments/gndec_68th_foundation_day_award.jpg',
    date: '08-04-2024',
    credentialId: 'Main Auditorium Stage Felicitation',
  },
  {
    id: 'lohar-trust-honours',
    title: 'State Honours Ceremony Award',
    org: 'All India Lohar Trust (Regd.) Punjab',
    detail: 'Conferred with an honorary memento and trophy at the state-level Honours Ceremony (اعزا زی تقریب) celebrating outstanding scholastic distinction, community leadership, and engineering ambition.',
    laurel: 'Community Honor',
    image: '/assets/moments/lohar_trust_honours_ceremony.jpg',
    link: '/assets/moments/lohar_trust_honours_ceremony.jpg',
    date: 'Honours Ceremony',
    credentialId: 'All India Lohar Trust Punjab (Regd. 2020)',
  },
  {
    id: 'islamia-school-felicitation',
    title: 'Alma Mater Excellence Shield',
    org: 'Islamia Sr. Sec. School, Malerkotla',
    detail: 'Felicitated with an honor shield on stage by the Principal and faculty at Islamia Senior Secondary School (Estd. 1924) in honor of achieving top-tier academic scores (89% 12th Non-Med, 88.6% 10th) and state declamation honors.',
    laurel: 'Alma Mater Honor',
    image: '/assets/moments/islamia_school_felicitation_ceremony.jpg',
    link: '/assets/moments/islamia_school_felicitation_ceremony.jpg',
    date: 'Malerkotla',
    credentialId: 'Islamia Sr. Sec. School (PSEB / Waqf Board)',
  },
  {
    id: 'gndec-athletics-100m',
    title: '100m Sprint University Athlete',
    org: '64th Annual Athletics Meet • GNDEC',
    detail: 'Competed in Men\'s 100m Sprint at the 64th Annual Athletics Meet 2025, demonstrating speed and representing the CSE department.',
    laurel: 'University Athlete',
    image: '/assets/certificates/gndec_athletics_100m_2025.jpg',
    link: '/assets/certificates/gndec_athletics_100m_2025.jpg',
    date: '20th & 21st Feb 2025',
    credentialId: 'Serial No: SP/ATH/24-25/079 • Roll: 2302612',
  },
  {
    id: 'iete-code-debugging',
    title: 'IETE Code Debugging Finalist',
    org: 'IETE Students\' Forum • GNDEC',
    detail: 'Qualified and competed in the high-stakes Code Debugging contest testing deep C/C++ memory mechanics, algorithmic bug hunting, and runtime optimization.',
    laurel: 'Code Debugger',
    image: '/assets/certificates/iete_code_debugging_2024.jpg',
    link: '/assets/certificates/iete_code_debugging_2024.jpg',
    date: '02-02-2024',
    credentialId: 'Ref: ECE/IETE/609 • Roll: 2315157',
  },
  {
    id: 'coding-ninjas-hackathon',
    title: 'Summer Hack 1.0 Contender',
    org: 'Coding Ninjas',
    detail: 'Built full-stack software prototypes under tight time constraints during the nationwide Summer Hack 1.0 hackathon.',
    laurel: 'Hackathon Contender',
    image: '/assets/certificates/coding_ninjas_summer_hack.jpg',
    link: '/assets/certificates/coding_ninjas_summer_hack.jpg',
    date: 'Summer Hack 1.0',
    credentialId: 'Certificate No: #452725',
  },
  {
    id: 'gndec-hackathon-sprint',
    title: 'Computer Lab Hackathon Sprint',
    org: 'GNDEC Computer Center',
    detail: 'Collaborative development, real-time code sprint, and systems testing during competitive campus hackathons in GNDEC computing labs.',
    laurel: 'Lab Hack Sprint',
    image: '/assets/moments/gndec_hackathon_lab_session.jpg',
    link: '/assets/moments/gndec_hackathon_lab_session.jpg',
    date: 'GNDEC Labs',
    credentialId: 'Collaborative Engineering & Rapid Prototyping',
  },
  {
    id: 'school-felicitation-award',
    title: 'School Merit & Oratory Honor',
    org: 'Senior Secondary School, Malerkotla',
    detail: 'Recognized and felicitated with an academic award by school teachers and administrators for early scholastic distinction and public speaking leadership.',
    laurel: 'Early Distinction',
    image: '/assets/moments/school_felicitation_award.jpg',
    link: '/assets/moments/school_felicitation_award.jpg',
    date: 'School Felicitation',
    credentialId: 'Senior Secondary School Academic Award',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    subtitle: 'Core digital architectures and web standards',
    skills: [
      { name: 'HTML5', mono: 'H5', note: 'Semantic' },
      { name: 'CSS3', mono: 'C3', note: 'Grid & Flex' },
      { name: 'JavaScript', mono: 'JS', note: 'ES6+ & DOM' },
      { name: 'Responsive Design', mono: 'RD', note: 'Mobile-First' },
    ],
  },
  {
    id: 'backend-services',
    title: 'Backend & Data Services',
    subtitle: 'Hosted data, lead capture, and admin workflows',
    skills: [
      { name: 'Supabase', mono: 'Sb', note: 'Data & Analytics' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Algorithmic logic and computational foundations',
    skills: [
      { name: 'C++', mono: 'C++', note: 'DSA & Systems' },
      { name: 'JavaScript', mono: 'JS', note: 'Web Engines' },
      { name: 'Python', mono: 'Py', note: 'Infosys Certified' },
    ],
  },
  {
    id: 'creative',
    title: 'Video Editing & Creative',
    subtitle: 'Cinematic visual cadence and post-production',
    skills: [
      { name: 'Video Editing', mono: 'VE', note: 'Pacing & Cuts' },
      { name: 'Color Grading', mono: 'CG', note: 'DaVinci Resolve' },
      { name: 'Figma UI/UX', mono: 'Fg', note: 'Wireframing' },
      { name: 'Sound Design', mono: 'SD', note: 'Audio Leveling' },
    ],
  },
  {
    id: 'oratory',
    title: 'Public Speaking & Ideathons',
    subtitle: 'Mainstage communication and storytelling',
    skills: [
      { name: 'Technical Presentation', mono: 'TP', note: 'Ideathon Finalist' },
      { name: 'Analytical Thinking', mono: 'AT', note: 'Mind Wrapping 3rd' },
      { name: 'Communication', mono: 'Cm', note: 'English, Hindi, Punjabi' },
    ],
  },
];

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: {
    code: string;
    title: string;
    description: string;
    tags: string[];
    runtime: string;
    palette: Palette;
  }[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Academic Foundations',
    period: '2021 – 2023',
    synopsis: 'Discipline in mathematics, science, and computer science foundations leading to high honors and alma mater distinctions.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The 89% Milestone & Alma Mater Shield',
        description: 'Completed Senior Secondary education with 89% distinction and was awarded the Alma Mater Excellence Shield at Islamia Sen Sec School, Malerkotla.',
        tags: ['Academic Honors', '89% Non-Med', 'Islamia School', 'Alma Mater Shield'],
        runtime: '2021 – 2023',
        palette: monochrome1,
      },
      {
        code: 'S01 E02',
        title: 'Entering GNDEC',
        description: 'Admitted to Guru Nanak Dev Engineering College for B.Tech in Computer Science and Engineering.',
        tags: ['GNDEC', 'B.Tech CSE', 'University'],
        runtime: '2023',
        palette: monochrome2,
      },
      {
        code: 'S01 E03',
        title: 'Declamation Podium & Youth Honors',
        description: 'Secured 2nd Position in the state-level Declamation Contest before 5,100+ attendees and received state recognition at the All India Lohar Trust Honours Ceremony.',
        tags: ['Declamation', 'Awake Foundation', 'Lohar Trust Honor', 'Public Speaking'],
        runtime: '2023 – 2024',
        palette: silver,
      },
    ],
  },
  {
    number: 2,
    title: 'The Code Craft',
    period: '2023 – 2024',
    synopsis: 'Diving deep into C++, HTML, CSS, JavaScript, embedded IoT, and receiving university foundation day honors.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The First Web Builds',
        description: 'Learning responsive layouts and core web technologies through early frontend projects.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        runtime: '2023 – 2024',
        palette: monochrome1,
      },
      {
        code: 'S02 E02',
        title: 'The Science Lab',
        description: 'Developing the OmniLab physics platform, evolving practical calculations into interactive simulations and a virtual laboratory.',
        tags: ['OmniLab Studio', 'Physics Simulations', 'EdTech'],
        runtime: '2024',
        palette: monochrome3,
      },
      {
        code: 'S02 E03',
        title: 'GNDEC 68th Foundation Day Stage',
        description: 'Felicitated on the main auditorium stage by Principal Dr. Sehijpal Singh during GNDEC\'s 68th Foundation Day celebrations on April 8, 2024, for academic merit and campus leadership.',
        tags: ['GNDEC', '68th Foundation Day', 'Mainstage Honor', 'Auditorium'],
        runtime: 'April 2024',
        palette: silver,
      },
      {
        code: 'S02 E04',
        title: 'The Connected Systems',
        description: 'Deepened systems knowledge through the International IoT Webinar in collaboration with the American Association of Engineers of Indian Origin (AAEIO).',
        tags: ['IoT', 'AAEIO', 'Embedded Systems', 'Engineering'],
        runtime: 'March 2024',
        palette: monochrome2,
      },
      {
        code: 'S02 E05',
        title: 'The Python Foundation',
        description: 'Completed the accredited Infosys Springboard Python specialization across June and July 2024, earning certification in programming fundamentals and algorithms.',
        tags: ['Python', 'Infosys Springboard', 'DSA & OOP', 'Certified'],
        runtime: 'June – July 2024',
        palette: silver,
      },
    ],
  },
  {
    number: 3,
    title: 'The Creative Reel',
    period: '2024 – 2025',
    synopsis: 'Expanding from software into video editing, rhythm-matched cuts, color grading, and visual storytelling.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Cut & Pacing',
        description: 'Mastering video editing workflows, timeline rhythm, and audio leveling.',
        tags: ['Video Editing', 'Post-Production', 'Pacing'],
        runtime: '2024 – 2025',
        palette: silver,
      },
      {
        code: 'S03 E02',
        title: 'FinTech & Productivity Apps',
        description: 'Publishing Track Expenser (personal finance) and Taskly (task and notes workspace).',
        tags: ['Track Expenser', 'Taskly', 'Productivity'],
        runtime: '2025',
        palette: monochrome2,
      },
    ],
  },
  {
    number: 4,
    title: 'The Stage & Competition',
    period: '2024 – 2025',
    synopsis: 'Stepping up to the podium in inter-college competitions, pitching on ideathon stages, and contributing to global research.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Podium Triad',
        description: 'Securing 3rd Prize in C Debugging at Arya College Tech Disha, 2nd Position in CML Case Study Making, and 3rd in Mind Wrapping problem solving.',
        tags: ['Arya College 3rd', 'CML Case Study 2nd', 'Mind Wrapping', 'Podium'],
        runtime: '2024 – 2025',
        palette: monochrome1,
      },
      {
        code: 'S04 E02',
        title: 'Smart Traffic Ideathon',
        description: 'Presenting a smart traffic management architectural proposal combining IoT sensors with optimization algorithms at the GNDEC Data Science Club Ideathon.',
        tags: ['Ideathon', 'Public Speaking', 'IoT & Smart City'],
        runtime: 'Sep 2024',
        palette: monochrome3,
      },
      {
        code: 'S04 E03',
        title: 'RE:BRAND & Global Research',
        description: 'Tackled creative repositioning at GNDEC DSC RE:BRAND and contributed to J-PAL South Asia’s empirical Digital Wellness research study with Columbia, UIUC, and Stanford.',
        tags: ['RE:BRAND', 'J-PAL South Asia', 'Brand Strategy', 'Global Research'],
        runtime: '2024 – 2025',
        palette: silver,
      },
      {
        code: 'S04 E04',
        title: '64th Annual Athletics Meet',
        description: 'Represented Computer Science & Engineering department in 100m Sprint and Long Jump at the GNDEC 64th Annual Athletics Meet 2025.',
        tags: ['Athletics', '100m Sprint', 'Long Jump', 'University Meet'],
        runtime: 'Feb 2025',
        palette: monochrome2,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next / Now Streaming",
    period: '2026 – Future',
    synopsis: 'The convergence of computer science systems, video production, and mainstage leadership.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'THINK-A-THON 2026 & Web Forge',
        description: 'Participated in THINK-A-THON 2026, an intensive 8-Hour Inter-College Hackathon by ITian Club, and built reactive components in WEB FORGE by GNDEC Data Science Club.',
        tags: ['THINK-A-THON', 'Inter-College Hackathon', 'Web Forge', 'GNDEC DSC'],
        runtime: '2026',
        palette: monochrome1,
      },
      {
        code: 'S05 E02',
        title: 'The Multi-Hyphenate Vanguard',
        description: 'Building high-performance distributed systems, directing cinematic reels, and delivering tech talks.',
        tags: ['Full-Stack', 'Video Direction', 'Public Speaking'],
        runtime: 'In Production',
        palette: silver,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Academic Standing', title: '8.6 CGPA', detail: 'B.Tech Computer Science & Engineering at GNDEC', palette: monochrome1 },
  { label: 'Stage Felicitation', title: '68th Foundation Day', detail: 'Honored by Principal Dr. Sehijpal Singh on GNDEC Auditorium Stage', palette: silver },
  { label: 'Inter-College Hackathon', title: 'THINK-A-THON 2026', detail: '8-Hour sprint contender organized by ITian Club GNDEC', palette: monochrome2 },
  { label: 'Global Research Study', title: 'J-PAL South Asia', detail: 'Digital Wellness research with Columbia, Stanford & UIUC', palette: silver },
  { label: 'Podium Finish', title: '3rd Place C Debugging', detail: 'Tech Disha 2024 at Arya College Ludhiana', palette: monochrome1 },
  { label: 'Podium Case Study', title: '2nd Place Case Study', detail: 'Center for Multi-Faceted Learning (CML GNDEC)', palette: silver },
  { label: 'The FinTech App', title: 'Track Expenser', detail: 'Bilingual finance dashboard with WhatsApp expense capture', palette: monochrome3 },
  { label: 'Stage Presentation', title: 'Smart Traffic Ideathon', detail: 'Mainstage technical proposal to judges', palette: monochrome1 },
  { label: 'Alma Mater Shield', title: 'Islamia School Award', detail: 'Academic excellence shield presented by Principal & faculty', palette: monochrome2 },
  { label: 'Industrial Training', title: 'ThinkNEXT AI & ML (Grade A)', detail: 'Machine learning & neural pipelines certified with Grade A', palette: silver },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Science',
    lines: ['Guru Nanak Dev Engineering College (GNDEC), Ludhiana', '2023 – 2027'],
    chips: ['CGPA 8.5', '12th Grade: 89%', '10th Grade: 87%'],
  },
  {
    kicker: 'Engineering',
    title: 'Frontend & Web Systems',
    lines: ['HTML5, CSS3, JavaScript · C++, Python', 'Responsive layouts, state persistence, clean DOM engines'],
    chips: ['HTML5', 'CSS3', 'JavaScript', 'C++', 'Python'],
  },
  {
    kicker: 'The Creative Craft',
    title: 'Video Editor & Colorist',
    lines: ['Pacing, rhythm-matched cutting, DaVinci Resolve color science', 'Motion graphics, spatial audio design and Foley layering'],
    chips: ['Video Editing', 'Color Grading', 'Premiere Pro', 'Figma'],
  },
  {
    kicker: 'Originals',
    title: 'Featured Projects',
    lines: [
      'HostelEase — Location-based hostel service discovery',
      'OmniLab Studio — Interactive physics simulations and lab reports',
      'ZID Fitness Zone — Full-stack member and gym management',
    ],
  },
  {
    kicker: 'The Stage',
    title: 'Podium & Keynotes',
    lines: [
      'THINK-A-THON 2026 — 8-Hour Inter-College Hackathon',
      '3rd Position — Mind Wrapping (Inter-College)',
      'Presenter — Smart Traffic Management Ideathon',
      'Contributor — J-PAL South Asia (Columbia/Stanford/UIUC Study)',
    ],
  },
  {
    kicker: 'Certified',
    title: 'Industry & Academic Accreditations',
    lines: [
      'ITian Club GNDEC — THINK-A-THON 2026 Appreciation',
      'J-PAL South Asia — Digital Wellness in India Research',
      'GNDEC Data Science Club — IDEATHON & RE:BRAND',
      'AAEIO (USA) — International IoT Technology Webinar',
      'Infosys Springboard — Python Foundation',
    ],
  },
];

export type ProfileId = 'shehzad' | 'recruiter' | 'developer' | 'creative' | 'speaker';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export function getProjectsForProfile(profileId: ProfileId): Project[] {
  if (profileId === 'developer') return projects.filter((project) => project.id !== 'video-editing-reel');
  if (profileId === 'creative') return projects.filter((project) => project.id === 'video-editing-reel');
  return projects;
}

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'shehzad',
    name: 'Shehzad',
    blurb: 'The full series, in order',
    color: '#ffffff',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#e4e4e7',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Software projects, coding skills & engineering',
    color: '#d4d4d8',
    order: ['originals', 'skills'],
  },
  {
    id: 'creative',
    name: 'Video Editor',
    blurb: 'Video editing, color grading & motion design',
    color: '#a1a1aa',
    order: ['originals', 'skills'],
  },
  {
    id: 'speaker',
    name: 'Public Speaker',
    blurb: 'Public speaking, presentations & stage moments',
    color: '#ffffff',
    order: ['moments', 'skills'],
  },
];

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export const experience = [
  {
    company: 'GNDEC Computer Science & Engineering',
    role: 'B.Tech CSE Student & Developer',
    place: 'Ludhiana, Punjab',
    period: '2023 – 2027',
    points: [
      'Maintaining an 8.6 CGPA across core computer science disciplines including data structures, algorithms, and system design.',
      'Developed responsive web applications and scientific tools including HostelEase, OmniLab Studio (8 interactive physics experiments), and Track Expenser.',
      'Represented the university in competitive inter-college hackathons (THINK-A-THON 2026), GNDEC Data Science Club Ideathons, RE:BRAND design challenges, and athletic meets.',
      'Contributed to the multi-institution empirical research study "Digital Wellness in India" organized by J-PAL South Asia with researchers from Columbia University, UIUC, and Stanford University.',
    ],
  },
  {
    company: 'Freelance & Independent Projects',
    role: 'Video Editor & Frontend Designer',
    place: 'Punjab, India',
    period: '2024 – Present',
    points: [
      'Delivered commercial video editing commissions, rhythm-matched cuts, and DaVinci Resolve color grading.',
      'Built the full-stack ZID Fitness Zone platform and Taskly productivity workspace.',
    ],
  },
];

export type Certification = {
  id: string;
  issuer: string;
  name: string;
  link?: string;
  image?: string;
  date?: string;
  detail: string;
  credentialId?: string;
  type?: string;
  laurel?: string;
  tags?: string[];
  signatories?: string[];
};

export const certifications: Certification[] = [
  {
    id: 'web-forge-2026',
    issuer: 'GNDEC Data Science Club',
    name: 'WEB FORGE — Web Engineering & Development Challenge',
    detail: 'Certificate of Participation in the "WEB FORGE" technical event organized on 09-02-2026 by the GNDEC Data Science Club. Built reactive interfaces, modular state management, and modern responsive layouts evaluated by departmental faculty.',
    date: '09-02-2026',
    image: '/assets/certificates/gndec_web_forge_2026.jpg',
    link: '/assets/certificates/gndec_web_forge_2026.jpg',
    credentialId: 'Ref: CSE/DSC/4681 • URN: 2302612 • CRN: 2315157',
    type: 'Web Engineering Challenge',
    laurel: 'Web Architect',
    tags: ['Web Development', 'Frontend', 'React', 'GNDEC DSC', 'Web Forge'],
    signatories: ['Prof. Nancy (Faculty Coordinator)', 'Dr. Inderjit Singh (Faculty Coordinator)', 'Dr. Kiran Jyoti (HoD CSE)'],
  },
  {
    id: 'thinknext-ai-ml-2025',
    issuer: 'ThinkNEXT Technologies (ISO 9001:2015)',
    name: 'Industrial Training: AI & ML using Python (Grade A Outstanding)',
    detail: 'Successfully completed the intensive 1-Month Industrial Training Program in AI & ML using Python from 23rd June to 23rd July 2025, evaluated with Grade A (Outstanding). Built ML regression, classification, and neural pipelines.',
    date: '23-07-2025',
    image: '/assets/certificates/thinknext_ai_ml_training_grade_a.jpg',
    link: '/assets/certificates/thinknext_ai_ml_training_grade_a.jpg',
    credentialId: 'Certificate ID: 939895 • Ref: TNT/C-25/16718',
    type: 'Certificate of Excellence',
    laurel: 'Grade A Outstanding',
    tags: ['Machine Learning', 'AI', 'Python', 'ThinkNEXT', 'Grade A', 'TR-102'],
    signatories: ['Munish Mittal (Director)', 'Nagma Khan (Authorised Signatory)'],
  },
  {
    id: 'cml-case-study-2025',
    issuer: 'Center for Multi-Faceted Learning (GNDEC)',
    name: 'Online Case Study Making Competition — 2nd Position',
    detail: 'Certificate of Appreciation awarded for securing 2nd Position in the Online Case Study Making Competition held from 5th to 8th September 2025. Highly commended for creativity, effort, and analytical problem structuring.',
    date: '08-09-2025',
    image: '/assets/certificates/cml_case_study_2nd_prize_2025.jpg',
    link: '/assets/certificates/cml_case_study_2nd_prize_2025.jpg',
    credentialId: 'Ref: CML/2025/SA/09/002 • 2nd Position',
    type: 'Podium Award (2nd Position)',
    laurel: 'Podium Case Study',
    tags: ['Case Study', 'Analytical Research', '2nd Position', 'CML GNDEC'],
    signatories: ['Dr. Sehijpal Singh (Principal)', 'Officer Incharge, CML'],
  },
  {
    id: 'gndec-athletics-100m',
    issuer: 'GNDEC Sports Board',
    name: '64th Annual Athletics Meet — 100m Sprint',
    detail: 'Athletics Certificate of Participation in 100m Sprint at the 64th Annual Athletics Meet held on 20th & 21st February 2025 at Guru Nanak Dev Engineering College. Represented CSE Department.',
    date: '21-02-2025',
    image: '/assets/certificates/gndec_athletics_100m_2025.jpg',
    link: '/assets/certificates/gndec_athletics_100m_2025.jpg',
    credentialId: 'Serial No: SP/ATH/24-25/079 • Roll: 2302612',
    type: 'Athletics Certificate',
    laurel: 'University Athlete',
    tags: ['Athletics', '100m Sprint', '64th Meet', 'GNDEC Sports'],
    signatories: ['Dr. Gunjan Bhardwaj (Secretary Sports)', 'Dr. J.S. Grewal (President Sports)', 'Dr. Sehijpal Singh (Principal)'],
  },
  {
    id: 'thinkathon-2026',
    issuer: 'ITian Club, GNDEC',
    name: 'THINK-A-THON 2026 (8-Hour Inter-College Hackathon)',
    detail: 'Certificate of Appreciation for active participation in THINK-A-THON 2026, an intensive 8-Hour Inter-College Level Hackathon organized by the ITian Club, Department of Information Technology, Guru Nanak Dev Engineering College, Ludhiana. Developed rapid collaborative software solutions under the banner "Where Ideas Ignite Impact".',
    date: '07-04-2026',
    image: '/assets/certificates/thinkathon_2026.jpg',
    link: '/assets/certificates/thinkathon_2026.jpg',
    credentialId: 'CRN: 2315157 • 3rd Year CSE',
    type: 'Certificate of Appreciation',
    laurel: 'Hackathon Contender',
    tags: ['Hackathon', 'Inter-College', '8-Hour Sprint', 'Full-Stack', 'Rapid Prototyping'],
    signatories: ['Prof. (Dr.) Kulvinder Singh Mann (H.O.D. - IT)', 'Prof. (Dr.) Palwinder Kaur (Assistant Professor & Faculty Advisor)'],
  },
  {
    id: 'rebrand-2025',
    issuer: 'GNDEC Data Science Club',
    name: 'RE:BRAND Design & Brand Strategy Challenge',
    detail: 'Certificate of Participation in the "RE:BRAND" event organized by the GNDEC Data Science Club on Feb 06, 2025. Focused on creative product repositioning, brand identity systems, user experience design, and executive pitch execution evaluated by faculty coordinators.',
    date: '12-02-2025',
    image: '/assets/certificates/rebrand_2025.jpg',
    link: '/assets/certificates/rebrand_2025.jpg',
    credentialId: 'Ref: CSE/DSC/3385 • URN: 2302612',
    type: 'Certificate of Participation',
    laurel: 'Brand Strategy',
    tags: ['Brand Strategy', 'UI/UX Design', 'Design Thinking', 'Pitch Presentation'],
    signatories: ['Er. Paramveer Kaur (Faculty Coordinator)', 'Dr. Inderjit Singh (Faculty Coordinator)', 'Dr. Kiran Jyoti (HoD CSE)'],
  },
  {
    id: 'ideathon-2024',
    issuer: 'GNDEC Data Science Club',
    name: 'IDEATHON Innovation & Solution Pitch',
    detail: 'Certificate of Participation for pitching innovative technological solutions at IDEATHON organized by GNDEC Data Science Club on Sep 06, 2024. Architected and delivered the Smart Traffic Management proposal combining IoT sensors with traffic load distribution algorithms.',
    date: '10-09-2024',
    image: '/assets/certificates/ideathon_2024.jpg',
    link: '/assets/certificates/ideathon_2024.jpg',
    credentialId: 'Ref: CSE/DSC/1905 • CRN: 2315157',
    type: 'Certificate of Participation',
    laurel: 'Stage Presenter',
    tags: ['Ideathon', 'Public Speaking', 'Smart Traffic Management', 'IoT', 'System Design'],
    signatories: ['Er. Paramveer Kaur (Faculty Coordinator)', 'Dr. Inderjit Singh (Faculty Coordinator)', 'Dr. Kiran Jyoti (HoD CSE)'],
  },
  {
    id: 'jpal-wellness-2024',
    issuer: 'J-PAL South Asia (Columbia / Stanford / UIUC)',
    name: 'Digital Wellness in India Research Study',
    detail: 'Certificate of Participation awarded by the Abdul Latif Jameel Poverty Action Lab (J-PAL) South Asia acknowledging participation in the empirical research study "Digital Wellness in India" conducted in collaboration with researchers from Columbia University, University of Illinois (UIUC), and Stanford University.',
    date: '2024',
    image: '/assets/certificates/jpal_digital_wellness.jpg',
    link: '/assets/certificates/jpal_digital_wellness.jpg',
    credentialId: 'Academic Research Study • College: GNE',
    type: 'Certificate of Participation',
    laurel: 'Global Research',
    tags: ['Academic Research', 'J-PAL South Asia', 'Columbia University', 'Stanford University', 'UIUC', 'Behavioral Study'],
    signatories: ['Jalnidh Kaur (Columbia University)', 'Lena Song (University of Illinois UIUC)', 'Mridul Joshi (Stanford University)'],
  },
  {
    id: 'iot-webinar-2024',
    issuer: 'GNDEC DSC & AAEIO (USA)',
    name: 'International Webinar: Introduction to IoT Technology & Engineering Relevance',
    detail: 'Certificate of Participation for attending the international webinar on "An Introduction to Internet of Things (IoT) Technology and Its Relevance to Engineering", organized by GNDEC Data Science Club in collaboration with the American Association of Engineers of Indian Origin (AAEIO) on March 2, 2024.',
    date: '27-03-2024',
    image: '/assets/certificates/iot_webinar_2024.jpg',
    link: '/assets/certificates/iot_webinar_2024.jpg',
    credentialId: 'Ref: CSE/DSC/1277 • URN: 2302612',
    type: 'Certificate of Participation',
    laurel: 'International Tech',
    tags: ['Internet of Things (IoT)', 'AAEIO USA', 'Sensor Networks', 'Cloud Telemetry', 'Engineering Relevance'],
    signatories: ['Dr. Amit Jain (Faculty Coordinator)', 'Dr. Inderjit Singh (Faculty Coordinator)', 'Dr. Kiran Jyoti (HoD CSE)'],
  },
  {
    id: 'infosys-python-foundation',
    issuer: 'Infosys Springboard',
    name: 'Python Foundation Certification (Capstone)',
    detail: 'Awarded Certificate of Achievement by Infosys Springboard for successfully completing the Python Foundation Certification on July 20, 2024. Covers object-oriented programming, algorithmic reasoning, and computational problem solving.',
    date: '20-07-2024',
    image: '/assets/certificates/infosys_python_foundation.jpg',
    link: '/assets/certificates/infosys_python_foundation.jpg',
    credentialId: 'Verified via onwingspan QR code',
    type: 'Certificate of Achievement',
    laurel: 'Industry Certified',
    tags: ['Python', 'DSA', 'OOP', 'Infosys Springboard', 'Verified'],
    signatories: ['Thirumala Arohi (Executive VP & Global Head, ETA, Infosys Limited)'],
  },
  {
    id: 'infosys-python-p2',
    issuer: 'Infosys Springboard',
    name: 'Programming Fundamentals using Python - Part 2',
    detail: 'Course completion certificate awarded by Infosys Springboard on July 3, 2024, for mastering advanced programming fundamentals, functions, modular architecture, and data structure handling in Python.',
    date: '03-07-2024',
    image: '/assets/certificates/infosys_python_part2.jpg',
    link: '/assets/certificates/infosys_python_part2.jpg',
    credentialId: 'Verified via onwingspan QR code',
    type: 'Course Completion Certificate',
    laurel: 'Infosys Certified',
    tags: ['Python Functions', 'Data Structures', 'Infosys Springboard', 'Algorithms'],
    signatories: ['Thirumala Arohi (Executive VP & Global Head, ETA, Infosys Limited)'],
  },
  {
    id: 'infosys-python-p1',
    issuer: 'Infosys Springboard',
    name: 'Programming Fundamentals using Python - Part 1',
    detail: 'Course completion certificate awarded by Infosys Springboard on June 27, 2024, for mastering core programming paradigms, control flow, loops, and foundational problem solving in Python.',
    date: '27-06-2024',
    image: '/assets/certificates/infosys_python_part1.jpg',
    link: '/assets/certificates/infosys_python_part1.jpg',
    credentialId: 'Verified via onwingspan QR code',
    type: 'Course Completion Certificate',
    laurel: 'Infosys Certified',
    tags: ['Python Basics', 'Control Flow', 'Infosys Springboard', 'Syntax'],
    signatories: ['Thirumala Arohi (Executive VP & Global Head, ETA, Infosys Limited)'],
  },
  {
    id: 'be10x-ai',
    issuer: 'BE10x',
    name: '1-Day AI Tools Workshop Certificate',
    detail: 'Certificate of Completion for completing the 1-Day AI Tools Workshop conducted on 24th March, 2024. Mastered generative AI developer workflows, automated prompt engineering, and productivity enhancement tooling.',
    date: '24-03-2024',
    image: '/assets/certificates/be10x_ai_workshop.jpg',
    link: '/assets/certificates/be10x_ai_workshop.jpg',
    credentialId: 'Awarded by Aditya Kachave & Aditya Goenka',
    type: 'Certificate of Completion',
    laurel: 'AI Practitioner',
    tags: ['Generative AI', 'Prompt Engineering', 'Productivity Tools', 'Automation'],
    signatories: ['Aditya Kachave (Co-Founder)', 'Aditya Goenka (Co-Founder)'],
  },
  {
    id: 'arya-college-tech-disha',
    issuer: 'Arya College Ludhiana',
    name: 'Tech Disha 2024 — IIIrd Prize in C Debugging',
    detail: 'Awarded 3rd Prize in "Debugging using C" at the annual inter-college technical symposium Tech Disha - 2024 held at Arya College Ludhiana on February 29, 2024.',
    date: '29-02-2024',
    image: '/assets/certificates/arya_college_tech_disha_3rd.jpg',
    link: '/assets/certificates/arya_college_tech_disha_3rd.jpg',
    credentialId: 'Won IIIrd Prize • NAAC "A" Grade College',
    type: 'Podium Award (3rd Prize)',
    laurel: 'Podium Finish',
    tags: ['C Programming', 'Code Debugging', '3rd Prize', 'Tech Disha', 'Podium'],
  },
  {
    id: 'declamation-we-are-one',
    issuer: 'Awake Foundation (Regd.) Malerkotla',
    name: 'Declamation Contest "WE ARE ONE" — 2nd Position',
    detail: 'Awarded 2nd Position in the grand Declamation Contest organized by Awake Foundation and sponsored by Radiance Institute of Language, competing across 51+ schools/colleges with 510+ participants.',
    date: 'Islamia Sen. Sec. School',
    image: '/assets/certificates/declamation_2nd_prize.jpg',
    link: '/assets/certificates/declamation_2nd_prize.jpg',
    credentialId: '2nd Position • 51+ Schools & Colleges • 5,100+ Audience',
    type: 'Podium Award (2nd Position)',
    laurel: 'Podium Speaker',
    tags: ['Declamation', 'Public Speaking', '2nd Position', 'Oratory', 'Podium'],
    signatories: ['M.A. Naaz (Project Director)', 'Mohd. Shahid (Managing Director, Radiance Institute)'],
  },
  {
    id: 'coding-ninjas-summer-hack',
    issuer: 'Coding Ninjas',
    name: 'Summer Hack 1.0 Hackathon',
    detail: 'Certificate of Participation for building software prototypes and competitive coding solutions in the national Summer Hack 1.0 Hackathon organized by Coding Ninjas.',
    date: 'Summer Hack 1.0',
    image: '/assets/certificates/coding_ninjas_summer_hack.jpg',
    link: '/assets/certificates/coding_ninjas_summer_hack.jpg',
    credentialId: 'Certificate No: 452725',
    type: 'Hackathon Credential',
    laurel: 'Hackathon Contender',
    tags: ['Hackathon', 'Coding Ninjas', 'Full-Stack', 'Prototyping'],
    signatories: ['Ankush Singla (Founder, Coding Ninjas)'],
  },
  {
    id: 'iete-debugging-2024',
    issuer: 'IETE Students\' Forum (GNDEC)',
    name: 'Code Debugging Competition',
    detail: 'Certificate of Participation for competing in the Code Debugging event conducted on February 2, 2024, by the IETE Students\' Forum, Department of Electronics & Communication Engineering, GNDEC.',
    date: '02-02-2024',
    image: '/assets/certificates/iete_code_debugging_2024.jpg',
    link: '/assets/certificates/iete_code_debugging_2024.jpg',
    credentialId: 'Sr. No.: ECE/IETE/609 • Roll: 2315157',
    type: 'Certificate of Participation',
    laurel: 'Code Debugger',
    tags: ['Code Debugging', 'C/C++', 'IETE SF', 'Algorithms'],
    signatories: ['Er. Shivmanmeet Singh (Secretary IETE SF)', 'Dr. Munish Rattan (Coordinator IETE SF)', 'Dr. Narwant Singh (HOD ECE)'],
  },
  {
    id: 'gndec-athletics-cert',
    issuer: 'GNDEC Sports Board',
    name: '64th Annual Athletics Meet — Long Jump',
    detail: 'Athletics Certificate of Participation in Long Jump at the 64th Annual Athletics Meet held on 20th & 21st February 2025 at Guru Nanak Dev Engineering College.',
    date: '21-02-2025',
    image: '/assets/certificates/gndec_athletics_2025.jpg',
    link: '/assets/certificates/gndec_athletics_2025.jpg',
    credentialId: 'Serial No: SP/ATH/24-25/451 • Roll: 2302612',
    type: 'Athletics Certificate',
    laurel: 'University Athlete',
    tags: ['Athletics', 'Long Jump', '64th Meet', 'GNDEC Sports'],
    signatories: ['Dr. Gunjan Bhardwaj (Secretary Sports)', 'Dr. J.S. Grewal (President Sports)', 'Dr. Sehijpal Singh (Principal)'],
  },
  {
    id: 'mind-wrapping-award',
    issuer: 'Inter-College Competition',
    name: 'Mind Wrapping 3rd Position Award',
    detail: 'Podium finish securing 3rd place among top engineering colleges in high-stakes algorithmic reasoning, puzzles, and problem solving.',
    date: '2024',
    link: 'https://www.linkedin.com/in/shehzad23/',
    type: 'Podium Award',
    laurel: 'Podium Finish',
    tags: ['Algorithmic Logic', 'Problem Solving', 'Podium', 'Inter-College'],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'HTML5': ['ZID Fitness Zone', 'Taskly', 'Shudh Loha Business Site', 'Web Forge 2026'],
  'CSS3': ['Track Expenser', 'ZID Fitness Zone', 'Shudh Loha Business Site', 'Web Forge 2026'],
  'JavaScript': ['Track Expenser', 'Taskly', 'Coding Ninjas Summer Hack', 'Web Forge 2026'],
  'Responsive Design': ['ZID Fitness Zone', 'HostelEase', 'Shudh Loha Business Site', 'Web Forge 2026'],
  'Supabase': ['Shudh Loha Business Site', 'Track Expenser'],
  'C++': ['Arya College Tech Disha (3rd Prize in C)', 'IETE Code Debugging', 'Mind Wrapping 3rd Place', 'THINK-A-THON 2026'],
  'Python': ['ThinkNEXT Industrial Training (Grade A)', 'Infosys Python Foundation (Capstone)', 'Infosys Python Part 1 & 2', 'Data Science & Automation'],
  'Video Editing': ['Cinematic Motion Suite', '4K Commercial Reels'],
  'Color Grading': ['DaVinci Resolve Studio', 'ACES Color Management'],
  'Figma UI/UX': ['ZID Fitness Zone', 'RE:BRAND Strategy Challenge', 'Modern Wireframes'],
  'Sound Design': ['Foley Layering', 'Audio Stem Balancing'],
  'Technical Presentation': ['GNDEC 68th Foundation Day Stage Honor', 'Smart Traffic Management Ideathon', 'RE:BRAND Pitch Presentation', 'Declamation Contest 2nd Position', 'All India Lohar Trust Honours Ceremony'],
  'Analytical Thinking': ['CML Case Study 2nd Position', 'Arya College 3rd Prize C Debugging', 'THINK-A-THON 2026 Hackathon', 'J-PAL Digital Wellness Study', 'IETE Code Debugging'],
  'Communication': ['Declamation Contest 2nd Position (Awake Foundation)', 'GNDEC 68th Foundation Day Stage Honor', 'Alma Mater Excellence Shield', 'English, Hindi, Punjabi Fluency'],
};

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & Background', palette: monochrome1 },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: monochrome2 },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Code & Film`, palette: silver },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 portfolio highlights', palette: monochrome3 },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: monochrome1 },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: monochrome2 },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & Download', palette: silver },
};
