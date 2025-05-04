"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Logo } from "./logo"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "next-themes"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

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
    <footer className="border-t border-border bg-darkgray">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6">
            {/* Pass isFooter prop to Logo component to ensure correct logo is used in footer */}
            <Logo size="md" isFooter={true} />
            <p className="text-sm text-muted-foreground">Your trusted source for premium luxury vehicles.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-gold">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-gold">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-gold">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-gold">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gold">{mounted ? t("footer.quickLinks") : "Quick Links"}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-gold">
                  {mounted ? t("common.home") : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="text-muted-foreground hover:text-gold">
                  {mounted ? t("common.inventory") : "Browse Vehicles"}
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-muted-foreground hover:text-gold">
                  {mounted ? t("common.financing") : "Financing"}
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-muted-foreground hover:text-gold">
                  {mounted ? t("common.service") : "Services"}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-gold">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gold">{mounted ? t("footer.contact") : "Contact"}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  2459 S IL Route 83
                  <br />
                  Mundelein, IL 60060
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gold flex-shrink-0" />
                <span>+1 888-870-2148</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gold flex-shrink-0" />
                <span>info@autovista.com</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gold">{mounted ? t("footer.hours") : "Hours"}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
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
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            {mounted
              ? t("footer.copyright", { year: currentYear })
              : `© ${currentYear} Auto Vista. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
