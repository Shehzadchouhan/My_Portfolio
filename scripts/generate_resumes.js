import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('public/assets');

// Helper to draw horizontal section rule
function drawSectionHeader(doc, title) {
  doc.moveDown(0.6);
  const y = doc.y;
  doc
    .font('Helvetica-Bold')
    .fontSize(10.5)
    .fillColor('#854d0e') // Deep gold / amber
    .text(title.toUpperCase(), { characterSpacing: 1.2 });
  
  doc
    .strokeColor('#d1d5db')
    .lineWidth(0.75)
    .moveTo(doc.page.margins.left, doc.y + 2)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y + 2)
    .stroke();
  
  doc.moveDown(0.4);
}

function drawHeader(doc, { name, title, contact, links }) {
  doc
    .font('Helvetica-Bold')
    .fontSize(20)
    .fillColor('#111827')
    .text(name, { align: 'center', characterSpacing: 1 });
  
  if (title) {
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor('#854d0e')
      .text(title, { align: 'center' });
  }

  doc.moveDown(0.2);
  doc
    .font('Helvetica')
    .fontSize(8.5)
    .fillColor('#4b5563')
    .text(contact, { align: 'center' });

  if (links && links.length > 0) {
    doc.moveDown(0.15);
    const linkStr = links.map(l => `${l.label}: ${l.url}`).join('  |  ');
    doc
      .font('Helvetica')
      .fontSize(8)
      .fillColor('#1d4ed8')
      .text(linkStr, { align: 'center' });
  }

  doc.moveDown(0.4);
  doc
    .strokeColor('#9ca3af')
    .lineWidth(1)
    .moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y)
    .stroke();
  doc.moveDown(0.3);
}

function drawBullet(doc, text, boldPrefix = '') {
  const left = doc.page.margins.left;
  const bulletX = left + 8;
  const textX = left + 18;
  const width = doc.page.width - doc.page.margins.right - textX;

  const y = doc.y;
  doc.font('Helvetica').fontSize(8.5).fillColor('#854d0e').text('•', bulletX, y);

  if (boldPrefix) {
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text(boldPrefix + ' ', textX, y, {
      continued: true,
      width,
    });
    doc.font('Helvetica').fontSize(8.5).fillColor('#374151').text(text, {
      width,
      lineGap: 1.5,
    });
  } else {
    doc.font('Helvetica').fontSize(8.5).fillColor('#374151').text(text, textX, y, {
      width,
      lineGap: 1.5,
    });
  }
  doc.moveDown(0.25);
}

// -------------------------------------------------------------
// 1. MASTER RECRUITER RESUME
// -------------------------------------------------------------
export function buildRecruiterResume(outputPath) {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 32, bottom: 32, left: 36, right: 36 } });
  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  drawHeader(doc, {
    name: 'MOHD SHEHZAD',
    title: 'Software Development Engineer  •  Academic Researcher  •  Competitive Podiums',
    contact: 'Malerkotla, Punjab, India  •  +91 9988059285  •  shehzadchouhan260@gmail.com',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/shehzad23' },
      { label: 'GitHub', url: 'https://github.com/ShehzadChouhan' },
      { label: 'Live Portfolio', url: 'https://my-portfolio-rosy-beta-29.vercel.app' }
    ]
  });

  // SUMMARY
  drawSectionHeader(doc, 'Professional Summary');
  doc
    .font('Helvetica')
    .fontSize(8.5)
    .fillColor('#374151')
    .text(
      'High-achieving Computer Science undergraduate (CGPA 8.6/10) at GNDEC Ludhiana with proven dual competency in full-stack software engineering and technical communication. Creator of 4+ production web applications (React, TypeScript, Node.js, Python, PostgreSQL/Supabase), J-PAL South Asia research contributor (Columbia/Stanford/UIUC empirical study), and Grade-A certified AI/ML practitioner. Demonstrated leadership across podium finishes in competitive algorithmic debugging, 8-hour inter-college hackathons, and state-level public speaking (1st Position Declamation Champion). Seeking Software Development Engineer (SDE), Full-Stack Developer, or Associate Product/Tech roles.',
      { lineGap: 1.5 }
    );

  // EDUCATION
  drawSectionHeader(doc, 'Education & Academic Distinction');
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#111827').text('Guru Nanak Dev Engineering College (GNDEC), Ludhiana', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  2023 – 2027', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#854d0e').text('Bachelor of Technology (B.Tech), Computer Science & Engineering  —  Current CGPA: 8.6 / 10.0');
  drawBullet(doc, 'Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks, System Design Fundamentals.', 'Core Coursework:');
  drawBullet(doc, 'Felicitated on the Main Auditorium stage on GNDEC 68th Foundation Day by Principal Dr. Sehijpal Singh for student initiatives, scholastic merit, and leadership.', 'Stage Felicitation:');

  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text('Islamia Senior Secondary School, Malerkotla', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  Score: 89%', { align: 'right' });
  doc.font('Helvetica').fontSize(8).fillColor('#4b5563').text('Senior Secondary (12th Grade)  •  Conferred with Academic Excellence & Outstanding Student Award');

  doc.moveDown(0.15);
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text('Islamia Senior Secondary School, Malerkotla', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  Score: 87%', { align: 'right' });
  doc.font('Helvetica').fontSize(8).fillColor('#4b5563').text('Secondary Matriculation (10th Grade)');

  // TECHNICAL SKILLS
  drawSectionHeader(doc, 'Core Technical Competencies');
  drawBullet(doc, 'C, C++, Python, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3', 'Programming Languages:');
  drawBullet(doc, 'React.js, Tailwind CSS, Vite, Framer Motion, HTML5 Canvas API, Component State Management, Responsive Design', 'Frontend Engineering:');
  drawBullet(doc, 'Node.js, Express.js, RESTful APIs, Supabase, PostgreSQL, Relational DB Modeling, JWT Auth', 'Backend & Databases:');
  drawBullet(doc, 'Git, GitHub, Linux/Bash, Postman, Vercel, Netlify, Render, Agile Development, Systems Debugging', 'Tools & DevOps:');
  drawBullet(doc, 'NumPy, Pandas, Scikit-Learn fundamentals, Generative AI developer workflows, Prompt Engineering (BE10x Certified)', 'AI & Machine Learning:');

  // PROJECTS
  drawSectionHeader(doc, 'Flagship Production Projects');
  
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#111827').text('1. HostelEase — Location-Based Accommodation Discovery Platform', { continued: true });
  doc.font('Helvetica').fillColor('#1d4ed8').text('  |  hostel-ease-sigma.vercel.app', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8).fillColor('#854d0e').text('Stack: React.js, TypeScript, Tailwind CSS, Supabase (PostgreSQL), Vite');
  drawBullet(doc, 'Engineered full-stack accommodation discovery platform for university students featuring location-based service filtering, verified property listings, and real-time inquiry workflows.');
  drawBullet(doc, 'Modeled relational PostgreSQL schema on Supabase with real-time state synchronization, maintaining sub-100ms response times and consistent UI state through reusable, type-safe React components.');

  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#111827').text('2. OmniLab Studio — Interactive Physics Simulation & Virtual Lab Workbench', { continued: true });
  doc.font('Helvetica').fillColor('#1d4ed8').text('  |  omni-physics-lab.vercel.app', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8).fillColor('#854d0e').text('Stack: React.js, TypeScript, HTML5 Canvas API, WebGL, Tailwind CSS');
  drawBullet(doc, 'Built in-browser physics simulation engine running 8 real-time laboratory experiments (Wave Optics, Pendulum Kinematics, Circuit Resistivity) by implementing governing physics equations in client-side runtime.');
  drawBullet(doc, 'Developed reactive parameter controls updating simulations at 60 FPS, with automated lab report generation using efficient React state management.');

  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#111827').text('3. Track Expenser — Expense Intelligence & Financial Analytics Application', { continued: true });
  doc.font('Helvetica').fillColor('#1d4ed8').text('  |  track-expenser.vercel.app', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8).fillColor('#854d0e').text('Stack: React.js, Chart.js, Supabase, Tailwind CSS, REST APIs');
  drawBullet(doc, 'Developed financial tracking app with user authentication, multi-category transaction management, and budget forecasting by integrating Supabase with REST API calls; visualized breakdowns with Chart.js.');

  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#111827').text('4. ZID Fitness Zone & Taskly — Management & Productivity Applications', { continued: true });
  doc.font('Helvetica').fillColor('#1d4ed8').text('  |  zid-fitness-zone.onrender.com', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8).fillColor('#854d0e').text('Stack: React.js, Node.js/Express, Supabase, Tailwind CSS');
  drawBullet(doc, 'Deployed full-stack role-based member workflows and attendance tracking alongside Kanban task manager with persistent drag-and-drop mechanics.');

  // RESEARCH & TRAINING
  drawSectionHeader(doc, 'Research Experience & Industrial Training');
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text('Research Contributor — "Digital Wellness in India" | J-PAL South Asia', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  2024', { align: 'right' });
  drawBullet(doc, 'Contributed to empirical field data aggregation, user metric tracking, and digital device analytics for a multi-institution research study led by researchers from Columbia University, Stanford University, and UIUC.');

  doc.moveDown(0.15);
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text('Industrial Training in AI & ML using Python | ThinkNEXT Technologies (ISO 9001:2015)', { continued: true });
  doc.font('Helvetica-Bold').fillColor('#854d0e').text('  |  Grade A (Outstanding)', { align: 'right' });
  drawBullet(doc, 'Completed intensive 1-month program covering Machine Learning regression, classification, and data analytics pipelines using Python, NumPy, and Pandas (Cert ID: 939895).');

  // HONORS & LEADERSHIP
  drawSectionHeader(doc, 'Leadership, Competitive Podiums & Honors');
  drawBullet(doc, 'Tech Disha 2024, Arya College (Outperformed regional competitors in C code debugging, memory resolution, and algorithmic problem-solving).', '3rd Prize (Podium Finish), "Debugging using C":');
  drawBullet(doc, 'Conversa English Academy & Azad Foundation (Won 1st Position for persuasive rhetoric and oratory on "Plant Tree, Save Earth").', 'First Position (Champion), Grand Declamation Contest:');
  drawBullet(doc, 'Awake Foundation & Radiance Foundation (Awarded 2nd Position competing across 51+ schools and colleges with 510+ participants).', '2nd Position, Grand Declamation Contest "WE ARE ONE":');
  drawBullet(doc, '8-Hour Inter-College Hackathon by ITian Club, GNDEC ("Where Ideas Ignite Impact").', 'Contender, THINK-A-THON 2026:');
  drawBullet(doc, 'Center for Multi-Faceted Learning (CML), GNDEC (Commended for creative problem formulation and presentation delivery).', '2nd Position (Podium Finish), Online Case Study Making:');
  drawBullet(doc, 'GNDEC 68th Foundation Day (Felicitated by Principal Dr. Sehijpal Singh on the Main Auditorium stage).', 'Stage Felicitation Honor:');
  drawBullet(doc, 'All India Lohar Trust (Regd.) Punjab (Honored at the state ceremony for community leadership and scholastic distinction).', 'State Honours Ceremony Memento:');
  drawBullet(doc, '64th Annual Athletics Meet, GNDEC (Competed in 100m Sprint & Long Jump representing CSE Department).', 'University Athlete:');

  // TEACHING & MENTORSHIP
  drawSectionHeader(doc, 'Teaching & Mentorship (Leadership & Communication)');
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text('Academic Tutor & STEM Mentor | Independent Tutoring | Malerkotla, Punjab', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  2024 – Present (1 Year)', { align: 'right' });
  drawBullet(doc, 'Mentored 15+ students across grades 5 through 10 in Mathematics, Science (Physics/Chemistry), and Computer Science fundamentals, improving term grades by 15–20% through structured diagnostic quizzes and personalized pedagogy.');

  // CERTIFICATIONS
  drawSectionHeader(doc, 'Verified Industry Certifications');
  drawBullet(doc, 'Infosys Springboard (Accredited Python curriculum covering OOP, data structures & capstone assessment)', 'Python Foundation Certification (Capstone + Parts 1 & 2):');
  drawBullet(doc, 'GNDEC Data Science Club (Ref: CSE/DSC/4681 • Evaluated by departmental faculty)', 'WEB FORGE 2026 Web Engineering Challenge:');
  drawBullet(doc, 'BE10x (Generative AI developer workflows, prompt engineering, and developer automation)', 'AI Tools & Modern Engineering Acceleration Workshop:');
  drawBullet(doc, 'American Association of Engineers of Indian Origin (AAEIO, USA) & GNDEC DSC', 'International IoT Technology & Engineering Webinar:');

  doc.end();
  return new Promise((resolve) => writeStream.on('finish', resolve));
}

// -------------------------------------------------------------
// 2. ATS DEVELOPER RESUME
// -------------------------------------------------------------
export function buildDeveloperResume(outputPath) {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 32, bottom: 32, left: 36, right: 36 } });
  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  drawHeader(doc, {
    name: 'MOHD SHEHZAD',
    title: 'Software Development Engineer  •  Full-Stack Developer  •  B.Tech CSE',
    contact: 'Malerkotla, Punjab, India  •  +91 9988059285  •  shehzadchouhan260@gmail.com',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/shehzad23' },
      { label: 'GitHub', url: 'https://github.com/ShehzadChouhan' },
      { label: 'Portfolio', url: 'https://my-portfolio-rosy-beta-29.vercel.app' }
    ]
  });

  drawSectionHeader(doc, 'Professional Summary');
  doc
    .font('Helvetica')
    .fontSize(8.5)
    .fillColor('#374151')
    .text(
      'B.Tech Computer Science student at GNDEC Ludhiana (CGPA 8.6/10, Batch 2023–2027) building and deploying full-stack web applications with React.js, TypeScript, Node.js, Python and SQL/PostgreSQL. Strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and DBMS, backed by podium finishes in debugging and hackathons. Seeking Software Development Engineer (SDE) or Full-Stack Developer roles.',
      { lineGap: 1.5 }
    );

  drawSectionHeader(doc, 'Technical Skills');
  drawBullet(doc, 'C, C++, Python, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3', 'Languages:');
  drawBullet(doc, 'React.js, Tailwind CSS, Vite, Framer Motion, HTML5 Canvas API, Component State Management, Responsive UI', 'Frontend:');
  drawBullet(doc, 'Node.js, Express.js, REST APIs, Supabase, PostgreSQL, Relational Database Modeling, JWT Auth', 'Backend & DB:');
  drawBullet(doc, 'Git, GitHub, Linux/Bash, Postman, Vercel, Netlify, Render, Agile Development, Systems Debugging', 'Tools & Methodologies:');

  drawSectionHeader(doc, 'Education & Coursework');
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#111827').text('Guru Nanak Dev Engineering College, Ludhiana', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  2023 – 2027', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#854d0e').text('Bachelor of Technology, Computer Science & Engineering  —  Current CGPA: 8.6 / 10.0');
  drawBullet(doc, 'Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks, System Design Fundamentals.', 'Core Coursework:');

  drawSectionHeader(doc, 'Technical Projects');
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#111827').text('HostelEase – Location-Based Accommodation Platform', { continued: true });
  doc.font('Helvetica').fillColor('#1d4ed8').text('  |  hostel-ease-sigma.vercel.app', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8).fillColor('#854d0e').text('Stack: React.js, TypeScript, Tailwind CSS, Supabase (PostgreSQL), Vite');
  drawBullet(doc, 'Engineered full-stack accommodation discovery platform for university students, deployed live on Vercel, featuring location-based filtering, verified listings, and real-time inquiry workflows.');
  drawBullet(doc, 'Modeled relational PostgreSQL schema on Supabase with real-time state synchronization, maintaining sub-100ms response times across reusable, type-safe React components.');

  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#111827').text('OmniLab Studio – Interactive Physics Simulation Workbench', { continued: true });
  doc.font('Helvetica').fillColor('#1d4ed8').text('  |  omni-physics-lab.vercel.app', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8).fillColor('#854d0e').text('Stack: React.js, TypeScript, HTML5 Canvas API, WebGL, Tailwind CSS');
  drawBullet(doc, 'Built browser-based simulation engine running 8 real-time physics experiments (Wave Optics, Pendulum Kinematics, Circuit Resistivity) implementing governing equations in client-side code.');
  drawBullet(doc, 'Developed reactive parameter sliders updating simulations at 60 FPS, with automated lab report generation and KaTeX math formula rendering.');

  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#111827').text('Track Expenser – Expense Intelligence Application', { continued: true });
  doc.font('Helvetica').fillColor('#1d4ed8').text('  |  track-expenser.vercel.app', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8).fillColor('#854d0e').text('Stack: React.js, Chart.js, Supabase, Tailwind CSS, REST APIs');
  drawBullet(doc, 'Developed financial tracking application with user authentication, multi-category transaction management, and budget forecasting; integrated Chart.js dynamic analytics dashboards.');

  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#111827').text('ZID Fitness Zone & Taskly – Gym Management & Kanban Workspace', { continued: true });
  doc.font('Helvetica').fillColor('#1d4ed8').text('  |  zid-fitness-zone.onrender.com', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8).fillColor('#854d0e').text('Stack: React.js, Node.js/Express, Supabase, Tailwind CSS');
  drawBullet(doc, 'Deployed full-stack membership workflows, attendance tracking, and Kanban board with drag-and-drop mechanics and persistent state.');

  drawSectionHeader(doc, 'Research & Industrial Training');
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text('Research Contributor — "Digital Wellness in India" | J-PAL South Asia', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  2024', { align: 'right' });
  drawBullet(doc, 'Contributed to empirical field data aggregation, user metric tracking, and device analytics for multi-institution research study led by Columbia, Stanford, and UIUC researchers.');

  doc.moveDown(0.15);
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text('AI & ML using Python Industrial Training | ThinkNEXT Technologies', { continued: true });
  doc.font('Helvetica-Bold').fillColor('#854d0e').text('  |  Grade A (Outstanding)', { align: 'right' });
  drawBullet(doc, 'Completed 1-month program covering Machine Learning regression, classification, and data analytics pipelines using Python, NumPy, and Pandas (Cert ID: 939895).');

  drawSectionHeader(doc, 'Honors & Competitive Engineering');
  drawBullet(doc, 'Tech Disha 2024, Arya College (Outperformed regional competitors in code debugging, memory resolution, and algorithmic problem-solving).', '3rd Prize (Podium Finish), "Debugging using C":');
  drawBullet(doc, '8-Hour Inter-College Hackathon by ITian Club, GNDEC ("Where Ideas Ignite Impact").', 'Contender, THINK-A-THON 2026:');
  drawBullet(doc, 'Center for Multi-Faceted Learning (CML), GNDEC (Commended for analytical problem formulation and presentation delivery).', '2nd Position, Case Study Making Competition:');
  drawBullet(doc, 'Conversa English Academy & Azad Foundation ("Plant Tree, Save Earth").', 'First Position, Grand Declamation Contest:');

  drawSectionHeader(doc, 'Verified Certifications');
  drawBullet(doc, 'Infosys Springboard (Accredited Python curriculum covering OOP, data structures & capstone assessment)', 'Python Foundation Certification (Capstone + Parts 1 & 2):');
  drawBullet(doc, 'GNDEC Data Science Club (Ref: CSE/DSC/4681 • Reactive web applications)', 'WEB FORGE 2026 Web Engineering Challenge:');
  drawBullet(doc, 'BE10x (Generative AI workflows, prompt engineering, and developer productivity tooling)', 'AI Tools & Modern Engineering Acceleration Workshop:');

  doc.end();
  return new Promise((resolve) => writeStream.on('finish', resolve));
}

// -------------------------------------------------------------
// 3. SPEAKER & EDUCATOR RESUME
// -------------------------------------------------------------
export function buildSpeakerResume(outputPath) {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 32, bottom: 32, left: 36, right: 36 } });
  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  drawHeader(doc, {
    name: 'MOHD SHEHZAD',
    title: 'STEM Educator  •  Award-Winning Public Speaker  •  Academic Mentor',
    contact: 'Malerkotla, Punjab, India  •  +91 9988059285  •  shehzadchouhan260@gmail.com',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/shehzad23' },
      { label: 'GitHub', url: 'https://github.com/ShehzadChouhan' },
      { label: 'Portfolio', url: 'https://my-portfolio-rosy-beta-29.vercel.app' }
    ]
  });

  drawSectionHeader(doc, 'Professional Summary');
  doc
    .font('Helvetica')
    .fontSize(8.5)
    .fillColor('#374151')
    .text(
      'Passionate Educator, STEM Instructor, and Award-Winning Public Speaker with 1+ year of hands-on teaching experience mentoring students from Class 5th to 10th across Mathematics, Science (Physics/Chemistry), and Computer Science fundamentals. Proven track record of breaking down complex concepts into intuitive analogies, driving student engagement. Concurrently an active university keynote presenter, 1st Position Declamation Champion (Conversa & Azad Foundation), and 2nd Position state-level orator (Awake Foundation, 5,100+ audience). Adept at curriculum delivery, interactive EdTech tools, and empathetic student mentorship.',
      { lineGap: 1.5 }
    );

  drawSectionHeader(doc, 'Core Teaching & Oratory Competencies');
  drawBullet(doc, 'Conceptual Simplification, Differentiated Instruction, Student-Centric Learning, Diagnostic Assessment', 'Pedagogical Excellence:');
  drawBullet(doc, 'Mathematics (Algebra, Geometry), General Science & Physics, Computer Science & Coding Basics', 'Subject Mastery:');
  drawBullet(doc, 'Keynote Delivery, Voice Modulation, Audience Engagement, Declamation, Rhetorical Persuasion', 'Public Speaking & Stage Delivery:');
  drawBullet(doc, 'Interactive Virtual Lab Simulations (OmniLab Studio), Digital Whiteboards, Visual Experiments', 'Educational Technology:');
  drawBullet(doc, 'Student Mentorship, Diagnostic Assessment Quizzes, Parent-Teacher Alignment, Exam Preparation', 'Classroom Leadership:');

  drawSectionHeader(doc, 'Teaching & Mentorship Experience');
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#111827').text('Academic Tutor & STEM Educator | Independent Academic Mentorship', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  2024 – Present (1 Year)', { align: 'right' });
  doc.font('Helvetica').fontSize(8).fillColor('#4b5563').text('Malerkotla, Punjab');
  drawBullet(doc, 'Mentored 15+ students across grades 5 through 10 in Mathematics, Science (Physics/Chemistry), and Computer Science fundamentals, cultivating conceptual curiosity and disciplined study habits.');
  drawBullet(doc, 'Designed customized, interactive lesson plans breaking down challenging curriculum topics (Optics, Kinematics, Algebraic Equations) into visual experiments and relatable real-world analogies.');
  drawBullet(doc, 'Achieved 15–20% average grade improvement across all students within one academic term through structured diagnostic quizzes and personalized weakness remediation.');
  drawBullet(doc, 'Conducted regular one-on-one progress discussions with parents, providing transparent performance analytics and tailored study schedules.');

  drawSectionHeader(doc, 'Public Speaking & Keynote Presentations');
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text('Keynote Presenter — Smart Traffic Management Proposal | GNDEC Data Science Club', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  Sep 2024', { align: 'right' });
  drawBullet(doc, 'Delivered live technical keynote and architectural proposals on algorithmic urban mobility and IoT traffic distribution before an auditorium of faculty evaluators and student delegates.');

  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text('Case Study Presenter — 2nd Position | Center for Multi-Faceted Learning (CML), GNDEC', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  Sep 2025', { align: 'right' });
  drawBullet(doc, 'Secured 2nd Position in the Online Case Study Making Competition, commended by judges for articulate problem structuring, narrative clarity, and persuasive delivery.');

  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text('Research Contributor & Communicator | J-PAL South Asia (Columbia/Stanford/UIUC)', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  2024', { align: 'right' });
  drawBullet(doc, 'Engaged in demographic field data collection and communication for the multi-university empirical study "Digital Wellness in India."');

  drawSectionHeader(doc, 'Honors & Oratory Awards');
  drawBullet(doc, 'Conversa English Academy & Azad Foundation (Won 1st Position for eloquent speech delivery on "Plant Tree, Save Earth" at Islamia Senior Secondary School).', 'First Position (Winner), Grand Declamation Contest:');
  drawBullet(doc, 'Awake Foundation & Radiance Foundation (Awarded 2nd Position competing across 51+ schools and colleges before 5,100+ attendees).', '2nd Position, Grand Declamation Contest "WE ARE ONE":');
  drawBullet(doc, 'GNDEC 68th Foundation Day (Felicitated by Principal Dr. Sehijpal Singh on the Main Auditorium stage for student initiatives, oratory representation, and academic excellence).', 'Stage Felicitation Honor:');
  drawBullet(doc, 'All India Lohar Trust (Regd.) Punjab (Honored at the state-level ceremony for community leadership, public engagement, and scholastic distinction).', 'State Honours Ceremony Memento:');
  drawBullet(doc, 'Islamia Senior Secondary School, Malerkotla (Received Academic Excellence Award and separate Outstanding Student Trophy).', '12th Grade 89% Academic Honor & Outstanding Student Award:');
  drawBullet(doc, 'Center for Multi-Faceted Learning (CML), GNDEC.', '2nd Position, Case Study Making Competition:');

  drawSectionHeader(doc, 'Education');
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text('Bachelor of Technology (B.Tech), Computer Science & Engineering | GNDEC Ludhiana', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  2023 – 2027', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8).fillColor('#854d0e').text('Current CGPA: 8.6 / 10.0');

  doc.moveDown(0.15);
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#111827').text('Senior Secondary (12th Grade) | Islamia Senior Secondary School, Malerkotla', { continued: true });
  doc.font('Helvetica').fillColor('#6b7280').text('  |  Score: 89%', { align: 'right' });

  doc.end();
  return new Promise((resolve) => writeStream.on('finish', resolve));
}

async function main() {
  console.log('Generating role-tailored PDF resumes in public/assets...');

  await buildRecruiterResume(path.join(OUT_DIR, 'Mohd_Shehzad_Recruiter_Resume.pdf'));
  console.log('✓ Generated Mohd_Shehzad_Recruiter_Resume.pdf');

  // Also replace old Mohd_Shehzad_Resume.pdf with the updated Master Recruiter resume
  await buildRecruiterResume(path.join(OUT_DIR, 'Mohd_Shehzad_Resume.pdf'));
  console.log('✓ Generated Mohd_Shehzad_Resume.pdf (Master)');

  await buildDeveloperResume(path.join(OUT_DIR, 'Mohd_Shehzad_Developer_Resume.pdf'));
  console.log('✓ Generated Mohd_Shehzad_Developer_Resume.pdf');

  await buildSpeakerResume(path.join(OUT_DIR, 'Mohd_Shehzad_Speaker_Resume.pdf'));
  console.log('✓ Generated Mohd_Shehzad_Speaker_Resume.pdf');

  console.log('All 4 role resumes generated successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
