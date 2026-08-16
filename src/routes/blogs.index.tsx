import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { BlogSection, CommunitySection } from "@/components/sections/community";

const title = "Blogs — From the Lab | Bubloo Scientist";
const description =
  "Science explainers, project notes and book reviews written by the Bubloo Scientist team.";

export const Route = createFileRoute("/blogs/")({
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
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blogs"
        title="From the Lab"
        description="Everything the team has written — chemistry, biology, coding, projects and reviews."
      />
      <BlogSection limit={99} />
      <CommunitySection />
    </>
  );
}
