import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helpers
const getSystemPref = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const readStored = (): Theme | null => {
  try {
    return (localStorage.getItem("theme") as Theme) ?? null;
  } catch {
    return null;
  }
};

const applyThemeClass = (t: Theme) => {
  const root = document.documentElement;
  // prevent layout thrash: only flip the class
  if (t === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  // help form controls in some browsers
  root.style.colorScheme = t;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Pick initial theme synchronously to avoid flash
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = readStored();
    return stored ?? getSystemPref();
  });

  // Apply initial theme before paint (prevents flicker)
  useLayoutEffect(() => {
    applyThemeClass(theme);
  }, []); // initial only

  // Keep system changes in sync if user hasn't explicitly chosen
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const stored = readStored();
      if (!stored) {
        const sys = mq.matches ? "dark" : "light";
        setTheme(sys);
      }
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Central setter with “disable transitions during switch”
  const setTheme = (t: Theme) => {
    const root = document.documentElement;
    // Temporarily disable CSS transitions to avoid jank/freeze
    root.classList.add("theme-switching");
    applyThemeClass(t);
    setThemeState(t);
    try {
      localStorage.setItem("theme", t);
    } catch {}
    // Remove the flag on the next frame (after styles apply)
    requestAnimationFrame(() => {
      root.classList.remove("theme-switching");
    });
  };

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
