"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Hero slide data
const heroSlides = [
  {
    id: 1,
    image: "https://imagescdn.dealercarsearch.com/DealerImages/19018/saved/770cb937.jpg",
    title: "Find Your Perfect Vehicle",
    description:
      "Browse our extensive inventory of quality vehicles at competitive prices. Financing options available for all credit situations.",
    primaryButton: {
      text: "Browse Inventory",
      link: "/inventory",
    },
    secondaryButton: {
      text: "Financing Options",
      link: "/financing",
    },
  },
  {
    id: 2,
    image: "https://imagescdn.dealercarsearch.com/DealerImages/19018/saved/79215909.jpg",
    title: "Professional Service Center",
    description:
      "Our factory-trained technicians provide expert maintenance and repair services to keep your vehicle running at its best.",
    primaryButton: {
      text: "Schedule Service",
      link: "/service",
    },
    secondaryButton: {
      text: "Learn More",
      link: "/service",
    },
  },
  {
    id: 3,
    image: "https://imagescdn.dealercarsearch.com/DealerImages/19018/saved/88a48cf5.jpg",
    title: "Sell Your Vehicle",
    description:
      "Get a competitive offer for your vehicle with our simple and transparent process. Same-day payment available.",
    primaryButton: {
      text: "Get an Offer",
      link: "/sell",
    },
    secondaryButton: {
      text: "How It Works",
      link: "/sell",
    },
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds

      return () => clearInterval(interval)
    }
  }, [isPaused, nextSlide])

  return (
    <div
      className="relative h-[500px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          <div className="absolute inset-0" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-colors",
              index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/75",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
