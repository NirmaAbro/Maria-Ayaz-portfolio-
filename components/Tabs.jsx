import { useState } from "react";

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div role="tablist" aria-label="Research content" className="flex gap-2 border-b border-line">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            id={`tab-${i}`}
            aria-selected={active === i}
            aria-controls={`panel-${i}`}
            onClick={() => setActive(i)}
            className={`relative -mb-px px-4 py-3 text-sm font-medium transition-colors md:text-base ${
              active === i ? "text-ink" : "text-muted hover:text-ink"
            }`}
          >
            {tab.label}
            {active === i && (
              <span className="absolute inset-x-0 -bottom-px h-[2px] bg-teal" />
            )}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`panel-${i}`}
          aria-labelledby={`tab-${i}`}
          hidden={active !== i}
          className="pt-10"
        >
          {active === i && tab.content}
        </div>
      ))}
    </div>
  );
}
