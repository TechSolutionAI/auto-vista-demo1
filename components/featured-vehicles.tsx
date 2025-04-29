import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for featured vehicles
const featuredVehicles = [
  {
    id: 1,
    title: "2021 Toyota Camry XSE",
    price: 28995,
    mileage: 15420,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Leather Seats", "Navigation", "Sunroof"],
    badge: "Featured",
  },
  {
    id: 2,
    title: "2020 Honda Accord Sport",
    price: 26495,
    mileage: 22150,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Bluetooth", "Backup Camera", "Apple CarPlay"],
    badge: "Special",
  },
  {
    id: 3,
    title: "2019 Ford F-150 XLT",
    price: 32995,
    mileage: 35680,
    image: "/placeholder.svg?height=200&width=300",
    features: ["4WD", "Tow Package", "Crew Cab"],
    badge: "Popular",
  },
  {
    id: 4,
    title: "2022 Chevrolet Equinox LT",
    price: 29995,
    mileage: 8750,
    image: "/placeholder.svg?height=200&width=300",
    features: ["AWD", "Heated Seats", "Remote Start"],
    badge: "New Arrival",
  },
]

export function FeaturedVehicles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredVehicles.map((vehicle) => (
        <Link key={vehicle.id} href={`/inventory/${vehicle.id}`}>
          <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
            <div className="relative">
              <Badge className="absolute right-2 top-2 z-10">{vehicle.badge}</Badge>
              <div className="relative h-48 w-full">
                <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.title} fill className="object-cover" />
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg line-clamp-1">{vehicle.title}</h3>
              <div className="mt-2 flex justify-between text-sm">
                <span className="font-bold text-lg text-primary">${vehicle.price.toLocaleString()}</span>
                <span className="text-muted-foreground">{vehicle.mileage.toLocaleString()} miles</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {vehicle.features.map((feature, index) => (
                  <Badge key={index} variant="outline">
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
      ))}
    </div>
  )
}
