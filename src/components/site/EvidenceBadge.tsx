import { cn } from "@/lib/utils";
import {
  BadgeCheck,
  BookOpen,
  CircleHelp,
  GraduationCap,
  Landmark,
  Scale,
  Users,
} from "lucide-react";

export type EvidenceLevel =
  | "documented"
  | "traditional"
  | "scholarly"
  | "disputed"
  | "uncertain"
  | "colonial"
  | "community";

const CONFIG: Record<
  EvidenceLevel,
  { label: string; icon: typeof BadgeCheck; className: string; hint: string }
> = {
  documented: {
    label: "Documented",
    icon: BadgeCheck,
    className: "border-primary/40 bg-primary/10 text-primary",
    hint: "Supported by dated records, inscriptions, legislation or official publications.",
  },
  traditional: {
    label: "Traditional Account",
    icon: BookOpen,
    className: "border-accent/50 bg-accent/15 text-accent-foreground",
    hint: "Handed down through oral or literary tradition; not independently verified.",
  },
  scholarly: {
    label: "Scholarly Interpretation",
    icon: GraduationCap,
    className: "border-chart-5/40 bg-chart-5/10 text-chart-5",
    hint: "A reading proposed by researchers, open to revision.",
  },
  disputed: {
    label: "Disputed",
    icon: Scale,
    className: "border-destructive/40 bg-destructive/10 text-destructive",
    hint: "Sources or historians substantially disagree.",
  },
  uncertain: {
    label: "Uncertain",
    icon: CircleHelp,
    className: "border-muted-foreground/40 bg-muted text-muted-foreground",
    hint: "Evidence is thin, indirect or incomplete.",
  },
  colonial: {
    label: "Colonial Account",
    icon: Landmark,
    className: "border-copper/50 bg-copper/10 text-copper",
    hint: "Recorded by colonial officials or missionaries; read with attention to bias.",
  },
  community: {
    label: "Community Tradition",
    icon: Users,
    className: "border-earth/40 bg-earth/10 text-earth",
    hint: "Knowledge maintained within the community and its institutions.",
  },
};

export function EvidenceBadge({
  level,
  className,
  showHint = false,
}: {
  level: EvidenceLevel;
  className?: string;
  showHint?: boolean;
}) {
  const config = CONFIG[level];
  const Icon = config.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em]",
        config.className,
        className,
      )}
      title={showHint ? config.hint : undefined}
    >
      <Icon aria-hidden="true" className="size-3.5" />
      {config.label}
    </span>
  );
}

export function EvidenceKey() {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {(Object.keys(CONFIG) as EvidenceLevel[]).map((level) => (
        <div key={level} className="archive-card p-4">
          <dt>
            <EvidenceBadge level={level} />
          </dt>
          <dd className="mt-2 text-sm text-muted-foreground">{CONFIG[level].hint}</dd>
        </div>
      ))}
    </dl>
  );
}
