import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface AnimatedParticlesProps {
  isDark: boolean;
}

export function AnimatedParticles({ isDark }: AnimatedParticlesProps) {
  // Generate particles instantly on first render
  const generateParticles = (isDark: boolean): Particle[] => {
    const particleCount = isDark ? 50 : 40;
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: isDark ? Math.random() * 10 + 8 : Math.random() * 8 + 6,
      delay: Math.random() * 2, // keep delay smaller for instant visibility
      opacity: isDark ? Math.random() * 0.8 + 0.2 : Math.random() * 0.7 + 0.5,
    }));
  };

  const [particles, setParticles] = useState<Particle[]>(() =>
    generateParticles(isDark)
  );

  // Only regenerate when isDark changes
  useEffect(() => {
    setParticles(generateParticles(isDark));
  }, [isDark]);

  if (isDark) {
    // Snow effect for dark mode
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-snowfall"
            style={{
              left: `${particle.x}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          >
            <div
              className="bg-white rounded-full shadow-sm"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                filter: "blur(0.5px)",
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  // Sparkle effect for light mode
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float-gentle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          <div
            className="animate-twinkle"
            style={{
              animationDelay: `${particle.delay + 0.2}s`, // smaller gap for instant appearance
            }}
          >
            <div
              className="relative"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/80 transform rotate-45 shadow-sm"
                style={{
                  borderRadius: "2px",
                  opacity: particle.opacity,
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-secondary/60 to-accent/70 transform -rotate-45 shadow-sm"
                style={{
                  borderRadius: "2px",
                  opacity: particle.opacity * 0.9,
                }}
              />
              <div
                className="absolute inset-0 bg-primary/40 rounded-full blur-sm"
                style={{
                  opacity: particle.opacity * 0.6,
                  transform: "scale(0.8)",
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/40 rounded-full blur-md"
                style={{
                  opacity: particle.opacity * 0.4,
                  transform: "scale(1.5)",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
