"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-sm text-secondary-foreground">Your trusted source for quality vehicles.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-secondary-foreground hover:text-primary">
                  {t("common.home")}
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="text-secondary-foreground hover:text-primary">
                  {t("common.inventory")}
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-secondary-foreground hover:text-primary">
                  {t("common.financing")}
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-secondary-foreground hover:text-primary">
                  {t("common.service")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">{t("footer.contact")}</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground">
              <li>123 Auto Lane</li>
              <li>Carville, CA 90210</li>
              <li>(555) 123-4567</li>
              <li>info@northwestmotors.com</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">{t("footer.hours")}</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground">
              <li>{t("footer.weekdays")}</li>
              <li>{t("footer.saturday")}</li>
              <li>{t("footer.sunday")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>{t("footer.copyright", { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  )
}
