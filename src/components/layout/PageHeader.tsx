import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ScienceBackground } from "@/components/hero/ScienceBackground";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border hero-aura">
      <ScienceBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-50" />
      <div className="pointer-events-none absolute inset-0 grid-backdrop" />
      <div className="shell relative max-w-3xl pb-16 pt-32 sm:pb-20 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-accent"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14 }}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
