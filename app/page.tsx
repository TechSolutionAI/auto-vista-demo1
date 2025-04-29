import { SearchForm } from "@/components/search-form"
import { VehicleCategories } from "@/components/vehicle-categories"
import { FeaturedVehicles } from "@/components/featured-vehicles"
import { HeroCarousel } from "@/components/hero-carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />

      <section className="bg-secondary py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">Quick Search</h2>
          <SearchForm />
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">Browse by Category</h2>
          <VehicleCategories />
        </div>
      </section>

      <section className="bg-secondary py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">Featured Vehicles</h2>
          <FeaturedVehicles />
        </div>
      </section>
    </div>
  )
}
