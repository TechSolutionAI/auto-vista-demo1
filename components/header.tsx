"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MobileNav } from "./mobile-nav"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { Logo } from "./logo"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Phone } from "lucide-react"

export function Header() {
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-darkgray/95 backdrop-blur supports-[backdrop-filter]:bg-darkgray/60 border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Logo size="sm" isScrolled={scrolled} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors uppercase tracking-wider text-white hover:text-gold"
          >
            {mounted ? t("common.home") : "Home"}
          </Link>
          <Link
            href="/inventory"
            className="text-sm font-medium transition-colors uppercase tracking-wider text-white hover:text-gold"
          >
            {mounted ? t("common.inventory") : "Browse Vehicles"}
          </Link>
          <Link
            href="/financing"
            className="text-sm font-medium transition-colors uppercase tracking-wider text-white hover:text-gold"
          >
            {mounted ? t("common.financing") : "Financing"}
          </Link>
          <Link
            href="/service"
            className="text-sm font-medium transition-colors uppercase tracking-wider text-white hover:text-gold"
          >
            {mounted ? t("common.service") : "Services"}
          </Link>
          <Link
            href="/sell"
            className="text-sm font-medium transition-colors uppercase tracking-wider text-white hover:text-gold"
          >
            {mounted ? t("common.sell") : "Sell your car"}
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors uppercase tracking-wider text-white hover:text-gold"
          >
            {mounted ? t("common.contact") : "Contact"}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="tel:+18888702148" className="hidden md:flex items-center gap-2 text-white hover:text-gold">
            <Phone className="h-4 w-4" />
            <span className="text-sm">Call</span>
          </Link>
          <LanguageSwitcher className="border-gold/20 bg-transparent text-white hover:bg-gold/10 hover:text-gold" />
          <ThemeToggle className="border-gold/20 bg-transparent text-white hover:bg-gold/10 hover:text-gold" />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
