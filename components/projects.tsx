import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/blur-fade";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

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
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:ring-2 hover:ring-muted">
              <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-2">
                <div className="flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="size-2.5 rounded-full border border-border bg-foreground/20 transition-colors duration-200 group-hover:bg-foreground/40"
                  />
                  <span
                    aria-hidden="true"
                    className="size-2.5 rounded-full border border-border bg-foreground/20 transition-colors duration-200 group-hover:bg-foreground/40"
                  />
                  <span
                    aria-hidden="true"
                    className="size-2.5 rounded-full border border-border bg-foreground/20 transition-colors duration-200 group-hover:bg-foreground/40"
                  />
                </div>
                <span className="truncate font-mono text-[11px] text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                  ~/projects/{slugify(project.title)}
                </span>
              </div>

              <div className="relative flex h-36 flex-col items-center justify-center gap-1 overflow-hidden bg-linear-to-br from-muted to-secondary/40 px-6 text-center">
                <span
                  aria-hidden="true"
                  className="absolute -top-4 -right-2 font-mono text-7xl font-bold tracking-tight text-foreground/5 transition-all duration-200 select-none group-hover:text-foreground/15 group-hover:scale-110"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="flex items-center gap-1 text-2xl font-semibold tracking-tight">
                  {project.title}
                  <ArrowUpRight className="size-5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </h3>
                <p className="text-xs text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex h-6 w-fit items-center rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-foreground"
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
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-emerald-500"
                      />
                      Live
                      <ArrowUpRight className="size-3 text-muted-foreground transition-colors hover:text-foreground" />
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                      <GitHubIcon className="size-3" />
                      Source
                      <ArrowUpRight className="size-3" />
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
