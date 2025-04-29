"use client"

import { createContext, useState, useContext, useEffect, type ReactNode } from "react"

// Import all language files
import en from "@/locales/en.json"
import es from "@/locales/es.json"
import ru from "@/locales/ru.json"
import uk from "@/locales/uk.json"

// Define available languages
export const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "ru", name: "Русский" },
  { code: "uk", name: "Українська" },
]

// Create a map of language codes to translation objects
const translations = {
  en,
  es,
  ru,
  uk,
}

type LanguageContextType = {
  language: string
  setLanguage: (language: string) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with browser language or default to English
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Get language from localStorage or browser settings
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setLanguage(savedLanguage)
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0]
      if (Object.keys(translations).includes(browserLang)) {
        setLanguage(browserLang)
      }
    }
  }, [])

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language)
    // Update HTML lang attribute
    document.documentElement.lang = language
  }, [language])

  // Translation function
  const t = (key: string, params?: Record<string, string | number>): string => {
    // Split the key by dots to navigate the nested structure
    const keys = key.split(".")

    // Get the current language translations
    const langTranslations = translations[language as keyof typeof translations]

    // Navigate through the nested structure
    let value = keys.reduce((obj, key) => {
      return obj?.[key]
    }, langTranslations as any)

    // If the key doesn't exist, return the key itself
    if (!value) return key

    // Replace parameters if they exist
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        value = value.replace(`{${paramKey}}`, String(paramValue))
      })
    }

    return value
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
