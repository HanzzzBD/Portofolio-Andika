# Research & Content Inventory — Andika Rasya Putra Portfolio

Compiled 2026-11-01, before implementation. Every fact used on the site traces to a row below.

## 1. Design reference — REA analysis

Target: `https://my-portfolio-mu-eight-22.vercel.app/` (another developer's portfolio — design direction only; none of its content, name, photos or copy is reused).

Captured with REA `capture_browser_scenario` (DOM + screenshot, 1440×900, dark) and a Playwright pass (scroll states, mobile 390px, computed styles, CSS/JS bundle scan).

| Aspect | Finding |
|---|---|
| Structure | Single scroll page (Hero → About → Motivation → Skills → Works/Gallery links) plus `/works` and `/gallery` routes. ~2.1k px tall on desktop. |
| Navigation | Fixed left rail: HOME / WORKS / GALLERY in tracked uppercase, active item has a 100px underline; social icon stack beneath; light/dark toggle pill top-right. Mobile collapses to a top bar with a 1px bottom border. |
| Typography | Montserrat everywhere. Name: 100.8px / weight 100 (hairline), each letter its own span (per-letter reveal). Section labels 21.6px / 300 uppercase. Body 16–17px / 300 with wide letter-spacing. |
| Color | Near-black `#151515`/`#101010`, text `#ffffffdc` (≈86% white), muted `#888a`, hairlines `#ffffff15`, light theme `#f2f2f2`. Monochrome — no accent hue. |
| Layout | 12-col feel: content starts ~216px from left (past rail); two-column About (text right, empty left), Motivation (text left, image right). Generous vertical gaps (~200px). |
| Section headers | Uppercase label + full-width 1px rule underneath. |
| Imagery | Single black-and-white documentary photo, hard edges, no radius. |
| Skills | Grouped columns (Frontend / Backend / Tools) of outlined pill tags. |
| Motion | Framer Motion + Lenis smooth scroll + a React-Three-Fiber shader object in the hero (canvas; blank in headless). Sections fade/slide in on scroll; skill header fades from ~10% opacity. Easing `cubic-bezier(.4,0,.2,1)`. |
| Footer | Tiny fixed "© name" bottom-left; large "WORKS →" / "GALLERY →" text links at page end. |
| Responsive | No horizontal overflow at 390px; stacks to single column; letter-spacing increases on mobile body copy. |

**What to keep:** hairline display type at huge scale, fixed side rail with underline indicator, uppercase labels over 1px rules, monochrome base, B&W imagery, outlined tags, quiet restrained motion, theme toggle.

**What to change for Andika:** a single signal-red accent taken from his own portrait background; a mono typeface for metadata (developer identity); real project showcases and a certificate gallery (the reference has neither on the home page); GSAP-driven hero/scroll choreography instead of a 3D object.

## 2. Content inventory (verified)

### Identity
| Fact | Source |
|---|---|
| Name: Andika Rasya Putra | GitHub profile name, CV, all certificates |
| Student, Rekayasa Perangkat Lunak (RPL), SMK Negeri 4 Bandung, 2023–2027 | CV (Drive) |
| SMP Negeri 1 Cibiuk, 2021–2023 | CV |
| Location: Kota Bandung, Jawa Barat | CV |
| Email: andikarasyaputra4@gmail.com | CV; Drive file owner |
| Profile statement: interested in web development, active in competitions | CV |
| Portrait (formal, red background) | Drive `Andika Rasya Putra.jpg` |
| Phone number | CV — **deliberately not published** |

### Organisation & personal (CV)
- ORBIT (school extracurricular) — Bendahara (treasurer): manages finances/cash. Divisi Manajemen: helps plan and run work programs.
- Thai Boxing Bandung — member.
- Soft skills: communication, teamwork, time management.

### Skills (with evidence)
| Skill | Evidence |
|---|---|
| HTML, CSS, JavaScript | Innoventure site commits; `tugas-restfull` |
| React, Vite | SMKN4BDG frontend scaffold commit (1,807 lines) + Habituasi pages; CV ("Vite") |
| Tailwind CSS | CV; SMKN4BDG frontend stack |
| Laravel (PHP) | CV |
| REST API consumption (fetch, CRUD) | `tugas-restfull` |
| Git, GitHub | 10 public repos; PR merged on SMKN4BDG |
| Laragon | CV |
| Figma (basic) | CV — labelled "basic" as he does |

### Projects (GitHub)
| Repo | Reality | Use |
|---|---|---|
| `HanzzzBD/Lomba-Unikom-Innoventure-` (fork `andikatra/…`) | Team competition site, HTML/CSS/JS. Andika authored ~18 commits Aug 16–26 2025: navbar fixes, parallax, "keunggulan" marquee, facility imagery, "jelajahi sekolah" section. Live URL now 404. | Featured — entry for Innoventure UNIKOM (Juara 3 Web Development) |
| `andikatra/SMKN4BDG` (**private**) | School digital portal; React + Vite + Tailwind + GSAP frontend, Express + Prisma + PostgreSQL + Redis backend, Docker/GHCR CI. Andika owns the repo; made first commit, scaffolded the frontend, built all Habituasi pages (+325 lines), adjusted BKK/ekstrakurikuler pages, added majors/MBG/industry data. Most later commits by a teammate. | Featured — credited as team project, his parts stated precisely; **no repo link** (private, 404 for visitors) |
| `andikatra/tugas-restfull` | Class-data CRUD client (vanilla JS fetch against `localhost:8000/api`). `script.js` still contains unresolved merge-conflict markers. | Listed as a learning exercise, not production |
| `invenbar`, `belajar-vite` | Only `.gitignore` | Not shown |
| `Kelompok5`, `Kel5VolumePyramid`, `template` | Empty | Not shown |
| `MBG-Transparansi--System`, `SIGM4`, `KomunitasDisabilitas`, `introduction-to-git` | Forks; no Andika commits found in history inspected | Not shown |

### Certificates & achievements (Drive originals)
| Title | Issuer | Category | Date |
|---|---|---|---|
| Juara 3 Web Development — Technova 2026 "Beyond The Frontier of Innovation" | HIMA TEKKOM & HIMARPL, Universitas Pendidikan Indonesia | Award | 30 May 2026 |
| Juara 3 Web Development — Innoventure, UNIKOM | UNIKOM | Award (team; award photo, no certificate file) | date not verified |
| Peserta Competitive Programming — Dinamik 20 | BEM KEMAKOM, UPI | Participation | 20 Oct – 28 Dec 2025 |
| Fundamental of Assistant Web Developer — VBL SMKN 4 Bandung (Digital Talent Scholarship 2026, 11.5 h) | Digital Talent Academy, BLSDM Komdigi | Training | 3–14 Aug 2026 |
| Bebras Challenge — Peserta Kategori Penegak | Bebras Indonesia (Biro UNIKOM) | Participation | 11–16 Nov 2024 |
| Finalist — Business Plan | (competition name not in sources) | Per CV only | — |

CV states "dua gelar Juara Web Development tingkat Provinsi" — matches the two Juara 3 Web Development results above.

## 3. Gaps & access notes
- **Drive folder `sertif` (1tp4H-ViDs…)**: metadata readable, but listing its children returns nothing via the Drive connector. Andika's certificates were instead found as files he owns elsewhere in Drive (listed above). If `sertif` holds additional files, they were not inspected.
- **LinkedIn**: HTTP 999 (bot block) — no headline/about/experience read. Linked only.
- **Instagram**: login wall — no bio read. Linked only.
- No live demo is available for any featured project.
- **SMKN4BDG is a private repository.** It was readable only because the local GitHub CLI is authenticated as a collaborator. The site describes it without linking; confirm with the team that publishing the description and screenshot is acceptable.
- About-section voice copy (lead quote, "How I work", "Where I’m heading") is written from verified facts but phrased in first person — Andika should review the wording.
