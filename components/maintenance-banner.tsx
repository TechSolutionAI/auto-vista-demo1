"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function MaintenanceBanner() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show placeholder during server-side rendering
  if (!mounted) {
    return <div className="h-[200px] bg-muted"></div>
  }

  return (
    <div className="relative h-[200px] w-full overflow-hidden bg-gray-100 dark:bg-slate-800">
      {/* Theme-aware overlay with text - full width */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Special regular maintenance discounts available on all vehicles purchased from us.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
            Make sure to get your vehicles regularly serviced to ensure the health of your car!
          </p>
        </div>
      </div>
    </div>
  )
}
