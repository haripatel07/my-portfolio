import { useState } from "react";
import RevealOnScroll from "../Ui/RevealOnScroll";

const ALL_PROJECTS = [
  {
    name: "Digital Dental Screening and Consultation System",
    tagline: "Full-stack healthcare AI platform for dental disease detection, clinic discovery, and patient consultation",
    description:
      "Enables users to upload dental images or X-rays for automated disease detection using custom-trained PyTorch CNN models. Returns confidence scores and personalized recommendations. Integrated clinic locator using geolocation and Geoapify. AI chatbot for dental health queries. Delivered as a React web application, a cross-platform Flutter mobile app, and a FastAPI backend deployed on Hugging Face Spaces.",
    techStack: ["FastAPI", "PyTorch", "timm", "React 18", "TypeScript", "Flutter", "Docker", "JWT", "SQLite", "Geoapify API"],
    domainTags: ["AI / ML", "Full-Stack"],
    highlights: [
      "Custom CNN models for normal dental image and dental X-ray classification",
      "Cross-platform delivery: web (React) and mobile (Flutter) from a single backend",
      "JWT-authenticated user management with full analysis history",
    ],
    github: "https://github.com/haripatel07/Digital-Dental-Screening-and-Consultation-System",
    liveDemo: "Hugging Face Spaces",
    liveDemoUrl: null,
  },
  {
    name: "FarmFriend — Smart Agriculture System",
    tagline: "AI-powered agricultural platform for plant disease detection and intelligent irrigation scheduling",
    description:
      "Integrates deep learning for real-time plant disease detection from uploaded images and machine learning for binary irrigation scheduling decisions based on environmental and soil data. Clean React frontend interacts with a Flask API serving two independent ML models. Deployed live on Vercel (frontend) with an active production deployment history.",
    techStack: ["React", "Vite", "TypeScript", "Python", "Flask", "TensorFlow", "Keras", "Scikit-learn", "MobileNetV2"],
    domainTags: ["AI / ML"],
    highlights: [
      "MobileNetV2 with transfer learning achieves approximately 90% accuracy on PlantVillage dataset",
      "Logistic Regression irrigation model achieves approximately 85% accuracy on sensor-based tabular data",
      "12 stars, 6 forks on GitHub; 3 contributors",
    ],
    github: "https://github.com/haripatel07/Smart-Agriculture-System",
    liveDemo: "smart-agriculture-system-delta.vercel.app",
    liveDemoUrl: "https://smart-agriculture-system-delta.vercel.app",
  },
  {
    name: "SenticFlow",
    tagline: "High-performance asynchronous data pipeline for AI-powered customer feedback analysis at scale",
    description:
      "Designed to ingest, analyze, and visualize customer feedback without blocking the request cycle. Pushes analysis work to a Redis-backed FIFO job queue and processes it asynchronously with a Go worker pool. Secure GitHub webhook ingestion with HMAC SHA-256 validation. Workers call OpenAI GPT-4 for sentiment classification, category detection, and one-line actionable summarization. Results surface to a Next.js dashboard with Recharts visualizations.",
    techStack: ["Go (Gin)", "TypeScript", "Next.js 14", "PostgreSQL", "Redis", "OpenAI GPT-4", "Tailwind CSS", "Recharts"],
    domainTags: ["AI / ML", "Full-Stack"],
    highlights: [
      "Sub-second ingestion via HTTP 202 Accepted pattern — clients never blocked by AI latency",
      "Producer-consumer goroutine worker pool with BLPop polling",
      "GitHub webhook integration with cryptographic request validation",
    ],
    github: "https://github.com/haripatel07/SenticFlow",
    liveDemo: null,
    liveDemoUrl: null,
  },
  {
    name: "XAI Phishing Detector",
    tagline: "Explainable AI-powered phishing URL detection with transparent, human-readable reasoning",
    description:
      "Trains a RandomForestClassifier on over 550,000 labeled URLs with deliberate tuning for high recall on the malicious class — minimizing false negatives in a security context. LIME integration explains why a URL is flagged, surfacing the top contributing lexical and structural features per prediction. Moves the model from a black box to a transparent diagnostic tool accessible via a Flask web interface.",
    techStack: ["Python", "Flask", "Scikit-learn", "LIME", "Pandas", "NumPy", "Docker", "HTML", "CSS"],
    domainTags: ["AI / ML", "Cybersecurity"],
    highlights: [
      "Trained on 550,000+ URLs from the Kaggle Phishing Site URLs dataset",
      "78% recall on malicious class — tuned to minimize missed threats over false alarms",
      "LIME explains per-URL predictions with ranked feature contributions",
    ],
    github: "https://github.com/haripatel07/xai-phishing-detector",
    liveDemo: null,
    liveDemoUrl: null,
  },
  {
    name: "BugReport AI",
    tagline: "AI-assisted debugging platform that converts raw software errors into structured engineering outputs",
    description:
      "Accepts stack traces, logs, text descriptions, and JSON payloads. Performs input normalization, root cause analysis, bug report generation, semantic similarity search over historical issues using FAISS, and fix recommendation synthesis. Includes a multi-provider LLM fallback chain (Groq, OpenAI, Ollama, rule-based) and persisted analysis history with a reviewer-focused frontend dashboard.",
    techStack: ["FastAPI", "React 18", "TypeScript", "PostgreSQL", "FAISS", "Docker", "JWT Auth", "GitHub Actions"],
    domainTags: ["AI / ML", "Full-Stack"],
    highlights: [
      "31 RCA patterns across 19 categories covering 7 programming languages",
      "Guest mode with rate limiting and authenticated history persistence",
      "Containerized deployment with CI pipeline validating backend tests and frontend build",
    ],
    github: "https://github.com/haripatel07/bugreport-ai",
    liveDemo: "Render (free tier)",
    liveDemoUrl: "https://bugreport-ai-frontend.onrender.com",
  },
  {
    name: "DocuRAG",
    tagline: "Production-grade Retrieval-Augmented Generation system for technical documentation",
    description:
      "Allows users to ask natural-language questions against their own documentation and receive precise, grounded answers with source citations. Supports PDF, Markdown, and web URL ingestion. Query layer rewrites vague inputs before retrieval, classifies query type, and adapts response style. FlashRank cross-encoder reranking pass improves answer quality after FAISS retrieval without full re-embedding cost.",
    techStack: ["FastAPI", "LangChain", "FAISS", "OpenAI GPT-4o-mini", "HuggingFace Embeddings", "RAGAS", "Docker"],
    domainTags: ["AI / ML"],
    highlights: [
      "Streaming SSE support for token-by-token response delivery",
      "RAGAS evaluation pipeline measuring context precision, answer relevance, and faithfulness",
      "Configurable embedding provider: OpenAI or HuggingFace",
    ],
    github: "https://github.com/haripatel07/DocuRAG",
    liveDemo: null,
    liveDemoUrl: null,
  },
  {
    name: "Android Malware Detector",
    tagline: "Static analysis ML system for identifying malicious Android APK files",
    description:
      "Performs static analysis of Android APK files without execution. Extracts 215 distinct features including permissions from the manifest, intent filters, DEX bytecode class names, and API call patterns. Builds a feature vector per APK and classifies it using a pre-trained Random Forest model. Trained on the Drebin dataset. Ships as a CLI tool and a REST API with Docker support.",
    techStack: ["Python", "Scikit-learn", "Androguard", "Pandas", "Joblib", "Docker", "Flask"],
    domainTags: ["AI / ML", "Cybersecurity"],
    highlights: [
      "215-dimensional feature extraction covering permissions, API calls, and bytecode analysis",
      "Trained on Drebin dataset: 5,560 malware samples and 9,476 benign applications",
      "Sample output: 99.21% confidence on benign ZArchiver.apk",
    ],
    github: "https://github.com/haripatel07/android-malware-detector",
    liveDemo: null,
    liveDemoUrl: null,
  },
  {
    name: "AI Smart Fuzzer",
    tagline: "Intelligent web application security fuzzer with Markov chain AI payload generation",
    description:
      "Combines Markov chain-based payload generation trained on a custom corpus with traditional mutation techniques to discover web application vulnerabilities. Detects SQL injection, XSS, command injection, path traversal, LDAP injection, XXE, information disclosure, and open redirects. Multi-threaded architecture with configurable rate limiting. Results exported to structured JSON reports.",
    techStack: ["Python", "ThreadPoolExecutor", "Requests", "Regex", "Docker"],
    domainTags: ["Cybersecurity"],
    highlights: [
      "Markov chain model trained on a categorized attack payload corpus for realistic payload synthesis",
      "Concurrent fuzzing with configurable thread count and requests-per-second rate limiting",
      "Detects 8 distinct vulnerability classes via status code, response time, pattern, and header analysis",
    ],
    github: "https://github.com/haripatel07/ai-smart-fuzzer",
    liveDemo: null,
    liveDemoUrl: null,
  },
];

const FILTER_TABS = ["All", "AI / ML", "Cybersecurity", "Full-Stack"];

const MAX_VISIBLE_TECH = 6;

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const numStr = (index + 1).toString().padStart(2, "0");
  const visibleTech = project.techStack.slice(0, MAX_VISIBLE_TECH);
  const hiddenCount = project.techStack.length - MAX_VISIBLE_TECH;

  return (
    <div className="group bg-bg-off/80 dark:bg-white/5 border border-border-subtle rounded-[2rem] backdrop-blur-md hover:border-accent-sub/50 transition-all duration-500 shadow-xl overflow-hidden flex flex-col relative">
      {/* Background number watermark */}
      <span className="absolute -top-4 -right-2 text-[7rem] font-serif font-bold text-text-main/[0.03] select-none pointer-events-none tracking-tighter leading-none">
        {numStr}
      </span>

      <div className="p-8 flex flex-col flex-1 relative z-10">
        {/* Header: index tag + domain chips */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <span className="font-mono text-xs tracking-widest text-accent-sub uppercase bg-accent-sub/10 px-3 py-1 rounded-full border border-accent-sub/20 shrink-0">
            System.Work_{numStr}
          </span>
          <div className="flex flex-wrap gap-1.5 justify-end">
            {project.domainTags.map((tag, i) => (
              <span
                key={i}
                className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-accent-main/10 border border-accent-main/20 text-accent-main"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project name */}
        <h3 className="text-2xl md:text-[1.6rem] font-serif font-medium text-text-main mb-2 leading-tight group-hover:text-accent-sub transition-colors duration-300">
          {project.name}
        </h3>

        {/* Tagline */}
        <p className="text-accent-main font-sans text-sm font-medium mb-4 leading-snug">
          {project.tagline}
        </p>

        {/* Description with expand */}
        <div className="mb-5">
          <p
            className={`text-text-muted font-sans text-sm leading-relaxed ${expanded ? "" : "line-clamp-3"
              } transition-all duration-300`}
          >
            {project.description}
          </p>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-1.5 font-mono text-xs text-accent-sub hover:text-accent-main transition-colors duration-200 underline underline-offset-2"
          >
            {expanded ? "show less" : "read more"}
          </button>
        </div>

        {/* Highlights */}
        <ul className="mb-5 flex flex-col gap-1.5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-text-muted font-sans text-xs leading-relaxed">
              <span className="mt-1 w-1.5 h-1.5 rounded-sm bg-border-subtle group-hover:bg-accent-sub transition-colors duration-300 shrink-0"></span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech Stack pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {visibleTech.map((tech, i) => (
            <span
              key={i}
              className="bg-bg-off border border-border-subtle text-text-muted font-mono text-xs px-3 py-1 rounded-full hover:bg-border-subtle hover:text-text-main transition-colors duration-300 shadow-sm"
            >
              {tech}
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className="bg-bg-off border border-border-subtle text-text-muted font-mono text-xs px-3 py-1 rounded-full shadow-sm">
              +{hiddenCount} more
            </span>
          )}
        </div>

        {/* Action buttons — pushed to bottom */}
        <div className="mt-auto flex items-center gap-4 flex-wrap">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-main font-sans font-medium uppercase tracking-widest text-xs w-max border-b-2 border-accent-sub/0 hover:border-accent-sub pb-0.5 transition-all duration-300"
          >
            GitHub
            <span className="text-base transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </a>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-sub font-sans font-medium uppercase tracking-widest text-xs w-max border-b-2 border-accent-sub/0 hover:border-accent-sub pb-0.5 transition-all duration-300"
            >
              Live Demo
              <span className="text-base">↗</span>
            </a>
          )}

          {!project.liveDemoUrl && project.liveDemo && (
            <span className="font-mono text-xs text-text-muted/60 italic">{project.liveDemo}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.domainTags.includes(activeFilter));

  return (
    <section id="projects" className="min-h-screen py-24 relative z-10">
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-center text-text-main">
            Selected <span className="italic text-accent-sub">Works.</span>
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`font-mono text-xs tracking-widest uppercase px-5 py-2 rounded-full border transition-all duration-300 ${activeFilter === tab
                    ? "bg-accent-sub/10 border-accent-sub/50 text-accent-sub shadow-[0_0_12px_rgba(0,249,255,0.15)]"
                    : "bg-bg-off/80 border-border-subtle text-text-muted hover:border-accent-sub/30 hover:text-text-main"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={ALL_PROJECTS.indexOf(project)}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
