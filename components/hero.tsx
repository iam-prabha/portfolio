import Image from "next/image";
import { BlurFade } from "@/components/blur-fade";
import { Typewriter } from "@/components/typewriter";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="mx-auto w-full max-w-2xl space-y-8">
      <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
        <div className="order-2 flex flex-col gap-2 md:order-1">
          <div className="flex">
            <BlurFade delay={0.04} yOffset={8} className="inline-block">
              <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                Hi, I&apos;m {personalInfo.name}
              </h1>
            </BlurFade>
          </div>
          <div className="flex">
            <BlurFade delay={0.04} yOffset={8} className="inline-block">
              <p className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl">
                <Typewriter words={personalInfo.headlines} />
              </p>
            </BlurFade>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <BlurFade delay={0.04} className="inline-block">
            <span className="relative flex size-24 shrink-0 overflow-hidden rounded-full border shadow-lg ring-4 ring-muted md:size-32">
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
