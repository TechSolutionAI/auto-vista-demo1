import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data for inventory vehicles
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
    image: "/placeholder.svg?height=200&width=300",
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
    image: "/placeholder.svg?height=200&width=300",
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
    image: "/placeholder.svg?height=200&width=300",
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
    image: "/placeholder.svg?height=200&width=300",
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
  // In a real application, you would filter the vehicles based on searchParams
  // For this example, we'll just return all vehicles

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing {vehicles.length} vehicles</p>
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
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              <div className="relative h-48 md:h-full">
                <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.title} fill className="object-cover" />
              </div>
              <div className="p-4 md:col-span-2 lg:col-span-3">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold">{vehicle.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="outline">{vehicle.year}</Badge>
                      <Badge variant="outline">{vehicle.mileage.toLocaleString()} miles</Badge>
                      <Badge variant="outline">{vehicle.transmission}</Badge>
                      <Badge variant="outline">{vehicle.engine}</Badge>
                      <Badge variant="outline">{vehicle.exteriorColor}</Badge>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground line-clamp-2">{vehicle.description}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-sm font-medium">Stock #</p>
                        <p className="text-sm text-muted-foreground">{vehicle.stockNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">VIN</p>
                        <p className="text-sm text-muted-foreground">{vehicle.vin}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-2xl font-bold text-primary">${vehicle.price.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">
                        Est. ${Math.round(vehicle.price / 60).toLocaleString()}/mo
                      </p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <Button asChild className="w-full">
                        <Link href={`/inventory/${vehicle.id}`}>View Details</Link>
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Link href={`/financing?vehicleId=${vehicle.id}`}>Calculate Payment</Link>
                      </Button>
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
