export const personalInfo = {
  name: "Velprabhakaran Basker",
  initials: "VB",
  pfp: "/pfp.jpg",
  headlines: ["AI Product Engineer", "Technical Entrepreneur", "Full-Stack AI Builder"],
  location: "Salem, Tamil Nadu",
  phone: "+91 63807 03724",
  email: "vel.prabhakaran.ds@gmail.com",
  github: "https://github.com/iam-prabha",
  githubUsername: "iam-prabha",
  linkedin: "https://linkedin.com/in/iamprabha",
  x: "https://x.com/iamprabha0",
  xFollow: "https://x.com/intent/follow?screen_name=iamprabha0",
};

export const aboutText =
  "I bridge engineering and product by building AI-powered systems that eliminate high-friction operational bottlenecks. I own work end-to-end — from architecting agentic RAG workflows to shipping clean, production-ready interfaces people actually use.";

export const skills = {
  "Languages & AI": [
    "TypeScript",
    "Python",
    "Rust",
    "SQL",
    "LangGraph",
    "LangChain",
    "RAG",
    "AI Agents",
    "Vector Search",
  ],
  "Frontend & Backend": [
    "React",
    "Next.js",
    "FastAPI",
    "Express",
    "PostgreSQL",
    "Pinecone",
    "Docker",
    "Git",
  ],
  Deployment: ["Vercel", "Render", "Streamlit"],
};

export const projects = [
  {
    title: "RFP Orchestrator",
    subtitle: "Enterprise proposal responses, automated",
    impact: "Compresses multi-day RFP response work into a single review session.",
    description:
      "A 7-stage multi-agent pipeline built for B2B proposal and sales teams. Ingests complex RFPs (PDF/DOCX/XLSX), discovers questions, and drafts grounded answers with citations, confidence scores, and Word/Excel export.",
    tech: ["TypeScript", "Next.js", "NVIDIA NIM", "Supabase", "pgvector"],
    links: {
      github: "https://github.com/iam-prabha/rfp-orchestrator",
      demo: "https://rfp-orchestrator.vercel.app/",
    },
  },
  {
    title: "HireFlow AI Recruitment Agent",
    subtitle: "Multi-Stage AI Recruitment Agent",
    impact: "Five-stage recruitment workflow with calendar and email automation.",
    description:
      "Autonomous 5-stage hiring pipeline designed to automate candidate screening. Connects resume evaluation, interview scheduling via Google Calendar, and Gmail candidate follow-ups orchestrated with LangGraph.",
    tech: ["TypeScript", "FastAPI", "LangGraph", "Supabase"],
    links: {
      github: "https://github.com/iam-prabha/hireflow-ai",
      demo: "https://hireflow-ai-ten.vercel.app",
    },
  },
  {
    title: "Querybase",
    subtitle: "Chat with any documentation site",
    impact: "Turns any docs site into a queryable knowledge base in under 5 commands.",
    description:
      "Production-ready CLI pipeline that crawls docs sites, chunks, embeds, and enables citation-backed chat. Engineered with zero platform lock-in: users bring their own API keys, with rate limiting and key rotation built in.",
    tech: ["TypeScript", "Node.js", "Qdrant", "NVIDIA NIM", "Docker"],
    links: {
      github: "https://github.com/iam-prabha/querybase-cli",
    },
  },
  {
    title: "Diary",
    subtitle: "Your Private Journal app",
    impact: "A calmer place to write, organize, and keep memories private.",
    description:
      "Full-stack personal journaling platform featuring TipTap rich text editing, secure media uploads, and end-to-end data persistence with Prisma and Express.",
    tech: ["TypeScript", "React", "Express", "Prisma"],
    links: {
      github: "https://github.com/iam-prabha/diary",
      demo: "https://diary-client-two.vercel.app",
    },
  },
];

export const education = [
  {
    school: "AVS College of Arts and Science",
    detail: "Bachelor's Degree of Computer Science",
    years: "2019 - 2022",
    link: null,
  },
];

export const certifications = [
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    instructor: "Dr. Angela Yu",
    year: "2024",
    link: "https://www.ude.my/UC-f3e7e0e5-b007-46a4-8254-0cfd5259edab/",
  },
];
