import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { ResourceCard } from "@/components/cards";
import { ActionLink, Badge } from "@/components/ui/action";
import { Reveal, SectionHeading } from "@/components/ui/motion";
import { DISCOVERIES, RESOURCES } from "@/lib/site-data";

export function LearningSection({ limit }: { limit?: number }) {
  const items = limit ? RESOURCES.slice(0, limit) : RESOURCES;
  return (
    <section className="shell py-20 lg:py-28" id="learning">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Learning"
          title="Learn Something New"
          description="Articles, tutorials, explanations, quizzes and science facts — written to be understood, not memorised."
        />
        <Reveal delay={0.1}>
          <ActionLink to="/learn" variant="subtle" size="md">
            All learning resources
          </ActionLink>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.05}>
            <ResourceCard resource={r} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function DiscoverySection() {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden border-y border-border bg-background-alt py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Discoveries"
            title="Science, Every Day."
            description="Small facts that change how you see ordinary things — pulled from space, biology, physics, chemistry, technology and nature."
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll discoveries left"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll discoveries right"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scroller}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:px-8"
      >
        {DISCOVERIES.map((d) => (
          <article
            key={d.title}
            className="surface-panel card-hover group w-[80vw] shrink-0 snap-start overflow-hidden sm:w-[22rem]"
          >
            {d.image ? (
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={d.image}
                  alt={`${d.category} visual for ${d.title}`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
            ) : (
              <div className="hero-aura aspect-[16/10]" />
            )}
            <div className="p-6">
              <Badge tone="accent">{d.category}</Badge>
              <h3 className="mt-4 text-lg font-bold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.fact}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
