import Image from "next/image";
import { Database, Bot, ScanSearch } from "lucide-react";

const brandIconMap: Record<string, string> = {
  TypeScript: "/devicons/typescript.svg",
  Python: "/devicons/python.svg",
  React: "/devicons/react.svg",
  "Next.js": "/devicons/nextjs.svg",
  FastAPI: "/devicons/fastapi.svg",
  Express: "/devicons/express.svg",
  Docker: "/devicons/docker.svg",
  Git: "/devicons/git.svg",
  Vercel: "/devicons/vercel.svg",
  Streamlit: "/devicons/streamlit.svg",
  SQL: "/devicons/sqlite.svg",
  LangChain: "/devicons/langchain.svg",
  LangGraph: "/devicons/langgraph.svg",
  Render: "/devicons/render.svg",
  Pinecone: "/devicons/pinecone.svg",
};

const darkMonochromeIcons = new Set([
  "Pinecone",
  "Express",
  "Vercel",
  "Next.js",
]);

const fallbackIcons = {
  RAG: Database,
  "AI Agents": Bot,
  "Vector Search": ScanSearch,
} as const;

export function SkillIcon({ name }: { name: string }) {
  const brand = brandIconMap[name];
  if (brand) {
    return (
      <Image
        src={brand}
        alt={name}
        width={16}
        height={16}
        className={`size-4 shrink-0 object-contain ${darkMonochromeIcons.has(name) ? "dark:invert" : ""}`}
      />
    );
  }

  const Icon = fallbackIcons[name as keyof typeof fallbackIcons];
  if (!Icon) return null;
  return <Icon className="size-4 shrink-0 text-muted-foreground" />;
}
