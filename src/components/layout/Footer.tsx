import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-data";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Science", to: "/explore" },
      { label: "Technology", to: "/learn/computer-science" },
      { label: "Learning", to: "/learn" },
      { label: "Creative", to: "/creative" },
      { label: "Projects", to: "/projects" },
      { label: "Blogs", to: "/blogs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Team", to: "/team" },
      { label: "Contact", to: "/contact" },
      { label: "Chatbot", to: "/chatbot" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt">
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl [background-image:var(--gradient-brand)]"
            >
              <span className="h-3.5 w-3.5 rounded-full bg-background/85" />
            </span>
            <span className="font-display text-lg font-extrabold">Bubloo Scientist</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Science, technology, creativity and learning — a hub where curiosity becomes knowledge.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {col.title}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to + l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Community
          </h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={SITE.whatsappChannel}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp channel
              </a>
            </li>
            <li>
              <a
                href={SITE.quizzes}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Quizzes & surveys
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bubloo Scientist. All rights reserved.</p>
          <p>Built by the Bubloo Scientist team.</p>
        </div>
      </div>
    </footer>
  );
}
