import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CommunitySection, TeamSection } from "@/components/sections/community";

const title = "Team — The people behind Bubloo Scientist";
const description =
  "Meet the Bubloo Scientist team: writers, developers, designers, marketers and the AI bot manager.";

export const Route = createFileRoute("/team")({
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
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Generating ideas is teamwork"
        description="From designing to content creation, we work together to accomplish every task."
      />
      <TeamSection />
      <CommunitySection />
    </>
  );
}
