import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { AboutSection } from "@/components/sections/intro";
import {
  CommunitySection,
  StatsSection,
  TeamSection,
  TestimonialsSection,
} from "@/components/sections/community";

const title = "About Bubloo Scientist — A Hub for Knowledge";
const description =
  "Bubloo Scientist is a knowledge and creativity hub built around science, technology, learning and experimentation.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A hub for knowledge"
        description="We help you learn about science — and we build with what we learn. Sparking science, infinite ideas, and plenty of tech talk."
      />
      <AboutSection />
      <StatsSection />
      <TeamSection limit={4} />
      <TestimonialsSection />
      <CommunitySection />
    </>
  );
}
