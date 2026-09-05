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
  Sparkles,
  Briefcase,
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
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
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
    "Owned an entire product surface solo — from first component to the admin tools that keep it running.",
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
    items: ["React.js", "Redux Toolkit", "Tailwind CSS", "Socket.IO", "State Management", "Component-Based Architecture"],
  },
  {
    label: "Backend & Database",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "MongoDB", "API Integration"],
  },
  {
    label: "Tools, Cloud & DevOps",
    items: ["Git", "GitHub", "Docker", "AWS (ECR, ECS, EC2)", "CI/CD Pipelines", "Firebase", "Netlify", "Qdrant", "Redis", "Render", "Vercel", "Postman"],
  },
];

const PROJECTS = [
  {
    name: "CortexAI",
    blurb:
      "A microservices-based multi-agent AI platform on Node.js, Docker, and AWS ECR/ECS. A LangGraph router dispatches requests across 8 specialized agents, blending Gemini, Groq, and OpenRouter through LangChain.",
    image: cortexai,
    github: "https://github.com/mayurgarg08/Cortex_AI",
    live: "https://mayur-cortexai.online",
    tech: ["LangGraph", "Node.js", "AWS", "Docker"],
    points: [
      "Qdrant-powered RAG pipeline for document Q&A",
      "AWS S3 storage with automated PDF/PPT generation",
    ],
  },
  {
    name: "HireHut",
    blurb:
      "A full-stack MERN career platform combining a resume builder, job/internship tracker, courses, competitions, and professional networking in one place.",
    image: hirehut,
    github: "https://github.com/mayurgarg08/HireHut",
    live: "https://mayur-hirehut.netlify.app/",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    points: [
      "Live resume builder with PDF export & scoring",
      "Real-time chat, JWT + Google OAuth login",
    ],
  },
  {
    name: "VidChat",
    blurb:
      "A MERN language-learning platform for real-time text chat and video calls, built on GetStream.io's Chat and Video SDKs.",
    image: vidchat,
    github: "https://github.com/mayurgarg08/VideoChat-frontend",
    githubSecondary: "https://github.com/mayurgarg08/VideoChat-backend",
    live: "https://mayurvideochat.netlify.app/",
    tech: ["React", "Express", "MongoDB", "GetStream"],
    points: [
      "Separate frontend/backend linked via REST APIs",
      "JWT auth with protected sessions & profiles",
    ],
  },
  {
    name: "VidTube",
    blurb:
      "A YouTube-inspired streaming platform built on the YouTube Data API, with voice search and real-time video discovery.",
    image: vidtube,
    live: "https://myvidtube-live.netlify.app/",
    tech: ["React", "Firebase", "TMDb"],
    points: [
      "Voice search via the Web Speech API",
      "Trending, related videos & search history",
    ],
  },
  {
    name: "AABHAAR Jharkhand",
    blurb:
      "A multilingual tourism platform for Jharkhand built for Smart India Hackathon 2025, with AI itinerary planning and chatbot assistance.",
    badge: "SIH 2025",
    image: aabhaar,
    github: "https://github.com/mayurgarg08/Aabhaar-Jharkhand",
    live: "https://aabhaar-c3xq.vercel.app/",
    tech: ["React", "AI", "AR/VR"],
    points: [
      "Blockchain-based service verification",
      "AR/VR map previews, SOS alerts & live tracking",
    ],
  },
  {
    name: "FoodZone",
    blurb:
      "A responsive food ordering app with category filters and a dynamic cart supporting quantity changes and real-time pricing.",
    image: foodzone,
    github: "https://github.com/mayurgarg08/FoodZone",
    live: "https://capable-crumble-173070.netlify.app/",
    tech: ["React", "JavaScript", "CSS"],
    points: [
      "Search & category-based discovery",
      "Modular, reusable component architecture",
    ],
  },
  {
    name: "Netflix Clone",
    blurb:
      "A Netflix-inspired streaming UI powered by Firebase auth and the TMDb API for dynamic movie and TV show discovery.",
    image: netflix,
    github: "https://github.com/mayurgarg08/Netflix",
    live: "https://mgott.netlify.app/login",
    tech: ["React", "Firebase", "TMDb"],
    points: [
      "Genre filters, favorites & watchlists",
      "In-app YouTube trailer playback",
    ],
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
    detail: "Percentage: 80.33%",
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
      { threshold: 0.15 }
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
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
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

function SectionHeading({ eyebrow, title, blurb, center = false }) {
  return (
    <Reveal className={`max-w-2xl mb-14 ${center ? "mx-auto text-center" : ""}`}>
      <div className={center ? "flex justify-center" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-[var(--text)] leading-tight">
        {title}
      </h2>
      {blurb && (
        <p className={`mt-4 text-[15.5px] text-[var(--muted)] max-w-xl ${center ? "mx-auto" : ""}`}>
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
    const delta = el.getBoundingClientRect().left - track.getBoundingClientRect().left;
    track.scrollTo({ left: track.scrollLeft + delta, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
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
                Hi, I&apos;m Mayur —<br />
                I turn ideas into{" "}
                <span className="grad-text">shipped, full-stack products</span>
                <br />
                with AI woven through them.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-[17px] md:text-[19px] text-[var(--muted)] max-w-xl leading-relaxed">
                <b className="text-[var(--text)] font-semibold">Full-stack developer</b> and B.Tech
                CSE student who takes a product from an empty repo to a deployed, working system —
                multi-agent AI platforms, real-time chat, and the databases and AWS infra underneath.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-wrap gap-3.5 mt-9">
                <button
                  onClick={() => scrollTo("projects")}
                  className="btn-gradient inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14.5px] font-semibold text-white"
                >
                  See what I&apos;ve built <ArrowUpRight size={16} />
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
                  { icon: FaLinkedin, href: PROFILE.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
                  { icon: SiLeetcode, href: PROFILE.leetcode, label: "LeetCode" },
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
              <div className="portrait-blob" />
              <div className="portrait-card">
                <img src={PHOTO_SRC} alt="Mayur Garg" className="portrait-photo" />
                <div className="portrait-sheen" />
              </div>
              <div className="portrait-tag portrait-tag-1">
                <Sparkles size={13} /> Building with AI
              </div>
              <div className="portrait-tag portrait-tag-2">
                <Briefcase size={13} /> Open to SDE roles
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
          <SectionHeading eyebrow="About" title="A developer who likes owning the whole stack" />
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
            <Reveal className="text-[16px] text-[var(--muted)] leading-relaxed space-y-5">
              <p>
                I&apos;m a <b className="text-[var(--text)] font-semibold">Computer Science undergrad</b> at
                Ajay Kumar Garg Engineering College, building production-grade MERN applications with
                a growing focus on <b className="text-[var(--text)] font-semibold">AI-integrated systems</b>.
                My work spans seven full-stack builds — from a microservices-based multi-agent AI
                platform deployed on AWS, to a career platform with real-time messaging, to a
                Smart India Hackathon 2025 tourism app with AR/VR previews.
              </p>
              <p>
                I like taking a problem from an empty repo to a deployed product — architecture,
                backend logic, database design, UI, and shipping — and I&apos;m currently looking for
                full-stack or SDE roles where I can keep doing exactly that.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="stat-card rounded-2xl p-6 border border-[var(--line-solid)] bg-[var(--surface)]">
                    <div className="font-display text-[30px] font-bold text-[var(--text)]">
                      <CountUp target={s.target} suffix={s.suffix} decimal={s.decimal} />
                    </div>
                    <div className="text-[12.5px] text-[var(--muted)] mt-1.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- experience ---------------- */}
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
                    <div className="font-display text-[22px] font-bold text-[var(--text)]">{EXPERIENCE.role}</div>
                    <div className="text-[var(--primary)] font-semibold text-[14.5px] mt-1">{EXPERIENCE.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="mono text-[12.5px] text-[var(--accent)]">{EXPERIENCE.period}</div>
                    <div className="text-[12.5px] text-[var(--muted)] mt-1 flex items-center gap-1.5 justify-end">
                      <MapPin size={12} /> {EXPERIENCE.location}
                    </div>
                  </div>
                </div>

                <p className="text-[14.5px] text-[var(--accent)] font-medium mb-6">{EXPERIENCE.summary}</p>

                <ul className="space-y-3.5 mb-7">
                  {EXPERIENCE.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-[15px] text-[var(--muted)]">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-7">
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
                  className="inline-flex items-center gap-2 text-[13.5px] font-semibold px-4 py-2.5 rounded-lg border border-[var(--line-solid)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  <ExternalLink size={14} /> View DMS Aarohi NGO — Live Site
                </a>
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
              className="carousel-track flex gap-7 overflow-x-auto pb-4 -mx-1 px-1"
            >
              {PROJECTS.map((proj, i) => (
                <div
                  key={proj.name}
                  ref={(el) => (carouselCardRefs.current[i] = el)}
                  className="carousel-card shrink-0 w-[85%] sm:w-[400px]"
                >
                  <TiltCard className="project-card rounded-[22px] overflow-hidden h-full flex flex-col">
                    <div className="project-visual relative aspect-[16/10] overflow-hidden">
                      <img
                        src={proj.image}
                        alt={proj.name}
                        className="project-image w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="project-image-overlay" />
                      <span className="project-number mono absolute top-3.5 left-3.5 text-[11px] font-semibold px-2.5 py-1 rounded-full text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${proj.name} on GitHub`}
                          className="project-icon-link absolute top-3.5 right-3.5 w-9 h-9 rounded-full flex items-center justify-center text-white"
                        >
                          <FaGithub size={15} />
                        </a>
                      )}
                      {proj.badge && (
                        <span className="project-badge mono absolute bottom-3.5 left-3.5 text-[10px] font-semibold px-2.5 py-1 rounded-full text-white">
                          {proj.badge}
                        </span>
                      )}
                    </div>
                    <div className="project-content p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--accent)] mb-1.5">
                            Featured build
                          </div>
                          <div className="font-display text-[19px] font-bold text-[var(--text)] leading-snug">
                            {proj.name}
                          </div>
                        </div>
                        <span className="project-status shrink-0" aria-label="Live project">
                          <span className="project-status-dot" /> Live
                        </span>
                      </div>

                      <div className="flex-1">
                        <p className="text-[13.5px] text-[var(--muted)] leading-relaxed mb-4">
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
                          <ul className="project-points space-y-2 mb-1">
                            {proj.points.map((pt, idx) => (
                              <li
                                key={idx}
                                className="flex gap-2 text-[12px] text-[var(--muted)] leading-snug"
                              >
                                <span className="project-point-marker shrink-0 mt-[6px]" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="project-actions flex items-center justify-between gap-3 mt-5 pt-4">
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-live-link inline-flex items-center justify-center gap-1.5 text-[13px] font-semibold"
                        >
                          Explore project <ArrowUpRight size={14} />
                        </a>
                        {proj.githubSecondary && (
                          <a
                            href={proj.githubSecondary}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${proj.name} backend on GitHub`}
                            className="project-source-link inline-flex items-center gap-1.5"
                          >
                            Backend <FaGithub size={13} />
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
              onClick={() => scrollToProject(Math.min(PROJECTS.length - 1, activeProject + 1))}
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

      {/* ---------------- education ---------------- */}
      <section id="education" className="relative z-10 py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionHeading
            eyebrow="Education"
            title="Academic background"
            blurb="The formal path alongside the projects — CBSE schooling through to a CSE degree."
            center
          />
          <Reveal>
            <div className="edu-grid grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {EDUCATION.map((ed) => (
                <div className="edu-card rounded-2xl p-6 border border-[var(--line-solid)] bg-[var(--surface)] text-center" key={ed.title}>
                  <div className="mono text-[12px] text-[var(--accent)] mb-3">{ed.period}</div>
                  <div className="font-display text-[16.5px] font-bold text-[var(--text)] leading-snug">{ed.title}</div>
                  <div className="text-[13.5px] text-[var(--muted)] mt-2">{ed.place}</div>
                  <div className="edu-detail mono text-[12.5px] text-[var(--primary)] mt-4 inline-block px-3 py-1.5 rounded-full bg-[var(--primary-soft)]">
                    {ed.detail}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- certifications & achievements ---------------- */}
      <section id="certifications" className="relative z-10 py-28 section-alt">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionHeading eyebrow="Certifications" title="Certifications &amp; achievements" />
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
                      <BadgeCheck size={13} className="text-[var(--accent)] shrink-0" />
                    </div>
                    <div className="text-[12.5px] text-[var(--muted)] mt-0.5">{c.detail}</div>
                  </div>
                  <div className="mono text-[11.5px] text-[var(--muted-2)] shrink-0">{c.org}</div>
                </a>
              </Reveal>
            ))}
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
                  I'm actively looking for full-stack developer and SDE roles. If my background looks
                  like a fit for your team, I'd love to hear from you.
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
            © {new Date().getFullYear()} Mayur Garg. Built with React &amp; Tailwind CSS.
          </div>
          <div className="flex gap-5">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              LinkedIn
            </a>
            <a href={PROFILE.leetcode} target="_blank" rel="noreferrer" className="text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
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

      /* ---------------- portrait (soft floating card, no rings) ---------------- */
      .portrait-stage {
        position: relative; width: 400px; max-width: 100%; height: 460px;
        margin: 0 auto; isolation: isolate;
      }

      .portrait-blob {
        position: absolute; z-index: 0; inset: 6% 4% 10% 4%;
        border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%;
        background: linear-gradient(150deg, var(--primary) 0%, var(--primary-2) 45%, var(--accent) 100%);
        opacity: 0.9;
        filter: saturate(1.05);
        animation: blobMorph 11s ease-in-out infinite;
      }
      .portfolio-root[data-theme="light"] .portrait-blob { opacity: 0.75; }

      .portrait-card {
        position: absolute; z-index: 2; inset: 10% 8% 12% 8%;
        border-radius: 28px;
        overflow: hidden;
        box-shadow: 0 30px 60px -20px rgba(0,0,0,0.45), 0 2px 0 rgba(255,255,255,0.04) inset;
        transform: rotate(-2.5deg);
        animation: cardFloat 6s ease-in-out infinite;
        border: 1px solid rgba(255,255,255,0.08);
      }
      .portfolio-root[data-theme="light"] .portrait-card { box-shadow: 0 30px 60px -22px rgba(30,20,80,0.28); }

      .portrait-photo { width: 100%; height: 100%; object-fit: cover; object-position: 68% top; display: block; }
      .portrait-sheen {
        position: absolute; inset: 0;
        background: linear-gradient(115deg, rgba(255,255,255,0.16) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.12) 100%);
        pointer-events: none;
      }

      .portrait-tag {
        position: absolute; z-index: 3;
        display: inline-flex; align-items: center; gap: 6px;
        font-size: 12px; font-weight: 600; font-family: 'Plus Jakarta Sans', sans-serif;
        color: var(--text); background: var(--surface);
        border: 1px solid var(--line-solid);
        padding: 8px 13px; border-radius: 999px;
        box-shadow: 0 12px 24px -10px rgba(0,0,0,0.35);
      }
      .portrait-tag svg { color: var(--accent); }
      .portrait-tag-1 { top: 6%; right: -2%; animation: tagFloat1 5s ease-in-out infinite; }
      .portrait-tag-2 { bottom: 8%; left: -6%; animation: tagFloat2 5.5s ease-in-out infinite; }

      /* ---------------- marquee ---------------- */
      .marquee-track { display: flex; width: max-content; animation: marquee 28s linear infinite; }
      .marquee-wrap:hover .marquee-track { animation-play-state: paused; }

      /* ---------------- cards ---------------- */
      .stat-card, .skill-card, .exp-card, .cert-card, .edu-card {
        transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
      }
      .stat-card:hover, .skill-card:hover, .edu-card:hover { transform: translateY(-4px); border-color: var(--primary); }
      .cert-card:hover { transform: translateX(4px); border-color: var(--primary); }
      .tag-pill { transition: all .2s ease; }
      .tag-pill:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
      .project-link { transition: all .2s ease; }
      .project-link:hover { border-color: var(--accent); color: var(--accent); }

      /* ---------------- experience card ---------------- */
      .exp-card::before {
        content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px;
        background: linear-gradient(90deg, var(--primary), var(--primary-2), var(--accent));
      }
      .exp-rail { position: relative; }
      .exp-dot {
        width: 12px; height: 12px; border-radius: 50%;
        background: var(--accent);
        box-shadow: 0 0 0 6px var(--accent-soft);
        animation: pulseDot 2.4s ease-in-out infinite;
      }
      .exp-rail-line { flex: 1; width: 1px; background: var(--line-solid); margin-top: 12px; }

      .tilt-card { position: relative; transition: transform .35s cubic-bezier(.22,1,.36,1); will-change: transform; }
      .tilt-glow {
        position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: 0;
        background: radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), var(--primary-soft), transparent 62%);
        transition: opacity .35s ease; z-index: 0;
      }
      .tilt-card:hover .tilt-glow { opacity: 1; }
      .tilt-card > *:not(.tilt-glow) { position: relative; z-index: 1; }

      /* ---------------- project cards: modern, layered, "spec sheet" feel ---------------- */
      .project-card {
        background: linear-gradient(180deg, var(--surface) 0%, var(--surface) 100%);
        border: 1px solid var(--line-solid);
        box-shadow: 0 1px 0 rgba(255,255,255,0.03) inset, 0 20px 44px -28px rgba(0,0,0,0.55);
        position: relative;
      }
      .project-card::before {
        content: "";
        position: absolute; inset: 0; z-index: 2; pointer-events: none;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(160deg, var(--primary-soft), transparent 30%, transparent 70%, var(--accent-soft));
        -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0; transition: opacity .35s ease;
      }
      .tilt-card:hover .project-card::before { opacity: 1; }
      .tilt-card:hover .project-card {
        border-color: var(--primary);
        box-shadow: 0 1px 0 rgba(255,255,255,0.04) inset, 0 32px 64px -24px var(--primary-soft), 0 0 0 1px var(--primary-soft);
      }

      .project-visual { background: var(--surface-hi); }
      .project-image { transition: transform .6s cubic-bezier(.22,1,.36,1); }
      .tilt-card:hover .project-image { transform: scale(1.08); }
      .project-image-overlay {
        position: absolute; inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, transparent 35%, transparent 60%, rgba(0,0,0,0.55) 100%);
        pointer-events: none;
      }
      .project-number {
        background: rgba(0,0,0,0.5);
        backdrop-filter: blur(6px);
        border: 1px solid rgba(255,255,255,0.14);
      }
      .project-icon-link {
        background: rgba(0,0,0,0.5);
        backdrop-filter: blur(6px);
        border: 1px solid rgba(255,255,255,0.14);
        transition: all .25s ease;
      }
      .project-icon-link:hover { background: var(--primary); border-color: var(--primary); transform: translateY(-2px) rotate(-6deg); }
      .project-badge { background: linear-gradient(135deg, var(--primary), var(--accent)); box-shadow: 0 6px 16px -4px var(--primary-soft); }

      .project-content { position: relative; }
      .project-status {
        display: inline-flex; align-items: center; gap: 6px;
        font-size: 11px; font-weight: 600; letter-spacing: 0.02em;
        color: var(--accent);
        background: var(--accent-soft);
        padding: 5px 10px 5px 8px;
        border-radius: 999px;
        white-space: nowrap;
      }
      .project-status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: pulseDot 2s ease-in-out infinite; }

      .project-tech {
        font-size: 11.5px; font-weight: 500; font-family: 'IBM Plex Mono', monospace;
        color: var(--text); background: var(--surface-hi);
        border: 1px solid var(--line-solid);
        padding: 4px 10px; border-radius: 7px;
        transition: all .2s ease;
      }
      .tilt-card:hover .project-tech { border-color: var(--line-solid); }
      .project-tech:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }

      .project-points { border-top: 1px dashed var(--line-solid); padding-top: 12px; }
      .project-point-marker {
        width: 5px; height: 5px; border-radius: 50%;
        background: linear-gradient(135deg, var(--primary), var(--accent));
        display: inline-block;
      }

      .project-actions { border-top: 1px solid var(--line-solid); }
      .project-live-link {
        color: var(--text);
        background: var(--surface-hi);
        border: 1px solid var(--line-solid);
        padding: 9px 16px; border-radius: 10px;
        transition: all .25s ease;
        flex: 1;
      }
      .project-live-link:hover {
        color: white;
        border-color: transparent;
        background: linear-gradient(135deg, var(--primary), var(--accent));
        transform: translateY(-2px);
        box-shadow: 0 12px 24px -10px var(--primary-soft);
      }
      .project-source-link {
        color: var(--muted); font-size: 12.5px; font-weight: 600;
        padding: 9px 12px; border-radius: 10px; border: 1px solid var(--line-solid);
        transition: all .2s ease;
      }
      .project-source-link:hover { color: var(--text); border-color: var(--primary); }

      /* ---------------- projects carousel ---------------- */
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

      /* ---------------- education ---------------- */
      .edu-detail { transition: transform .2s ease; }
      .edu-card:hover .edu-detail { transform: scale(1.04); }

      .contact-card { background: linear-gradient(160deg, var(--surface) 0%, var(--bg-soft) 100%); }
      .contact-card::before {
        content: ""; position: absolute; top: -160px; left: 50%; transform: translateX(-50%);
        width: 560px; height: 360px; background: radial-gradient(closest-side, var(--primary-soft), transparent 70%);
      }
      .section-alt { background: var(--bg-soft); border-top: 1px solid var(--line-solid); border-bottom: 1px solid var(--line-solid); }

      /* ---------------- reveal ---------------- */
      .reveal { opacity: 0; transform: translateY(26px); transition: opacity .7s cubic-bezier(.16,.8,.24,1), transform .7s cubic-bezier(.16,.8,.24,1); }
      .reveal-visible { opacity: 1; transform: none; }

      /* ---------------- keyframes ---------------- */
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
      @keyframes blobMorph {
        0%, 100% { border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%; transform: rotate(0deg) scale(1); }
        33% { border-radius: 58% 42% 40% 60% / 55% 60% 40% 45%; transform: rotate(4deg) scale(1.03); }
        66% { border-radius: 48% 52% 55% 45% / 48% 40% 60% 52%; transform: rotate(-3deg) scale(0.99); }
      }
      @keyframes cardFloat {
        0%, 100% { transform: rotate(-2.5deg) translateY(0); }
        50% { transform: rotate(-1deg) translateY(-10px); }
      }
      @keyframes tagFloat1 {
        0%, 100% { transform: translateY(0) rotate(-2deg); }
        50% { transform: translateY(-8px) rotate(1deg); }
      }
      @keyframes tagFloat2 {
        0%, 100% { transform: translateY(0) rotate(1deg); }
        50% { transform: translateY(9px) rotate(-2deg); }
      }

      @media (prefers-reduced-motion: reduce) {
        .portfolio-root *, .portfolio-root *::before, .portfolio-root *::after { animation: none !important; transition: none !important; }
        .reveal { opacity: 1; transform: none; }
      }

      @media (max-width: 640px) {
        .portrait-stage { width: 300px; height: 380px; }
        .portrait-tag { font-size: 11px; padding: 6px 10px; }
      }
    `}</style>
  );
}