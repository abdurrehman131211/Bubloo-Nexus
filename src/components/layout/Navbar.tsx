import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ActionLink } from "@/components/ui/action";
import { SearchPalette, useSearchHotkey } from "@/components/ui/search-palette";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  useSearchHotkey(() => setSearchOpen(true));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <nav
          aria-label="Main navigation"
          className={cn(
            "shell flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
            <span
              aria-hidden="true"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl [background-image:var(--gradient-brand)]"
            >
              <span className="h-3.5 w-3.5 rounded-full bg-background/85" />
            </span>
            <span className="font-display text-base font-extrabold tracking-tight sm:text-lg">
              Bubloo <span className="text-gradient">Scientist</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeProps={{ className: "text-foreground bg-surface" }}
                  activeOptions={{ exact: link.to === "/" }}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search (Ctrl or Cmd + K)"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface/60 px-3 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            >
              <Search className="h-4 w-4" />
              <kbd className="hidden font-sans text-[0.7rem] xl:inline">⌘K</kbd>
            </button>
            <ThemeToggle />
            <ActionLink to="/contact" variant="glow" size="sm" className="hidden sm:inline-flex">
              Join us
            </ActionLink>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-90 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col border-l border-border bg-background-alt p-6"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold">Menu</span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-8 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      activeProps={{ className: "text-foreground" }}
                      activeOptions={{ exact: link.to === "/" }}
                      className="block rounded-xl px-3 py-3 text-lg font-semibold text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-3 pt-8">
                <ActionLink
                  to="/chatbot"
                  variant="outline"
                  size="md"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Ask the Scientist
                </ActionLink>
                <ActionLink to="/contact" variant="glow" size="md" className="w-full">
                  Join us
                </ActionLink>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
