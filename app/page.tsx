"use client"

import { useState, useEffect } from "react"
import { VehicleCategories } from "@/components/vehicle-categories"
import { FeaturedVehicles } from "@/components/featured-vehicles"
import { HeroCarousel } from "@/components/hero-carousel"
import { WhyChooseUs } from "@/components/why-choose-us"
import { useLanguage } from "@/contexts/language-context"
import { HelpServiceSection } from "@/components/help-service-section"

export default function Home() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Only render content after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Show a minimal UI while loading to avoid hydration issues
  if (!mounted) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="h-[70vh]"></div>
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">Browse by Category</h2>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />

      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">{t("home.browseByCategory")}</h2>
          <VehicleCategories />
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-900">
        <div className="container">
          <HelpServiceSection />
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8 text-center">Why Choose Us?</h2>
          <WhyChooseUs />
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">{t("home.featuredVehicles")}</h2>
          <FeaturedVehicles />
        </div>
      </section>
    </div>
  )
}
