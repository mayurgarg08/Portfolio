import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Sun,
  Moon,
  FileDown,
  Award,
  BadgeCheck,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Send,
} from "lucide-react";
import photo from "./assets/mayur.jpeg";
import cortexai from "./assets/cortexai_img.png";
import hirehut from "./assets/hirehut_img.png";
import vidchat from "./assets/vidchat_img.png";
import vidtube from "./assets/vidtube_img.png";
import aabhaar from "./assets/aabhaar_img.png";
import foodzone from "./assets/foodzone_img.png";
import netflix from "./assets/netflix_img.png";

/* ------------------------------------------------------------------ */
/*  Portrait photo (embedded so this file works standalone)           */
/* ------------------------------------------------------------------ */
const PHOTO_SRC = photo;
const RESUME_URL =
  "https://drive.google.com/file/d/1IWYWeCoAjeH42O_GOhGWbdR5hfJskSIi/view?usp=sharing";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */
const PROFILE = {
  name: "Mayur Garg",
  email: "mayurgarg2005@gmail.com",
  phone: "+91 9520677028",
  location: "Ghaziabad, Uttar Pradesh, India",
  linkedin: "https://www.linkedin.com/in/mayur-garg-428a291b4/",
  github: "https://github.com/mayurgarg08",
  leetcode: "https://leetcode.com/u/mayur_garg05/",
};

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education & Certs" },
  { id: "contact", label: "Contact" },
];

const MARQUEE_ITEMS = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "LangGraph",
  "LangChain",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "Socket.IO",
  "Redux Toolkit",
  "Qdrant",
];

const EXPERIENCE = {
  role: "MERN Stack Intern",
  company: "ConsultIT Technologies Pvt. Ltd.",
  location: "Greater Noida, India",
  period: "June 2026 — August 2026",
  live: "https://dms-homepage.vercel.app/",
  summary:
    "Owned an entire product surface — from first component to the admin tools that keep it running.",
  points: [
    "Independently developed the complete NGO section of the DMS Aarohi Musical Society Website, delivering six full initiative pages with a modern, reusable UI built in React.js and Tailwind CSS.",
    "Built backend functionalities and integrated database operations end-to-end, enabling dynamic content management across all NGO pages.",
    "Developed a dedicated admin panel allowing non-technical staff to independently update and manage website content, resulting in a complete, user-friendly NGO portal.",
  ],
  stack: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Admin tooling"],
};

const SKILL_GROUPS = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "C", "Java", "Python", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Socket.IO",
      "State Management",
      "Component-Based Architecture",
    ],
  },
  {
    label: "Backend & Database",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "MongoDB",
      "API Integration",
    ],
  },
  {
    label: "Tools, Cloud & DevOps",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "AWS (ECR, ECS, EC2)",
      "CI/CD Pipelines",
      "Firebase",
      "Netlify",
      "Qdrant",
      "Redis",
      "Render",
      "Vercel",
      "Postman",
    ],
  },
];

const PROJECTS = [
  {
    name: "CortexAI",
    blurb:
      "Built CortexAI, a microservices-based multi-agent AI platform with Node.js/Express, Docker, and AWS ECR/ECS. Designed a LangGraph routing system to dispatch requests across 8 specialized agents, integrating Gemini, Groq, and OpenRouter via LangChain. Developed a Qdrant-powered RAG pipeline for document Q&A with AWS S3 file storage and automated PDF/PPT generation.",
    image: cortexai,
    github: "https://github.com/mayurgarg08/Cortex_AI",
    live: "https://mayur-cortexai.online",
    tech: ["LangGraph", "Node.js", "AWS", "Docker"],
  },
  {
    name: "HireHut",
    blurb:
      "Built HireHut, a full-stack MERN career platform combining a resume builder, job/internship tracker, courses, competitions, and professional networking. Developed a dynamic resume builder with live editing, PDF export, and automated profile completeness scoring. Implemented real-time messaging with Socket.IO, secure JWT + Google OAuth authentication, and a notifications system.",
    image: hirehut,
    github: "https://github.com/mayurgarg08/HireHut",
    live: "https://mayur-hirehut.netlify.app/",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
  },
  {
    name: "VidChat",
    blurb:
      "Built VidChat, a full-stack MERN language-learning platform enabling real-time text chat and video calls using GetStream.io Chat and Video SDKs. Structured separate React.js and Node.js/Express/MongoDB applications connected through secure RESTful APIs. Implemented JWT-based authentication and protected routes for secure user sessions and profile management.",
    image: vidchat,
    github: "https://github.com/mayurgarg08/VideoChat-frontend",
    githubSecondary: "https://github.com/mayurgarg08/VideoChat-backend",
    live: "https://mayurvideochat.netlify.app/",
    tech: ["React", "Express", "MongoDB", "GetStream"],
  },
  {
    name: "VidTube",
    blurb:
      "Built a YouTube-inspired video streaming platform using React.js and YouTube Data API for dynamic content discovery. Implemented voice search with Web Speech API, video playback, related/trending videos, and search history using React Hooks. Designed a responsive UI with custom CSS and conditional rendering for seamless user experience.",
    image: vidtube,
    github: "https://github.com/mayurgarg08/VidTube",
    live: "https://myvidtube-live.netlify.app/",
    tech: ["React", "Firebase", "TMDb"],
  },
  {
    name: "AABHAAR Jharkhand",
    blurb:
      "Contributed as a Frontend Developer in Smart India Hackathon (SIH) 2025, building a multilingual tourism platform for Jharkhand using React.js and Tailwind CSS. Integrated AI-powered itinerary planning and chatbot assistance for personalized recommendations and real-time query resolution. ",
    badge: "SIH 2025",
    image: aabhaar,
    github: "https://github.com/mayurgarg08/Aabhaar-Jharkhand",
    live: "https://aabhaar-c3xq.vercel.app/",
    tech: ["React", "AI", "AR/VR"],
  },
  {
    name: "FoodZone",
    blurb:
      "Developed a responsive food ordering web application using React.js and Tailwind CSS with a clean, intuitive UI. Implemented search and category-based filtering for seamless food discovery, along with a dynamic shopping cart supporting quantity management, real-time pricing, and checkout updates. ",
    image: foodzone,
    github: "https://github.com/mayurgarg08/FoodZone",
    live: "https://capable-crumble-173070.netlify.app/",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    name: "Netflix Clone",
    blurb:
      "Developed a Netflix-inspired streaming platform using React.js, Firebase Authentication, and TMDb API for dynamic movie and TV show discovery. Implemented secure user authentication, category-wise content browsing, dynamic search, and YouTube trailer playback. ",
    image: netflix,
    github: "https://github.com/mayurgarg08/Netflix",
    live: "https://mgott.netlify.app/login",
    tech: ["React", "Firebase", "TMDb"],
  },
];

const EDUCATION = [
  {
    period: "2023 — 2027",
    title: "B.Tech, Computer Science",
    place: "Ajay Kumar Garg Engineering College, Ghaziabad",
    detail: "CGPA: 8.67 / 10",
  },
  {
    period: "2023",
    title: "Senior Secondary (XII), CBSE",
    place: "Dev Memorial Public School, Hapur",
    detail: "Percentage: 80.83%",
  },
  {
    period: "2021",
    title: "Secondary (X), CBSE",
    place: "Jaypee Vidya Mandir, Bulandshahar",
    detail: "Percentage: 93.33%",
  },
];

const CERTIFICATIONS = [
  {
    title: "Certified Frontend Developer",
    detail: "HTML, CSS, JS, Bootstrap, Tailwind CSS, React.js",
    org: "Udemy",
    link: "https://example.com/certificate/frontend-developer",
  },
  {
    title: "Certified React.js Developer",
    detail: "React & Redux",
    org: "KnowledgeGate.AI",
    link: "https://example.com/certificate/react-developer",
  },
  {
    title: "Certified MERN Developer",
    detail: "Advanced MERN Stack (React, Node, Express, MongoDB)",
    org: "Infosys SpringBoard",
    link: "https://example.com/certificate/mern-developer",
  },
  {
    title: "500+ Problems Solved",
    detail: "Strong problem-solving skills in Data Structures and Algorithms",
    org: "LeetCode",
    link: PROFILE.leetcode,
  },
];

const STATS = [
  { target: 7, suffix: "", label: "Full-stack products shipped" },
  { target: 8, suffix: "", label: "AI agents routed in CortexAI" },
  { target: 500, suffix: "+", label: "DSA problems on LeetCode" },
  { target: 8.67, suffix: "", label: "CGPA in B.Tech CSE", decimal: true },
];

/* ------------------------------------------------------------------ */
/*  Hooks                                                               */
/* ------------------------------------------------------------------ */
function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("mg-portfolio-theme");
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
      }
    } catch (e) {
      /* no-op */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("mg-portfolio-theme", theme);
    } catch (e) {
      /* no-op */
    }
  }, [theme]);

  return [theme, setTheme];
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

function CountUp({ target, suffix = "", decimal = false, duration = 2600 }) {
  const [ref, visible] = useReveal();
  const [val, setVal] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!visible) return;
    let raf;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setVal(eased * target);
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setVal(target);
        setDone(true);
      }
    };
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [visible]);

  return (
    <span ref={ref} className={done ? "count-pop" : ""}>
      {decimal ? val.toFixed(2) : Math.floor(val)}
      {suffix}
    </span>
  );
}

/* Tilt-on-hover wrapper for project cards */
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -6;
    const ry = (px - 0.5) * 6;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-card group ${className}`}
    >
      <div className="tilt-glow" />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */
function Eyebrow({ children }) {
  return (
    <div className="mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.14em] text-[var(--accent)] mb-3">
      <span className="w-4 h-px bg-[var(--accent)]" />
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, blurb }) {
  return (
    <Reveal className="max-w-2xl mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-[var(--text)] leading-tight">
        {title}
      </h2>
      {blurb && (
        <p className="mt-4 text-[15.5px] text-[var(--muted)] max-w-xl">
          {blurb}
        </p>
      )}
    </Reveal>
  );
}

function Tag({ children }) {
  return (
    <span className="tag-pill text-[12.5px] px-3 py-1.5 rounded-lg bg-[var(--surface-hi)] border border-[var(--line-solid)] text-[var(--text)]">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function Portfolio() {
  const [theme, setTheme] = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const heroRef = useRef(null);
  const carouselTrackRef = useRef(null);
  const carouselCardRefs = useRef([]);
  const [activeProject, setActiveProject] = useState(0);
  const [academicView, setAcademicView] = useState("education");

  useEffect(() => {
    const track = carouselTrackRef.current;
    if (!track) return;
    const onTrackScroll = () => {
      const trackRect = track.getBoundingClientRect();
      let closest = 0;
      let min = Infinity;
      carouselCardRefs.current.forEach((el, i) => {
        if (!el) return;
        const dist = Math.abs(el.getBoundingClientRect().left - trackRect.left);
        if (dist < min) {
          min = dist;
          closest = i;
        }
      });
      setActiveProject(closest);
    };
    track.addEventListener("scroll", onTrackScroll, { passive: true });
    return () => track.removeEventListener("scroll", onTrackScroll);
  }, []);

  const scrollToProject = (i) => {
    const el = carouselCardRefs.current[i];
    const track = carouselTrackRef.current;
    if (!el || !track) return;
    const delta =
      el.getBoundingClientRect().left - track.getBoundingClientRect().left;
    track.scrollTo({ left: track.scrollLeft + delta, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const scrollHeight =
        (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleHeroMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div data-theme={theme} className="portfolio-root font-body">
      <GlobalStyles />

      {/* scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[var(--primary)] via-[var(--primary-2)] to-[var(--accent)] transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="bg-grid" />

      {/* ---------------- nav ---------------- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3.5 bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--line-solid)]"
            : "py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between gap-6">
          <button
            className="font-display flex items-center gap-2.5 font-bold text-[17px] tracking-tight text-[var(--text)] whitespace-nowrap shrink-0"
            onClick={() => scrollTo("top")}
          >
            <span className="w-8 h-8 rounded-[10px] flex items-center justify-center text-[13px] font-bold text-white bg-gradient-to-br from-[var(--primary)] to-[var(--accent)]">
              MG
            </span>
            Mayur Garg
          </button>

          <div className="hidden lg:flex items-center gap-6 xl:gap-7 shrink-0">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="nav-link text-[13.5px] font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 mr-1">
              {[
                { icon: FaGithub, href: PROFILE.github, label: "GitHub" },
                { icon: FaLinkedin, href: PROFILE.linkedin, label: "LinkedIn" },
                { icon: SiLeetcode, href: PROFILE.leetcode, label: "LeetCode" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-hi)] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle color theme"
              className="theme-toggle w-9 h-9 rounded-full border border-[var(--line-solid)] flex items-center justify-center text-[var(--text)] hover:border-[var(--primary)] transition-colors"
            >
              <Sun size={16} className="theme-icon-sun" />
              <Moon size={16} className="theme-icon-moon" />
            </button>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-full border border-[var(--line-solid)] text-[var(--text)] hover:border-[var(--primary)] hover:bg-[var(--primary-soft)] transition-colors whitespace-nowrap shrink-0"
            >
              <FileDown size={14} /> Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:inline-flex items-center text-[13px] font-semibold px-[1.125rem] py-2 rounded-full text-white btn-gradient whitespace-nowrap shrink-0"
            >
              Contact
            </button>
            <button
              className="lg:hidden text-[var(--text)]"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[55] bg-[var(--bg)]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 animate-[fadeIn_.25s_ease]">
          <button
            className="absolute top-6 right-6 text-[var(--text)]"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="font-display text-2xl font-semibold text-[var(--text)]"
            >
              {l.label}
            </button>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold px-6 py-3 rounded-full border border-[var(--line-solid)] text-[var(--text)]"
          >
            <FileDown size={16} /> Resume
          </a>
          <div className="flex items-center gap-4 mt-2">
            {[
              { icon: FaGithub, href: PROFILE.github, label: "GitHub" },
              { icon: FaLinkedin, href: PROFILE.linkedin, label: "LinkedIn" },
              { icon: SiLeetcode, href: PROFILE.leetcode, label: "LeetCode" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-[var(--line-solid)] flex items-center justify-center text-[var(--text)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- hero ---------------- */}
      <header
        id="top"
        ref={heroRef}
        onMouseMove={handleHeroMove}
        className="relative z-10 min-h-screen flex items-center pt-32 pb-16 overflow-hidden hero-spotlight"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center w-full [&>*]:min-w-0">
          <div>
            <Reveal>
              <div className="mono inline-flex items-center gap-2 text-[12.5px] px-3.5 py-2 rounded-full border border-[var(--line-solid)] bg-[var(--surface)] text-[var(--accent)] mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] pulse-dot" />
                Open to full-stack &amp; SDE roles
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-[clamp(38px,6vw,64px)] font-bold leading-[1.06] text-[var(--text)]">
                Hi, I&apos;m Mayur —<br />I build{" "}
                <span className="grad-text">full-stack products</span>
                <br />
                with AI at the core.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-[17px] md:text-[19px] text-[var(--muted)] max-w-xl leading-relaxed">
                <b className="text-[var(--text)] font-semibold">
                  Full-stack developer
                </b>{" "}
                and B.Tech CSE student who ships MERN applications end to end —
                from multi-agent AI platforms and real-time chat systems to the
                databases and AWS infra underneath them.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-wrap gap-3.5 mt-9">
                <button
                  onClick={() => scrollTo("projects")}
                  className="btn-gradient inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14.5px] font-semibold text-white"
                >
                  Explore my work <ArrowUpRight size={16} />
                </button>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14.5px] font-semibold text-[var(--text)] border border-[var(--line-solid)]"
                >
                  <FileDown size={16} /> View Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex gap-3.5 mt-11">
                {[
                  { icon: FaGithub, href: PROFILE.github, label: "GitHub" },
                  {
                    icon: FaLinkedin,
                    href: PROFILE.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: `mailto:${PROFILE.email}`,
                    label: "Email",
                  },
                  {
                    icon: SiLeetcode,
                    href: PROFILE.leetcode,
                    label: "LeetCode",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="social-btn w-10 h-10 rounded-xl border border-[var(--line-solid)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--primary)] hover:bg-[var(--primary-soft)] transition-all hover:-translate-y-0.5"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="order-first lg:order-last">
            <div className="portrait-stage">
              <div className="portrait-ring" />
              <div className="portrait-ring reverse" />
              <div className="portrait-glow" />
              <div className="portrait-photo-wrap">
                <img
                  src={PHOTO_SRC}
                  alt="Mayur Garg"
                  className="portrait-photo"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ---------------- marquee ---------------- */}
      <div className="relative z-10 border-y border-[var(--line-solid)] bg-[var(--surface)]/60 py-5 overflow-hidden marquee-wrap">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="mono flex items-center gap-3 text-[14px] text-[var(--muted)] px-6 shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ---------------- about ---------------- */}
      <section id="about" className="relative z-10 py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionHeading
            eyebrow="About"
            title="A developer who likes owning the whole stack"
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
            <Reveal className="text-[16px] text-[var(--muted)] leading-relaxed space-y-5">
              <p>
                I&apos;m a{" "}
                <b className="text-[var(--text)] font-semibold">
                  Computer Science undergrad
                </b>{" "}
                at Ajay Kumar Garg Engineering College, building
                production-grade MERN applications with a growing focus on{" "}
                <b className="text-[var(--text)] font-semibold">
                  AI-integrated systems
                </b>
                . My work spans full-stack projects — from a microservices-based
                multi-agent AI platform deployed on AWS, to a career platform
                with real-time messaging, and a video calling and chat
                application built with MERN and GetStream.
              </p>
              <p>
                During my{" "}
                <b className="text-[var(--text)] font-semibold">
                  MERN Stack Internship at ConsultIT Technologies
                </b>
                , I contributed to the DMS Aarohi Musical Society website. I
                enjoy turning ideas into{" "}
                <b className="text-[var(--text)] font-semibold">
                  deployed, real-world products
                </b>{" "}
                and am currently looking for full-stack or SDE roles.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="stat-card rounded-2xl p-6 border border-[var(--line-solid)] bg-[var(--surface)]"
                  >
                    <div className="font-display text-[30px] font-bold text-[var(--text)]">
                      <CountUp
                        target={s.target}
                        suffix={s.suffix}
                        decimal={s.decimal}
                      />
                    </div>
                    <div className="text-[12.5px] text-[var(--muted)] mt-1.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 py-28 section-alt">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked"
            blurb="One internship, a full product surface owned end to end — here's what that looked like."
          />
          <Reveal>
            <div className="exp-card rounded-3xl border border-[var(--line-solid)] bg-[var(--surface)] relative overflow-hidden grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0">
              <div className="exp-rail hidden md:flex flex-col items-center justify-start pt-10 px-8">
                <div className="exp-dot" />
                <div className="exp-rail-line" />
              </div>

              <div className="p-8 md:p-10 md:pl-0">
                <div className="flex justify-between items-start gap-5 flex-wrap mb-2">
                  <div>
                    <div className="font-display text-[22px] font-bold text-[var(--text)]">
                      {EXPERIENCE.role}
                    </div>
                    <div className="text-[var(--primary)] font-semibold text-[14.5px] mt-1">
                      {EXPERIENCE.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mono text-[12.5px] text-[var(--accent)]">
                      {EXPERIENCE.period}
                    </div>
                    <div className="text-[12.5px] text-[var(--muted)] mt-1 flex items-center gap-1.5 justify-end">
                      <MapPin size={12} /> {EXPERIENCE.location}
                    </div>
                  </div>
                </div>

                <p className="text-[14.5px] text-[var(--accent)] font-medium mb-6">
                  {EXPERIENCE.summary}
                </p>

                <ul className="space-y-3.5 mb-7">
                  {EXPERIENCE.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[15px] text-[var(--muted)]"
                    >
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-2">
                    {EXPERIENCE.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[12px] font-medium px-3 py-1.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <a
                    href={EXPERIENCE.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 self-start sm:self-auto shrink-0 text-[13.5px] font-semibold px-4 py-2.5 rounded-lg border border-[var(--line-solid)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    <ExternalLink size={14} /> Explore DMS Aarohi NGO — Live
                    Site
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- skills ---------------- */}
      <section id="skills" className="relative z-10 py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionHeading eyebrow="Skills" title="Tools I reach for" />
          <div className="flex flex-col gap-11">
            {SKILL_GROUPS.map((g, i) => (
              <Reveal key={g.label} delay={i * 80}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="mono text-[13px] font-semibold text-[var(--primary)] shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-6 h-px bg-[var(--line-solid)] shrink-0" />
                  <h3 className="font-display text-[19px] font-bold text-[var(--text)] whitespace-nowrap">
                    {g.label}
                  </h3>
                  <span className="flex-1 h-px bg-[var(--line-solid)]" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="tag-pill text-[13.5px] px-4 py-2.5 rounded-lg border border-[var(--line-solid)] bg-[var(--surface)] text-[var(--text)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- projects ---------------- */}
      <section id="projects" className="relative z-10 py-28 section-alt">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Some of my recent work"
            blurb="Seven full-stack builds — from an AI agent platform to a hackathon tourism app."
          />

          <Reveal className="relative">
            <div
              ref={carouselTrackRef}
              className="carousel-track flex gap-6 overflow-x-auto pb-3 -mx-1 px-1"
            >
              {PROJECTS.map((proj, i) => (
                <div
                  key={proj.name}
                  ref={(el) => (carouselCardRefs.current[i] = el)}
                  className="carousel-card shrink-0 w-[85%] sm:w-[420px]"
                >
                  <TiltCard className="project-card rounded-2xl overflow-hidden border border-[var(--line-solid)] bg-[var(--surface)] h-full flex flex-col">
                    <div className="project-visual relative aspect-[16/10] overflow-hidden bg-[var(--surface-hi)]">
                      <img
                        src={proj.image}
                        alt={proj.name}
                        className="project-image w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="project-image-overlay" />
                      {proj.badge && (
                        <span className="project-badge mono absolute bottom-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full text-white">
                          {proj.badge}
                        </span>
                      )}
                    </div>
                    <div className="project-content p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--accent)] mb-1">
                            Featured build
                          </div>
                          <div className="project-title">
                            <span className="project-title-number">
                              {String(i + 1).padStart(2, "0")}.
                            </span>
                            {proj.name}
                          </div>
                        </div>
                        <span
                          className="project-status"
                          aria-label="Live project"
                        >
                          Live
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="project-blurb text-[13.5px] text-[var(--muted)] leading-relaxed mb-4">
                          {proj.blurb}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {proj.tech.map((tech) => (
                            <span key={tech} className="project-tech">
                              {tech}
                            </span>
                          ))}
                        </div>
                        {proj.points && (
                          <ul className="project-points space-y-2 mb-2">
                            {proj.points.map((pt, idx) => (
                              <li
                                key={idx}
                                className="flex gap-2 text-[12px] text-[var(--muted)] leading-snug"
                              >
                                <span className="project-point-marker shrink-0 mt-[5px]" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="project-actions mt-5 pt-4">
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-live-link inline-flex items-center justify-center gap-1.5 text-[13px] font-semibold"
                        >
                          Explore project <ArrowUpRight size={14} />
                        </a>
                        {proj.github && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-github-link"
                          >
                            <FaGithub size={20} /> GitHub
                          </a>
                        )}
                        {proj.githubSecondary && (
                          <a
                            href={proj.githubSecondary}
                            target="_blank"
                            rel="noreferrer"
                            className="project-github-link"
                          >
                            <FaGithub size={20} /> Backend
                          </a>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToProject(Math.max(0, activeProject - 1))}
              aria-label="Previous project"
              className="carousel-arrow left-3 md:-left-5"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() =>
                scrollToProject(
                  Math.min(PROJECTS.length - 1, activeProject + 1),
                )
              }
              aria-label="Next project"
              className="carousel-arrow right-3 md:-right-5"
            >
              <ChevronRight size={18} />
            </button>
          </Reveal>

          <div className="flex items-center justify-center gap-2 mt-8">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToProject(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`carousel-dot ${activeProject === i ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- education & certifications ---------------- */}
      <section id="education" className="relative z-10 py-28 section-alt">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={
                academicView === "education" ? "Education" : "Certifications"
              }
              title={
                academicView === "education"
                  ? "Academic background"
                  : "Certifications & achievements"
              }
            />
            <div
              className="academic-toggle md:-translate-y-14"
              role="tablist"
              aria-label="Education and certifications"
            >
              <span
                className={`academic-toggle-indicator ${academicView === "certifications" ? "is-certifications" : ""}`}
                aria-hidden="true"
              />
              <button
                type="button"
                role="tab"
                aria-selected={academicView === "education"}
                onClick={() => setAcademicView("education")}
                className="academic-toggle-option"
              >
                Education
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={academicView === "certifications"}
                onClick={() => setAcademicView("certifications")}
                className="academic-toggle-option"
              >
                Certifications
              </button>
            </div>
          </div>

          <div className="academic-panel" role="tabpanel">
            {academicView === "education" ? (
              <Reveal>
                <div className="relative pl-7 max-w-2xl">
                  <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-[var(--line-solid)]" />
                  {EDUCATION.map((ed) => (
                    <div className="relative pb-8 last:pb-0" key={ed.title}>
                      <span className="absolute -left-7 top-1 w-2.5 h-2.5 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)]" />
                      <div className="mono text-[12px] text-[var(--accent)] mb-1.5">
                        {ed.period}
                      </div>
                      <div className="font-display text-[17px] font-bold text-[var(--text)]">
                        {ed.title}
                      </div>
                      <div className="text-[14px] text-[var(--muted)] mt-0.5">
                        {ed.place}
                      </div>
                      <div className="text-[13.5px] text-[var(--muted-2)] mt-1">
                        {ed.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((c, i) => (
                  <Reveal delay={i * 70} key={c.title}>
                    <a
                      className="cert-card flex items-center gap-4 p-[1.125rem] rounded-xl border border-[var(--line-solid)] bg-[var(--surface)] h-full"
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center shrink-0">
                        <Award size={17} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[14px] font-semibold text-[var(--text)] flex items-center gap-1.5">
                          {c.title}
                          <BadgeCheck
                            size={13}
                            className="text-[var(--accent)] shrink-0"
                          />
                        </div>
                        <div className="text-[12.5px] text-[var(--muted)] mt-0.5">
                          {c.detail}
                        </div>
                      </div>
                      <div className="mono text-[11.5px] text-[var(--muted-2)] shrink-0">
                        {c.org}
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- contact ---------------- */}
      <section id="contact" className="relative z-10 py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <Reveal>
            <div className="contact-card rounded-[28px] p-10 md:p-16 border border-[var(--line-solid)] text-center relative overflow-hidden">
              <div className="relative">
                <div className="flex justify-center">
                  <Eyebrow>Contact</Eyebrow>
                </div>
                <h2 className="font-display text-[clamp(26px,4vw,40px)] font-bold text-[var(--text)]">
                  Let's build something worth shipping
                </h2>
                <p className="mt-4 text-[15.5px] md:text-[16px] text-[var(--muted)] max-w-lg mx-auto">
                  I'm actively looking for full-stack developer and SDE roles.
                  If my background looks like a fit for your team, I'd love to
                  hear from you.
                </p>
                <div className="flex flex-wrap gap-3.5 justify-center mt-9">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="btn-gradient inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14.5px] font-semibold text-white"
                  >
                    <Send size={16} /> Email me
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14.5px] font-semibold text-[var(--text)] border border-[var(--line-solid)]"
                  >
                    <FaLinkedin size={16} /> Connect on LinkedIn
                  </a>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14.5px] font-semibold text-[var(--text)] border border-[var(--line-solid)]"
                  >
                    <FileDown size={16} /> Resume
                  </a>
                </div>
                <div className="flex flex-wrap gap-7 justify-center mt-11">
                  <div className="flex items-center gap-2 text-[13.5px] text-[var(--muted)]">
                    <Mail size={14} /> {PROFILE.email}
                  </div>
                  <div className="flex items-center gap-2 text-[13.5px] text-[var(--muted)]">
                    <Phone size={14} /> {PROFILE.phone}
                  </div>
                  <div className="flex items-center gap-2 text-[13.5px] text-[var(--muted)]">
                    <MapPin size={14} /> {PROFILE.location}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="relative z-10 py-9 border-t border-[var(--line-solid)]">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex justify-between items-center flex-wrap gap-4">
          <div className="mono text-[13px] text-[var(--muted-2)]">
            © {new Date().getFullYear()} Mayur Garg. All rights reserved.
          </div>
          <div className="flex gap-5">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              LeetCode
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Global styles: fonts, theme variables, keyframes, effects          */
/*  (kept minimal — everything else is Tailwind utility classes)       */
/* ------------------------------------------------------------------ */
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

      .portfolio-root {
        --bg: #07080d;
        --bg-soft: #0b0d15;
        --surface: #12141e;
        --surface-hi: #181c28;
        --line: rgba(255,255,255,0.08);
        --line-solid: #232838;
        --text: #f5f6fb;
        --muted: #9599b0;
        --muted-2: #5f6377;
        --primary: #7c6cff;
        --primary-2: #b8a9ff;
        --accent: #2dd9c8;
        --primary-soft: rgba(124,108,255,0.16);
        --accent-soft: rgba(45,217,200,0.16);
        background: var(--bg);
        color: var(--text);
        transition: background .4s ease, color .4s ease;
      }
      .portfolio-root[data-theme="light"] {
        --bg: #fafaff;
        --bg-soft: #f2f2fa;
        --surface: #ffffff;
        --surface-hi: #f5f5fb;
        --line: rgba(20,20,40,0.08);
        --line-solid: #e7e7f3;
        --text: #14141f;
        --muted: #5b5d70;
        --muted-2: #8b8da0;
        --primary: #6350f2;
        --primary-2: #7c6cff;
        --accent: #0ea99b;
        --primary-soft: rgba(99,80,242,0.09);
        --accent-soft: rgba(14,169,155,0.09);
      }

      .font-display { font-family: 'Sora', 'Plus Jakarta Sans', sans-serif; letter-spacing: -0.02em; }
      .font-body { font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; }
      .mono { font-family: 'IBM Plex Mono', monospace; }

      /* ---------------- background atmosphere ---------------- */
      .bg-grid {
        position: fixed; inset: 0; z-index: 0; pointer-events: none;
        background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 64px 64px;
        -webkit-mask-image: radial-gradient(ellipse 70% 55% at 50% 0%, #000 30%, transparent 75%);
        mask-image: radial-gradient(ellipse 70% 55% at 50% 0%, #000 30%, transparent 75%);
        opacity: 0.6;
      }
      .blob {
        position: fixed; z-index: 0; pointer-events: none; border-radius: 9999px;
        filter: blur(70px); opacity: 0.35;
      }
      .portfolio-root[data-theme="light"] .blob { opacity: 0.22; }
      .blob-1 { width: 520px; height: 520px; top: -160px; left: -120px; background: var(--primary); animation: blobDrift1 22s ease-in-out infinite; }
      .blob-2 { width: 480px; height: 480px; top: 20%; right: -180px; background: var(--accent); animation: blobDrift2 26s ease-in-out infinite; }
      .blob-3 { width: 420px; height: 420px; bottom: -140px; left: 30%; background: var(--primary-2); animation: blobDrift3 30s ease-in-out infinite; }

      /* ---------------- hero spotlight ---------------- */
      .hero-spotlight::before {
        content: ""; position: absolute; inset: 0; pointer-events: none; z-index: 0;
        background: radial-gradient(560px circle at var(--mx, 50%) var(--my, 30%), var(--primary-soft), transparent 55%);
      }
      .hero-spotlight > * { position: relative; z-index: 1; }

      .pulse-dot { animation: pulseDot 2.2s ease-in-out infinite; }

      /* ---------------- gradient text & buttons ---------------- */
      .grad-text {
        background: linear-gradient(90deg, var(--primary), var(--accent), var(--primary-2), var(--primary));
        background-size: 250% auto;
        -webkit-background-clip: text; background-clip: text; color: transparent;
        animation: gradientShift 7s ease infinite;
      }
      .btn-gradient {
        background: linear-gradient(135deg, var(--primary), var(--accent));
        background-size: 160% 160%;
        transition: transform .25s ease, box-shadow .25s ease, background-position .5s ease;
        box-shadow: 0 10px 30px -8px var(--primary-soft);
      }
      .btn-gradient:hover { transform: translateY(-2px); background-position: 100% 50%; box-shadow: 0 16px 36px -6px var(--primary-soft); }
      .btn-ghost { transition: all .25s ease; }
      .btn-ghost:hover { border-color: var(--primary); background: var(--primary-soft); transform: translateY(-2px); }

      /* ---------------- nav link underline ---------------- */
      .nav-link { position: relative; padding-bottom: 3px; }
      .nav-link::after {
        content: ""; position: absolute; left: 0; right: 100%; bottom: -2px; height: 1px;
        background: var(--accent); transition: right .25s ease;
      }
      .nav-link:hover::after { right: 0; }

      /* ---------------- theme toggle ---------------- */
      .theme-toggle { position: relative; overflow: hidden; }
      .theme-icon-sun, .theme-icon-moon {
        position: absolute; top: 50%; left: 50%; transition: transform .4s cubic-bezier(.34,1.56,.64,1), opacity .3s ease;
      }
      .theme-icon-sun { transform: translate(-50%,-50%) rotate(0deg) scale(1); opacity: 1; }
      .theme-icon-moon { transform: translate(-50%,-50%) rotate(-90deg) scale(0); opacity: 0; }
      .portfolio-root[data-theme="light"] .theme-icon-sun { transform: translate(-50%,-50%) rotate(90deg) scale(0); opacity: 0; }
      .portfolio-root[data-theme="light"] .theme-icon-moon { transform: translate(-50%,-50%) rotate(0deg) scale(1); opacity: 1; }

      /* ---------------- portrait (circular frame, no orbit nodes) ---------------- */
      .portrait-stage { position: relative; width: 460px; max-width: 100%; height: 460px; margin: 0 auto; transform: translate(70px, -75px); isolation: isolate; }

      /* ambient background glow — uses the same theme tokens as the rest of the page (blobs, buttons, gradient text) so it reads as one coherent palette instead of a mismatched teal/blue overlay */
      .portrait-stage::before {
        content: "";
        position: absolute; z-index: -1; inset: -80px;
        border-radius: 50%;
        background:
          radial-gradient(circle at 30% 28%, var(--primary-soft), transparent 55%),
          radial-gradient(circle at 72% 70%, var(--accent-soft), transparent 58%);
        filter: blur(34px);
        animation: auraDrift 7s ease-in-out infinite alternate;
      }

      /* rotating gradient-border rings, built from the site's own primary/accent tokens */
      .portrait-ring {
        position: absolute; z-index: 1; inset: -20px; border-radius: 50%;
        background: conic-gradient(from 0deg, var(--primary), var(--primary-2), var(--accent), var(--primary));
        -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 1.6px), #000 calc(100% - 1.6px));
        mask: radial-gradient(farthest-side, transparent calc(100% - 1.6px), #000 calc(100% - 1.6px));
        opacity: 0.85;
        animation: spin 16s linear infinite;
      }
      .portrait-ring.reverse {
        inset: -42px;
        background: conic-gradient(from 180deg, var(--accent), var(--primary-2), var(--primary), var(--accent));
        -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px));
        mask: radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px));
        opacity: 0.4;
        animation: spin 24s linear infinite reverse;
      }
      .portrait-glow {
        position: absolute; z-index: 2; inset: 6%; border-radius: 50%;
        background:
          radial-gradient(circle at 32% 28%, var(--primary-soft), transparent 50%),
          radial-gradient(circle at 68% 72%, var(--accent-soft), transparent 55%);
        filter: blur(16px);
        animation: glowPulse 3.6s ease-in-out infinite;
      }
      .portrait-photo-wrap {
        position: absolute; z-index: 3; inset: 12px; border-radius: 50%; overflow: hidden;
        border: 2px solid var(--line-solid);
        background: linear-gradient(135deg, var(--primary), var(--accent));
        box-shadow: 0 0 0 12px var(--bg), 0 25px 65px rgba(0,0,0,0.5);
        transition: box-shadow .4s ease, transform .4s ease;
      }
      .portrait-photo-wrap:hover { transform: scale(1.015); }
      .portrait-photo { width: 100%; height: 100%; object-fit: cover; object-position: 68% top; display: block; }

      /* ---------------- marquee ---------------- */
      .marquee-track { display: flex; width: max-content; animation: marquee 28s linear infinite; }
      .marquee-wrap:hover .marquee-track { animation-play-state: paused; }

      /* ---------------- cards ---------------- */
      .stat-card, .skill-card, .exp-card, .cert-card {
        transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
      }
      .stat-card:hover, .skill-card:hover { transform: translateY(-4px); border-color: var(--primary); }
      .cert-card:hover { transform: translateX(4px); border-color: var(--primary); }
      .tag-pill { transition: all .2s ease; }
      .tag-pill:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
      .project-link { transition: all .2s ease; }
      .project-link:hover { border-color: var(--accent); color: var(--accent); }

      .tilt-card { position: relative; transition: transform .35s cubic-bezier(.22,1,.36,1); will-change: transform; }
      .tilt-glow {
        position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: 0;
        background: radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), var(--primary-soft), transparent 60%);
        transition: opacity .3s ease; z-index: 0;
      }
      .tilt-card:hover .tilt-glow { opacity: 1; }

      /* ---------------- projects carousel ---------------- */
      .project-card {
        box-shadow: 0 18px 45px -32px rgba(12, 14, 28, .6);
        transition: border-color .3s ease, box-shadow .3s ease, transform .35s cubic-bezier(.22,1,.36,1);
      }
      .project-card:hover { border-color: color-mix(in srgb, var(--primary) 52%, var(--line-solid)); box-shadow: 0 28px 55px -30px var(--primary-soft); }
      .project-visual { padding: 10px; border-bottom: 1px solid var(--line-solid); }
      .project-image { border-radius: 11px; transition: transform .65s cubic-bezier(.16,.8,.24,1), filter .45s ease; }
      .project-card:hover 
      .project-image-overlay {
        position: absolute; inset: 10px; border-radius: 11px; pointer-events: none;
        background: linear-gradient(180deg, rgba(4,5,12,.48) 0%, transparent 43%, rgba(4,5,12,.6) 100%);
      }
      .project-badge { background: linear-gradient(135deg, var(--primary), var(--accent)); box-shadow: 0 7px 16px -8px #000; }
      .project-content { background: linear-gradient(145deg, var(--surface), color-mix(in srgb, var(--surface) 92%, var(--primary-soft))); }
      .project-title-number {
        display: inline-block; margin-right: .46em; font: inherit;
        background: linear-gradient(135deg, var(--primary), var(--accent));
        -webkit-background-clip: text; background-clip: text; color: transparent;
      }
      .project-title {
        font-family: 'Sora', 'Plus Jakarta Sans', sans-serif; font-size: 21px; font-weight: 800;
        letter-spacing: -.045em; line-height: 1.05; color: var(--text);
        text-shadow: 0 1px 0 color-mix(in srgb, var(--primary) 15%, transparent);
      }
      .project-status {
        display: inline-flex; align-items: center; gap: 6px; padding-top: 3px;
        font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--accent);
      }
      .project-status::before { content: ''; width: 6px; height: 6px; border-radius: 999px; background: var(--accent); box-shadow: 0 0 0 4px var(--accent-soft); }
      .project-tech {
        padding: 4px 8px; border: 1px solid var(--line-solid); border-radius: 6px;
        background: var(--surface-hi); color: var(--muted); font-size: 10.5px; font-weight: 600;
      }
      .project-points { padding: 11px 12px; border: 1px solid var(--line-solid); border-radius: 10px; background: color-mix(in srgb, var(--bg) 32%, transparent); }
      .project-point-marker { width: 6px; height: 6px; border-radius: 2px; background: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
      .project-actions { display: flex; align-items: center; justify-content: flex-start; flex-wrap: wrap; gap: 9px; border-top: 1px solid var(--line-solid); }
      .project-live-link {
        min-height: 38px; padding: 9px 12px; border-radius: 8px; color: #fff;
        background: linear-gradient(135deg, var(--primary), var(--accent));
        transition: transform .25s ease, box-shadow .25s ease;
      }
      .project-live-link:hover { transform: translateY(-2px); box-shadow: 0 10px 20px -10px var(--primary); }
      .project-github-link {
        display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-height: 38px; margin-left: auto; padding: 9px 12px;
        border: 1px solid var(--line-solid); border-radius: 8px; color: var(--text); font-size: 12px; font-weight: 700;
        transition: border-color .2s ease, color .2s ease, transform .2s ease;
      }
      .project-github-link:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
      .project-source-link { display: inline-flex; align-items: center; gap: 5px; color: var(--muted); font-size: 11.5px; font-weight: 600; transition: color .2s ease; }
      .project-source-link:hover { color: var(--accent); }
      .carousel-track {
        scroll-snap-type: x proximity;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      .carousel-track::-webkit-scrollbar { display: none; }
      .carousel-card { scroll-snap-align: start; }
      .carousel-arrow {
        position: absolute; top: 40%; transform: translateY(-50%);
        width: 40px; height: 40px; border-radius: 50%;
        background: var(--surface); border: 1px solid var(--line-solid); color: var(--text);
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 10px 24px rgba(0,0,0,0.18);
        transition: all .2s ease; z-index: 5;
      }
      .carousel-arrow:hover { border-color: var(--primary); color: var(--primary); transform: translateY(-50%) scale(1.08); }
      @media (max-width: 767px) { .carousel-arrow { display: none; } }
      .carousel-dot {
        width: 8px; height: 8px; border-radius: 50%;
        background: var(--line-solid); border: none; cursor: pointer;
        transition: all .25s ease;
      }
      .carousel-dot.active { width: 22px; border-radius: 5px; background: var(--primary); }
      .tilt-card > *:not(.tilt-glow) { position: relative; z-index: 1; }

      .contact-card { background: linear-gradient(160deg, var(--surface) 0%, var(--bg-soft) 100%); }
      .contact-card::before {
        content: ""; position: absolute; top: -160px; left: 50%; transform: translateX(-50%);
        width: 560px; height: 360px; background: radial-gradient(closest-side, var(--primary-soft), transparent 70%);
      }
      .section-alt { background: var(--bg-soft); border-top: 1px solid var(--line-solid); border-bottom: 1px solid var(--line-solid); }

      /* ---------------- education / certification toggle ---------------- */
      .academic-toggle {
        position: relative; display: inline-grid; grid-template-columns: 1fr 1fr;
        min-width: 258px; padding: 4px; border: 1px solid var(--line-solid);
        border-radius: 999px; background: var(--surface); isolation: isolate;
      }
      .academic-toggle-indicator {
        position: absolute; z-index: -1; top: 4px; bottom: 4px; left: 4px; width: calc(50% - 4px);
        border-radius: 999px; background: linear-gradient(135deg, var(--primary), var(--accent));
        box-shadow: 0 5px 16px -7px var(--primary); transition: transform .3s cubic-bezier(.22,1,.36,1);
      }
      .academic-toggle-indicator.is-certifications { transform: translateX(100%); }
      .academic-toggle-option {
        position: relative; z-index: 1; padding: 9px 14px; border-radius: 999px;
        color: var(--muted); font-size: 12.5px; font-weight: 700; transition: color .25s ease;
      }
      .academic-toggle-option[aria-selected="true"] { color: #fff; }
      .academic-toggle-option:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
      .academic-panel { min-height: 230px; }

      /* ---------------- reveal ---------------- */
      .reveal { opacity: 0; transform: translateY(26px); transition: opacity .7s cubic-bezier(.16,.8,.24,1), transform .7s cubic-bezier(.16,.8,.24,1); }
      .reveal-visible { opacity: 1; transform: none; }

      /* ---------------- keyframes ---------------- */
      @keyframes spin { to { transform: rotate(360deg); } }
      @keyframes auraDrift { from { transform: scale(0.94); opacity: .55; } to { transform: scale(1.08); opacity: .95; } }
      @keyframes glowPulse { 0%, 100% { opacity: .55; transform: scale(.96); } 50% { opacity: .95; transform: scale(1.04); } }
      @keyframes pulseDot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      @keyframes countPop { 0% { transform: scale(1); } 40% { transform: scale(1.14); } 100% { transform: scale(1); } }
      .count-pop { display: inline-block; animation: countPop .4s cubic-bezier(.34,1.56,.64,1); }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes gradientShift { 0% { background-position: 0% center; } 100% { background-position: 250% center; } }
      @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @keyframes blobDrift1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(60px,50px) scale(1.1); } }
      @keyframes blobDrift2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-50px,40px) scale(1.15); } }
      @keyframes blobDrift3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-40px) scale(1.05); } }

      @media (prefers-reduced-motion: reduce) {
        .portfolio-root *, .portfolio-root *::before, .portfolio-root *::after { animation: none !important; transition: none !important; }
        .reveal { opacity: 1; transform: none; }
      }

      @media (max-width: 640px) {
        .portrait-stage { width: 320px; height: 320px; transform: translate(24px, -38px); }
        .portrait-photo-wrap { inset: 14px; }
      }
    `}</style>
  );
}
