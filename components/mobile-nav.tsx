"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { Logo } from "./logo"
import { useLanguage } from "@/contexts/language-context"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center">
            <Logo size="sm" />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="/"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            {t("common.home")}
          </Link>
          <Link
            href="/inventory"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            {t("common.inventory")}
          </Link>
          <Link
            href="/financing"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            {t("common.financing")}
          </Link>
          <Link
            href="/service"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            {t("common.service")}
          </Link>
          <Link
            href="/sell"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            {t("common.sell")}
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            {t("common.contact")}
          </Link>
          <div className="flex items-center mt-4">
            <span className="text-sm mr-2">{t("common.theme")}:</span>
            <ThemeToggle />
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm mr-2">{t("common.language")}:</span>
            <LanguageSwitcher />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
