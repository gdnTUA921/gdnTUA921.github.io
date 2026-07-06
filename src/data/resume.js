/**
 * Single source of truth for all portfolio content.
 * Edit this file to update text anywhere on the site — no component changes needed.
 * Content is sourced from resume.md.
 */

export const profile = {
  name: 'Giancarlo D. Nonato',
  firstName: 'Giancarlo',
  tagline: 'IT Professional / Software Engineer / Full-Stack Developer',
  location: 'Quezon City, Philippines',
  phone: '09279142603',
  email: 'jnonato906@gmail.com',
  github: 'https://github.com/gdnTUA921',
  linkedin: 'https://www.linkedin.com/in/giancarlo-nonato/',
  // Path served from /public — drop your real PDF at public/resume.pdf
  resumeUrl: '/Resume - Nonato, Giancarlo D.pdf',
  // Path served from /public — drop your real photo at public/images/profile.jpg
  photo: '/images/giannonato.JPG',
  summary:
    'A motivated developer with hands-on experience in software, web, and mobile application development through academic and project-based work. Possesses working knowledge of C++, C#, Java, Python, SQL, HTML, CSS, JavaScript, and PHP, with practical experience in React Native, Android Studio, and MIT App Inventor. Eager to apply technical skills in a professional environment, continuously learn, and contribute effectively to team-based projects.',
};

export const skillGroups = [
  {
    category: 'Programming & Markup Languages',
    skills: ['C++', 'C#', 'Java', 'Python', 'SQL', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['ReactJS', 'React Native', 'NextJS', 'Laravel'],
  },
  {
    category: 'Database Management',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'Mobile Development',
    skills: ['React Native', 'Android Studio', 'MIT App Inventor'],
  },
  {
    category: 'Version Control & Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Visual Studio', 'Visual Studio Code', 'Postman'],
  },
  {
    category: 'UI/UX & Design Tools',
    skills: ['Figma', 'Canva'],
  },
  {
    category: 'Cloud & Backend Services',
    skills: ['Google Cloud Platform (GCP)', 'Firebase'],
  },
  {
    category: 'System Modeling & Business Design',
    skills: ['ArchiMate (Business & ERP Modeling)'],
  },
  {
    category: 'Productivity & Others',
    skills: ['MS Word', 'Excel', 'PowerPoint', 'Basic Computer Troubleshooting'],
  },
];

export const softSkills = [
  'Problem-solving',
  'Analytical thinking',
  'Team collaboration',
  'Communication skills',
  'Time management',
  'Adaptability',
  'Willingness to learn',
  'Attention to detail',
  'Receptive to feedback',
];

/**
 * School / company logos live in /public/images/logos/.
 * Drop the real logo at each `logo` path below and it replaces the icon
 * placeholder automatically (clicking it opens an enlarged view).
 */
export const education = [
  {
    degree: 'Bachelor of Science in Information Technology — Software Engineering',
    school: 'Trinity University of Asia, Quezon City',
    honors: 'Summa Cum Laude',
    period: '2022 – 2026',
    logo: '/images/logos/trinity-university-of-asia.svg',
  },
];

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'International Academy Manila',
    period: 'Feb 2026 – Apr 2026',
    logo: '/images/logos/international-academy-manila.jpg',
    bullets: [
      'Contributed to the development of a full-stack academic management system for International Academy Manila and St. Anthony Mary Claret College.',
      'Developed web and mobile school portal applications using ReactJS, React Native, PHP, Node.js, and PostgreSQL.',
    ],
  },
];

/**
 * Project images live in /public/images/projects/.
 * Each `image` path below is predictable and matches the project slug, so you
 * can drop real screenshots in without touching code.
 * Set `demo` and/or `github` to a URL to render live-demo / repo links on the card.
 */
export const projects = [
  {
    name: 'International Academy Manila (IAM) School Portal',
    year: '2026',
    tech: ['ReactJS', 'React Native', 'PHP', 'Node.js', 'PostgreSQL'],
    description:
      'Full-stack academic management system for web and mobile. The web app pairs a ReactJS frontend with a PHP backend, while the mobile app uses React Native with Node.js — both sharing a PostgreSQL database for centralized management of academic data and school operations.',
    image: '/images/projects/iam-school-portal.png',
    demo: null,
    github: null,
  },
  {
    name: 'Claret College School Portal',
    year: '2026',
    tech: ['ReactJS', 'React Native', 'PHP', 'Node.js', 'PostgreSQL'],
    description:
      'Full-stack academic management system similar in scope to the IAM Portal, supporting web (ReactJS + PHP) and mobile (React Native + Node.js) platforms, integrated with a PostgreSQL database for consistent, centralized academic and administrative data.',
    image: '/images/projects/claret-school-portal.jpg',
    demo: null,
    github: null,
  },
  {
    name: 'LGU OJT Monitoring System',
    year: '2026',
    tech: ['ReactJS', 'PHP', 'MySQL'],
    description:
      'Comprehensive web-based OJT monitoring system featuring precise geolocation-based time tracking for interns and automated PDF report generation for administrative monitoring.',
    image: '/images/projects/lgu-ojt-monitoring.jpeg',
    demo: null,
    github: null,
  },
  {
    name: 'TUA Marketplace',
    year: '2025',
    tech: ['ReactJS', 'PHP', 'Python', 'MySQL', 'Firebase', 'GCP'],
    description:
      'Campus-exclusive online marketplace for Trinity University of Asia featuring secure Google authentication, product listings, real-time messaging, and AI-based recommendations.',
    image: '/images/projects/tua-marketplace.jpeg',
    demo: null,
    github: null,
  },
  {
    name: 'Mini-Binance Web App',
    year: '2025',
    tech: ['Laravel 12', 'PHP 8.2', 'React', 'Vite', 'TailwindCSS'],
    description:
      'A full-stack cryptocurrency exchange simulation built with Laravel 12 (PHP 8.2) and a React + Vite + TailwindCSS frontend.',
    image: '/images/projects/mini-binance.jpeg',
    demo: null,
    github: null,
  },
  {
    name: 'Blockchain Web App',
    year: '2025',
    tech: ['React', 'Laravel', 'PostgreSQL'],
    description:
      'A simple blockchain simulation built with a React frontend, Laravel backend, and PostgreSQL database.',
    image: '/images/projects/blockchain-web-app.jpeg',
    demo: null,
    github: null,
  },
  {
    name: 'TUA OJT Monitoring System',
    year: '2024',
    tech: ['C#', 'Windows Forms', 'Android', 'MySQL'],
    description:
      'Multi-platform internship monitoring system: a C# Windows Forms desktop app for administrators and an Android mobile app for students, with QR code attendance, secure logging, and MySQL integration.',
    image: '/images/projects/tua-ojt-monitoring.png',
    demo: null,
    github: null,
  },
  {
    name: 'Weight Up!',
    year: '2023',
    tech: ['MIT App Inventor', 'Android'],
    description:
      'A fitness app for Android that lets users track their weight, upload progress photos, and calculate their BMI with a built-in calculator.',
    image: '/images/projects/weight-up.jpeg',
    demo: null,
    github: null,
  },
];

/**
 * Certificate images live in /public/images/certifications/.
 * Drop a photo/scan of each certificate at the `image` path below and it
 * appears as a clickable thumbnail (opens enlarged in a modal) — until then
 * a styled placeholder is shown.
 */
export const certifications = [
  {
    title: 'AI and Automation Webinar',
    issuer: 'PynetLabs',
    year: '2024',
    image: '/images/certifications/AI&Automation.png',
  },
  {
    title: 'Cybersecurity Training Level 1',
    issuer: 'College of Engineering and Information Sciences, Trinity University of Asia',
    year: '2025',
    image: '/images/certifications/cybersecurity_level1.jpeg',
  },
  {
    title: 'Information Technology Specialist (ITS) in Java',
    issuer: 'Certiport',
    year: '2026',
    image: '/images/certifications/JavaCertification.png',
  },
];

export const participation = [
  {
    title: 'UMAK IT Skills Competition (Java Category)',
    role: 'Participant',
    year: '2024',
  },
  {
    title: 'College of Engineering and Information Sciences Local Council',
    role: 'Treasurer',
    year: '2024–2025',
  },
];
