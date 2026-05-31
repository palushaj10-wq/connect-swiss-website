"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <span className="h-10 w-10" />;

  return (
    <button
      aria-label="Theme wechseln"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors hover:border-red"
      style={{ borderColor: "var(--line)" }}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-red" />
      ) : (
        <Moon className="h-5 w-5 text-ink" />
      )}
    </button>
  );
}
