import { BlurFade } from "@/components/blur-fade";
import { personalInfo } from "@/lib/data";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type ContributionsResponse = {
  total: { lastYear?: number };
  contributions?: Contribution[];
};

const LEVEL_CLASSES = [
  "bg-muted",
  "bg-emerald-500/15",
  "bg-emerald-500/35",
  "bg-emerald-500/60",
  "bg-emerald-500/90",
];

function toISODate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function buildWeeks(today: Date) {
  const yearStart = new Date(today.getFullYear(), 0, 1);
  const end = new Date(today);
  end.setDate(end.getDate() + (6 - end.getDay()));
  const start = new Date(yearStart);
  start.setDate(start.getDate() - start.getDay());

  const weeks: Date[][] = [];
  const cursor = new Date(start);
  while (cursor <= end) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

async function fetchContributions(year: number) {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${personalInfo.githubUsername}?y=${year}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as ContributionsResponse;
    return data.contributions ?? null;
  } catch {
    return null;
  }
}

export async function Contributions() {
  const today = new Date();
  const year = today.getFullYear();
  const contributions = await fetchContributions(year);
  if (!contributions) return null;

  const byDate = new Map(contributions.map((c) => [c.date, c]));
  const yearStart = new Date(year, 0, 1);
  const weeks = buildWeeks(today);
  const total = contributions.reduce((sum, c) => sum + c.count, 0);

  return (
    <section id="contributions" className="flex min-h-0 flex-col gap-y-4">
      <BlurFade delay={0.2}>
        <h2 className="text-xl font-bold">Contribution</h2>
      </BlurFade>
      <BlurFade delay={0.24}>
        <div className="overflow-x-auto pb-1">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="grid w-max grid-rows-7 grid-flow-col gap-0.5"
          >
            {weeks.flat().map((date) => {
              const dateStr = toISODate(date);
              const inRange = date >= yearStart && date <= today;
              const contribution = byDate.get(dateStr);
              const count = contribution?.count ?? 0;
              const level = contribution?.level ?? 0;
              return (
                <span
                  key={dateStr}
                  {...(inRange
                    ? {
                        title: `${count} contribution${count === 1 ? "" : "s"} on ${dateStr}`,
                      }
                    : {})}
                  className={`size-2 rounded-xs ${inRange ? (LEVEL_CLASSES[level] ?? LEVEL_CLASSES[0]) : "bg-transparent"}`}
                />
              );
            })}
          </a>
        </div>
      </BlurFade>
      <BlurFade delay={0.28}>
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>
            {total} contributions in {year}
          </p>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            {LEVEL_CLASSES.map((className) => (
              <span
                key={className}
                className={`size-2 rounded-xs ${className}`}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
