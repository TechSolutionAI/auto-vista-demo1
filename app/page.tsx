"use client"

import { SearchForm } from "@/components/search-form"
import { VehicleCategories } from "@/components/vehicle-categories"
import { FeaturedVehicles } from "@/components/featured-vehicles"
import { HeroCarousel } from "@/components/hero-carousel"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />

      <section className="bg-secondary py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">{t("home.quickSearch")}</h2>
          <SearchForm />
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">{t("home.browseByCategory")}</h2>
          <VehicleCategories />
        </div>
      </section>

      <section className="bg-secondary py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">{t("home.featuredVehicles")}</h2>
          <FeaturedVehicles />
        </div>
      </section>
    </div>
  )
}
