export const personalInfo = {
  name: "Velprabhakaran Basker",
  initials: "VB",
  pfp: "/pfp.jpg",
  headlines: ["AI Engineer", "Full Stack Engineer"],
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
  "I build and architect AI intelligent systems that solve real problems. From agentic AI applications and RAG pipelines to full stack web products, I love taking an idea and turning it into a production-ready system that people actually use.";

export const skills = {
  "Languages & AI": [
    "TypeScript",
    "Python",
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
    "Pinecone",
    "Docker",
    "Git",
  ],
  Deployment: ["Vercel", "Render", "Streamlit"],
};

export const projects = [
  {
    title: "Diary",
    subtitle: "Your Private Journal app",
    description:
      "Developed a full-stack journaling application with rich text editing via TipTap and cloud media uploads.",
    dates: "Project",
    tech: ["TypeScript", "React", "Express", "Prisma"],
    links: {
      github: "https://github.com/iam-prabha/diary",
      demo: "https://diary-client-two.vercel.app",
    },
  },
  {
    title: 'HireFlow AI Recruitment Agent',
    subtitle: "Multi-Stage AI Recruitment Agent",
    description:
      "Built an autonomous five-stage hiring workflow integrating Google Calendar and Gmail automation, with a React dashboard and FastAPI backend orchestrated with LangGraph for seamless recruitment.",
    dates: "Project",
    tech: ["TypeScript", "FastAPI", "LangGraph", "Supabase"],
    links: {
      github: "https://github.com/iam-prabha/hireflow-ai",
      demo: "https://hireflow-ai-ten.vercel.app",
    },
  },
  {
    title: "AI-Powered Research Agent",
    subtitle: "Citation-backed reports in minutes",
    description:
      "Built an assistant for topic decomposition, web search, and citation-backed report generation in under 2 minutes using LangChain and the Gemini API.",
    dates: "Project",
    tech: ["Python", "LangChain", "Gemini API"],
    links: {
      github: "https://github.com/iam-prabha/research-agent",
      demo: "https://research-agent-1-dcsj.onrender.com/",
    },
  },
  {
    title: "AI Semantic Search Engine",
    subtitle: "Vector search over documents",
    description:
      "Implemented semantic search across PDF and Markdown documents, improving retrieval by 40% compared to keyword search using LangChain and Pinecone.",
    dates: "Project",
    tech: ["Python", "LangChain", "Pinecone", "Streamlit"],
    links: {
      github: "https://github.com/iam-prabha/ai-semantic-search",
      demo: "https://semantic-search.streamlit.app",
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
