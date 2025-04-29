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

  // Determine if we should use light text (for transparent header on homepage)
  const useLightText = !scrolled && isHomePage

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
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
            className={cn(
              "text-sm font-medium transition-colors uppercase tracking-wider",
              useLightText ? "text-white hover:text-white/80" : "hover:text-primary",
            )}
          >
            {mounted ? t("common.home") : "Home"}
          </Link>
          <Link
            href="/inventory"
            className={cn(
              "text-sm font-medium transition-colors uppercase tracking-wider",
              useLightText ? "text-white hover:text-white/80" : "hover:text-primary",
            )}
          >
            {mounted ? t("common.inventory") : "Inventory"}
          </Link>
          <Link
            href="/financing"
            className={cn(
              "text-sm font-medium transition-colors uppercase tracking-wider",
              useLightText ? "text-white hover:text-white/80" : "hover:text-primary",
            )}
          >
            {mounted ? t("common.financing") : "Financing"}
          </Link>
          <Link
            href="/service"
            className={cn(
              "text-sm font-medium transition-colors uppercase tracking-wider",
              useLightText ? "text-white hover:text-white/80" : "hover:text-primary",
            )}
          >
            {mounted ? t("common.service") : "Service"}
          </Link>
          <Link
            href="/sell"
            className={cn(
              "text-sm font-medium transition-colors uppercase tracking-wider",
              useLightText ? "text-white hover:text-white/80" : "hover:text-primary",
            )}
          >
            {mounted ? t("common.sell") : "Sell"}
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium transition-colors uppercase tracking-wider",
              useLightText ? "text-white hover:text-white/80" : "hover:text-primary",
            )}
          >
            {mounted ? t("common.contact") : "Contact"}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher
            className={
              useLightText ? "border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white" : ""
            }
          />
          <ThemeToggle
            className={
              useLightText ? "border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white" : ""
            }
          />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
