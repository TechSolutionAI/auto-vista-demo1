import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SearchForm } from "@/components/search-form"
import { VehicleCategories } from "@/components/vehicle-categories"
import { FeaturedVehicles } from "@/components/featured-vehicles"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-start justify-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Find Your Perfect Vehicle</h1>
          <p className="mt-4 max-w-lg text-lg text-gray-200">
            Browse our extensive inventory of quality vehicles at competitive prices. Financing options available for
            all credit situations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="uppercase tracking-wider">
              <Link href="/inventory">Browse Inventory</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 uppercase tracking-wider"
            >
              <Link href="/financing">Financing Options</Link>
            </Button>
          </div>
        </div>
      </section>

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
