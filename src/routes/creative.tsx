import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CreativeSection } from "@/components/sections/build";
import { CommunitySection } from "@/components/sections/community";

const title = "Creative Work — Designs & Experiments | Bubloo Scientist";
const description =
  "Designs, experiments, digital creations and science visuals produced by the Bubloo Scientist team.";

export const Route = createFileRoute("/creative")({
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
  component: CreativePage,
});

function CreativePage() {
  return (
    <>
      <PageHeader
        eyebrow="Creative"
        title="Creativity Has No Limits."
        description="Where the science stops being only reading: visuals, designs and experiments made while exploring ideas."
      />
      <CreativeSection />
      <CommunitySection />
    </>
  );
}
