import { ArrowUpRight, ExternalLink } from "lucide-react";
import { BlurFade } from "@/components/blur-fade";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="flex min-h-0 flex-col gap-y-8">
      <BlurFade delay={0.44}>
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">
              My Projects
            </span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
      </BlurFade>

      <BlurFade delay={0.44}>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Check out my latest work
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            I&apos;ve built AI agents, semantic search systems, and full stack
            applications. Here are a few of my favorites.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto auto-rows-fr w-full">
        {projects.map((project, index) => (
          <BlurFade key={project.title} delay={0.48 + index * 0.05}>
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border transition-all duration-200 hover:ring-2 hover:ring-muted">
              <div className="relative h-48 w-full">
                {/* Thumbnail placeholder — replace with a real screenshot/video.
                    To use a looping video like the reference, drop a file in /public
                    (e.g. public/chat-collect.mp4) and swap this block for:

                    <video
                      src="/chat-collect.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-48 w-full object-cover"
                    />
                */}
                <div
                  aria-hidden="true"
                  className="flex h-48 w-full items-center justify-center bg-linear-to-br from-muted to-secondary/40"
                >
                  <span className="font-sans text-sm font-semibold text-muted-foreground">
                    {project.title}
                  </span>
                </div>
                <div className="absolute top-2 right-2 flex flex-wrap gap-2">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-md border border-transparent bg-black px-2.5 py-0.5 text-xs font-semibold text-white shadow transition-colors hover:bg-black/90"
                  >
                    <ExternalLink className="size-3" />
                    Website
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-md border border-transparent bg-black px-2.5 py-0.5 text-xs font-semibold text-white shadow transition-colors hover:bg-black/90"
                  >
                    <GitHubIcon className="size-3" />
                    Source
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold">
                    <span className="inline-flex items-center gap-1">
                      {project.title}
                      <ArrowUpRight className="size-4 text-muted-foreground transition-colors hover:text-foreground" />
                    </span>
                  </h3>
                  <time className="text-xs text-muted-foreground">
                    {project.subtitle}
                  </time>
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </div>
                <div className="mt-auto flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex h-6 w-fit items-center rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
