"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Define featured vehicles data outside the component to ensure it's always available
const vehicleData = [
  {
    id: 1,
    title: "2021 Toyota Camry XSE",
    price: 28995,
    mileage: 15420,
    image: "/toyota-camry-xse.png",
    features: ["Leather Seats", "Navigation", "Sunroof"],
    badge: "Featured",
  },
  {
    id: 2,
    title: "2020 Honda Accord Sport",
    price: 26495,
    mileage: 22150,
    image: "/honda-accord-sport.png",
    features: ["Bluetooth", "Backup Camera", "Apple CarPlay"],
    badge: "Special",
  },
  {
    id: 3,
    title: "2019 Ford F-150 XLT",
    price: 32995,
    mileage: 35680,
    image: "/ford-f150-xlt.png",
    features: ["4WD", "Tow Package", "Crew Cab"],
    badge: "Popular",
  },
  {
    id: 4,
    title: "2022 Chevrolet Equinox LT",
    price: 29995,
    mileage: 8750,
    image: "/chevrolet-equinox-lt.png",
    features: ["AWD", "Heated Seats", "Remote Start"],
    badge: "New Arrival",
  },
]

export function FeaturedVehicles() {
  // Use state to track client-side rendering
  const [mounted, setMounted] = useState(false)

  // Initialize vehicles state with the data
  const [vehicles, setVehicles] = useState(vehicleData)

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Show placeholder during server-side rendering
  if (!mounted) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[0, 1, 2, 3].map((index) => (
          <Card key={index} className="h-full overflow-hidden">
            <div className="relative h-48 w-full bg-muted"></div>
            <CardContent className="p-4">
              <div className="h-6 w-3/4 bg-muted rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-muted rounded mb-4"></div>
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-6 w-16 bg-muted rounded"></div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  // Ensure vehicles is always an array
  const safeVehicles = Array.isArray(vehicles) ? vehicles : []

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {safeVehicles.map((vehicle, index) => {
        // Ensure each vehicle has all required properties
        const safeVehicle = {
          id: vehicle?.id || index + 1,
          title: vehicle?.title || "Vehicle",
          price: vehicle?.price || 0,
          mileage: vehicle?.mileage || 0,
          image: vehicle?.image || "/placeholder.svg",
          features: Array.isArray(vehicle?.features) ? vehicle.features : [],
          badge: vehicle?.badge || "",
        }

        return (
          <Link key={safeVehicle.id} href={`/inventory/${safeVehicle.id}`}>
            <Card className="h-full overflow-hidden transition-all hover:shadow-md">
              <div className="relative">
                {safeVehicle.badge && <Badge className="absolute right-2 top-2 z-10">{safeVehicle.badge}</Badge>}
                <div className="relative h-48 w-full">
                  <Image
                    src={safeVehicle.image || "/placeholder.svg"}
                    alt={safeVehicle.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg line-clamp-1">{safeVehicle.title}</h3>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="font-bold text-lg text-primary">${safeVehicle.price.toLocaleString()}</span>
                  <span className="text-muted-foreground">{safeVehicle.mileage.toLocaleString()} miles</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {safeVehicle.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="text-sm text-muted-foreground">View Details</div>
              </CardFooter>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
