"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "si";
type Theme = "light" | "dark";

const SitePreferencesContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

export function SitePreferences({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("si");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("nuranova-language") as Language | null;
    const savedTheme = localStorage.getItem("nuranova-theme") as Theme | null;
    if (savedLanguage === "en" || savedLanguage === "si") setLanguageState(savedLanguage);
    if (savedTheme === "dark") setTheme("dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("nuranova-theme", theme);
  }, [theme]);

  function setLanguage(value: Language) {
    setLanguageState(value);
    document.documentElement.lang = value === "si" ? "si" : "en";
    localStorage.setItem("nuranova-language", value);
  }

  return <SitePreferencesContext.Provider value={{ language, setLanguage, theme, toggleTheme: () => setTheme((value) => value === "light" ? "dark" : "light") }}>{children}</SitePreferencesContext.Provider>;
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);
  if (!context) throw new Error("useSitePreferences must be used within SitePreferences");
  return context;
}
