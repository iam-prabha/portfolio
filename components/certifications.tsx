import { ArrowUpRight, Award } from "lucide-react";
import { BlurFade } from "@/components/blur-fade";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="flex min-h-0 w-full flex-col gap-y-6">
      <BlurFade delay={0.52}>
        <h2 className="text-xl font-bold">Certifications</h2>
      </BlurFade>

      <div className="flex w-full flex-col gap-8">
        {certifications.map((cert, index) => (
          <BlurFade key={cert.title} delay={0.6 + index * 0.05}>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-start justify-between gap-10"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-10 flex-none items-center justify-center overflow-hidden rounded-full border bg-card p-1 shadow ring-2 ring-border">
                  <Award className="size-5 text-muted-foreground" />
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold leading-none">{cert.title}</h3>
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">
                    {cert.instructor} · {cert.year}
                  </p>
                </div>
              </div>
            </a>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
