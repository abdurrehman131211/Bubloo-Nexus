import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import { ScienceBackground } from "@/components/hero/ScienceBackground";
import { ActionLink } from "@/components/ui/action";

export function HeroSection() {
  const reduced = useReducedMotion();
  return (
    <section className="relative overflow-hidden hero-aura">
      <ScienceBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 grid-backdrop" />
      <div className="shell relative grid items-center gap-14 pb-20 pt-28 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-36">
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            A hub for science, technology & creativity
          </motion.p>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-[4.25rem]"
          >
            Explore. Learn.{" "}
            <span className="text-gradient">Create.</span>
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Discover science, technology, creativity and ideas that turn curiosity into knowledge.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <ActionLink to="/explore" variant="glow" size="lg">
              Start Exploring <ArrowRight className="h-4 w-4" />
            </ActionLink>
            <ActionLink to="/learn" variant="outline" size="lg">
              Learn With Us
            </ActionLink>
          </motion.div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["Physics · Chemistry · Biology", "Core science"],
              ["Maths & Computing", "Logic and code"],
              ["Projects & Creative", "Built by the team"],
            ].map(([title, label]) => (
              <div key={title}>
                <dt className="text-sm font-semibold leading-snug">{title}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-6 rounded-full bg-primary/20 blur-3xl animate-glow" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-panel)]">
            <img
              src={heroVisual}
              alt="Glowing molecular lattice surrounding a luminous sphere, representing scientific structure"
              width={1280}
              height={1280}
              className="h-auto w-full animate-float"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
