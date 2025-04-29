"use client"

import { useState, useEffect } from "react"
import { Handshake, Settings } from "lucide-react"

export function HelpServiceSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show placeholder during server-side rendering
  if (!mounted) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-80 bg-muted rounded-lg"></div>
        <div className="h-80 bg-muted rounded-lg"></div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-[#6ECFF6] text-black p-8 rounded-lg flex flex-col items-center text-center">
        <div className="mb-4">
          <Handshake className="h-12 w-12" />
        </div>
        <h3 className="text-2xl font-bold mb-4">We're here to help!</h3>
        <p className="text-black/90">
          Located in Mundelein, IL Northwest Motors proudly servicing nearest Chicago land suburbs. Our exclusive
          relationships within the dealer community allow us to purchase a wide variety of lease returns and new car
          trades at exceptional values, and we pass on the huge savings to you!
        </p>
      </div>

      <div className="bg-[#3A8BC2] text-white p-8 rounded-lg flex flex-col items-center text-center">
        <div className="mb-4">
          <Settings className="h-12 w-12" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Keeping your car healthy</h3>
        <p className="text-white/90">
          Car buying doesn't stop at the showroom. Northwest Motors is committed to ensuring you have a safe and
          reliable vehicle for years to come. Whether it's basic maintenance or a major repair, our team of expert
          service technicians is committed to providing you with exceptional car service year-round.
        </p>
      </div>
    </div>
  )
}
