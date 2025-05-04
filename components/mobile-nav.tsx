"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { Logo } from "./logo"
import { useLanguage } from "@/contexts/language-context"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Change header background after scrolling 50px
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Only render translated content after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine if we should use light text (for transparent header on homepage)
  const useLightText = !scrolled && isHomePage

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={cn("md:hidden", useLightText ? "text-white hover:bg-white/10 hover:text-white" : "")}
          size="icon"
        >
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
            {mounted ? t("common.home") : "Home"}
          </Link>
          <Link
            href="/inventory"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            {mounted ? t("common.inventory") : "Inventory"}
          </Link>
          <Link
            href="/financing"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            {mounted ? t("common.financing") : "Financing"}
          </Link>
          <Link
            href="/service"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            {mounted ? t("common.service") : "Service"}
          </Link>
          <Link
            href="/sell"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            {mounted ? t("common.sell") : "Sell"}
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            {mounted ? t("common.contact") : "Contact"}
          </Link>
          /* <div className="flex items-center mt-4">
            <span className="text-sm mr-2">{mounted ? t("common.theme") : "Theme"}:</span>
            <ThemeToggle />
          </div> */
          <div className="flex items-center mt-2">
            <span className="text-sm mr-2">{mounted ? t("common.language") : "Language"}:</span>
            <LanguageSwitcher />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
