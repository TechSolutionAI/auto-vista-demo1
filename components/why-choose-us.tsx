"use client"

import { useState, useEffect } from "react"
import { CreditCard, Award, Users, Wrench } from "lucide-react"

export function WhyChooseUs() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show placeholder during server-side rendering
  if (!mounted) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-muted mb-4"></div>
            <div className="h-6 w-32 bg-muted rounded mb-2"></div>
            <div className="h-24 w-full bg-muted rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          <CreditCard className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">Credit Financing</h3>
        <p className="text-muted-foreground">
          Good Credit, Bad Credit, First Time Buyer? With relations with multiple lenders, we are bound to get you
          financed!
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          <Award className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">Quality Brands</h3>
        <p className="text-muted-foreground">
          We make sure to only stock vehicles that are known for their reliability and dependability.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          <Users className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">Trusted Dealer</h3>
        <p className="text-muted-foreground">
          With repeat customers and high consumer feedback, we make it easy to purchase your next vehicle.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          <Wrench className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">Best Car Services</h3>
        <p className="text-muted-foreground">
          Keep your vehicles running longer. Our full service center will help you keep your car in tip top shape.
        </p>
      </div>
    </div>
  )
}
