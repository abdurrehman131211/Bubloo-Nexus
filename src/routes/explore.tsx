import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { SubjectExplorer } from "@/components/sections/intro";
import { DiscoverySection } from "@/components/sections/learning";
import { CommunitySection, StatsSection } from "@/components/sections/community";
import { TechnologySection } from "@/components/sections/build";

const title = "Explore Science — Discoveries & Subjects | Bubloo Scientist";
const description =
  "Explore science subjects and everyday discoveries across space, the human body, physics, chemistry, technology and nature.";

export const Route = createFileRoute("/explore")({
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
  component: ExplorePage,
});

function ExplorePage() {
  return (
    <>
      <PageHeader
        eyebrow="Explore"
        title="Start Exploring"
        description="Curiosity first. Browse subjects, read a discovery, then follow whichever thread pulls hardest."
      />
      <SubjectExplorer />
      <DiscoverySection />
      <TechnologySection />
      <StatsSection />
      <CommunitySection />
    </>
  );
}
