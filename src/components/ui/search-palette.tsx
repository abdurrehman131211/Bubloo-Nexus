import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { BLOGS, PROJECTS, RESOURCES, SUBJECTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Item = { group: string; title: string; subtitle: string; href: string };

function buildIndex(): Item[] {
  return [
    ...SUBJECTS.map((s) => ({
      group: "Science topics",
      title: s.name,
      subtitle: s.short,
      href: `/learn/${s.slug}`,
    })),
    ...RESOURCES.map((r) => ({
      group: "Learning resources",
      title: r.title,
      subtitle: `${r.category} · ${r.minutes} min`,
      href: r.href,
    })),
    ...BLOGS.map((b) => ({
      group: "Articles",
      title: b.title,
      subtitle: b.category,
      href: `/blogs/${b.slug}`,
    })),
    ...PROJECTS.map((p) => ({
      group: "Projects",
      title: p.name,
      subtitle: p.category,
      href: p.href.startsWith("http") ? p.href : p.href,
    })),
    { group: "Pages", title: "Chatbot", subtitle: "Ask the science companion", href: "/chatbot" },
    { group: "Pages", title: "Team", subtitle: "The people behind Bubloo", href: "/team" },
    { group: "Pages", title: "Contact", subtitle: "Get in touch", href: "/contact" },
  ];
}

export function SearchPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? index.filter((i) => (i.title + i.subtitle + i.group).toLowerCase().includes(q))
      : index.slice(0, 8);
    return list.reduce<Record<string, Item[]>>((acc, item) => {
      (acc[item.group] ||= []).push(item);
      return acc;
    }, {});
  }, [index, query]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const go = (href: string) => {
    onClose();
    if (href.startsWith("http")) window.open(href, "_blank", "noopener");
    else navigate({ to: href });
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-100 flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Search Bubloo Scientist"
        >
          <button
            type="button"
            aria-label="Close search"
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="surface-panel relative w-full max-w-xl overflow-hidden shadow-[var(--shadow-panel)]"
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, topics, projects…"
                aria-label="Search query"
                className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-[0.65rem] text-muted-foreground sm:block">
                ESC
              </kbd>
            </div>
            <div className="max-h-[55vh] overflow-y-auto p-2">
              {Object.keys(results).length === 0 ? (
                <p className="px-3 py-8 text-center text-sm text-muted-foreground">
                  No results for “{query}”.
                </p>
              ) : (
                Object.entries(results).map(([group, items]) => (
                  <div key={group} className="mb-2">
                    <p className="px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {group}
                    </p>
                    {items.map((item) => (
                      <button
                        key={group + item.title}
                        type="button"
                        onClick={() => go(item.href)}
                        className={cn(
                          "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-surface-2",
                        )}
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-medium">{item.title}</span>
                          <span className="block truncate text-xs text-muted-foreground">
                            {item.subtitle}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                      </button>
                    ))}
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function useSearchHotkey(onOpen: () => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpen();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onOpen]);
}
