import { ArrowUpRight, GraduationCap } from "lucide-react";
import { BlurFade } from "@/components/blur-fade";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="flex min-h-0 scroll-mt-8 flex-col gap-y-6">
      <BlurFade delay={0.28}>
        <h2 className="border-b border-border pb-3 text-2xl font-semibold tracking-tight">Education</h2>
      </BlurFade>
      <div className="flex flex-col gap-8">
        {education.map((item, index) => (
          <BlurFade key={item.school} delay={0.32 + index * 0.05}>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex size-8 flex-none items-center justify-center overflow-hidden rounded-full border p-1 shadow ring-2 ring-border md:size-10">
                  <GraduationCap className="size-5 text-muted-foreground" />
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold leading-none">
                      {item.school}
                    </h3>
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                  <p className="text-xs text-muted-foreground">{item.years}</p>
                </div>
              </a>
            ) : (
              <div className="group flex items-start gap-3">
                <span className="flex size-8 flex-none items-center justify-center overflow-hidden rounded-full border p-1 shadow ring-2 ring-border md:size-10">
                  <GraduationCap className="size-5 text-muted-foreground" />
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold leading-none">
                      {item.school}
                    </h3>
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                  <p className="text-xs text-muted-foreground">{item.years}</p>
                </div>
              </div>
            )}
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
