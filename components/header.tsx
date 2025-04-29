"use client"

import Link from "next/link"
import { MobileNav } from "./mobile-nav"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { Logo } from "./logo"
import { useTranslations } from "next-intl"

export function Header() {
  const t = useTranslations("common")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Logo size="sm" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider">
            {t("home")}
          </Link>
          <Link
            href="/inventory"
            className="text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider"
          >
            {t("inventory")}
          </Link>
          <Link
            href="/financing"
            className="text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider"
          >
            {t("financing")}
          </Link>
          <Link
            href="/service"
            className="text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider"
          >
            {t("service")}
          </Link>
          <Link
            href="/sell"
            className="text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider"
          >
            {t("sell")}
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider"
          >
            {t("contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
