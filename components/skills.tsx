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
            <span className="flex h-8 w-fit items-center gap-2 rounded-xl border bg-background px-4 ring-2 ring-border/20">
              <SkillIcon name={skill} />
              {skill}
            </span>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
