import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection, SubjectExplorer } from "@/components/sections/intro";
import { DiscoverySection, LearningSection } from "@/components/sections/learning";
import {
  ChatbotSection,
  CreativeSection,
  ProjectsSection,
  TechnologySection,
} from "@/components/sections/build";
import {
  BlogSection,
  CommunitySection,
  StatsSection,
  TeamSection,
  TestimonialsSection,
} from "@/components/sections/community";

const title = "Bubloo Scientist — Explore. Learn. Create.";
const description =
  "A science and technology hub: physics, chemistry, biology, maths and computing explained, plus projects, creative work and an AI science companion.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SubjectExplorer />
      <LearningSection limit={3} />
      <DiscoverySection />
      <TechnologySection />
      <ProjectsSection limit={3} />
      <CreativeSection />
      <ChatbotSection />
      <StatsSection />
      <TeamSection limit={4} />
      <TestimonialsSection />
      <CommunitySection />
      <BlogSection />
    </>
  );
}
