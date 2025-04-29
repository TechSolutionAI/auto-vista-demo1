"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "The service team was professional and efficient. They explained everything clearly and had my car ready when promised. Will definitely return for future service needs.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    rating: 5,
    comment:
      "Outstanding service department! They diagnosed and fixed an issue that two other shops couldn't figure out. Fair pricing and excellent communication throughout the process.",
  },
  {
    id: 3,
    name: "Jennifer Williams",
    rating: 4,
    comment:
      "I've been bringing my vehicles here for years. The service advisors are knowledgeable and never try to upsell unnecessary services. Highly recommended!",
  },
]

export function ServiceTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < currentTestimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
              />
            ))}
          </div>
          <p className="italic mb-4">"{currentTestimonial.comment}"</p>
          <p className="font-medium">- {currentTestimonial.name}</p>
        </CardContent>
      </Card>
      <div className="flex justify-between mt-4">
        <Button variant="outline" size="icon" onClick={prevTestimonial}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <div className="flex gap-1">
          {testimonials.map((_, index) => (
            <div key={index} className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`} />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={nextTestimonial}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
