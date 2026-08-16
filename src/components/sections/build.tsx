import { ArrowRight, Bot, Send, Terminal } from "lucide-react";
import { ProjectCard } from "@/components/cards";
import { ActionLink, Badge } from "@/components/ui/action";
import { Reveal, SectionHeading } from "@/components/ui/motion";
import { CREATIVE, PROJECTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const TOPICS = ["Programming", "Websites", "AI", "Chatbots", "Software", "Emerging tech"];

export function TechnologySection() {
  return (
    <section className="shell py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Technology"
            title="Where Science Meets Code."
            description="We don't just read about technology — we build with it. Python programs, websites, chatbots and experiments that ship."
          />
          <Reveal delay={0.1}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <li key={t}>
                  <Badge>{t}</Badge>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.18} className="mt-9">
            <ActionLink to="/learn/computer-science" variant="glow" size="lg">
              Explore Technology <ArrowRight className="h-4 w-4" />
            </ActionLink>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="surface-panel overflow-hidden shadow-[var(--shadow-panel)]">
            <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
              <Terminal className="h-4 w-4 text-accent" />
              <span className="font-mono text-xs text-muted-foreground">bubloo — zsh</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-muted-foreground">
              <code>
                <span className="text-accent">&gt;</span> build()
                {"\n"}
                <span className="text-accent">&gt;</span> experiment()
                {"\n"}
                <span className="text-accent">&gt;</span> learn()
                {"\n"}
                <span className="text-accent">&gt;</span> create()
                {"\n"}
                <span className="text-primary">// curiosity compiled successfully</span>
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProjectsSection({ limit }: { limit?: number }) {
  const [featured, ...rest] = PROJECTS;
  const others = limit ? rest.slice(0, limit) : rest;
  return (
    <section className="border-y border-border bg-background-alt py-20 lg:py-28" id="projects">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Projects"
            title="Things we have built"
            description="Websites, programs and written work — real output from the Bubloo Scientist team."
          />
          <Reveal delay={0.1}>
            <ActionLink to="/projects" variant="subtle" size="md">
              All projects
            </ActionLink>
          </Reveal>
        </div>

        {featured ? (
          <Reveal className="mt-12">
            <ProjectCard project={featured} featured />
          </Reveal>
        ) : null}

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CreativeSection() {
  return (
    <section className="shell py-20 lg:py-28" id="creative">
      <SectionHeading
        eyebrow="Creative"
        title="Creativity Has No Limits."
        description="Designs, experiments, digital creations and science visuals made while exploring ideas."
      />
      <div className="mt-12 grid auto-rows-[13rem] grid-cols-2 gap-4 lg:grid-cols-4">
        {CREATIVE.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.05}
            className={cn(
              item.span === "tall" && "row-span-2",
              item.span === "wide" && "col-span-2",
            )}
          >
            <figure className="group relative h-full overflow-hidden rounded-2xl border border-border">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background/95 to-transparent p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.kind}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ChatbotSection() {
  return (
    <section className="border-y border-border bg-background-alt py-20 lg:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="AI chatbot"
            title="Meet Your Science Companion."
            description="Ask questions, explore concepts and make difficult topics easier to understand."
          />
          <Reveal delay={0.15} className="mt-9">
            <ActionLink to="/chatbot" variant="glow" size="lg">
              Ask the Scientist <Bot className="h-4 w-4" />
            </ActionLink>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <ChatPreview />
        </Reveal>
      </div>
    </section>
  );
}

export function ChatPreview() {
  return (
    <div className="surface-panel overflow-hidden shadow-[var(--shadow-panel)]">
      <div className="flex items-center gap-3 border-b border-border bg-surface-2 px-5 py-4">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl [background-image:var(--gradient-brand)]">
          <Bot className="h-4 w-4 text-primary-foreground" />
        </span>
        <div>
          <p className="text-sm font-semibold">Bubloo Companion</p>
          <p className="text-xs text-muted-foreground">Science assistant</p>
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-br-md bg-primary px-4 py-3 text-sm text-primary-foreground">
            What is quantum mechanics?
          </p>
        </div>
        <div className="flex justify-start">
          <p className="max-w-[85%] rounded-2xl rounded-bl-md border border-border bg-surface-2 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
            Quantum mechanics is the physics of very small things — atoms, electrons and light. At
            that scale, particles behave like waves, energy comes in fixed packets called quanta,
            and results are described by probabilities instead of exact positions.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 border-t border-border px-5 py-4">
        <span className="flex-1 truncate text-sm text-muted-foreground">
          Ask about any science topic…
        </span>
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full [background-image:var(--gradient-brand)]"
        >
          <Send className="h-4 w-4 text-primary-foreground" />
        </span>
      </div>
    </div>
  );
}
