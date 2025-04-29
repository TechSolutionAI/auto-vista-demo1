"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, size = "md" }: LogoProps) {
  const { theme, resolvedTheme } = useTheme()

  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-16",
  }

  // Use the appropriate logo based on the theme
  const isDark = theme === "dark" || resolvedTheme === "dark"
  const logoSrc = isDark ? "/NWM-logo-white.png" : "/NWM-logo.png"

  return (
    <div className={cn("relative", sizes[size], className)}>
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="Northwest Motors Logo"
        width={300}
        height={150}
        className="h-full w-auto"
      />
    </div>
  )
}
