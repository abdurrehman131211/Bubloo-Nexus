import { ArrowRight, MessageCircle, Quote } from "lucide-react";
import { BlogCard, TeamCard } from "@/components/cards";
import { ActionLink } from "@/components/ui/action";
import { Counter, Reveal, SectionHeading } from "@/components/ui/motion";
import { BLOGS, SITE, STATS, TEAM, TESTIMONIALS } from "@/lib/site-data";

export function TeamSection({ limit }: { limit?: number }) {
  const members = limit ? TEAM.slice(0, limit) : TEAM;
  return (
    <section className="shell py-20 lg:py-28" id="team">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Team"
          title="Generating ideas is teamwork"
          description="From design to content creation, we work together to get things done."
        />
        {limit ? (
          <Reveal delay={0.1}>
            <ActionLink to="/team" variant="subtle" size="md">
              Meet the whole team
            </ActionLink>
          </Reveal>
        ) : null}
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.05}>
            <TeamCard member={m} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="border-y border-border bg-background-alt py-16">
      <dl className="shell grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <dt className="text-4xl font-extrabold lg:text-5xl">
              <Counter value={s.value} suffix={s.suffix} className="text-gradient" />
            </dt>
            <dd className="mt-2 text-sm text-muted-foreground">{s.label}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="shell py-20 lg:py-28">
      <SectionHeading
        eyebrow="Supporters"
        title="What our viewers say"
        description="Feedback from the people who read and support Bubloo Scientist."
        align="center"
      />
      <div className="mx-auto mt-12 grid max-w-3xl gap-5">
        {TESTIMONIALS.map((t) => (
          <Reveal key={t.quote}>
            <figure className="surface-panel p-8">
              <Quote className="h-6 w-6 text-accent" />
              <blockquote className="mt-4 text-lg leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="text-muted-foreground"> · {t.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section className="shell py-20 lg:py-28">
      <Reveal>
        <div className="hero-aura surface-panel relative overflow-hidden px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl animate-glow" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Join the Curious.</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Connect with people who love science, technology, learning and building new things.
              Join the channel and vote on the topics we cover next.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ActionLink href={SITE.whatsappChannel} variant="glow" size="lg">
                <MessageCircle className="h-4 w-4" /> Join our WhatsApp channel
              </ActionLink>
              <ActionLink to="/contact" variant="outline" size="lg">
                Contact the team <ArrowRight className="h-4 w-4" />
              </ActionLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function BlogSection({ limit = 4 }: { limit?: number }) {
  const posts = [...BLOGS].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = posts;
  return (
    <section className="border-t border-border bg-background-alt py-20 lg:py-28" id="blogs">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Blogs"
            title="From the Lab"
            description="The latest writing from the team — science explainers, project notes and reviews."
          />
          <Reveal delay={0.1}>
            <ActionLink to="/blogs" variant="subtle" size="md">
              All articles
            </ActionLink>
          </Reveal>
        </div>
        {featured ? (
          <Reveal className="mt-12">
            <BlogCard post={featured} featured />
          </Reveal>
        ) : null}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(0, limit - 1).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
