"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Nécessaire pour attendre l'hydratation côté client.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Basculer le thème"
      className="glass-panel flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:-translate-y-0.5"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  );
}

