import {
  CONFIDENCE_LABEL,
  READINESS_LABEL,
  type Confidence,
  type ReadinessState,
} from "@/lib/research-types";

const confidenceClass: Record<Confidence, string> = {
  confirmed: "bg-[var(--confirmed-bg)] text-[var(--confirmed)]",
  "strong-indicator": "bg-[var(--indicator-bg)] text-[var(--indicator)]",
  inference: "bg-[var(--inference-bg)] text-[var(--inference)]",
  unknown: "bg-[var(--unknown-bg)] text-[var(--unknown)]",
};

const readinessClass: Record<ReadinessState, string> = {
  strong: "bg-[var(--ok-bg)] text-[var(--ok)]",
  functional: "bg-[var(--indicator-bg)] text-[var(--indicator)]",
  friction: "bg-[var(--warn-bg)] text-[var(--warn)]",
  gap: "bg-[var(--critical-bg)] text-[var(--critical)]",
  unknown: "bg-[var(--unknown-bg)] text-[var(--unknown)]",
};

export function ConfidenceBadge({
  confidence,
  compact = false,
}: {
  confidence: Confidence;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide ${confidenceClass[confidence]}`}
      title={CONFIDENCE_LABEL[confidence]}
    >
      {compact
        ? confidence === "strong-indicator"
          ? "Indicator"
          : confidence === "inference"
            ? "Inference"
            : confidence === "unknown"
              ? "Unknown"
              : "Confirmed"
        : CONFIDENCE_LABEL[confidence]}
    </span>
  );
}

export function ReadinessBadge({ state }: { state: ReadinessState }) {
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide ${readinessClass[state]}`}
    >
      {READINESS_LABEL[state]}
    </span>
  );
}
