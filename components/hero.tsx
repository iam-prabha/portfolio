import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { BlurFade } from "@/components/blur-fade";
import { Typewriter } from "@/components/typewriter";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="relative mx-auto w-full max-w-2xl scroll-mt-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="order-2 flex max-w-xl flex-col gap-6 md:order-1">
          <BlurFade delay={0.04} yOffset={8}>
            <p className="mb-4 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-emerald-700">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-500" />
              AI systems · Full-stack engineering
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-6xl">
              I build AI systems people can actually use.
            </h1>
          </BlurFade>
          <BlurFade delay={0.1} yOffset={8}>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m {personalInfo.name}, an <span className="text-foreground"><Typewriter words={personalInfo.headlines} /></span> turning complex ideas into production-ready products.
            </p>
          </BlurFade>
          <BlurFade delay={0.16} yOffset={8}>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                View projects <ArrowDown className="size-4" />
              </a>
              <a href="#contact" className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Get in touch <ArrowUpRight className="size-4" />
              </a>
            </div>
          </BlurFade>
          <BlurFade delay={0.22} yOffset={8}>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" />{personalInfo.location}</span>
              <span className="inline-flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-emerald-500" />Open to AI engineering &amp; full-stack opportunities</span>
            </div>
          </BlurFade>
        </div>
        <div className="order-1 self-start md:order-2">
          <BlurFade delay={0.04} className="inline-block">
            <span className="relative flex size-20 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm ring-8 ring-muted/50 sm:size-24 md:size-28">
              <Image
                src={personalInfo.pfp}
                alt={`${personalInfo.name} avatar`}
                width={128}
                height={128}
                className="h-full w-full object-cover"
                priority
              />
            </span>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
