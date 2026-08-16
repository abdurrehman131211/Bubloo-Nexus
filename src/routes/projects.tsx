import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsSection, TechnologySection } from "@/components/sections/build";
import { CommunitySection } from "@/components/sections/community";

const title = "Projects — Websites, Code & Business | Bubloo Scientist";
const description =
  "A portfolio of Bubloo Scientist projects: a motorsports website, a science chatbot, Python programs and an entrepreneurship series.";

export const Route = createFileRoute("/projects")({
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
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Built, shipped, shared"
        description="Websites, programs and written work — real projects from the team, not concepts."
      />
      <ProjectsSection />
      <TechnologySection />
      <CommunitySection />
    </>
  );
}
