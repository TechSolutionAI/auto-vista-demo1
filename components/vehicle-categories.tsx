"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// Define categories array outside the component to ensure it's always available
const categoryData = [
  {
    id: "sedan",
    name: "Sedan",
    image: "/classic-blue-sedan.png",
    url: "/inventory?category=sedan",
  },
  {
    id: "suv",
    name: "SUV",
    image: "/urban-adventure-suv.png",
    url: "/inventory?category=suv",
  },
  {
    id: "truck",
    name: "Truck",
    image: "/vintage-pickup-field.png",
    url: "/inventory?category=truck",
  },
  {
    id: "convertible",
    name: "Convertible",
    image: "/red-convertible-coastal-drive.png",
    url: "/inventory?category=convertible",
  },
  {
    id: "hatchback",
    name: "Hatchback",
    image: "/urban-hatchback-commute.png",
    url: "/inventory?category=hatchback",
  },
  {
    id: "minivan",
    name: "Minivan",
    image: "/suburban-adventure.png",
    url: "/inventory?category=minivan",
  },
]

export function VehicleCategories() {
  // Use state to track client-side rendering
  const [mounted, setMounted] = useState(false)

  // Initialize categories state with the data
  const [categories, setCategories] = useState(categoryData)

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Show placeholder during server-side rendering
  if (!mounted) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-md border border-border bg-muted"></div>
            <div className="h-6 w-24 bg-muted rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  // Ensure categories is always an array
  const safeCategories = Array.isArray(categories) ? categories : []

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {safeCategories.map((category, index) => {
        // Ensure each category has all required properties
        const safeCategory = {
          id: category?.id || `category-${index}`,
          name: category?.name || "Category",
          image: category?.image || "/placeholder.svg",
          url: category?.url || "/inventory",
        }

        return (
          <Link key={safeCategory.id} href={safeCategory.url} className="group flex flex-col items-center text-center">
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-md border border-border">
              <Image
                src={safeCategory.image || "/placeholder.svg"}
                alt={safeCategory.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-medium">{safeCategory.name}</h3>
          </Link>
        )
      })}
    </div>
  )
}
