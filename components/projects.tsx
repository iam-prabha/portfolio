import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/blur-fade";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="flex min-h-0 flex-col gap-y-10">
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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto w-full">
        {projects.map((project, index) => (
          <BlurFade key={project.title} delay={0.48 + index * 0.05}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20 hover:ring-1 hover:ring-primary/10">
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="flex items-center gap-1 text-2xl font-semibold tracking-tight">
                    {project.title}
                    <ArrowUpRight className="size-5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/50">
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
                      Live
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