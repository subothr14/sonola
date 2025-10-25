import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeSelctor: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      aria-label="Toggle dark mode"
      className="flex items-center gap-2 rounded-full cursor-pointer px-3 py-2 border-2 border-violet-600 transition-all hover:scale-105"
    >
      {isDark ? (
        <abbr title="Toggle Light Mode">
          <Sun size={20} />
        </abbr>
      ) : (
        <abbr title="Toggle Dark Mode">
          <Moon size={20} />
        </abbr>
      )}
    </button>
  );
};

export default ThemeSelctor;
