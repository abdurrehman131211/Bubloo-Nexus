import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "@/components/cards";
import { ActionLink, Badge } from "@/components/ui/action";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal, SectionHeading } from "@/components/ui/motion";
import { BLOGS, formatDate, type BlogPost } from "@/lib/site-data";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = BLOGS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found | Bubloo Scientist" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const post = loaderData.post as BlogPost;
    const title = `${post.title} | Bubloo Scientist`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <PageHeader
      eyebrow="Blogs"
      title="Article not found"
      description="This article doesn't exist or has moved. Browse everything we've published instead."
    >
      <ActionLink to="/blogs" variant="glow" size="md">
        All articles
      </ActionLink>
    </PageHeader>
  );
}

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const related = BLOGS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="hero-aura border-b border-border">
          <div className="shell max-w-3xl pb-14 pt-32 lg:pt-40">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <Badge tone="accent">{post.category}</Badge>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.author ? <span>· {post.author}</span> : null}
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </div>
        </header>

        {post.image ? (
          <div className="shell max-w-4xl pt-10">
            <img
              src={post.image}
              alt={`Illustration for ${post.title}`}
              loading="lazy"
              className="w-full rounded-2xl border border-border object-cover"
            />
          </div>
        ) : null}

        <div className="shell max-w-3xl py-14">
          {post.body.map((para) => (
            <p key={para.slice(0, 24)} className="mb-6 text-base leading-relaxed text-muted-foreground">
              {para}
            </p>
          ))}
          <ActionLink href={post.source} variant="outline" size="md">
            Read the original post <ArrowUpRight className="h-4 w-4" />
          </ActionLink>
        </div>
      </article>

      <section className="border-t border-border bg-background-alt py-20">
        <div className="shell">
          <SectionHeading eyebrow="Keep reading" title="More from the lab" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
