"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

// Sample categories data
const categoriesData = [
  {
    id: "luxury-sedans",
    title: "Luxury Sedans",
    count: 48,
    image: "/luxury-sedan.jpg",
  },
  {
    id: "sports-cars",
    title: "Sports Cars",
    count: 36,
    image: "/sports-car.jpg",
  },
  {
    id: "luxury-suvs",
    title: "Luxury SUVs",
    count: 52,
    image: "/luxury-suv.jpg",
  },
  {
    id: "convertibles",
    title: "Convertibles",
    count: 24,
    image: "/convertible.jpg",
  },
]

export function VehicleCategories() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Only render translated content after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categoriesData.map((category) => (
        <Link key={category.id} href={`/inventory?category=${category.id}`}>
          <Card className="bg-darkgray border-border overflow-hidden h-64 relative group">
            <div className="absolute inset-0">
              <Image
                src={
                  category.image || `/placeholder.svg?height=400&width=600&query=${category.title.replace(" ", "+")}`
                }
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-xl mb-1">{category.title}</h3>
              <p className="text-sm text-gold">{category.count} vehicles</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
