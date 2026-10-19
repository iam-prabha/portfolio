export const personalInfo = {
  name: "Velprabhakaran Basker",
  initials: "VB",
  pfp: "/pfp.jpg",
  headlines: ["AI Product Manager", "Technical Entrepreneur", "Builder & Operator"],
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
  "I spot operational bottlenecks and build AI-powered systems that eliminate them. I own the work end-to-end — scoping the problem, shipping the solution, and keeping it running in production. My focus is turning messy, real-world workflows into tools people actually use.";

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
      "Built a 7-stage multi-agent pipeline that ingests enterprise RFPs (PDF/DOCX/XLSX), extracts every question, drafts grounded answers with source citations and confidence scores, then exports reviewer-approved responses as Word and Excel documents — ready to send.",
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
      "Built an autonomous five-stage hiring workflow integrating Google Calendar and Gmail automation, with a React dashboard and FastAPI backend orchestrated with LangGraph for seamless recruitment.",
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
      "Built a CLI tool that scrapes any documentation website, chunks and embeds content, then lets teams query it in plain English with cited answers — users bring their own API keys, with multi-user auth, rate limiting, and key rotation built in.",
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
      "Developed a full-stack journaling application with rich text editing via TipTap and cloud media uploads.",
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
