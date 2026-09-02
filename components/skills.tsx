import { BlurFade } from "@/components/blur-fade";
import { SkillIcon } from "@/components/skill-icon";
import { skills } from "@/lib/data";

export function Skills() {
  const allSkills = Object.values(skills).flat();

  return (
    <section id="skills" className="flex min-h-0 flex-col gap-y-4">
      <BlurFade delay={0.36}>
        <h2 className="text-xl font-bold">Skills</h2>
      </BlurFade>
      <div className="flex flex-wrap gap-2">
        {allSkills.map((skill, index) => (
          <BlurFade key={skill} delay={0.4 + index * 0.05} className="inline-block">
            <span className="inline-flex h-7 w-fit items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-0.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:border-primary/30">
              <SkillIcon name={skill} />
              {skill}
            </span>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}