"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { FeaturedVehicles } from "@/components/featured-vehicles"

// Mock data for vehicle details - in a real app, this would come from a database
const vehicles = [
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
    images: [
      "/toyota-camry-xse.png",
      "/toyota-camry-xse-interior.png",
      "/toyota-camry-xse-rear.png",
      "/toyota-camry-xse-side.png",
      "/toyota-camry-xse-engine.png",
    ],
    features: [
      "Leather Seats",
      "Navigation",
      "Sunroof",
      "Bluetooth",
      "Backup Camera",
      "Blind Spot Monitor",
      "Lane Departure Warning",
      "Adaptive Cruise Control",
      "Heated Seats",
      "Apple CarPlay",
      "Android Auto",
      "Premium Sound System",
    ],
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
    images: [
      "/honda-accord-sport.png",
      "/honda-accord-sport.png",
      "/honda-accord-sport.png",
      "/honda-accord-sport.png",
      "/honda-accord-sport.png",
    ],
    features: [
      "Bluetooth",
      "Backup Camera",
      "Apple CarPlay",
      "Android Auto",
      "Heated Seats",
      "Alloy Wheels",
      "LED Headlights",
      "Keyless Entry",
      "Push Button Start",
      "Dual-Zone Climate Control",
    ],
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
    images: [
      "/ford-f150-xlt.png",
      "/ford-f150-xlt.png",
      "/ford-f150-xlt.png",
      "/ford-f150-xlt.png",
      "/ford-f150-xlt.png",
    ],
    features: [
      "4WD",
      "Tow Package",
      "Crew Cab",
      "Bluetooth",
      "Backup Camera",
      "Trailer Hitch",
      "Bed Liner",
      "Running Boards",
      "Power Windows",
      "Power Locks",
    ],
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
    images: [
      "/chevrolet-equinox-lt.png",
      "/chevrolet-equinox-lt.png",
      "/chevrolet-equinox-lt.png",
      "/chevrolet-equinox-lt.png",
      "/chevrolet-equinox-lt.png",
    ],
    features: [
      "AWD",
      "Heated Seats",
      "Remote Start",
      "Apple CarPlay",
      "Android Auto",
      "Backup Camera",
      "Bluetooth",
      "Keyless Entry",
      "Power Liftgate",
      "Roof Rails",
    ],
    description:
      "This nearly new Chevrolet Equinox LT features AWD for all-weather capability and comes loaded with technology and comfort features.",
  },
]

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [vehicle, setVehicle] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Set mounted to true after component mounts and find the vehicle
  useEffect(() => {
    setMounted(true)
    const id = Number.parseInt(params.id)

    // Find the vehicle in our mock data
    const foundVehicle = vehicles.find((v) => v.id === id)

    setVehicle(foundVehicle || null)
    setLoading(false)

    // If vehicle not found and we're not loading anymore, redirect to inventory
    if (!foundVehicle && mounted && !loading) {
      router.push("/inventory")
    }
  }, [params.id, router, mounted, loading])

  // Show a loading placeholder during server-side rendering or while loading
  if (!mounted || loading) {
    return (
      <div className="container py-8">
        <div className="mb-6">
          <div className="h-6 w-32 bg-muted rounded"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="relative aspect-video bg-muted rounded-lg"></div>
              <div className="grid grid-cols-5 gap-2">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div key={index} className="relative aspect-video bg-muted rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="h-[400px] bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    )
  }

  // If vehicle not found after mounting and loading is complete, show a message
  if (!vehicle) {
    return (
      <div className="container py-8">
        <div className="mb-6">
          <Link href="/inventory" className="text-sm text-muted-foreground hover:underline">
            ← Back to Inventory
          </Link>
        </div>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Vehicle Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The vehicle you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/inventory">Browse Inventory</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Ensure images is always an array
  const safeImages = Array.isArray(vehicle.images) ? vehicle.images : []
  // Ensure features is always an array
  const safeFeatures = Array.isArray(vehicle.features) ? vehicle.features : []

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link href="/inventory" className="text-sm text-muted-foreground hover:underline">
          ← Back to Inventory
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={safeImages[0] || "/placeholder.svg"}
                alt={vehicle.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-5 gap-2">
              {safeImages.map((image: string, index: number) => (
                <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${vehicle.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="description">Description</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-4 border rounded-md mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Year</p>
                    <p className="text-sm">{vehicle.year}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Make</p>
                    <p className="text-sm">{vehicle.make}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Model</p>
                    <p className="text-sm">{vehicle.model}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Trim</p>
                    <p className="text-sm">{vehicle.trim}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Mileage</p>
                    <p className="text-sm">{vehicle.mileage.toLocaleString()} miles</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Exterior Color</p>
                    <p className="text-sm">{vehicle.exteriorColor}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Interior Color</p>
                    <p className="text-sm">{vehicle.interiorColor}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Fuel Type</p>
                    <p className="text-sm">{vehicle.fuelType}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Transmission</p>
                    <p className="text-sm">{vehicle.transmission}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Engine</p>
                    <p className="text-sm">{vehicle.engine}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">VIN</p>
                    <p className="text-sm">{vehicle.vin}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Stock #</p>
                    <p className="text-sm">{vehicle.stockNumber}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="features" className="p-4 border rounded-md mt-2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {safeFeatures.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <p className="text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="description" className="p-4 border rounded-md mt-2">
                <p className="text-sm">{vehicle.description}</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold mb-2">{vehicle.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">{vehicle.year}</Badge>
                <Badge variant="outline">{vehicle.mileage.toLocaleString()} miles</Badge>
                <Badge variant="outline">{vehicle.stockNumber}</Badge>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-primary">${vehicle.price.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">
                  Est. ${Math.round(vehicle.price / 60).toLocaleString()}/mo with financing
                </p>
              </div>

              <div className="space-y-3">
                <Button className="w-full">Get Pre-Approved</Button>
                <Button variant="outline" className="w-full">
                  Calculate Payment
                </Button>
                <Button variant="outline" className="w-full">
                  Value Your Trade
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule Test Drive
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-2">Contact Us</h3>
                <p className="text-sm mb-4">
                  Have questions about this vehicle? Contact our sales team for more information.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span> (555) 123-4567
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Email:</span> sales@autovista.com
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Address:</span> 2459 S IL Route 83, Mundelein, IL 60060
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Similar Vehicles</h2>
        <FeaturedVehicles />
      </div>
    </div>
  )
}
