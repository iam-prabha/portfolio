import { BlurFade } from "@/components/blur-fade";
import { GridPattern } from "@/components/grid-pattern";
import { personalInfo } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative rounded-xl border p-10">
      <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1">
        <span className="text-sm font-medium text-background">Contact</span>
      </div>

      <GridPattern className="h-1/2 rounded-xl" />

      <BlurFade delay={0.64} className="relative">
        <div className="flex flex-col items-center justify-center gap-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
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
        </div>
      </BlurFade>
    </section>
  );
}
