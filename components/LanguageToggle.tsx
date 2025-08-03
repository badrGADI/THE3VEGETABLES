"use client"

import { useState, useEffect } from "react"
import { Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
]

export default function LanguageToggle() {
  const [currentLanguage, setCurrentLanguage] = useState("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") || "en"
    setCurrentLanguage(savedLanguage)
  }, [])

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode)
    localStorage.setItem("language", languageCode)

    // Dispatch custom event for language change
    window.dispatchEvent(new CustomEvent("languageChange", { detail: languageCode }))
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400">
        <Globe className="w-4 h-4 mr-2" />
        EN
      </Button>
    )
  }

  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
          <Globe className="w-4 h-4 mr-2" />
          <span className="mr-1">{currentLang.flag}</span>
          <span className="mr-1">{currentLang.code.toUpperCase()}</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`cursor-pointer ${
              currentLanguage === language.code ? "bg-orange-50 dark:bg-orange-900/20" : ""
            }`}
          >
            <span className="mr-2">{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
