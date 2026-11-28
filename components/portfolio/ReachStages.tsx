"use client";

import { reachStages } from "@/data/portfolio";

export default function ReachStages() {
  return (
    <div className="z-stages" id="zStages" role="group" aria-label="Jump to a stage">
      {reachStages.map((stage, index) => (
        <button
          type="button"
          key={stage.name}
          aria-pressed={index === 0}
          onClick={() => window.dispatchEvent(new CustomEvent("reach:stage-select", { detail: index }))}
        >
          {stage.name}
        </button>
      ))}
    </div>
  );
}
