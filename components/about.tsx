import { BlurFade } from "@/components/blur-fade";
import { aboutText } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="flex min-h-0 scroll-mt-8 flex-col gap-y-4">
      <BlurFade delay={0.12}>
        <h2 className="border-b border-border pb-3 text-2xl font-semibold tracking-tight">About</h2>
      </BlurFade>
      <BlurFade delay={0.16}>
        <p className="text-muted-foreground leading-relaxed">{aboutText}</p>
      </BlurFade>
    </section>
  );
}
