"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ArrowRight } from "lucide-react"

// Sample featured vehicles data
const featuredVehiclesData = [
  {
    id: 1,
    title: "2023 BMW X5 xDrive40i",
    price: 72995,
    mileage: 12500,
    image: "/bmw-x5.jpg",
    location: "Seattle, WA",
    features: ["AWD", "Leather", "Navigation", "Panoramic Roof"],
  },
  {
    id: 2,
    title: "2022 Mercedes-Benz S580 4MATIC",
    price: 129995,
    mileage: 8750,
    image: "/mercedes-s580.jpg",
    location: "Portland, OR",
    features: ["AWD", "Executive Package", "Burmester 3D Sound", "Rear Seat Entertainment"],
  },
  {
    id: 3,
    title: "2023 Porsche 911 Carrera S",
    price: 149995,
    mileage: 5200,
    image: "/porsche-911.jpg",
    location: "Bellevue, WA",
    features: ["RWD", "Sport Chrono Package", "PASM Sport Suspension", "Sport Exhaust"],
  },
  {
    id: 4,
    title: "2022 Audi RS7 Sportback",
    price: 119995,
    mileage: 9800,
    image: "/audi-rs7.jpg",
    location: "Seattle, WA",
    features: ["AWD", "Carbon Optic Package", "Bang & Olufsen Sound", "Dynamic Ride Control"],
  },
]

export function FeaturedVehicles() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Only render translated content after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredVehiclesData.map((vehicle) => (
        <Card key={vehicle.id} className="bg-charcoal border-border overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={vehicle.image || "/placeholder.svg?height=400&width=600&query=luxury+car"}
              alt={vehicle.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 bg-gold px-3 py-1 text-black font-semibold">
              ${vehicle.price.toLocaleString()}
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-2 line-clamp-1">{vehicle.title}</h3>
            <div className="flex justify-between text-sm text-muted-foreground mb-3">
              <span>{vehicle.mileage.toLocaleString()} mi</span>
              <span>{vehicle.location}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {vehicle.features.slice(0, 3).map((feature, index) => (
                <span key={index} className="text-xs bg-background px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
            </div>
            <Link href={`/inventory/${vehicle.id}`}>
              <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-black">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
