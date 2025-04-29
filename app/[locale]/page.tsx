"use client"

import { SearchForm } from "@/components/search-form"
import { VehicleCategories } from "@/components/vehicle-categories"
import { FeaturedVehicles } from "@/components/featured-vehicles"
import { HeroCarousel } from "@/components/hero-carousel"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("home")

  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />

      <section className="bg-secondary py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">{t("quickSearch")}</h2>
          <SearchForm />
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">{t("browseByCategory")}</h2>
          <VehicleCategories />
        </div>
      </section>

      <section className="bg-secondary py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">{t("featuredVehicles")}</h2>
          <FeaturedVehicles />
        </div>
      </section>
    </div>
  )
}
