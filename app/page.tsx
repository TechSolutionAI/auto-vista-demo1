"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { VehicleCategories } from "@/components/vehicle-categories"
import { FeaturedVehicles } from "@/components/featured-vehicles"
import { useLanguage } from "@/contexts/language-context"
import { HelpServiceSection } from "@/components/help-service-section"
import { GoogleMapSection } from "@/components/google-map-section"
import { MaintenanceBanner } from "@/components/maintenance-banner"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { ChevronDown, Search, ArrowRight } from "lucide-react"
import Link from "next/link"

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
      {/* Hero Section with Search Form - Dutton One Style */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10" />
        <Image
          src="https://imagescdn.dealercarsearch.com/DealerImages/19018/saved/770cb937.jpg"
          alt="Luxury car showroom"
          fill
          className="object-cover"
          priority
        />

        {/* Search Form Container - Dutton One Style */}
        <div className="container relative z-20 flex flex-col items-center justify-center h-full">
          <div className="w-full max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Find your dream car</h1>
          </div>

          <div className="w-full max-w-4xl bg-darkgray/90 p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <div className="bg-charcoal border border-border h-14 px-4 flex items-center justify-between cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Make</span>
                    <span className="font-medium">Any Make</span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-gold" />
                </div>
              </div>

              <div className="relative">
                <div className="bg-charcoal border border-border h-14 px-4 flex items-center justify-between cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Model</span>
                    <span className="font-medium">Any Model</span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-gold" />
                </div>
              </div>

              <div className="relative">
                <div className="bg-charcoal border border-border h-14 px-4 flex items-center justify-between cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="font-medium">Any Location</span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-gold" />
                </div>
              </div>

              <Button className="h-14 bg-gold hover:bg-gold/90 text-black font-semibold">
                <Search className="mr-2 h-5 w-5" />
                <span>Show me cars</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="mt-4 text-center">
              <span className="text-muted-foreground mr-2">Not looking to buy?</span>
              <Link href="/sell" className="text-gold hover:underline">
                Sell your car
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tagline - Dutton One Style */}
      <section className="py-16 bg-darkgray">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
            America's premier luxury vehicle dealer
          </h2>
        </div>
      </section>

      {/* Featured Vehicles Section - Dutton One Style */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Explore our newest vehicles in stock</h2>
            <Link href="/inventory" className="text-gold hover:underline flex items-center">
              View all inventory
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <FeaturedVehicles />
        </div>
      </section>

      {/* Vehicle Categories - Dutton One Style */}
      <section className="py-16 bg-charcoal">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-10">Browse by Category</h2>
          <VehicleCategories />
        </div>
      </section>

      {/* Services Section - Dutton One Style */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Services</h2>
          <HelpServiceSection />
        </div>
      </section>

      {/* Maintenance Banner - Dutton One Style */}
      <MaintenanceBanner />

      {/* Map Section - Dutton One Style */}
      <GoogleMapSection />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
