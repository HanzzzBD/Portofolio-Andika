// Single source of truth for site copy.
// Every fact here is traced to a source in docs/RESEARCH.md — do not add unverified claims.

export const profile = {
  name: 'Andika Rasya Putra',
  firstName: 'Andika',
  role: 'Web Developer',
  school: 'SMK Negeri 4 Bandung',
  major: 'Rekayasa Perangkat Lunak (RPL)',
  location: 'Bandung, West Java',
  email: 'andikarasyaputra4@gmail.com',
  portrait: {
    src: '/images/portrait-727.webp',
    srcSet: '/images/portrait-480.webp 480w, /images/portrait-727.webp 727w',
    width: 727,
    height: 969,
  },
}

export const socials = [
  { id: 'github', label: 'GitHub', handle: 'andikatra', href: 'https://github.com/andikatra' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'Andika Rasya Putra', href: 'https://www.linkedin.com/in/andika-rasya-putra-474425332/' },
  { id: 'instagram', label: 'Instagram', handle: '@rrsyaptraa', href: 'https://www.instagram.com/rrsyaptraa/' },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const heroFacts = [
  { value: '2×', label: 'Juara 3 · Web Development' },
  { value: 'RPL', label: 'SMK Negeri 4 Bandung' },
  { value: '2023—27', label: 'Class of 2027' },
]

export const about = {
  lead: 'I build for the web — and I learn fastest when there is a deadline, a team and a real audience on the other side of the screen.',
  paragraphs: [
    'I am a software engineering (RPL) student at SMK Negeri 4 Bandung. Most of what I know about web development comes from building things people actually use: a school landing page for a competition, pages for my school’s digital portal, and the class projects in between.',
    'Competitions have shaped how I work. Two of them ended with a Juara 3 in Web Development, and every one of them taught me to split a problem into pieces a team can ship together.',
  ],
  approach: [
    { title: 'Ship, then refine', text: 'Get a working page in front of people early, then fix what they actually trip over.' },
    { title: 'Work in the open', text: 'Branches, pull requests and small commits — so teammates can see and build on the work.' },
    { title: 'Own a slice', text: 'Take one part end-to-end, from layout to content, and make it solid.' },
  ],
  aspiration: 'Next: going deeper into modern frontend — React, motion and interface craft — and growing into a developer teams can rely on.',
  education: [
    { period: '2023 — 2027', school: 'SMK Negeri 4 Bandung', detail: 'Rekayasa Perangkat Lunak (Software Engineering)' },
    { period: '2021 — 2023', school: 'SMP Negeri 1 Cibiuk', detail: 'Junior high school' },
  ],
  offKeyboard: { title: 'Thai Boxing Bandung — Member', text: 'Off the keyboard: training with discipline and consistency.' },
}

export const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'HTML', 'CSS', 'PHP'],
    evidence: 'Innoventure site · class projects · Laravel work',
  },
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'Responsive layout'],
    evidence: 'SMKN 4 Bandung portal frontend · CV',
  },
  {
    title: 'Backend',
    items: ['Laravel', 'REST API integration'],
    evidence: 'CV · tugas-restfull (fetch-based CRUD client)',
  },
  {
    title: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'Pull requests', 'Laragon', 'Figma (basic)'],
    evidence: 'Public GitHub repositories · team pull-request workflow',
  },
]

export const softSkills = ['Communication', 'Teamwork', 'Time management']

export const projects = [
  {
    id: 'innoventure',
    index: '01',
    title: 'SMKN 4 Bandung — Landing Page',
    kicker: 'Innoventure · UNIKOM',
    award: 'Juara 3 · Web Development',
    year: '2025',
    role: 'Frontend developer · team entry',
    stack: ['HTML', 'CSS', 'JavaScript'],
    overview:
      'A single-page school profile built as a team entry for the Innoventure competition at UNIKOM: video hero, school story, programs, facilities, a Google Street View virtual tour and a registration call-to-action.',
    problem:
      'Prospective students and parents need one place to understand what the school offers — its majors, facilities and achievements — before they visit or register.',
    contributions: [
      'Rebuilt the navigation bar and fixed its scroll behaviour',
      'Added the parallax treatment and the achievements marquee',
      'Replaced flat facility backgrounds with real photography',
      'Built and repaired the “Jelajahi Sekolah” virtual-tour section',
    ],
    cover: { base: '/images/projects/innoventure-hero', alt: 'Hero of the SMKN 4 Bandung landing page: “Selamat Datang di SMKN 4 Bandung” over a video still of the school entrance' },
    gallery: [
      { base: '/images/projects/innoventure-keunggulan', alt: 'Keunggulan & Prestasi section with scrolling achievement cards' },
      { base: '/images/projects/innoventure-facility', alt: 'Fasilitas Unggulan section with photo cards of practice rooms, classrooms and library' },
    ],
    links: [
      { label: 'Repository', href: 'https://github.com/HanzzzBD/Lomba-Unikom-Innoventure-' },
      { label: 'Andika’s fork', href: 'https://github.com/andikatra/Lomba-Unikom-Innoventure-' },
    ],
    note: 'The competition deployment is no longer online; screenshots are rendered from the repository source.',
  },
  {
    id: 'smkn4bdg',
    index: '02',
    title: 'SMKN 4 Bandung — Digital Portal',
    kicker: 'School platform · team project',
    year: '2026',
    role: 'Repository owner · frontend contributor',
    stack: ['React', 'Vite', 'Tailwind CSS', 'GSAP', 'Express', 'Prisma', 'PostgreSQL', 'Docker'],
    overview:
      'The school’s digital portal: public pages for profile, activities, extracurriculars, career centre (BKK), MBG and admissions (SPMB), backed by a REST API with a CMS and an AI chatbot. Deployed with Docker images built in CI.',
    problem:
      'School information was scattered. The portal gives students, parents and partners one maintained source — with content staff can update through a CMS instead of editing code.',
    contributions: [
      'Created the repository and scaffolded the React + Vite frontend',
      'Built every Habituasi page — hero, introduction, day-by-day sections and image slider',
      'Adjusted the BKK and extracurricular pages',
      'Entered majors, MBG and industry-partner data',
    ],
    cover: { base: '/images/projects/smkn4bdg-portal', alt: 'SMKN 4 Bandung portal: navigation bar and a horizontal gallery of school activity photos' },
    gallery: [],
    links: [],
    privateRepo: true,
    note: 'Built with a team; the backend, CMS and CI/CD were led by a teammate. The repository is private.',
  },
]

export const archive = [
  {
    name: 'tugas-restfull',
    desc: 'Class-data CRUD client in vanilla JavaScript that talks to a REST API with fetch. A class exercise.',
    tags: ['JavaScript', 'REST'],
    href: 'https://github.com/andikatra/tugas-restfull',
  },
]

// Newest first. Dates are exactly as printed on certificates / commit history.
export const timeline = [
  {
    date: 'Sep — Oct 2026',
    title: 'SMKN 4 Bandung Digital Portal',
    org: 'Team project · GitHub',
    kind: 'Development',
    text: 'Repository owner and frontend contributor: project scaffold, Habituasi pages, content data.',
  },
  {
    date: 'Aug 2026',
    title: 'Fundamental of Assistant Web Developer',
    org: 'Digital Talent Academy · BLSDM Komdigi',
    kind: 'Training',
    text: 'Digital Talent Scholarship 2026, VBL track at SMK Negeri 4 Bandung — 11.5 training hours.',
  },
  {
    date: 'May 2026',
    title: 'Technova 2026 — Juara 3 Web Development',
    org: 'HIMA TEKKOM & HIMARPL · Universitas Pendidikan Indonesia',
    kind: 'Award',
    text: 'Competed as Tim Orbit A under the theme “Beyond The Frontier of Innovation”.',
  },
  {
    date: 'Oct — Dec 2025',
    title: 'Dinamik 20 — Competitive Programming',
    org: 'BEM KEMAKOM · Universitas Pendidikan Indonesia',
    kind: 'Competition',
    text: 'Participant, Dinamik Competition: “The Collaboration Edge: Leading Innovation in the Digital Era”.',
  },
  {
    date: '2025',
    title: 'Innoventure — Juara 3 Web Development',
    org: 'UNIKOM',
    kind: 'Award',
    text: 'Team website for SMK Negeri 4 Bandung, built in August 2025; my commits covered navigation, parallax, the marquee and facilities.',
  },
  {
    date: 'Nov 2024',
    title: 'Bebras Challenge',
    org: 'Bebras Indonesia · Biro UNIKOM',
    kind: 'Competition',
    text: 'Participant, Penegak category — computational thinking challenge.',
  },
]

export const organisations = [
  { title: 'ORBIT — Treasurer', text: 'Manages the finances and cash administration of the extracurricular.' },
  { title: 'ORBIT — Management Division', text: 'Helps plan and run the extracurricular’s work programs.' },
  { title: 'Business Plan — Finalist', text: 'Reached the finals of a business plan competition.' },
]

export const certificates = [
  {
    id: 'technova',
    title: 'Juara 3 Web Development',
    event: 'Technova 2026',
    issuer: 'HIMA TEKKOM & HIMARPL, Universitas Pendidikan Indonesia',
    category: 'Award',
    date: '30 May 2026',
    base: '/images/cert-technova',
    alt: 'Certificate: Andika Rasya Putra, Juara 3 Web Development, Technova 2026',
  },
  {
    id: 'innoventure',
    title: 'Juara 3 Web Development',
    event: 'Innoventure · UNIKOM',
    issuer: 'Universitas Komputer Indonesia',
    category: 'Award',
    date: null,
    base: '/images/innoventure-award',
    photo: true,
    alt: 'Award ceremony: the team on stage holding a “Juara 3 Web Development” board',
  },
  {
    id: 'dta',
    title: 'Fundamental of Assistant Web Developer',
    event: 'Digital Talent Scholarship 2026',
    issuer: 'Digital Talent Academy · BLSDM Komdigi',
    category: 'Training',
    date: '3–14 Aug 2026',
    base: '/images/cert-dta',
    alt: 'Training certificate: Fundamental of Assistant Web Developer, Digital Talent Academy',
  },
  {
    id: 'dinamik',
    title: 'Competitive Programming — Participant',
    event: 'Dinamik 20',
    issuer: 'BEM KEMAKOM, Universitas Pendidikan Indonesia',
    category: 'Participation',
    date: '20 Oct – 28 Dec 2025',
    base: '/images/cert-dinamik',
    alt: 'Certificate: participant in Competitive Programming, Dinamik 20',
  },
  {
    id: 'bebras',
    title: 'Bebras Challenge — Penegak',
    event: 'Pekan Bebras 2024',
    issuer: 'Bebras Indonesia · Biro UNIKOM',
    category: 'Participation',
    date: '11–16 Nov 2024',
    base: '/images/cert-bebras',
    alt: 'Certificate: participant, Bebras Challenge, Penegak category',
  },
]
