"use client"

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant="secondary" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Icon icon="tabler:moon" /> : <Icon icon="tabler:sun" />}
    </Button>
  );
}