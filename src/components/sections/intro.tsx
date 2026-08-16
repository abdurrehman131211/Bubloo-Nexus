import { Beaker, Cpu, GraduationCap, Palette } from "lucide-react";
import { SubjectCard } from "@/components/cards";
import { ActionLink } from "@/components/ui/action";
import { Reveal, SectionHeading } from "@/components/ui/motion";
import { SUBJECTS } from "@/lib/site-data";

const PILLARS = [
  { icon: Beaker, title: "Science", text: "Physics, chemistry and biology explained clearly." },
  { icon: Cpu, title: "Technology", text: "Coding, websites, AI and the tools we build with." },
  { icon: GraduationCap, title: "Learning", text: "Articles, guides and quizzes for real study." },
  { icon: Palette, title: "Creativity", text: "Design, experiments and ideas turned into work." },
];

export function AboutSection() {
  return (
    <section className="shell py-20 lg:py-28" aria-labelledby="about-heading">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Who we are
          </p>
          <h2 id="about-heading" className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            What is <span className="text-gradient">Bubloo Scientist</span>?
          </h2>
        </Reveal>
        <div>
          <Reveal delay={0.08}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Bubloo Scientist is a knowledge and creativity hub built around science, technology,
              learning and experimentation. With our team beside us we cover everything from physics
              to chemistry and biology — plus maths and computing — sharing day-to-day discoveries
              and a little fun along the way.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal as="li" key={p.title} delay={0.1 + i * 0.07}>
                <div className="surface-panel card-hover group flex h-full gap-4 p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-6">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.3} className="mt-8">
            <ActionLink to="/about" variant="outline" size="md">
              Get to know us
            </ActionLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SubjectExplorer({ limit }: { limit?: number }) {
  const subjects = limit ? SUBJECTS.slice(0, limit) : SUBJECTS;
  return (
    <section className="border-y border-border bg-background-alt py-20 lg:py-28" id="subjects">
      <div className="shell">
        <SectionHeading
          eyebrow="Explore subjects"
          title="Pick a subject, follow your curiosity"
          description="Every subject is a doorway. Start with what interests you today and keep going from there."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <SubjectCard subject={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
