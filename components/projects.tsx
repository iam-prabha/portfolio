import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/blur-fade";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="flex min-h-0 scroll-mt-8 flex-col gap-y-7">
      <BlurFade delay={0.28}>
        <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
          <div>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-700">Selected work</p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Things I&apos;ve shipped</h2>
          </div>
          <span className="pb-1 font-mono text-xs text-muted-foreground">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>
      </BlurFade>
      <BlurFade delay={0.34}>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          AI agents, retrieval systems, and full-stack products built around a clear user problem.
        </p>
      </BlurFade>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto w-full">
        {projects.map((project, index) => (
          <BlurFade key={project.title} delay={0.48 + index * 0.05}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/5">
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="flex items-start gap-1 text-xl font-semibold tracking-tight">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`} className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                      {project.title}
                    </a>
                    <ArrowUpRight className="size-5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="border-l-2 border-emerald-500 pl-3 text-sm font-medium leading-relaxed text-foreground/80">
                  {project.impact}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/50 pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex h-7 w-fit items-center rounded-lg border border-border bg-muted/50 px-3 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-muted hover:border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-emerald-500"
                      />
                      Live demo
                      <ArrowUpRight className="size-3.5 text-muted-foreground transition-colors hover:text-foreground" />
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                      <GitHubIcon className="size-3.5" />
                      Source
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
