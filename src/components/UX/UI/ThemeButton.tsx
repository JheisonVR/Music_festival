"use client";
import React from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

export const ThemeButton = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const setThemeVariables = (dark: boolean) => {
    const root = document.documentElement;
    if (dark) {
      root.style.setProperty("--background", "#0a0a0a");
      root.style.setProperty("--foreground", "#ededed");
    } else {
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#171717");
    }
  };

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
      setIsDark((prev) => {
        setThemeVariables(!prev);
        return !prev;
      });
    }
  };

  return (
    <div
      id="dark-mode-toggle"
      className="fixed top-18 right-0 inline-block w-12 cursor-pointer rounded-l-lg bg-zinc-900 dark:bg-zinc-200 dark:text-zinc-900 p-2 text-3xl"
      onClick={toggleTheme}
    >
      {isDark ? <BsSun /> : <BsMoonStarsFill color="" />}
    </div>
  );
};