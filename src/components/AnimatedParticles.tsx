// src/components/AnimatedParticles.tsx
import * as React from "react";

type Particle = {
  id: number;
  x: number; // 0–100 (vw)
  y: number; // 0–100 (vh)
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

export function AnimatedParticles({ isDark }: { isDark: boolean }) {
  // Prefer-reduced-motion (read once on mount; we don't need to re-render for changes)
  const prefersReduced = React.useRef(false);
  React.useEffect(() => {
    try {
      prefersReduced.current =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    } catch {
      prefersReduced.current = false;
    }
  }, []);

  // Generate particles ONCE — independent of theme — to avoid re-creating DOM nodes on toggle
  const [particles] = React.useState<Particle[]>(() => {
    const baseCount = 50; // keep constant across themes
    const count = baseCount;
    const arr: Particle[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 6 + 8, // 8–14s gentle float
        delay: Math.random() * 0.75,
        opacity: Math.random() * 0.6 + 0.25,
      });
    }
    return arr;
  });

  // Update color via CSS variable ONLY (no re-render)
  React.useEffect(() => {
    const color = isDark
      ? "rgba(99,102,241,0.40)" /* primary/40 */
      : "rgba(99,102,241,0.30)";
    document.documentElement.style.setProperty("--particle-color", color);
  }, [isDark]);

  // Pause animation when tab is hidden (saves CPU)
  React.useEffect(() => {
    const onVis = () =>
      document.documentElement.style.setProperty(
        "--particle-anim",
        document.hidden ? "paused" : "running"
      );
    document.addEventListener("visibilitychange", onVis, { passive: true });
    onVis(); // set initial
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{ contain: "layout paint", willChange: "transform, opacity" }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            // Color controlled by CSS var so theme flips don't re-render
            background: "var(--particle-color, rgba(99,102,241,0.30))",
            opacity: p.opacity,
            animation: `floatY ${
              prefersReduced.current ? 0 : p.duration
            }s ease-in-out ${p.delay}s infinite alternate`,
            animationPlayState: "var(--particle-anim, running)",
            transform: "translate(-50%, -50%)",
            filter: "blur(0.2px)",
          }}
        />
      ))}

      {/* Local minimal keyframes */}
      <style>{`
        @keyframes floatY {
          0%   { transform: translate(-50%, -50%) translateY(0); }
          100% { transform: translate(-50%, -50%) translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

// Export default too, to be compatible with lazy imports expecting default
export default AnimatedParticles;
