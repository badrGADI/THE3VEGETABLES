"use client";

import { useState, useEffect } from "react";
import { translations, TranslationKey } from "@/lib/translations";

export function useTranslation() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener(
      "languageChange",
      handleLanguageChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "languageChange",
        handleLanguageChange as EventListener
      );
    };
  }, []);

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations["en"][key] || key;
  };

  return { t, language };
}
