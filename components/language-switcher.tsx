"use client"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Check, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLocale } from "next-intl"

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "ru", name: "Русский" },
  { code: "uk", name: "Українська" },
]

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleLanguageChange = (language: string) => {
    // Remove the current locale from the pathname if it exists
    const segments = pathname.split("/")
    const isLocaleInPath = languages.some((lang) => segments[1] === lang.code)

    let newPathname
    if (isLocaleInPath) {
      segments[1] = language
      newPathname = segments.join("/")
    } else {
      newPathname = `/${language}${pathname}`
    }

    router.push(newPathname)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="cursor-pointer"
          >
            <span className="mr-2">{language.name}</span>
            {locale === language.code && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
