import { BlurFade } from "@/components/blur-fade";
import { aboutText } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="flex min-h-0 flex-col gap-y-4">
      <BlurFade delay={0.12}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={0.16}>
        <p className="text-muted-foreground leading-relaxed">{aboutText}</p>
      </BlurFade>
    </section>
  );
}
