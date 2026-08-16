import { Link } from "@tanstack/react-router";
import { Atom, Code2, Dna, FlaskConical, Sigma, ArrowUpRight, Clock } from "lucide-react";
import { ActionLink, Badge } from "@/components/ui/action";
import {
  formatDate,
  type BlogPost,
  type Project,
  type Resource,
  type Subject,
  type TeamMember,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

const ICONS = {
  atom: Atom,
  flask: FlaskConical,
  dna: Dna,
  sigma: Sigma,
  code: Code2,
};

export function SubjectCard({ subject }: { subject: Subject }) {
  const Icon = ICONS[subject.icon];
  return (
    <article className="surface-panel card-hover group relative flex h-full flex-col p-6">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent transition-colors group-hover:border-accent/40">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-xl font-bold">{subject.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {subject.description}
      </p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {subject.topics.length} topics
        </span>
        <Link
          to="/learn/$subject"
          params={{ subject: subject.slug }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5"
        >
          Explore <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="card-hover group flex h-full flex-col border-t border-border pt-6">
      <div className="flex items-center gap-3">
        <Badge tone="accent">{resource.category}</Badge>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" /> {resource.minutes} min
        </span>
      </div>
      <h3 className="mt-4 text-lg font-bold leading-snug">{resource.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {resource.description}
      </p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {resource.level}
        </span>
        <ActionLink href={resource.href} to={resource.href} variant="ghost" size="sm">
          Open <ArrowUpRight className="h-4 w-4" />
        </ActionLink>
      </div>
    </article>
  );
}

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "surface-panel card-hover group relative flex flex-col overflow-hidden",
        featured && "lg:flex-row",
      )}
    >
      {project.image ? (
        <div className={cn("overflow-hidden", featured ? "lg:w-1/2" : "aspect-[16/10]")}>
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            width={1280}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      ) : null}
      <div className={cn("flex flex-1 flex-col p-6", featured && "lg:p-10")}>
        <div className="flex items-center gap-2">
          <Badge tone="primary">{project.category}</Badge>
          {featured ? <Badge>Featured</Badge> : null}
        </div>
        <h3 className={cn("mt-4 font-bold", featured ? "text-2xl lg:text-3xl" : "text-xl")}>
          {project.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[0.7rem] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <ActionLink href={project.href} to={project.href} variant="subtle" size="sm">
            View project <ArrowUpRight className="h-4 w-4" />
          </ActionLink>
        </div>
      </div>
    </article>
  );
}

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article
      className={cn(
        "surface-panel card-hover group flex flex-col overflow-hidden",
        featured && "lg:flex-row",
      )}
    >
      {post.image ? (
        <div className={cn("overflow-hidden", featured ? "lg:w-3/5" : "aspect-[16/9]")}>
          <img
            src={post.image}
            alt={`Illustration for ${post.title}`}
            loading="lazy"
            width={1280}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      ) : null}
      <div className={cn("flex flex-1 flex-col p-6", featured && "lg:justify-center lg:p-10")}>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <Badge tone="accent">{post.category}</Badge>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h3 className={cn("mt-4 font-bold leading-snug", featured ? "text-2xl lg:text-3xl" : "text-lg")}>
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link
          to="/blogs/$slug"
          params={{ slug: post.slug }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5"
        >
          Read article <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
  return (
    <article className="surface-panel card-hover group flex h-full flex-col items-start p-6">
      <span
        aria-hidden="true"
        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border text-lg font-bold text-primary-foreground [background-image:var(--gradient-brand)]"
      >
        {initials}
      </span>
      <h3 className="mt-5 text-lg font-bold leading-snug">{member.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {member.role}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
      {member.links.length ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {member.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
