import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
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
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
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
  // Other vehicles would be here
]

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const vehicle = vehicles.find((v) => v.id === Number.parseInt(params.id))

  if (!vehicle) {
    notFound()
  }

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
                src={vehicle.images[0] || "/placeholder.svg"}
                alt={vehicle.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-5 gap-2">
              {vehicle.images.map((image, index) => (
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
                  {vehicle.features.map((feature, index) => (
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
                    <span className="font-medium">Address:</span> 123 Auto Lane, Carville, CA 90210
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
