"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function MaintenanceBanner() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show placeholder during server-side rendering
  if (!mounted) {
    return <div className="h-[200px] bg-muted"></div>
  }

  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      {/* Dark background image */}
      <Image
        src="/maintenance-banner-bg.png"
        alt="Maintenance background"
        fill
        className="object-cover brightness-50"
      />

      {/* Blue overlay with text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-[#3178bd] p-8 md:p-12 max-w-4xl mx-auto text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Special regular maintenance discounts available on all vehicles purchased from us.
          </h2>
          <p className="text-lg md:text-xl">
            Make sure to get your vehicles regularly serviced to ensure the health of your car!
          </p>
        </div>
      </div>
    </div>
  )
}
