import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { SubjectExplorer } from "@/components/sections/intro";
import { LearningSection } from "@/components/sections/learning";
import { CommunitySection } from "@/components/sections/community";

const title = "Learn — Science, Maths & Computing | Bubloo Scientist";
const description =
  "Articles, tutorials, explanations and quizzes across physics, chemistry, biology, mathematics and computer science.";

export const Route = createFileRoute("/learn/")({
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
  component: LearnPage,
});

function LearnPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learning"
        title="Learn Something New"
        description="Pick a subject or jump straight into a resource. Everything here is written to be understood the first time."
      />
      <SubjectExplorer />
      <LearningSection />
      <CommunitySection />
    </>
  );
}
