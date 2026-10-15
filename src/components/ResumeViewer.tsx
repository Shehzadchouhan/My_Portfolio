import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  achievements,
  certifications,
  education,
  experience,
  projects,
  skillCategories,
  roleResumePdfs,
  type ProfileId,
} from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

export function printResumePdf(resumeElement?: HTMLElement | null) {
  const resume = resumeElement ?? document.querySelector<HTMLElement>('[data-resume-sheet]');
  if (!resume) {
    window.alert('Open the resume before saving it as a PDF.');
    return;
  }

  const existingPrintArea = document.querySelector('.resume-print-area');
  existingPrintArea?.remove();
  const printableResume = resume.cloneNode(true) as HTMLElement;
  printableResume.id = 'resume-print-root';
  const printArea = document.createElement('div');
  printArea.className = 'resume-print-area';
  printArea.style.display = 'none';
  printArea.append(printableResume);
  const printStyles = document.createElement('style');
  printStyles.className = 'resume-print-styles';
  printStyles.textContent = `
    @media print {
      @page { size: A4; margin: 12mm; }
      html, body { background: #fff !important; color: #111 !important; }
      body.resume-printing > *:not(.resume-print-area) { display: none !important; }
      body.resume-printing > .resume-print-area {
        display: block !important; position: static !important; width: 100% !important;
        overflow: visible !important; background: #fff !important; color: #111 !important;
      }
      #resume-print-root {
        width: 100% !important; max-width: none !important; margin: 0 !important; padding: 0 !important;
        overflow: visible !important; border: 0 !important; border-radius: 0 !important;
        background: #fff !important; color: #111 !important; box-shadow: none !important;
      }
      #resume-print-root * {
        color: #111 !important; background-color: transparent !important;
        border-color: #bbb !important; box-shadow: none !important; text-shadow: none !important;
      }
      #resume-print-root .resume-print-controls,
      #resume-print-root [aria-hidden="true"] { display: none !important; }
      #resume-print-root a { color: #111 !important; text-decoration: none; }
    }
  `;

  const cleanup = () => {
    document.body.classList.remove('resume-printing');
    printArea.remove();
    printStyles.remove();
  };
  window.addEventListener('afterprint', cleanup, { once: true });
  document.head.append(printStyles);
  document.body.append(printArea);
  document.body.classList.add('resume-printing');
  window.print();
}

export const atsRecruiterResumeText = `MOHD SHEHZAD
Malerkotla, Punjab, India | +91 9988059285 | mail-shehzadchouhan260@gmail.com
LinkedIn: linkedin.com/in/shehzad23 | GitHub: github.com/ShehzadChouhan | Portfolio: my-portfolio-rosy-beta-29.vercel.app

PROFESSIONAL SUMMARY
High-achieving Computer Science undergraduate (CGPA 8.6/10) at GNDEC Ludhiana with proven dual competency in full-stack software engineering and technical communication. Creator of 4+ production web applications (React, TypeScript, Node.js, Python, PostgreSQL/Supabase), J-PAL South Asia research contributor (Columbia/Stanford/UIUC empirical study), and Grade-A certified AI/ML practitioner. Demonstrated leadership across podium finishes in competitive algorithmic debugging, 8-hour inter-college hackathons, and public speaking, including 2nd Position in a declamation contest sponsored by Radiance Foundation. Presented a Smart Traffic Management proposal at the GNDEC Data Science Club Ideathon. Seeking Software Development Engineer (SDE), Full-Stack Developer, or Associate Product/Tech roles.

EDUCATION & ACADEMIC DISTINCTION
Bachelor of Technology (B.Tech), Computer Science & Engineering | Guru Nanak Dev Engineering College (GNDEC), Ludhiana
2023 – 2027 | Current CGPA: 8.6 / 10.0
• Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks, System Design Fundamentals.
• Academic Recognition: Felicitated on the Main Auditorium stage on GNDEC 68th Foundation Day by Principal Dr. Sehijpal Singh for student initiatives and scholastic merit.

Senior Secondary (12th Grade) | Islamia Senior Secondary School, Malerkotla
2021 – 2023 | Score: 89% (Academic Honor; separate Outstanding Student Award)

Secondary Matriculation (10th Grade) | Islamia Senior Secondary School, Malerkotla
2020 – 2021 | Score: 87%

CORE TECHNICAL SKILLS
• Programming Languages: C, C++, Python, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3
• Frontend Engineering: React.js, Tailwind CSS, Vite, Framer Motion, HTML5 Canvas API, Component-Driven State Management, Responsive Web Architecture
• Backend & Databases: Node.js, Express.js, RESTful APIs, Supabase, PostgreSQL, Relational Database Modeling, JWT Auth
• Tools & Methodologies: Git, GitHub, Linux/Bash, Postman, Vercel, Netlify, Render, Agile Development, Systems Debugging
• AI Acceleration & ML: NumPy, Pandas, Scikit-Learn fundamentals, Generative AI developer workflows, Prompt Engineering (BE10x Certified)

FLAGSHIP PRODUCTION PROJECTS
1. HostelEase — Location-Based Accommodation Discovery Platform
• Tech Stack: React.js, TypeScript, Tailwind CSS, Supabase (PostgreSQL), Vite | Live: hostel-ease-sigma.vercel.app
• Engineered a full-stack accommodation discovery platform for university students featuring location-based service filtering, verified property listings, and real-time inquiry workflows.
• Modeled a relational PostgreSQL schema on Supabase with real-time state synchronization, maintaining sub-100ms response times and consistent UI state through reusable, type-safe React components.

2. OmniLab Studio — Interactive Physics Simulation & Virtual Lab Workbench
• Tech Stack: React.js, TypeScript, HTML5 Canvas API, WebGL, Tailwind CSS | Live: omni-physics-lab.vercel.app
• Built an in-browser physics simulation engine running 8 real-time laboratory experiments (Wave Optics, Pendulum Kinematics, Circuit Resistivity) by implementing mathematical physics models in client-side runtime.
• Developed reactive parameter controls updating simulations at 60 FPS, with automated lab report generation using efficient React state management.

3. Track Expenser — Expense Intelligence & Financial Analytics Application
• Tech Stack: React.js, Chart.js, Supabase, Tailwind CSS, REST APIs | Live: track-expenser.vercel.app
• Developed a financial tracking app with user authentication, multi-category transaction management, and budget forecasting by integrating Supabase with REST API calls.
• Visualized spending breakdowns with dynamic Chart.js dashboards, delivering instant category-level financial insights.

4. ZID Fitness Zone & Taskly — Management & Productivity Applications
• Tech Stack: React.js, Node.js/Express, Supabase, Tailwind CSS | Live: zid-fitness-zone.onrender.com
• Deployed full-stack role-based member and attendance workflows alongside a Kanban-style task workspace with drag-and-drop mechanics and persistent state.

RESEARCH EXPERIENCE & INDUSTRIAL TRAINING
Research Contributor — "Digital Wellness in India" | J-PAL South Asia (Columbia, Stanford & UIUC Study) | 2024
• Contributed to empirical field data aggregation, user metric tracking, and digital device analytics for a multi-institution research study led by researchers from Columbia University, Stanford University, and UIUC.

Industrial Training in AI & ML using Python | ThinkNEXT Technologies (ISO 9001:2015) | Grade A (Outstanding)
• Completed an intensive 1-month program covering Machine Learning regression, classification, and data analytics pipelines using Python, NumPy, and Pandas (Cert ID: 939895).

LEADERSHIP, COMPETITIVE PODIUMS & HONORS
• 3rd Prize (Podium Finish), "Debugging using C" — Tech Disha 2024, Arya College (Outperformed regional competitors in code debugging, memory resolution, and algorithmic problem-solving).
• 1st Position, Grand Declamation Contest — Conversa English Academy & Azad Foundation ("Plant Tree, Save Earth"; separate contest).
• 2nd Position, Grand Declamation Contest — Radiance Foundation (hosted by Awake Foundation; Theme: "WE ARE ONE", 51+ institutions).
• Contender, THINK-A-THON 2026 — 8-Hour Inter-College Hackathon by ITian Club, GNDEC ("Where Ideas Ignite Impact").
• 2nd Position (Podium Finish), Online Case Study Making Competition — Center for Multi-Faceted Learning (CML), GNDEC (Commended for analytical problem formulation and presentation delivery).
• Stage Felicitation Honor — GNDEC 68th Foundation Day (Auditorium stage honor by Principal Dr. Sehijpal Singh).
• State Honours Ceremony Memento — All India Lohar Trust (Regd.) Punjab (Honored at the state-level ceremony for community leadership and scholastic distinction).
• Contender, Coding Ninjas Summer Hack 1.0 (National full-stack prototyping challenge).
• University Athlete, 64th Annual Athletics Meet — GNDEC (Competed in 100m Sprint & Long Jump representing CSE Department).

TEACHING & MENTORSHIP (SOFT SKILLS & LEADERSHIP)
Academic Tutor & STEM Mentor | Independent Tutoring | Malerkotla, Punjab | 2024 – Present (1 Year)
• Mentored 15+ students across grades 5 through 10 in Mathematics, Science (Physics/Chemistry), and Computer Science fundamentals, improving term grades by 15–20% through structured diagnostic quizzes and personalized pedagogy.

VERIFIED INDUSTRY CERTIFICATIONS
• Python Foundation Certification (Capstone + Parts 1 & 2) — Infosys Springboard
• WEB FORGE 2026 Web Engineering Challenge — GNDEC Data Science Club (Ref: CSE/DSC/4681)
• AI Tools & Modern Engineering Acceleration Workshop — BE10x
• International IoT Technology & Engineering Webinar — AAEIO (USA) & GNDEC DSC

CONTACT
Phone: +91 9988059285
Instagram: https://www.instagram.com/shehzad_speaks?obrf=NGdrY3d6dXA2aDJs`;

export const atsDeveloperResumeText = `MOHD SHEHZAD
Malerkotla, Punjab, India | +91 9988059285 | mail-shehzadchouhan260@gmail.com
LinkedIn: linkedin.com/in/shehzad23 | GitHub: github.com/ShehzadChouhan | Portfolio: my-portfolio-rosy-beta-29.vercel.app

PROFESSIONAL SUMMARY
B.Tech Computer Science student at GNDEC Ludhiana (CGPA 8.6/10, Batch 2023–2027) building and deploying full-stack web applications with React.js, TypeScript, Node.js, Python and SQL/PostgreSQL. Strong foundation in Data Structures & Algorithms, OOP and DBMS, backed by podium finishes in debugging and case-study competitions. Seeking Software Development Engineer or Full-Stack Developer roles.

TECHNICAL SKILLS
Languages: C, C++, Python, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3
Frontend: React.js, Tailwind CSS, Vite, Framer Motion, HTML5 Canvas API, State Management, Responsive UI
Backend & Database: Node.js, Express.js, REST APIs, Supabase, PostgreSQL, Relational Database Modeling
Tools & Methodologies: Git, GitHub, Linux/Bash, Postman, Vercel, Agile Development, Debugging, Prompt Engineering

EDUCATION
Bachelor of Technology, Computer Science & Engineering | Guru Nanak Dev Engineering College, Ludhiana | 2023 – 2027 | CGPA: 8.6/10
Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, System Design Fundamentals

TECHNICAL PROJECTS
HostelEase – Hostel Discovery & Management Platform | React.js, TypeScript, Tailwind CSS, Supabase (PostgreSQL), Vite | Live: hostel-ease-sigma.vercel.app
• Engineered a full-stack accommodation platform for university students, delivered as a live Vercel deployment, by building location-based filtering, verified property listings and an interactive inquiry workflow.
• Modeled a relational PostgreSQL schema on Supabase with real-time state synchronization, keeping listing and inquiry data consistent across the UI through reusable, type-safe React components.

OmniLab Studio – Interactive Physics Simulation Workbench | React.js, TypeScript, HTML5 Canvas API, WebGL, Tailwind CSS | Live: omni-physics-lab.vercel.app
• Built a browser-based simulation engine running 8 real-time physics experiments (Wave Optics, Pendulum Kinematics, Circuit Resistivity) by implementing the governing equations in client-side code.
• Developed reactive parameter sliders that update simulations instantly, plus automated lab report generation, by applying component-driven architecture and efficient React state management.

Track Expenser – Expense Analytics Application | React.js, Chart.js, Supabase, Tailwind CSS, REST APIs | Live: track-expenser.vercel.app
• Developed a financial tracking app with user authentication, multi-category transaction management and budget forecasting by integrating Supabase with REST API calls.
• Visualized spending breakdowns with dynamic Chart.js dashboards, giving users instant category-level insight.

ZID Fitness Zone & Taskly | React.js, Node.js/Express, Supabase | Live: zid-fitness-zone.onrender.com
• Delivered membership and schedule tracking for a fitness facility, and a Kanban task manager with drag-and-drop and persistent state.

RESEARCH & TRAINING
Research Contributor | J-PAL South Asia (Columbia, Stanford & UIUC Study) | 2024
• Contributed to empirical data aggregation, user metric tracking, and digital device analytics for the "Digital Wellness in India" academic research initiative.

AI & ML using Python, Industrial Training | ThinkNEXT Technologies | Grade A (Outstanding)
• Completed a 1-month program covering Machine Learning fundamentals (Regression, Classification) using Python, NumPy and Pandas.

HONORS & AWARDS
• 3rd Prize, "Debugging using C", Tech Disha 2024, Arya College
• 2nd Position, Online Case Study Making Competition, Center for Multi-Faceted Learning (CML), GNDEC
• Participant, THINK-A-THON 2026 (8-hour inter-college hackathon, ITian Club, GNDEC)
• Participant, Coding Ninjas Summer Hack 1.0 (national full-stack prototyping challenge)

CERTIFICATIONS
• Python Foundation (Capstone + Parts 1 & 2), Infosys Springboard
• WEB FORGE 2026 Web Engineering Challenge, GNDEC Data Science Club
• AI Tools & Modern Engineering Acceleration Workshop, BE10x

CONTACT
Phone: +91 9988059285
Instagram: https://www.instagram.com/shehzad_speaks?obrf=NGdrY3d6dXA2aDJs`;

export const atsSpeakerResumeText = `MOHD SHEHZAD
Malerkotla, Punjab, India | +91 9988059285 | mail-shehzadchouhan260@gmail.com
LinkedIn: linkedin.com/in/shehzad23 | GitHub: github.com/ShehzadChouhan | Portfolio: my-portfolio-rosy-beta-29.vercel.app

PROFESSIONAL SUMMARY
Passionate Educator, STEM Instructor, and Award-Winning Public Speaker with 1+ year of hands-on teaching experience mentoring students from Class 5th to 10th across Mathematics, Science, and Computer Science. Proven track record of simplifying complex technical concepts into intuitive analogies, driving student engagement. Adept at curriculum delivery, interactive EdTech tools, and empathetic student counseling.

CORE TEACHING & ORATORY COMPETENCIES
• Pedagogical Excellence: Conceptual Simplification, Differentiated Instruction, Student-Centric Learning
• Subject Mastery: Mathematics (Algebra, Geometry), General Science & Physics, Computer Science & Coding Basics
• Public Speaking & Stage Delivery: Keynote Delivery, Voice Modulation, Audience Engagement, Declamation
• Educational Technology: Interactive Virtual Lab Simulations (OmniLab Studio), Digital Whiteboards, Visual Aids
• Classroom Leadership: Mentorship, Diagnostic Assessment, Parent-Teacher Communication, Exam Strategy

TEACHING & MENTORSHIP EXPERIENCE
Academic Tutor & STEM Educator | Independent Academic Mentorship | Malerkotla, Punjab | 2024 – Present (1 Year)
• Mentored 15+ students across grades 5 through 10 in Mathematics, Science (Physics/Chemistry), and Computer Science fundamentals, cultivating conceptual curiosity and disciplined study habits.
• Designed customized, interactive lesson plans breaking down challenging curriculum topics (e.g., Optics, Kinematics, Algebraic Equations) into visual experiments and relatable real-world analogies.
• Tracked individual learning curves through weekly diagnostic quizzes, resulting in an average grade improvement of 15–20% across term assessments.
• Provided regular one-on-one academic counseling and active parent communication to resolve learning bottlenecks and build student exam confidence.

PUBLIC SPEAKING, PRESENTATIONS & KEYNOTES
Keynote Presenter & Stage Architect | Smart Traffic Management Ideathon, GNDEC Data Science Club | Sep 2024
• Delivered a live technical keynote and architectural proposal on algorithmic urban mobility before an auditorium of engineering faculty, academic mentors, and peer delegates.
• Translated complex data science algorithms and machine learning concepts into an accessible, persuasive executive presentation.

Case Study Presenter | Center for Multi-Faceted Learning (CML), GNDEC | Sep 2025
• Secured 2nd Position in the Online Case Study Making Competition, recognized by evaluators for clear narrative structuring, articulation, and persuasive problem-solving delivery.

Research Contributor & Presenter | J-PAL South Asia (Columbia, Stanford & UIUC Study) | 2024
• Engaged in demographic field data collection and communication for the multi-university empirical study "Digital Wellness in India," collaborating with researchers across institutions.

HONORS & ORATORY AWARDS
• 1st Position, Grand Declamation Contest — Conversa English Academy & Azad Foundation ("Plant Tree, Save Earth"; separate contest).
• 2nd Position, Grand Declamation Contest — Radiance Foundation (hosted by Awake Foundation; Theme: "WE ARE ONE", 51+ institutions).
• Stage Felicitation Honor — GNDEC 68th Foundation Day (Felicitated on the Main Auditorium stage by Principal Dr. Sehijpal Singh for student initiatives, oratory representation, and academic excellence).
• State Honours Ceremony Memento — All India Lohar Trust (Regd.) Punjab (Honored at the state-level ceremony for community leadership, public engagement, and scholastic distinction).
• 12th Grade 89% Academic Honor and Outstanding Student Award — Islamia Senior Secondary School, Malerkotla.
• 2nd Position, Case Study Making Competition — Center for Multi-Faceted Learning (CML), GNDEC.

EDUCATION
Bachelor of Technology (B.Tech), Computer Science & Engineering | Guru Nanak Dev Engineering College (GNDEC), Ludhiana
2023 – 2027 | Current CGPA: 8.6 / 10.0
• Active presenter in department technical symposiums, hackathon stages, and university athletics meets (100m sprint & long jump).

Senior Secondary (12th Grade) | Islamia Senior Secondary School, Malerkotla
2021 – 2023 | Score: 89% (Academic Honor; separate Outstanding Student Award)

Senior Secondary (10th Grade) | Islamia Senior Secondary School, Malerkotla
2020 – 2021 | Score: 87%

EDUCATIONAL TECHNOLOGY PROJECTS
OmniLab Studio — Interactive Physics Virtual Lab Workbench | Live: omni-physics-lab.vercel.app
• Built an interactive virtual lab workbench with 8 simulated physics experiments (Wave Optics, Pendulum Motion, Electric Circuitry) to help secondary school students visualize abstract physics laws in real-time.

CONTACT
Phone: +91 9988059285
Instagram: https://www.instagram.com/shehzad_speaks?obrf=NGdrY3d6dXA2aDJs`;

/** THE FULL STORY — a designed resume preview plus view / download actions. */
export default function ResumeSection({ onView, profileId = 'shehzad' }: { onView: () => void; profileId?: ProfileId }) {
  const currentPdf = (profileId && roleResumePdfs[profileId]) || roleResumePdfs.shehzad;
  return (
    <>
      <SectionHeading kicker="The screenplay" title="The Full Story" aside={<p className="max-w-xs text-sm text-mist">Verified credentials, production engineering projects, and accredited certifications.</p>} />
      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
        >
          <CollapsibleSheet profileId={profileId} />
        </motion.div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-bone">Every episode, on one page.</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Education, training, projects, achievements and {certifications.length} certifications — view it here or take a copy with you.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
              >
                ▶ View Full Resume
              </button>
            </Magnetic>
            <Magnetic className="w-full">
              <a
                href={currentPdf.url}
                download={currentPdf.filename}
                data-cursor="link"
                className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-semibold text-bone transition hover:bg-white/15"
              >
                ⤓ Download {currentPdf.label} (PDF)
              </a>
            </Magnetic>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              { v: education[0].score.replace('CGPA ', ''), k: 'CGPA' },
              { v: String(projects.length), k: 'Originals' },
              { v: String(certifications.length), k: 'Certs' },
            ].map((s) => (
              <div key={s.k} className="bg-ink-2 px-2 py-4">
                <dd className="font-display text-3xl leading-none text-bone">{s.v}</dd>
                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">{s.k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

/** On phones the sheet starts as a teaser so the page keeps its pace; desktop shows it in full. */
function CollapsibleSheet({ profileId }: { profileId?: ProfileId }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${open ? 'max-h-[4000px]' : 'max-h-[560px]'}`}>
        <ResumeSheet profileId={profileId} />
      </div>
      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink via-ink/85 to-transparent pb-4 md:hidden">
          <button type="button" onClick={() => setOpen(true)} className="glass min-h-11 rounded-full px-5 text-sm font-semibold text-bone">
            Read the full story ↓
          </button>
        </div>
      )}
    </div>
  );
}

function H({ children }: { children: string }) {
  return <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9b46a] first:mt-0">{children}</h4>;
}

export function ResumeSheet({ profileId }: { profileId?: ProfileId }) {
  const [activeTab, setActiveTab] = useState<'recruiter' | 'developer' | 'speaker' | 'designed'>(
    profileId === 'recruiter'
      ? 'recruiter'
      : profileId === 'speaker'
      ? 'speaker'
      : profileId === 'developer'
      ? 'developer'
      : 'recruiter'
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (profileId === 'recruiter') setActiveTab('recruiter');
    else if (profileId === 'speaker') setActiveTab('speaker');
    else if (profileId === 'developer') setActiveTab('developer');
  }, [profileId]);

  const activeText =
    activeTab === 'recruiter'
      ? atsRecruiterResumeText
      : activeTab === 'speaker'
      ? atsSpeakerResumeText
      : atsDeveloperResumeText;

  const tabPdfMap = {
    recruiter: {
      url: '/assets/Mohd_Shehzad_Recruiter_Resume.pdf',
      filename: 'Mohd_Shehzad_Recruiter_Resume.pdf',
      title: 'Master Recruiter Resume',
    },
    developer: {
      url: '/assets/Mohd_Shehzad_Developer_Resume.pdf',
      filename: 'Mohd_Shehzad_Developer_Resume.pdf',
      title: 'ATS Developer Resume',
    },
    speaker: {
      url: '/assets/Mohd_Shehzad_Speaker_Resume.pdf',
      filename: 'Mohd_Shehzad_Speaker_Resume.pdf',
      title: 'Speaker & Teacher Resume',
    },
    designed: {
      url: '/assets/Mohd_Shehzad_Resume.pdf',
      filename: 'Mohd_Shehzad_Resume.pdf',
      title: 'Master Resume',
    },
  };
  const activeTabPdf = tabPdfMap[activeTab];

  const handleCopyAts = () => {
    navigator.clipboard.writeText(activeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <article data-resume-sheet className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-6 ring-1 ring-white/10 sm:p-8 md:p-10 shadow-2xl">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />

      {/* Top Controls: View Switcher, Download PDF & Copy Action */}
      <div className="resume-print-controls mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="inline-flex flex-wrap rounded-lg bg-ink-2 p-1 ring-1 ring-white/10 text-xs gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('recruiter')}
            className={`rounded-md px-3 py-1.5 font-semibold transition ${
              activeTab === 'recruiter' ? 'bg-[#d9b46a] text-ink font-bold shadow' : 'text-smoke hover:text-bone'
            }`}
          >
            💼 Master Recruiter Resume
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('developer')}
            className={`rounded-md px-3 py-1.5 font-semibold transition ${
              activeTab === 'developer' ? 'bg-[#d9b46a] text-ink font-bold shadow' : 'text-smoke hover:text-bone'
            }`}
          >
            ★ ATS Developer Resume
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('speaker')}
            className={`rounded-md px-3 py-1.5 font-semibold transition ${
              activeTab === 'speaker' ? 'bg-[#d9b46a] text-ink font-bold shadow' : 'text-smoke hover:text-bone'
            }`}
          >
            🎤 Speaker & Teacher Resume
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('designed')}
            className={`rounded-md px-3 py-1.5 font-semibold transition ${
              activeTab === 'designed' ? 'bg-[#d9b46a] text-ink font-bold shadow' : 'text-smoke hover:text-bone'
            }`}
          >
            ☵ Cinematic View
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {activeTab !== 'designed' && (
            <button
              type="button"
              onClick={handleCopyAts}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#d9b46a]/40 bg-[#d9b46a]/10 px-3 py-1.5 text-xs font-semibold text-[#d9b46a] hover:bg-[#d9b46a] hover:text-ink transition shadow-sm"
              title="Copy exact ATS plain-text resume to clipboard"
            >
              <span>{copied ? '✓ Copied to Clipboard!' : '📋 Copy ATS Plain-Text'}</span>
            </button>
          )}

          <a
            href={activeTabPdf.url}
            download={activeTabPdf.filename}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-bone hover:bg-bone hover:text-ink transition shadow-sm"
            title={`Download ${activeTabPdf.title} as PDF`}
          >
            <span>⤓ Download PDF</span>
          </a>
        </div>
      </div>

      {activeTab === 'recruiter' ? (
        /* Master Recruiter Resume */
        <div className="space-y-6 text-mist">
          {/* Header */}
          <header className="border-b border-white/10 pb-5">
            <h3 className="font-display text-2xl font-bold tracking-wide text-bone sm:text-3xl">
              MOHD SHEHZAD
            </h3>
            <p className="mt-1 text-xs font-medium text-[#d9b46a]">
              Software Development Engineer · Academic Researcher · Proven Orator & Leader
            </p>
            <p className="mt-1 text-xs text-smoke">
              Malerkotla, Punjab, India | +91 9988059285 |{' '}
              <a href="mailto:mail-shehzadchouhan260@gmail.com" className="text-[#d9b46a] hover:underline">
                mail-shehzadchouhan260@gmail.com
              </a>
            </p>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-mist">
              <a href="https://linkedin.com/in/shehzad23" target="_blank" rel="noreferrer" className="text-[#d9b46a] hover:underline">
                LinkedIn: linkedin.com/in/shehzad23 ↗
              </a>
              <span>•</span>
              <a href="https://github.com/ShehzadChouhan" target="_blank" rel="noreferrer" className="text-[#d9b46a] hover:underline">
                GitHub: github.com/ShehzadChouhan ↗
              </a>
              <span>•</span>
              <a href="https://my-portfolio-rosy-beta-29.vercel.app" target="_blank" rel="noreferrer" className="text-[#d9b46a] hover:underline">
                Portfolio: Live ↗
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section>
            <H>Executive Summary</H>
            <p className="text-xs sm:text-sm leading-relaxed text-bone/90">
              High-achieving Computer Science undergraduate (CGPA 8.6/10) at GNDEC Ludhiana with proven dual competency in full-stack software engineering and technical communication. Creator of 4+ production web applications (React, TypeScript, Node.js, Python, PostgreSQL/Supabase), J-PAL South Asia research contributor (Columbia/Stanford/UIUC empirical study), and Grade-A certified AI/ML practitioner. Demonstrated leadership across podium finishes in competitive algorithmic debugging, 8-hour inter-college hackathons, and public speaking, including 2nd Position in a declamation contest sponsored by Radiance Foundation. Presented a Smart Traffic Management proposal at the GNDEC Data Science Club Ideathon. Seeking Software Development Engineer (SDE), Full-Stack Developer, or Associate Product/Tech roles.
            </p>
          </section>

          {/* Core Technical Stack */}
          <section>
            <H>Core Technical Competencies</H>
            <div className="grid gap-2 text-xs sm:text-[13px] leading-relaxed">
              <p><span className="font-semibold text-bone">• Programming Languages:</span> C, C++, Python, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3</p>
              <p><span className="font-semibold text-bone">• Frontend Engineering:</span> React.js, Tailwind CSS, Vite, Framer Motion, HTML5 Canvas API, Component-Driven State Management, Responsive Web Architecture</p>
              <p><span className="font-semibold text-bone">• Backend & Databases:</span> Node.js, Express.js, RESTful APIs, Supabase, PostgreSQL, Relational Database Modeling, JWT Auth</p>
              <p><span className="font-semibold text-bone">• Tools & Methodologies:</span> Git, GitHub, Linux/Bash, Postman, Vercel, Netlify, Render, Agile Development, Systems Debugging</p>
              <p><span className="font-semibold text-bone">• AI Acceleration & ML:</span> NumPy, Pandas, Scikit-Learn fundamentals, Generative AI developer workflows, Prompt Engineering (BE10x Certified)</p>
            </div>
          </section>

          {/* Education */}
          <section>
            <H>Education & Academic Distinction</H>
            <div className="space-y-3">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="text-sm font-semibold text-bone">
                    Bachelor of Technology (B.Tech), Computer Science & Engineering
                  </p>
                  <span className="text-xs text-smoke font-mono">2023 – 2027</span>
                </div>
                <p className="text-xs text-mist">
                  Guru Nanak Dev Engineering College (GNDEC), Ludhiana | <span className="font-semibold text-[#d9b46a]">CGPA: 8.6 / 10.0</span>
                </p>
                <p className="mt-1 text-[11px] text-smoke">
                  • Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks, System Design Fundamentals.
                </p>
                <p className="mt-0.5 text-[11px] text-smoke">
                  • Academic Recognition: Felicitated on the Main Auditorium stage on GNDEC 68th Foundation Day by Principal Dr. Sehijpal Singh for student initiatives and scholastic merit.
                </p>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-1 border-t border-white/5 pt-2">
                <p className="text-xs font-semibold text-bone">Senior Secondary (12th Grade) — Islamia Senior Secondary School</p>
                <span className="text-xs text-[#d9b46a] font-semibold">89% Academic Honor · Outstanding Student Award</span>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-1 border-t border-white/5 pt-1">
                <p className="text-xs font-semibold text-bone">Secondary Matriculation (10th Grade) — Islamia Senior Secondary School</p>
                <span className="text-xs text-[#d9b46a] font-semibold">87%</span>
              </div>
            </div>
          </section>

          {/* Flagship Production Projects */}
          <section>
            <H>Flagship Production Projects</H>
            <div className="space-y-3.5">
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h5 className="text-sm font-bold text-bone">
                    1. HostelEase — Location-Based Accommodation Discovery Platform
                  </h5>
                  <a href="https://hostel-ease-sigma.vercel.app" target="_blank" rel="noreferrer" className="text-[11px] font-semibold text-[#d9b46a] hover:underline">
                    hostel-ease-sigma.vercel.app ↗
                  </a>
                </div>
                <p className="mt-0.5 text-[11px] text-[#d9b46a]/80 font-mono">React.js, TypeScript, Tailwind CSS, Supabase (PostgreSQL), Vite</p>
                <ul className="mt-2 space-y-1 text-xs text-mist">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                    <span>Engineered a full-stack accommodation discovery platform for university students featuring location-based service filtering, verified property listings, and real-time inquiry workflows.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                    <span>Modeled a relational PostgreSQL schema on Supabase with real-time state synchronization, maintaining sub-100ms response times and consistent UI state through reusable, type-safe React components.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h5 className="text-sm font-bold text-bone">
                    2. OmniLab Studio — Interactive Physics Simulation & Virtual Lab
                  </h5>
                  <a href="https://omni-physics-lab.vercel.app" target="_blank" rel="noreferrer" className="text-[11px] font-semibold text-[#d9b46a] hover:underline">
                    omni-physics-lab.vercel.app ↗
                  </a>
                </div>
                <p className="mt-0.5 text-[11px] text-[#d9b46a]/80 font-mono">React.js, TypeScript, HTML5 Canvas API, WebGL, Tailwind CSS</p>
                <ul className="mt-2 space-y-1 text-xs text-mist">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                    <span>Built an in-browser physics simulation engine running 8 real-time laboratory experiments (Wave Optics, Pendulum Kinematics, Circuit Resistivity) by implementing mathematical physics models in client-side runtime.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                    <span>Developed reactive parameter controls updating simulations at 60 FPS, with automated lab report generation using efficient React state management.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h5 className="text-sm font-bold text-bone">
                    3. Track Expenser — Expense Intelligence & Financial Analytics
                  </h5>
                  <a href="https://track-expenser.vercel.app" target="_blank" rel="noreferrer" className="text-[11px] font-semibold text-[#d9b46a] hover:underline">
                    track-expenser.vercel.app ↗
                  </a>
                </div>
                <p className="mt-0.5 text-[11px] text-[#d9b46a]/80 font-mono">React.js, Chart.js, Supabase, Tailwind CSS, REST APIs</p>
                <ul className="mt-2 space-y-1 text-xs text-mist">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                    <span>Developed a financial tracking app with user authentication, multi-category transaction management, and budget forecasting by integrating Supabase with REST API calls.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                    <span>Visualized spending breakdowns with dynamic Chart.js dashboards, delivering instant category-level financial insights.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h5 className="text-sm font-bold text-bone">
                    4. ZID Fitness Zone & Taskly — Management & Productivity Applications
                  </h5>
                  <a href="https://zid-fitness-zone.onrender.com" target="_blank" rel="noreferrer" className="text-[11px] font-semibold text-[#d9b46a] hover:underline">
                    zid-fitness-zone.onrender.com ↗
                  </a>
                </div>
                <p className="mt-0.5 text-[11px] text-[#d9b46a]/80 font-mono">React.js, Node.js/Express, Supabase, Tailwind CSS</p>
                <p className="mt-1.5 text-xs text-mist">
                  Deployed full-stack role-based member and attendance workflows alongside a Kanban-style task workspace with drag-and-drop mechanics and persistent state.
                </p>
              </div>
            </div>
          </section>

          {/* Research & Industrial Training */}
          <section>
            <H>Research & Industrial Training</H>
            <div className="space-y-3">
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="text-sm font-semibold text-bone">
                    Research Contributor — "Digital Wellness in India"
                  </h5>
                  <span className="text-xs text-smoke font-mono">2024</span>
                </div>
                <p className="text-xs text-[#d9b46a]">
                  J-PAL South Asia (Columbia University, Stanford University & UIUC Collaborative Study)
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-mist">
                  Contributed to empirical field data aggregation, user behavioral metric tracking, and digital device analytics across diverse demographic clusters.
                </p>
              </div>

              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="text-sm font-semibold text-bone">
                    AI & ML using Python, Industrial Training
                  </h5>
                  <span className="text-xs font-semibold text-[#d9b46a]">Grade A (Outstanding)</span>
                </div>
                <p className="text-xs text-smoke">ThinkNEXT Technologies (ISO 9001:2015) | Cert ID: 939895</p>
                <p className="mt-1.5 text-xs leading-relaxed text-mist">
                  Completed an intensive 1-month program covering Machine Learning regression, classification, and data analytics pipelines using Python, NumPy, and Pandas.
                </p>
              </div>
            </div>
          </section>

          {/* Leadership & Competitive Honors */}
          <section>
            <H>Leadership, Competitive Podiums & Honors</H>
            <ul className="space-y-1.5 text-xs text-mist">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">3rd Prize (Podium Finish), "Debugging using C"</strong> — Tech Disha 2024, Arya College (Outperformed regional competitors in algorithmic bug-fixing).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">1st Position, Grand Declamation Contest</strong> — Conversa English Academy & Azad Foundation ("Plant Tree, Save Earth"; separate contest).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">2nd Position, Grand Declamation Contest</strong> — Radiance Foundation (hosted by Awake Foundation; "WE ARE ONE").</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">Contender, THINK-A-THON 2026</strong> — 8-Hour Inter-College Hackathon by ITian Club, GNDEC ("Where Ideas Ignite Impact").</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">2nd Position, Case Study Making Competition</strong> — Center for Multi-Faceted Learning (CML), GNDEC.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">Stage Felicitation Honor</strong> — GNDEC 68th Foundation Day (Felicitated by Principal Dr. Sehijpal Singh on the Main Auditorium stage).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">State Honours Ceremony Memento</strong> — All India Lohar Trust (Regd.) Punjab (Honored for community leadership and scholastic distinction).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">University Athlete</strong> — 64th Annual Athletics Meet, GNDEC (Competed in 100m Sprint & Long Jump representing CSE Department).</span>
              </li>
            </ul>
          </section>

          {/* Teaching & Mentorship */}
          <section>
            <H>Teaching & Mentorship (Leadership & Soft Skills)</H>
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h5 className="text-sm font-semibold text-bone">Academic Tutor & STEM Mentor</h5>
                <span className="text-xs text-[#d9b46a] font-semibold">2024 – Present (1 Year)</span>
              </div>
              <p className="text-xs text-smoke font-mono">Independent Mentorship | Malerkotla, Punjab</p>
              <p className="mt-1.5 text-xs text-mist leading-relaxed">
                Mentored 15+ students across grades 5 through 10 in Mathematics, Science, and Computer Science fundamentals, improving term grades by 15–20% through structured diagnostic quizzes and personalized pedagogy.
              </p>
            </div>
          </section>

          {/* Verified Certifications */}
          <section>
            <H>Verified Industry Certifications</H>
            <ul className="space-y-1.5 text-xs text-mist">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">Python Foundation (Capstone + Parts 1 & 2)</strong> — Infosys Springboard</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">WEB FORGE 2026 Web Engineering Challenge</strong> — GNDEC Data Science Club (Ref: CSE/DSC/4681)</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">AI Tools & Modern Engineering Acceleration Workshop</strong> — BE10x</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">International IoT Technology & Engineering Webinar</strong> — AAEIO (USA) & GNDEC DSC</span>
              </li>
            </ul>
          </section>
        </div>
      ) : activeTab === 'speaker' ? (
        /* Educator & Public Speaker Resume */
        <div className="space-y-6 text-mist">
          {/* Header */}
          <header className="border-b border-white/10 pb-5">
            <h3 className="font-display text-2xl font-bold tracking-wide text-bone sm:text-3xl">
              MOHD SHEHZAD
            </h3>
            <p className="mt-1 text-xs font-medium text-[#d9b46a]">
              Passionate Educator · STEM Instructor · Award-Winning Public Speaker
            </p>
            <p className="mt-1 text-xs text-smoke">
              Malerkotla, Punjab, India | +91 9988059285 |{' '}
              <a href="mailto:mail-shehzadchouhan260@gmail.com" className="text-[#d9b46a] hover:underline">
                mail-shehzadchouhan260@gmail.com
              </a>
            </p>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-mist">
              <a href="https://linkedin.com/in/shehzad23" target="_blank" rel="noreferrer" className="text-[#d9b46a] hover:underline">
                LinkedIn: linkedin.com/in/shehzad23 ↗
              </a>
              <span>•</span>
              <a href="https://github.com/ShehzadChouhan" target="_blank" rel="noreferrer" className="text-[#d9b46a] hover:underline">
                GitHub: github.com/ShehzadChouhan ↗
              </a>
              <span>•</span>
              <a href="https://my-portfolio-rosy-beta-29.vercel.app" target="_blank" rel="noreferrer" className="text-[#d9b46a] hover:underline">
                Portfolio: Live ↗
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section>
            <H>Professional Summary</H>
            <p className="text-xs sm:text-sm leading-relaxed text-bone/90">
              Passionate Educator, STEM Instructor, and Award-Winning Public Speaker with 1+ year of hands-on teaching experience mentoring students from Class 5th to 10th across Mathematics, Science, and Computer Science. Proven track record of simplifying complex technical concepts into intuitive analogies, driving student engagement. Adept at curriculum delivery, interactive EdTech tools, and empathetic student counseling.
            </p>
          </section>

          {/* Core Competencies */}
          <section>
            <H>Core Teaching & Oratory Competencies</H>
            <div className="grid gap-2 text-xs sm:text-[13px] leading-relaxed">
              <p><span className="font-semibold text-bone">• Pedagogical Excellence:</span> Conceptual Simplification, Differentiated Instruction, Student-Centric Learning</p>
              <p><span className="font-semibold text-bone">• Subject Mastery:</span> Mathematics (Algebra, Geometry), General Science & Physics, Computer Science & Coding Basics</p>
              <p><span className="font-semibold text-bone">• Public Speaking & Stage Delivery:</span> Keynote Delivery, Voice Modulation, Audience Engagement, Declamation</p>
              <p><span className="font-semibold text-bone">• Educational Technology:</span> Interactive Virtual Lab Simulations (OmniLab Studio), Digital Whiteboards, Visual Aids</p>
              <p><span className="font-semibold text-bone">• Classroom Leadership:</span> Mentorship, Diagnostic Assessment, Parent-Teacher Communication, Exam Strategy</p>
            </div>
          </section>

          {/* Teaching & Mentorship Experience */}
          <section>
            <H>Teaching & Mentorship Experience</H>
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h5 className="text-sm font-bold text-bone">
                  Academic Tutor & STEM Educator
                </h5>
                <span className="text-xs font-semibold text-[#d9b46a]">2024 – Present (1 Year)</span>
              </div>
              <p className="text-xs text-smoke font-mono">Independent Academic Mentorship | Malerkotla, Punjab</p>
              <ul className="mt-2.5 space-y-1.5 text-xs text-mist">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                  <span>Mentored 15+ students across grades 5 through 10 in Mathematics, Science (Physics/Chemistry), and Computer Science fundamentals, cultivating conceptual curiosity and disciplined study habits.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                  <span>Designed customized, interactive lesson plans breaking down challenging curriculum topics (e.g., Optics, Kinematics, Algebraic Equations) into visual experiments and relatable real-world analogies.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                  <span>Tracked individual learning curves through weekly diagnostic quizzes, resulting in an average grade improvement of 15–20% across term assessments.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                  <span>Provided regular one-on-one academic counseling and active parent communication to resolve learning bottlenecks and build student exam confidence.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Public Speaking & Keynote Presentations */}
          <section>
            <H>Public Speaking & Presentations</H>
            <div className="space-y-3">
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="text-sm font-semibold text-bone">
                    1st Position (Champion) — Grand Declamation Contest
                  </h5>
                  <span className="text-xs text-[#d9b46a] font-semibold">19-09-2022</span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-mist">
                  Secured First Position in the inter-school Declamation Contest on the theme "Plant Tree, Save Earth" at Islamia Senior Secondary School, Malerkotla.
                </p>
              </div>

              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="text-sm font-semibold text-bone">
                    2nd Position — Grand Declamation Contest
                  </h5>
                </div>
                <p className="text-xs text-[#d9b46a]">Radiance Foundation & Awake Foundation</p>
              </div>

              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="text-sm font-semibold text-bone">
                    Keynote Presenter & Stage Architect — Smart Traffic Management
                  </h5>
                  <span className="text-xs text-smoke font-mono">Sep 2024</span>
                </div>
                <p className="text-xs text-[#d9b46a]">GNDEC Data Science Club Ideathon</p>
                <p className="mt-1.5 text-xs leading-relaxed text-mist">
                  Delivered live technical keynote and architectural proposals on algorithmic urban mobility before an auditorium of faculty evaluators, mentors, and student delegates.
                </p>
              </div>

              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="text-sm font-semibold text-bone">
                    Case Study Presenter — 2nd Position
                  </h5>
                  <span className="text-xs text-smoke font-mono">Sep 2025</span>
                </div>
                <p className="text-xs text-[#d9b46a]">Center for Multi-Faceted Learning (CML), GNDEC</p>
                <p className="mt-1.5 text-xs leading-relaxed text-mist">
                  Recognized for articulate problem structuring, narrative clarity, and persuasive stage presentation.
                </p>
              </div>
            </div>
          </section>

          {/* Honors & Oratory Awards */}
          <section>
            <H>Honors & Oratory Awards</H>
            <ul className="space-y-1.5 text-xs text-mist">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">1st Position, Grand Declamation Contest</strong> — Conversa English Academy & Azad Foundation ("Plant Tree, Save Earth"; separate contest).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">2nd Position, Grand Declamation Contest</strong> — Radiance Foundation (hosted by Awake Foundation; "WE ARE ONE").</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">Stage Felicitation Honor</strong> — GNDEC 68th Foundation Day (Felicitated by Principal Dr. Sehijpal Singh on the Main Auditorium stage for student initiatives, oratory representation, and academic excellence).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">State Honours Ceremony Memento</strong> — All India Lohar Trust (Regd.) Punjab (Honored at the state-level ceremony for community leadership, public engagement, and scholastic distinction).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">12th Grade 89% Academic Honor & Outstanding Student Award</strong> — Islamia Senior Secondary School, Malerkotla.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">2nd Position, Case Study Making Competition</strong> — Center for Multi-Faceted Learning (CML), GNDEC.</span>
              </li>
            </ul>
          </section>

          {/* Education */}
          <section>
            <H>Education</H>
            <div className="space-y-2">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="text-sm font-semibold text-bone">
                    Bachelor of Technology (B.Tech), Computer Science & Engineering
                  </p>
                  <span className="text-xs text-smoke font-mono">2023 – 2027</span>
                </div>
                <p className="text-xs text-mist">
                  Guru Nanak Dev Engineering College, Ludhiana | <span className="font-semibold text-[#d9b46a]">CGPA: 8.6/10</span>
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="text-sm font-semibold text-bone">
                    Senior Secondary (12th Grade)
                  </p>
                  <span className="text-xs text-smoke font-mono">2021 – 2023</span>
                </div>
                <p className="text-xs text-mist">
                  Islamia Senior Secondary School, Malerkotla | <span className="font-semibold text-[#d9b46a]">89% Academic Honor · separate Outstanding Student Award</span>
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="text-sm font-semibold text-bone">
                    Senior Secondary (10th Grade)
                  </p>
                  <span className="text-xs text-smoke font-mono">2020 – 2021</span>
                </div>
                <p className="text-xs text-mist">
                  Islamia Senior Secondary School, Malerkotla | <span className="font-semibold text-[#d9b46a]">Score: 87%</span>
                </p>
              </div>
            </div>
          </section>

          {/* Educational Technology Project */}
          <section>
            <H>Educational Technology Tools Created</H>
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h5 className="text-sm font-semibold text-bone">
                  OmniLab Studio — Interactive Physics Virtual Lab Workbench
                </h5>
                <a
                  href="https://omni-physics-lab.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-semibold text-[#d9b46a] hover:underline"
                >
                  omni-physics-lab.vercel.app ↗
                </a>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-mist">
                Built an interactive browser-based virtual lab with 8 simulated physics experiments (Wave Optics, Pendulum Motion, Electric Circuitry) to help secondary school students visualize abstract physics laws through interactive controls and instant feedback.
              </p>
            </div>
          </section>
        </div>
      ) : activeTab === 'developer' ? (
        /* ATS Developer Resume */
        <div className="space-y-6 text-mist">
          {/* Header */}
          <header className="border-b border-white/10 pb-5">
            <h3 className="font-display text-2xl font-bold tracking-wide text-bone sm:text-3xl">
              MOHD SHEHZAD
            </h3>
            <p className="mt-1 text-xs text-smoke">
              Malerkotla, Punjab, India | +91 9988059285 |{' '}
              <a href="mailto:mail-shehzadchouhan260@gmail.com" className="text-[#d9b46a] hover:underline">
                mail-shehzadchouhan260@gmail.com
              </a>
            </p>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-mist">
              <a href="https://linkedin.com/in/shehzad23" target="_blank" rel="noreferrer" className="text-[#d9b46a] hover:underline">
                LinkedIn: linkedin.com/in/shehzad23 ↗
              </a>
              <span>•</span>
              <a href="https://github.com/ShehzadChouhan" target="_blank" rel="noreferrer" className="text-[#d9b46a] hover:underline">
                GitHub: github.com/ShehzadChouhan ↗
              </a>
              <span>•</span>
              <a href="https://my-portfolio-rosy-beta-29.vercel.app" target="_blank" rel="noreferrer" className="text-[#d9b46a] hover:underline">
                Portfolio: Live ↗
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section>
            <H>Professional Summary</H>
            <p className="text-xs sm:text-sm leading-relaxed text-bone/90">
              B.Tech Computer Science student at GNDEC Ludhiana (CGPA 8.6/10, Batch 2023–2027) building and deploying full-stack web applications with React.js, TypeScript, Node.js, Python and SQL/PostgreSQL. Strong foundation in Data Structures & Algorithms, OOP and DBMS, backed by podium finishes in debugging and case-study competitions. Seeking Software Development Engineer or Full-Stack Developer roles.
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <H>Technical Skills</H>
            <div className="grid gap-2 text-xs sm:text-[13px] leading-relaxed">
              <p><span className="font-semibold text-bone">Languages:</span> C, C++, Python, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3</p>
              <p><span className="font-semibold text-bone">Frontend:</span> React.js, Tailwind CSS, Vite, Framer Motion, HTML5 Canvas API, State Management, Responsive UI</p>
              <p><span className="font-semibold text-bone">Backend & Database:</span> Node.js, Express.js, REST APIs, Supabase, PostgreSQL, Relational Database Modeling</p>
              <p><span className="font-semibold text-bone">Tools & Methodologies:</span> Git, GitHub, Linux/Bash, Postman, Vercel, Agile Development, Debugging, Prompt Engineering</p>
            </div>
          </section>

          {/* Education */}
          <section>
            <H>Education</H>
            <div className="flex flex-wrap items-baseline justify-between gap-1">
              <p className="text-sm font-semibold text-bone">
                Bachelor of Technology, Computer Science & Engineering
              </p>
              <span className="text-xs text-smoke font-mono">2023 – 2027</span>
            </div>
            <p className="text-xs text-mist">
              Guru Nanak Dev Engineering College, Ludhiana | <span className="font-semibold text-[#d9b46a]">CGPA: 8.6/10</span>
            </p>
            <p className="mt-1 text-[11px] text-smoke">
              <span className="font-medium text-bone/80">Relevant Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, System Design Fundamentals
            </p>
          </section>

          {/* Technical Projects */}
          <section>
            <H>Technical Projects</H>
            <div className="space-y-4">
              {/* HostelEase */}
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h5 className="text-sm font-bold text-bone">
                    HostelEase – Hostel Discovery & Management Platform
                  </h5>
                  <a
                    href="https://hostel-ease-sigma.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#d9b46a] hover:underline"
                  >
                    hostel-ease-sigma.vercel.app ↗
                  </a>
                </div>
                <p className="mt-0.5 text-[11px] text-[#d9b46a]/80 font-mono">
                  React.js, TypeScript, Tailwind CSS, Supabase (PostgreSQL), Vite
                </p>
                <ul className="mt-2 space-y-1 text-xs text-mist">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                    <span>Engineered a full-stack accommodation platform for university students, delivered as a live Vercel deployment, by building location-based filtering, verified property listings and an interactive inquiry workflow.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                    <span>Modeled a relational PostgreSQL schema on Supabase with real-time state synchronization, keeping listing and inquiry data consistent across the UI through reusable, type-safe React components.</span>
                  </li>
                </ul>
              </div>

              {/* OmniLab Studio */}
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h5 className="text-sm font-bold text-bone">
                    OmniLab Studio – Interactive Physics Simulation Workbench
                  </h5>
                  <a
                    href="https://omni-physics-lab.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#d9b46a] hover:underline"
                  >
                    omni-physics-lab.vercel.app ↗
                  </a>
                </div>
                <p className="mt-0.5 text-[11px] text-[#d9b46a]/80 font-mono">
                  React.js, TypeScript, HTML5 Canvas API, WebGL, Tailwind CSS
                </p>
                <ul className="mt-2 space-y-1 text-xs text-mist">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                    <span>Built a browser-based simulation engine running 8 real-time physics experiments (Wave Optics, Pendulum Kinematics, Circuit Resistivity) by implementing the governing equations in client-side code.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                    <span>Developed reactive parameter sliders that update simulations instantly, plus automated lab report generation, by applying component-driven architecture and efficient React state management.</span>
                  </li>
                </ul>
              </div>

              {/* Track Expenser */}
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h5 className="text-sm font-bold text-bone">
                    Track Expenser – Expense Analytics Application
                  </h5>
                  <a
                    href="https://track-expenser.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#d9b46a] hover:underline"
                  >
                    track-expenser.vercel.app ↗
                  </a>
                </div>
                <p className="mt-0.5 text-[11px] text-[#d9b46a]/80 font-mono">
                  React.js, Chart.js, Supabase, Tailwind CSS, REST APIs
                </p>
                <ul className="mt-2 space-y-1 text-xs text-mist">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                    <span>Developed a financial tracking app with user authentication, multi-category transaction management and budget forecasting by integrating Supabase with REST API calls.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                    <span>Visualized spending breakdowns with dynamic Chart.js dashboards, giving users instant category-level insight.</span>
                  </li>
                </ul>
              </div>

              {/* ZID Fitness Zone & Taskly */}
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h5 className="text-sm font-bold text-bone">
                    ZID Fitness Zone & Taskly
                  </h5>
                  <a
                    href="https://zid-fitness-zone.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#d9b46a] hover:underline"
                  >
                    zid-fitness-zone.onrender.com ↗
                  </a>
                </div>
                <p className="mt-0.5 text-[11px] text-[#d9b46a]/80 font-mono">
                  React.js, Node.js/Express, Supabase, Tailwind CSS
                </p>
                <p className="mt-2 text-xs leading-relaxed text-mist">
                  Delivered membership and schedule tracking for a fitness facility, and a Kanban task manager with drag-and-drop mechanics and persistent state.
                </p>
              </div>
            </div>
          </section>

          {/* Research & Training */}
          <section>
            <H>Research & Training</H>
            <div className="space-y-3">
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="text-sm font-semibold text-bone">
                    Research Contributor — "Digital Wellness in India"
                  </h5>
                  <span className="text-xs text-smoke font-mono">2024</span>
                </div>
                <p className="text-xs text-[#d9b46a]">
                  J-PAL South Asia (Columbia, Stanford & UIUC Study)
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-mist">
                  Contributed to empirical field data aggregation, user behavioral metric tracking, and digital device analytics across diverse demographic clusters.
                </p>
              </div>

              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="text-sm font-semibold text-bone">
                    AI & ML using Python, Industrial Training
                  </h5>
                  <span className="text-xs font-semibold text-[#d9b46a]">Grade A (Outstanding)</span>
                </div>
                <p className="text-xs text-smoke">ThinkNEXT Technologies (ISO 9001:2015)</p>
                <p className="mt-1.5 text-xs leading-relaxed text-mist">
                  Completed an intensive 1-month program covering Machine Learning fundamentals (Regression, Classification) using Python, NumPy and Pandas.
                </p>
              </div>
            </div>
          </section>

          {/* Honors & Awards */}
          <section>
            <H>Honors & Awards</H>
            <ul className="space-y-1.5 text-xs text-mist">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">3rd Prize, "Debugging using C"</strong> — Tech Disha 2024, Arya College (Podium finish in competitive debugging).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">2nd Position, Online Case Study Making Competition</strong> — Center for Multi-Faceted Learning (CML), GNDEC.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">Participant, THINK-A-THON 2026</strong> — 8-Hour Inter-College Hackathon by ITian Club, GNDEC.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">Participant, Coding Ninjas Summer Hack 1.0</strong> — National full-stack prototyping challenge.</span>
              </li>
            </ul>
          </section>

          {/* Certifications */}
          <section>
            <H>Verified Certifications</H>
            <ul className="space-y-1.5 text-xs text-mist">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">Python Foundation (Capstone + Parts 1 & 2)</strong> — Infosys Springboard</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">WEB FORGE 2026 Web Engineering Challenge</strong> — GNDEC Data Science Club</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                <span><strong className="text-bone">AI Tools & Modern Engineering Acceleration Workshop</strong> — BE10x</span>
              </li>
            </ul>
          </section>
        </div>
      ) : (
        /* Cinematic Story View */
        <div className="grid gap-x-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <H>Education</H>
            {education.map((e) => (
              <div key={e.school} className="mb-4">
                <div className="flex flex-wrap justify-between gap-x-3">
                  <p className="text-sm font-semibold text-bone">
                    {e.school}, {e.place}
                  </p>
                  <p className="text-xs text-smoke">{e.period}</p>
                </div>
                <p className="text-xs text-mist">
                  {e.degree} · <span className="text-bone/80">{e.score}</span>
                </p>
              </div>
            ))}

            <H>Work Experience & Research</H>
            {experience.map((x) => (
              <div key={x.company} className="mb-4">
                <div className="flex flex-wrap justify-between gap-x-3">
                  <p className="text-sm font-semibold text-bone">
                    {x.company} — {x.role}
                  </p>
                  <p className="text-xs text-smoke">{x.period}</p>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {x.points.map((p) => (
                    <li key={p} className="flex gap-2 text-xs leading-relaxed text-mist">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d9b46a]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <H>Projects</H>
            {projects.map((p) => (
              <div key={p.id} className="mb-3">
                <div className="flex flex-wrap justify-between gap-x-3">
                  <p className="text-sm font-semibold text-bone">{p.title}</p>
                  <p className="text-xs text-smoke">{p.year}</p>
                </div>
                <p className="text-xs text-mist">{p.stack.join(', ')}</p>
              </div>
            ))}
          </div>

          <div>
            <H>Skills Universe</H>
            <div className="space-y-2">
              {skillCategories.map((c) => (
                <p key={c.id} className="text-xs leading-relaxed text-mist">
                  <span className="font-semibold text-bone">{c.title}: </span>
                  {c.skills.map((s) => s.name).join(', ')}
                </p>
              ))}
            </div>

            <H>Key Achievements</H>
            <ul className="space-y-2">
              {achievements.slice(0, 8).map((a) => (
                <li key={a.id} className="text-xs leading-relaxed text-mist">
                  <span className="font-semibold text-bone">
                    {a.title} — {a.org}.
                  </span>{' '}
                  {a.detail}
                </li>
              ))}
            </ul>

            <H>Certifications & Accreditations</H>
            <ul className="space-y-1.5">
              {certifications.map((c) => (
                <li key={c.id} className="text-xs leading-relaxed text-mist">
                  <span className="font-semibold text-bone">{c.issuer}: </span>
                  {c.name}
                  {c.date && <span className="text-smoke"> ({c.date})</span>}
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-1 text-[#d9b46a] hover:underline"
                    >
                      [View ↗]
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <footer className="mt-8 border-t border-white/10 pt-4 text-xs text-smoke">
        <p>Contact: <a href="tel:+919988059285" className="text-bone">+91 9988059285</a></p>
        <p className="mt-1">
          Instagram:{' '}
          <a
            href="https://www.instagram.com/shehzad_speaks?obrf=NGdrY3d6dXA2aDJs"
            target="_blank"
            rel="noreferrer"
            className="text-bone hover:underline"
          >
            @shehzad_speaks
          </a>
        </p>
      </footer>
    </article>
  );
}
