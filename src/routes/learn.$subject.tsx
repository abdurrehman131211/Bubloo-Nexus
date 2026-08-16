import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ResourceCard } from "@/components/cards";
import { ActionLink, Badge } from "@/components/ui/action";
import { Reveal, SectionHeading } from "@/components/ui/motion";
import { CommunitySection } from "@/components/sections/community";
import { RESOURCES, SITE, SUBJECTS, type Subject } from "@/lib/site-data";

export const Route = createFileRoute("/learn/$subject")({
  loader: ({ params }) => {
    const subject = SUBJECTS.find((s) => s.slug === params.subject);
    if (!subject) throw notFound();
    return { subject };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Subject not found | Bubloo Scientist" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.subject as Subject;
    const title = `${s.name} — Learn | Bubloo Scientist`;
    return {
      meta: [
        { title },
        { name: "description", content: s.description },
        { property: "og:title", content: title },
        { property: "og:description", content: s.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: SubjectNotFound,
  component: SubjectPage,
});

function SubjectNotFound() {
  return (
    <PageHeader
      eyebrow="Learn"
      title="Subject not found"
      description="That subject doesn't exist yet. Browse the subjects we currently cover instead."
    >
      <ActionLink to="/learn" variant="glow" size="md">
        Back to learning
      </ActionLink>
    </PageHeader>
  );
}

function SubjectPage() {
  const { subject } = Route.useLoaderData();
  const related = RESOURCES.filter(
    (r) => r.category.toLowerCase() === subject.name.toLowerCase() || r.category === "Quizzes",
  );

  return (
    <>
      <PageHeader eyebrow="Learn" title={subject.name} description={subject.description}>
        <div className="flex flex-wrap gap-2">
          {subject.topics.map((t) => (
            <Badge key={t} tone="accent">
              {t}
            </Badge>
          ))}
        </div>
      </PageHeader>

      <section className="shell py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="Topics" title={`What you'll cover in ${subject.name}`} />
            <ol className="mt-8 space-y-3">
              {subject.topics.map((t, i) => (
                <Reveal as="li" key={t} delay={i * 0.05}>
                  <div className="surface-panel card-hover flex items-center gap-4 p-5">
                    <span className="font-mono text-sm text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold">{t}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={subject.image}
                alt={`${subject.name} visual`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="surface-panel mt-6 p-6">
              <h3 className="text-lg font-bold">Test yourself</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Take a quiz, or ask the science companion when a concept doesn't click.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ActionLink href={SITE.quizzes} variant="subtle" size="sm">
                  Quizzes <ArrowUpRight className="h-4 w-4" />
                </ActionLink>
                <ActionLink to="/chatbot" variant="subtle" size="sm">
                  Ask the Scientist
                </ActionLink>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Resources" title={`Reading for ${subject.name}`} />
          {related.length ? (
            <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.05}>
                  <ResourceCard resource={r} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-muted-foreground">
              Resources for this subject are being written. Join the channel to hear when they land.
            </p>
          )}
        </div>
      </section>

      <CommunitySection />
    </>
  );
}
