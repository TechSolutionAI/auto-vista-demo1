"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

export function HeroCarousel() {
  const t = useTranslations("home.hero")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Define slides with image paths but get text from translations
  const heroSlides = [
    {
      id: 1,
      image: "https://imagescdn.dealercarsearch.com/DealerImages/19018/saved/770cb937.jpg",
      translationKey: "slide1",
      primaryLink: "/inventory",
      secondaryLink: "/financing",
    },
    {
      id: 2,
      image: "https://imagescdn.dealercarsearch.com/DealerImages/19018/saved/79215909.jpg",
      translationKey: "slide2",
      primaryLink: "/service",
      secondaryLink: "/service",
    },
    {
      id: 3,
      image: "https://imagescdn.dealercarsearch.com/DealerImages/19018/saved/88a48cf5.jpg",
      translationKey: "slide3",
      primaryLink: "/sell",
      secondaryLink: "/sell",
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
  }, [heroSlides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
  }, [heroSlides.length])

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
      {heroSlides.map((slide, index) => {
        const slideKey = slide.translationKey

        return (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={t(`${slideKey}.title`)}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="container relative z-20 flex h-full flex-col items-start justify-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{t(`${slideKey}.title`)}</h1>
              <p className="mt-4 max-w-lg text-lg text-gray-200">{t(`${slideKey}.description`)}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="uppercase tracking-wider">
                  <Link href={slide.primaryLink}>{t(`${slideKey}.primaryButton`)}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 uppercase tracking-wider"
                >
                  <Link href={slide.secondaryLink}>{t(`${slideKey}.secondaryButton`)}</Link>
                </Button>
              </div>
            </div>
          </div>
        )
      })}

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
