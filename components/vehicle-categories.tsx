import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    id: "sedan",
    name: "Sedan",
    image: "/placeholder.svg?height=200&width=300",
    url: "/inventory?category=sedan",
  },
  {
    id: "suv",
    name: "SUV",
    image: "/placeholder.svg?height=200&width=300",
    url: "/inventory?category=suv",
  },
  {
    id: "truck",
    name: "Truck",
    image: "/placeholder.svg?height=200&width=300",
    url: "/inventory?category=truck",
  },
  {
    id: "convertible",
    name: "Convertible",
    image: "/placeholder.svg?height=200&width=300",
    url: "/inventory?category=convertible",
  },
  {
    id: "hatchback",
    name: "Hatchback",
    image: "/placeholder.svg?height=200&width=300",
    url: "/inventory?category=hatchback",
  },
  {
    id: "minivan",
    name: "Minivan",
    image: "/placeholder.svg?height=200&width=300",
    url: "/inventory?category=minivan",
  },
]

export function VehicleCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link key={category.id} href={category.url} className="group flex flex-col items-center text-center">
          <div className="relative mb-3 h-32 w-full overflow-hidden rounded-sm border border-border/50">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <h3 className="text-lg font-medium">{category.name}</h3>
        </Link>
      ))}
    </div>
  )
}
