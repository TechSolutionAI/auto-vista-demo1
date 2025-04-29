"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data for inventory vehicles
const vehicleData = [
  {
    id: 1,
    title: "2021 Toyota Camry XSE",
    price: 28995,
    mileage: 15420,
    year: 2021,
    make: "Toyota",
    model: "Camry",
    trim: "XSE",
    exteriorColor: "Pearl White",
    interiorColor: "Black",
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "2.5L 4-Cylinder",
    vin: "4T1BZ1HK1MU123456",
    stockNumber: "T12345",
    image: "/toyota-camry-xse.png",
    features: ["Leather Seats", "Navigation", "Sunroof", "Bluetooth", "Backup Camera"],
    description:
      "This beautiful Toyota Camry XSE is in excellent condition with low mileage. Features include leather seats, navigation, sunroof, and much more!",
  },
  {
    id: 2,
    title: "2020 Honda Accord Sport",
    price: 26495,
    mileage: 22150,
    year: 2020,
    make: "Honda",
    model: "Accord",
    trim: "Sport",
    exteriorColor: "Modern Steel",
    interiorColor: "Black",
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "1.5L Turbo 4-Cylinder",
    vin: "1HGCV1F34LA123456",
    stockNumber: "H54321",
    image: "/honda-accord-sport.png",
    features: ["Bluetooth", "Backup Camera", "Apple CarPlay", "Android Auto", "Heated Seats"],
    description:
      "This Honda Accord Sport is a great value with its sporty styling and excellent fuel economy. Loaded with technology features including Apple CarPlay and Android Auto.",
  },
  {
    id: 3,
    title: "2019 Ford F-150 XLT",
    price: 32995,
    mileage: 35680,
    year: 2019,
    make: "Ford",
    model: "F-150",
    trim: "XLT",
    exteriorColor: "Race Red",
    interiorColor: "Gray",
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "5.0L V8",
    vin: "1FTEW1EP2KFA98765",
    stockNumber: "F67890",
    image: "/ford-f150-xlt.png",
    features: ["4WD", "Tow Package", "Crew Cab", "Bluetooth", "Backup Camera"],
    description:
      "This Ford F-150 XLT is ready for work or play with its powerful V8 engine and 4WD capability. Features a spacious crew cab and tow package.",
  },
  {
    id: 4,
    title: "2022 Chevrolet Equinox LT",
    price: 29995,
    mileage: 8750,
    year: 2022,
    make: "Chevrolet",
    model: "Equinox",
    trim: "LT",
    exteriorColor: "Silver Ice",
    interiorColor: "Jet Black",
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "1.5L Turbo 4-Cylinder",
    vin: "2GNAXKEV3N6123456",
    stockNumber: "C24680",
    image: "/chevrolet-equinox-lt.png",
    features: ["AWD", "Heated Seats", "Remote Start", "Apple CarPlay", "Android Auto"],
    description:
      "This nearly new Chevrolet Equinox LT features AWD for all-weather capability and comes loaded with technology and comfort features.",
  },
]

export function InventoryList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Use state to track client-side rendering
  const [mounted, setMounted] = useState(false)

  // Initialize vehicles state with the data
  const [vehicles, setVehicles] = useState(vehicleData)

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // In a real application, you would filter the vehicles based on searchParams
  // For this example, we'll just return all vehicles

  // Show placeholder during server-side rendering
  if (!mounted) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Loading vehicles...</p>
          <div className="flex items-center gap-2">
            <div className="h-9 w-40 bg-muted rounded"></div>
          </div>
        </div>

        <div className="space-y-4">
          {[0, 1, 2, 3].map((index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <div className="relative h-48 md:h-full bg-muted"></div>
                <div className="p-4 md:col-span-2 lg:col-span-3">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2">
                      <div className="h-6 w-3/4 bg-muted rounded mb-2"></div>
                      <div className="flex flex-wrap gap-2 my-2">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-5 w-16 bg-muted rounded"></div>
                        ))}
                      </div>
                      <div className="h-4 w-full bg-muted rounded mt-4"></div>
                      <div className="h-4 w-full bg-muted rounded mt-2"></div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="h-6 w-24 bg-muted rounded mb-1"></div>
                        <div className="h-4 w-32 bg-muted rounded mb-4"></div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="h-9 w-full bg-muted rounded"></div>
                        <div className="h-9 w-full bg-muted rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  // Ensure vehicles is always an array
  const safeVehicles = Array.isArray(vehicles) ? vehicles : []

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing {safeVehicles.length} vehicles</p>
        <div className="flex items-center gap-2">
          <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="mileage-low">Mileage: Low to High</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {safeVehicles.map((vehicle, index) => {
          // Ensure each vehicle has all required properties
          const safeVehicle = {
            id: vehicle?.id || index + 1,
            title: vehicle?.title || "Vehicle",
            price: vehicle?.price || 0,
            mileage: vehicle?.mileage || 0,
            year: vehicle?.year || new Date().getFullYear(),
            make: vehicle?.make || "",
            model: vehicle?.model || "",
            trim: vehicle?.trim || "",
            exteriorColor: vehicle?.exteriorColor || "",
            interiorColor: vehicle?.interiorColor || "",
            fuelType: vehicle?.fuelType || "",
            transmission: vehicle?.transmission || "",
            engine: vehicle?.engine || "",
            vin: vehicle?.vin || "",
            stockNumber: vehicle?.stockNumber || "",
            image: vehicle?.image || "/placeholder.svg",
            features: Array.isArray(vehicle?.features) ? vehicle.features : [],
            description: vehicle?.description || "",
          }

          return (
            <Card key={safeVehicle.id} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <div className="relative h-48 md:h-full">
                  <Image
                    src={safeVehicle.image || "/placeholder.svg"}
                    alt={safeVehicle.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:col-span-2 lg:col-span-3">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold">{safeVehicle.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {safeVehicle.year && <Badge variant="outline">{safeVehicle.year}</Badge>}
                        {safeVehicle.mileage > 0 && (
                          <Badge variant="outline">{safeVehicle.mileage.toLocaleString()} miles</Badge>
                        )}
                        {safeVehicle.transmission && <Badge variant="outline">{safeVehicle.transmission}</Badge>}
                        {safeVehicle.engine && <Badge variant="outline">{safeVehicle.engine}</Badge>}
                        {safeVehicle.exteriorColor && <Badge variant="outline">{safeVehicle.exteriorColor}</Badge>}
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground line-clamp-2">{safeVehicle.description}</p>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-sm font-medium">Stock #</p>
                          <p className="text-sm text-muted-foreground">{safeVehicle.stockNumber}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">VIN</p>
                          <p className="text-sm text-muted-foreground">{safeVehicle.vin}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-2xl font-bold text-primary">${safeVehicle.price.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">
                          Est. ${Math.round(safeVehicle.price / 60).toLocaleString()}/mo
                        </p>
                      </div>
                      <div className="mt-4 space-y-2">
                        <Button asChild className="w-full">
                          <Link href={`/inventory/${safeVehicle.id}`}>View Details</Link>
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Link href={`/financing?vehicleId=${safeVehicle.id}`}>Calculate Payment</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
