"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Logo } from "./logo"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "next-themes"

export function Footer() {
  const { t } = useLanguage()
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentYear = new Date().getFullYear()

  // Only render translated content after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            {/* Pass isFooter prop to Logo component to ensure correct logo is used in footer */}
            <Logo size="md" isFooter={true} />
            <p className="text-sm text-secondary-foreground">Your trusted source for quality vehicles.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">{mounted ? t("footer.quickLinks") : "Quick Links"}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-secondary-foreground hover:text-primary">
                  {mounted ? t("common.home") : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="text-secondary-foreground hover:text-primary">
                  {mounted ? t("common.inventory") : "Inventory"}
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-secondary-foreground hover:text-primary">
                  {mounted ? t("common.financing") : "Financing"}
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-secondary-foreground hover:text-primary">
                  {mounted ? t("common.service") : "Service"}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-secondary-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">{mounted ? t("footer.contact") : "Contact"}</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground">
              <li>2459 S IL Route 83</li>
              <li>Mundelein, IL 60060</li>
              <li>+1 888-870-2148</li>
              <li>info@northwestmotors.com</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">{mounted ? t("footer.hours") : "Hours"}</h3>
            <ul className="space-y-1 text-sm text-secondary-foreground">
              {/* For simplicity, we'll use the direct values instead of translations for now */}
              {/* In a real app, you would update all language files with these new keys */}
              <li className="flex justify-between">
                <span>Monday:</span>
                <span>10:00 am - 7:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday:</span>
                <span>10:00 am - 7:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday:</span>
                <span>10:00 am - 7:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday:</span>
                <span>10:00 am - 7:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Friday:</span>
                <span>10:00 am - 7:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 am - 5:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            {mounted
              ? t("footer.copyright", { year: currentYear })
              : `© ${currentYear} Northwest Motors. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
