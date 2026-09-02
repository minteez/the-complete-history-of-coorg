import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EvidenceBadge, type EvidenceLevel } from "./EvidenceBadge";
import { Quote, ScrollText } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  native,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  native?: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <p className="rule-eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
        {native ? <p className="mt-3 text-lg text-accent-foreground/80">{native}</p> : null}
        {lede ? (
          <p className="prose-archive mt-5 max-w-2xl text-lg text-muted-foreground">{lede}</p>
        ) : null}
        {children}
      </div>
    </header>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  lede,
  level,
  className,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lede?: string;
  level?: EvidenceLevel;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:py-16", className)}>
      {(eyebrow || title) && (
        <div className="mb-8 max-w-3xl">
          {eyebrow ? <p className="rule-eyebrow">{eyebrow}</p> : null}
          <div className="mt-2 flex flex-wrap items-center gap-3">
            {title ? <h2 className="text-3xl sm:text-4xl">{title}</h2> : null}
            {level ? <EvidenceBadge level={level} showHint /> : null}
          </div>
          {lede ? <p className="prose-archive mt-4 text-muted-foreground">{lede}</p> : null}
        </div>
      )}
      {children}
    </section>
  );
}

export function InfoPanel({
  title,
  tone = "neutral",
  icon: Icon = ScrollText,
  children,
}: {
  title: string;
  tone?: "neutral" | "caution" | "forest";
  icon?: typeof ScrollText;
  children: ReactNode;
}) {
  const tones = {
    neutral: "border-border bg-secondary/50",
    caution: "border-destructive/30 bg-destructive/5",
    forest: "border-primary/30 bg-primary/5",
  } as const;
  return (
    <aside className={cn("rounded-lg border p-5 sm:p-6", tones[tone])}>
      <h3 className="flex items-center gap-2 text-lg">
        <Icon aria-hidden="true" className="size-4.5 text-accent" />
        {title}
      </h3>
      <div className="prose-archive mt-3 text-sm">{children}</div>
    </aside>
  );
}

export function Pullquote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <figure className="border-l-2 border-accent pl-5">
      <blockquote className="font-display text-xl leading-relaxed text-foreground/90">
        <Quote aria-hidden="true" className="mb-2 size-5 text-accent" />
        {children}
      </blockquote>
      {cite ? <figcaption className="mt-2 text-sm text-muted-foreground">— {cite}</figcaption> : null}
    </figure>
  );
}

export function ArchiveFigure({
  src,
  alt,
  caption,
  credit,
  note,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
  note?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn("archive-card overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="aspect-[3/2] w-full object-cover"
      />
      <figcaption className="space-y-1 border-t border-border p-4 text-sm">
        <p className="text-foreground/90">{caption}</p>
        {credit ? <p className="text-xs text-muted-foreground">{credit}</p> : null}
        {note ? <p className="text-xs italic text-muted-foreground">{note}</p> : null}
      </figcaption>
    </figure>
  );
}
