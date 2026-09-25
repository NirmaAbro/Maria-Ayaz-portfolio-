import { useEffect, useId } from "react";
import { profile } from "../data/profile";

/**
 * Renders particles.js as a network of connected nodes in the hero.
 * This isn't decorative sparkle: the node/line motif is a deliberate nod
 * to thematic analysis (Braun & Clarke) -- Maria's actual research method
 * -- where interview data is coded into themes and linked by relationships.
 * The floating labels name her real thesis themes.
 */
export default function ParticlesBackground() {
  const id = useId().replace(/[:]/g, "");
  const domId = `particles-${id}`;

  useEffect(() => {
    let cancelled = false;

    import("particles.js").then(() => {
      if (cancelled || typeof window === "undefined" || !window.particlesJS) return;
      window.particlesJS(domId, {
        particles: {
          number: { value: 34, density: { enable: true, value_area: 900 } },
          color: { value: ["#3A6B63", "#B08A2E", "#1B2A41"] },
          shape: { type: "circle" },
          opacity: { value: 0.55, random: true },
          size: { value: 3, random: { enable: true, minimumValue: 1 } },
          line_linked: {
            enable: true,
            distance: 130,
            color: "#3A6B63",
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: false },
            resize: true,
          },
          modes: {
            grab: { distance: 150, line_linked: { opacity: 0.5 } },
          },
        },
        retina_detect: true,
      });
    });

    return () => {
      cancelled = true;
      if (typeof window !== "undefined" && window.pJSDom) {
        window.pJSDom.forEach((p) => p?.pJS?.fn?.vendors?.destroypJS?.());
        window.pJSDom = [];
      }
    };
  }, [domId]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden md:pointer-events-auto">
      <div id={domId} className="absolute inset-0" aria-hidden="true" />

      {/* Floating theme labels -- grounded in the real thesis themes */}
      <div className="absolute inset-0 hidden md:block" aria-hidden="true">
        {profile.themeNodes.map((theme, i) => (
          <span
            key={theme}
            className="absolute select-none rounded-full border border-ink/10 bg-panel/70 px-3 py-1 text-xs text-ink/60 shadow-sm"
            style={themePosition(i)}
          >
            {theme}
          </span>
        ))}
      </div>
    </div>
  );
}

function themePosition(i) {
  const positions = [
    { top: "12%", left: "58%" },
    { top: "28%", left: "80%" },
    { top: "52%", left: "68%" },
    { top: "68%", left: "88%" },
    { top: "78%", left: "55%" },
    { top: "40%", left: "44%" },
  ];
  return positions[i % positions.length];
}
