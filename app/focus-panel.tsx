"use client";

import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";

type FocusIconName = "calendar" | "message" | "shield" | "layers" | "chart";

function FocusIcon({
  name,
  className = "icon focus-icon",
}: {
  name: FocusIconName;
  className?: string;
}) {
  const paths: Record<FocusIconName, ReactNode> = {
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),
    message: (
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6Z" />
    ),
    shield: <path d="M12 3 5 6v6c0 4.8 3 7.5 7 9 4-1.5 7-4.2 7-9V6l-7-3Zm-3 9 2 2 4-4" />,
    layers: (
      <>
        <path d="m12 4 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </>
    ),
    chart: <path d="M5 19V9m7 10V5m7 14v-7" />,
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none">
      {paths[name]}
    </svg>
  );
}

const focusItems = [
  {
    icon: "calendar" as const,
    button: "Planning & Prioritization",
    title: "Structured Planning with Clear Priorities",
    description:
      "I organize work into clear phases so teams understand what matters most and what should happen next.",
    points: [
      "Defines practical priorities that support project goals.",
      "Breaks large objectives into manageable execution steps.",
      "Aligns scope, timing, and ownership from the beginning.",
    ],
  },
  {
    icon: "message" as const,
    button: "Stakeholder Communication",
    title: "Consistent Communication Across Teams",
    description:
      "I keep stakeholders aligned through regular updates and simple decision-making workflows.",
    points: [
      "Creates shared visibility on progress and blockers.",
      "Supports faster decisions through clear communication rhythms.",
      "Improves collaboration between cross-functional contributors.",
    ],
  },
  {
    icon: "shield" as const,
    button: "Risk & Execution Control",
    title: "Reliable Delivery Through Risk Awareness",
    description:
      "I monitor dependencies and potential risks early to maintain stable execution and delivery confidence.",
    points: [
      "Identifies possible blockers before they impact timelines.",
      "Tracks dependencies with transparent ownership.",
      "Maintains delivery momentum with early mitigation actions.",
    ],
  },
  {
    icon: "layers" as const,
    button: "Process Improvement",
    title: "Continuous Process Optimization",
    description:
      "I review workflows regularly to reduce friction and improve the quality of collaboration and delivery.",
    points: [
      "Simplifies repeated workflows for better consistency.",
      "Refines handoffs between teams and responsibilities.",
      "Builds repeatable structures that support long-term improvement.",
    ],
  },
  {
    icon: "chart" as const,
    button: "Reporting & Alignment",
    title: "Transparent Reporting and Accountability",
    description:
      "I use clear reporting to keep initiatives measurable and everyone aligned on outcomes and responsibilities.",
    points: [
      "Translates activity into understandable progress updates.",
      "Keeps outcomes visible across project phases.",
      "Supports accountability with clear ownership and follow-up.",
    ],
  },
];

export default function FocusPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = focusItems[activeIndex];

  return (
    <div className="focus-shell">
      <div className="section-head focus-head">
        <p className="eyebrow">
          <FocusIcon name="chart" className="icon icon-eyebrow" />
          Core Capabilities
        </p>
        <h2>How I Work as a PM</h2>
      </div>

      <div className="focus-layout">
        <div className="focus-nav" role="tablist" aria-label="Core capabilities">
          {focusItems.map((item, index) => (
            <button
              key={item.button}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              className={`focus-tab ${activeIndex === index ? "is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <FocusIcon name={item.icon} className="icon focus-tab-icon" />
              {item.button}
            </button>
          ))}
        </div>

        <article key={active.button} className="card focus-card panel-swap" role="tabpanel">
          <p className="eyebrow">
            <FocusIcon name={active.icon} className="icon icon-eyebrow" />
            Professional Focus
          </p>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <ul className="focus-list">
            {active.points.map((point, index) => (
              <li
                key={point}
                style={
                  {
                    "--item-delay": `${index * 90}ms`,
                  } as CSSProperties
                }
              >
                {point}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
