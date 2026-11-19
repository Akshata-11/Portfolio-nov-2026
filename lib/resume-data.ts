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
      "Migrating a production React SPA to Next.js with the App Router — SSR, dynamic routing, and SEO, plus optimized image loading and component-level code splitting.",
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
  coverId?: number;
  coverUrl?: string;
  summary: string;
};

export function bookCoverUrl(book: Book) {
  return book.coverUrl ?? `https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`;
}

export const books: Book[] = [
  {
    title: "Animal Farm",
    author: "George Orwell",
    color: "#166534",
    coverId: 15275294,
    summary:
      "A satirical fable about farm animals who overthrow their human owner, only to watch the revolution curdle into a new tyranny — a sharp allegory for how power corrupts even the best intentions.",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    color: "#7F1D1D",
    coverId: 14935910,
    summary:
      "A destitute former student commits a murder he's convinced is morally justified, then spends the rest of the novel unraveling under the psychological weight of guilt and self-justification.",
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    color: "#111827",
    coverId: 8305903,
    summary:
      "A brutally honest memoir on turning extreme hardship into extreme discipline, built around Goggins' own transformation and his philosophy of pushing far past where the mind wants to quit.",
  },
  {
    title: "Normal People",
    author: "Sally Rooney",
    color: "#475569",
    coverId: 8794265,
    summary:
      "A quiet, intense portrait of two teenagers in Ireland whose on-and-off relationship follows them from secondary school into university, tracing how class and insecurity shape intimacy.",
  },
  {
    title: "The God of Small Things",
    author: "Arundhati Roy",
    color: "#B45309",
    coverId: 10513792,
    summary:
      "A lyrical, nonlinear story of fraternal twins in Kerala, whose childhood is shattered by a single forbidden love affair and the rigid social rules it breaks.",
  },
  {
    title: "White Nights",
    author: "Fyodor Dostoevsky",
    color: "#1E3A8A",
    coverId: 14598226,
    summary:
      "A lonely dreamer meets a young woman over four nights in St. Petersburg and falls for her completely, in a short, aching story about love, loneliness, and fleeting connection.",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    color: "#0F766E",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg",
    summary:
      "The original, enduring guide to getting along with people — genuine interest, listening, and tact over manipulation — still widely read as a foundational book on communication.",
  },
  {
    title: "One Day",
    author: "David Nicholls",
    color: "#9D174D",
    coverId: 8580421,
    summary:
      "Checks in on two friends every year on the same date for two decades, charting how their lives drift apart and circle back in a story about timing, regret, and love that takes too long.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    color: "#CA8A04",
    coverId: 7414780,
    summary:
      "An Andalusian shepherd travels to Egypt chasing a recurring dream of treasure, and learns along the way that the real reward was listening to his own convictions the whole time.",
  },
];
