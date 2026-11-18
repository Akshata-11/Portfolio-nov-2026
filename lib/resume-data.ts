export const profile = {
  name: "Akshata S. Kawale",
  title: "Frontend Developer",
  location: "Mumbai, India",
  email: "akshataskawale@outlook.com",
  phone: "+91-7208320939",
  linkedin: "https://linkedin.com/in/akshata-kawale-243379151",
  github: "https://github.com/Akshata-11",
  summary:
    "Frontend Developer with 3+ years of experience building performant, responsive, and accessible web applications. Proficient in React.js, Next.js, and TypeScript with deep expertise in component architecture, state management, and modern CSS. Currently leading a React-to-Next.js migration for improved SSR, SEO, and page performance.",
};

export const heroAchievements: string[] = [
  "3+ years of frontend development experience",
  "Leading React → Next.js migration (40% faster page loads)",
  "50% boost in API integration efficiency",
  "25% faster document-rendering pipelines shipped",
  "BE in Electronics Engineering, CGPA 7.75",
  "Research internship at TIFR — nanofabrication",
];

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Core Frontend",
    items: ["React.js", "Next.js (App Router, SSR, SSG, ISR)", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "SCSS / Sass", "CSS3", "Bootstrap", "Responsive Design", "CSS Grid", "Flexbox"],
  },
  {
    category: "Frontend Tooling",
    items: ["Webpack", "Vite", "ESLint", "Prettier", "Chrome DevTools", "Lighthouse", "React DevTools"],
  },
  {
    category: "Design & Prototyping",
    items: ["Figma (Design-to-Code)", "UI/UX Principles", "Cross-browser Compatibility", "Accessibility (a11y)"],
  },
  {
    category: "API & Integration",
    items: ["RESTful APIs", "Fetch / Axios", "JSON", "Postman", "Third-party API Integration"],
  },
  {
    category: "Version Control & Deploy",
    items: ["Git", "GitHub", "GitLab", "Netlify", "Vercel", "CI/CD Pipelines"],
  },
  {
    category: "Additional",
    items: ["Node.js", "Express.js", "MongoDB", "AWS (S3, Lambda)", "Jira", "Agile / Scrum"],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  flair?: string;
  website?: string;
  tech?: string[];
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Elephant Canvas LLP",
    role: "Frontend Developer",
    period: "Dec 2025 – Present",
    current: true,
    flair: "Leading Next.js migration",
    website: "https://newartx.com",
    tech: ["nextjs", "react", "typescript", "tailwindcss", "figma"],
    bullets: [
      "Leading migration of newartx.com from React.js to Next.js (App Router), achieving improved SSR, SEO, and 40% faster page loads",
      "Converting complex Figma designs into pixel-perfect, fully responsive web pages using React components and Tailwind CSS",
      "Building responsive HTML email newsletters with cross-client rendering compatibility across Gmail, Outlook, and Apple Mail",
      "Implementing modern frontend patterns including code splitting, lazy loading, image optimization, and dynamic routing",
      "Optimizing Core Web Vitals (LCP, FID, CLS) through performance profiling and frontend best practices",
    ],
  },
  {
    company: "CBS Software Pvt. Ltd.",
    role: "Frontend Developer (Contract)",
    period: "Nov 2025",
    flair: "Contract role",
    tech: ["javascript", "css3", "html5"],
    bullets: [
      "Delivered responsive, pixel-perfect web interfaces for client projects using HTML5, CSS3, and vanilla JavaScript",
      "Ensured cross-browser compatibility and mobile responsiveness across Chrome, Safari, Firefox, and Edge",
      "Collaborated with design and backend teams to translate requirements into polished, functional UI components",
    ],
  },
  {
    company: "Ipage Um Services Pvt. Ltd.",
    role: "Frontend Developer Intern",
    period: "Aug 2025",
    flair: "Internship",
    tech: ["react", "aws", "figma"],
    bullets: [
      "Built and maintained React.js frontend interfaces for MERN stack web applications with reusable component architecture",
      "Designed interactive UI prototypes in Figma and implemented them as responsive React components",
      "Integrated frontend with AWS-backed APIs (Lambda, API Gateway) for dynamic data fetching and rendering",
      "Implemented AI-powered UI features using ChatGPT and Claude APIs to enhance user interactions and workflows",
    ],
  },
  {
    company: "Neuxa Tastezy Marketplace LLP",
    role: "Web Developer Intern",
    period: "Jul – Oct 2025",
    flair: "Internship",
    tech: ["javascript"],
    bullets: [
      "Built frontend interfaces and integrated them with RESTful APIs for seamless data display and user interactions",
      "Collaborated closely with backend team to define API contracts and ensure smooth frontend-backend integration",
      "Debugged and resolved cross-browser rendering issues and optimized frontend performance across devices",
    ],
  },
  {
    company: "FCI CCM Pvt. Ltd.",
    role: "Associate Software Developer",
    period: "Oct 2022 – Jul 2025",
    flair: "50% efficiency gained",
    bullets: [
      "Designed and built dynamic letter templates and customer-facing document layouts for ICICI Bank using Quadient Inspire Designer",
      "Implemented complex UI logic and conditional rendering for personalized customer statements delivered via email and PDF",
      "Integrated RESTful APIs for real-time data fetching into document templates, boosting system efficiency by 50%",
      "Optimized data-driven PDF generation workflows, achieving 25% faster rendering of customer-facing documents",
      "Resolved critical production UI/rendering bugs in the live environment, ensuring visual consistency",
      "Automated document generation workflows using Groovy scripting, reducing manual effort and improving throughput",
    ],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  period: string;
  description: string;
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "newartx.com",
    subtitle: "React.js → Next.js Migration",
    period: "2025 – Present",
    description:
      "Migrating a production React SPA to Next.js with the App Router — implementing SSR, dynamic routing, and SEO optimization. Responsive layouts with Tailwind CSS, optimized image loading via next/image, and component-level code splitting. Improved Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.",
    tech: ["Next.js", "React", "Tailwind CSS", "SSR"],
    link: "https://newartx.com",
  },
  {
    name: "Wanderlust",
    subtitle: "Full Stack Web Application",
    period: "2025",
    description:
      "Responsive frontend with property listing cards, search filters, and interactive maps. User authentication flows, dynamic form handling, and a review management UI.",
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    link: "https://deltaprojectwiiq.onrender.com/listings",
  },
  {
    name: "Responsive UI Showcase",
    subtitle: "Frontend Projects Collection",
    period: "2024 – 2025",
    description:
      "6+ responsive websites demonstrating advanced CSS techniques — Grid, Flexbox, SCSS mixins, animations, and media queries. Includes a Spotify-inspired music player and a Simon Says memory game, all deployed on Netlify with mobile-first design.",
    tech: ["CSS Grid", "Flexbox", "SCSS", "JavaScript"],
    link: "https://github.com/Akshata-11",
  },
];

export const education = {
  degree: "Bachelor of Engineering — Electronics Engineering",
  school: "Vidyalankar Institute of Technology, Mumbai University",
  cgpa: "7.75",
};

export const certifications: string[] = [
  "Advanced CSS and Sass: Flexbox, Grid, Animations — Udemy",
  "The Complete JavaScript Course 2025: From Zero to Expert — Udemy",
  "Tailwind CSS — Scrimba",
  "Build Responsive Real-World Websites with HTML and CSS — Udemy",
];

export const research = {
  org: "Tata Institute of Fundamental Research (TIFR)",
  role: "Research Intern — Nanofabrication",
  period: "Jul 2018 – Apr 2019",
  bullets: [
    "Optimized Thermal Nanoimprint Lithography (T-NIL) in TIFR's Condensed Matter & Material Science department under Dr. Venu Gopal Achanta",
    "Designed and fabricated a custom T-NIL system — from component sourcing and CAD design to controller integration and final testing",
    "Successfully imprinted nanoscale patterns (1.2 µm pillars, 200 nm depth) verified via AFM and optical microscopy",
    "Conducted an extensive literature survey covering 10+ lithography techniques as part of the B.E. capstone project",
  ],
};

export const sections = [
  { id: "about", label: "About", shortcut: "a" },
  { id: "experience", label: "Experience", shortcut: "e" },
  { id: "skills", label: "Skills", shortcut: "s" },
  { id: "projects", label: "Projects", shortcut: "p" },
  { id: "education", label: "Education", shortcut: "d" },
  { id: "contact", label: "Contact", shortcut: "c" },
];

export type Track = {
  genre: string;
  title: string;
  artist: string;
  art: string;
  color: string;
};

// Placeholder picks — swap in your real favorites whenever you're ready.
export const tracks: Track[] = [
  {
    genre: "Lo-fi",
    title: "Deep Focus — Productive Lo-Fi",
    artist: "FM STAR",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/66/3a/48/663a486e-4446-2816-18bf-ac45140f7543/4550796331667_cover.jpg/600x600bb.jpg",
    color: "#38BDF8",
  },
  {
    genre: "Indie Pop",
    title: "Good Good Feelings (Bedroom Version)",
    artist: "Zayde Wølf",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/aa/e7/e4/aae7e479-8254-bbc3-a451-393d55e0c087/708208409396_cover.jpg/600x600bb.jpg",
    color: "#F472B6",
  },
  {
    genre: "Synthwave",
    title: "Synthwave",
    artist: "Worship",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/d2/30/e3/d230e3b9-e3ad-026a-ee3b-3d83002907ae/artwork.jpg/600x600bb.jpg",
    color: "#A855F7",
  },
  {
    genre: "Bollywood",
    title: "Samjhawan",
    artist: "Arijit Singh & Shreya Ghoshal",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c1/96/02/c196024c-0636-fc8d-ab17-2c99ab105c57/886445984644.jpg/600x600bb.jpg",
    color: "#F59E0B",
  },
  {
    genre: "Acoustic",
    title: "Coffee",
    artist: "beabadoobee",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9a/9e/05/9a9e0570-bee1-20b5-e512-38b5e1168a76/192641174858_Cover.jpg/600x600bb.jpg",
    color: "#84CC16",
  },
  {
    genre: "R&B / Soul",
    title: "Supernova",
    artist: "Snoh Aalegra",
    art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/11/17/75/11177586-6ecd-6183-ef18-11252eb229ca/193436490245_LLAlbumCover.jpg/600x600bb.jpg",
    color: "#EF4444",
  },
];

export type Book = {
  title: string;
  author: string;
  color: string;
  coverId: number;
  summary: string;
};

// Placeholder picks — swap in your real reading list whenever you're ready.
export const books: Book[] = [
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    color: "#2563EB",
    coverId: 7082166,
    summary:
      "A modern introduction to JavaScript and programming fundamentals, covering everything from basic syntax to browser APIs and Node.js, with hands-on projects throughout.",
  },
  {
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    color: "#DB2777",
    coverId: 10527062,
    summary:
      "A practical, example-driven guide to designing better-looking interfaces, with concrete tips on spacing, color, typography, and hierarchy for developers who don't think of themselves as designers.",
  },
  {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    color: "#D97706",
    coverId: 13345348,
    summary:
      "A classic, concise guide to web usability, arguing that good design should require zero thought from users — just common sense applied consistently.",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    color: "#059669",
    coverId: 8065615,
    summary:
      "A foundational text on writing readable, maintainable software, covering naming, functions, and code smells through the lens of craftsmanship.",
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    color: "#7C3AED",
    coverId: 8117575,
    summary:
      "A deep-dive book series into JavaScript's actual mechanics — scope, closures, types, and async — for developers who want to go beyond surface-level syntax.",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Hunt & Thomas",
    color: "#0D9488",
    coverId: 10143650,
    summary:
      "A collection of timeless, practical advice on software craftsmanship, from DRY code to orthogonality, written as a mentor's field guide.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    color: "#B91C1C",
    coverId: 12539702,
    summary:
      "A practical framework for building good habits and breaking bad ones, built around small, consistent changes rather than big overhauls.",
  },
  {
    title: "CSS Secrets",
    author: "Lea Verou",
    color: "#C2410C",
    coverId: 8763750,
    summary:
      "Clever, battle-tested CSS techniques for solving common real-world layout and styling problems with fewer hacks and less markup.",
  },
  {
    title: "Designing Interfaces",
    author: "Jenifer Tidwell",
    color: "#4338CA",
    coverId: 389022,
    summary:
      "A pattern-based reference for UI design, cataloguing reusable solutions to recurring interface problems across web and software design.",
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    color: "#EA580C",
    coverId: 9245523,
    summary:
      "A slim, opinionated tour of the best features buried inside JavaScript's messy design, arguing for a disciplined subset of the language that's genuinely elegant to write.",
  },
];
