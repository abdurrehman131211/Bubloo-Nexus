import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { ChatPreview } from "@/components/sections/build";
import { ActionLink } from "@/components/ui/action";
import { Reveal, SectionHeading } from "@/components/ui/motion";
import { CommunitySection } from "@/components/sections/community";
import { SITE } from "@/lib/site-data";

const title = "Science Chatbot — Ask the Scientist | Bubloo Scientist";
const description =
  "Our science companion explains difficult concepts in simple language. Ask questions and explore topics at your own pace.";

export const Route = createFileRoute("/chatbot")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChatbotPage,
});

const HELPS = [
  ["Explain a concept", "Ask for a plain-language explanation of any science topic."],
  ["Break down homework", "Work through a problem step by step instead of guessing."],
  ["Go deeper", "Follow up until the idea actually clicks."],
];

function ChatbotPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI chatbot"
        title="Meet Your Science Companion."
        description="Ask questions, explore concepts and make difficult topics easier to understand."
      >
        <ActionLink href={SITE.whatsappChannel} variant="glow" size="lg">
          Ask the Scientist
        </ActionLink>
      </PageHeader>

      <section className="shell grid items-start gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <ChatPreview />
        </Reveal>
        <div>
          <SectionHeading eyebrow="How it helps" title="Built for real studying" />
          <ul className="mt-8 space-y-4">
            {HELPS.map(([h, t], i) => (
              <Reveal as="li" key={h} delay={i * 0.06}>
                <div className="surface-panel card-hover p-5">
                  <h3 className="font-bold">{h}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            The chatbot is managed by our AI bot manager and improved as readers use it.
          </p>
        </div>
      </section>

      <CommunitySection />
    </>
  );
}
