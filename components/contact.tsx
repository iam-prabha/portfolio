import { BlurFade } from "@/components/blur-fade";
import { GridPattern } from "@/components/grid-pattern";
import { personalInfo } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.03] p-7 sm:p-10">

      <GridPattern className="h-1/2 rounded-xl" />

      <BlurFade delay={0.64} className="relative">
        <div className="flex flex-col items-center justify-center gap-y-3 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-700">Contact</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-balance">
            Want to chat about AI systems, full stack engineering, or
            collaboration? Just shoot me a{" "}
            <a
              href={personalInfo.xFollow}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              dm on X
            </a>{" "}
            and I&apos;ll respond whenever I can.
          </p>
          <a href={`mailto:${personalInfo.email}`} className="mt-2 inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            Email me
          </a>
        </div>
      </BlurFade>
    </section>
  );
}
