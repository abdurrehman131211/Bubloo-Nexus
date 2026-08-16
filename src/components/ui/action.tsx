import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:brightness-110 hover:shadow-[var(--shadow-glow)] active:scale-[0.98]",
        glow: "text-primary-foreground [background-image:var(--gradient-brand)] hover:shadow-[var(--shadow-glow)] active:scale-[0.98]",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:border-primary hover:bg-surface",
        ghost: "text-muted-foreground hover:bg-surface hover:text-foreground",
        subtle: "bg-surface text-foreground border border-border hover:border-border-strong",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Variants = VariantProps<typeof actionVariants>;

export function Button({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & Variants) {
  return <button className={cn(actionVariants({ variant, size }), className)} {...props} />;
}

export function ActionLink({
  to,
  href,
  external,
  variant,
  size,
  className,
  children,
  ...rest
}: {
  to?: string;
  href?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
  params?: Record<string, string>;
} & Variants) {
  const cls = cn(actionVariants({ variant, size }), className);
  const isExternal = external ?? (href ? /^https?:/.test(href) : false);
  if (to && !isExternal) {
    return (
      <Link to={to} className={cls} {...(rest as object)}>
        {children}
      </Link>
    );
  }
  const url = href ?? to ?? "#";
  if (/^https?:/.test(url)) {
    return (
      <a href={url} target="_blank" rel="noreferrer noopener" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={url} className={cls} {...(rest as object)}>
      {children}
    </Link>
  );
}

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent" | "primary";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em]",
        tone === "default" && "border-border bg-surface text-muted-foreground",
        tone === "accent" && "border-accent/30 bg-accent/10 text-accent",
        tone === "primary" && "border-primary/30 bg-primary/10 text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
