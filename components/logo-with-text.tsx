import { cn } from "@/lib/utils"
import { Logo } from "./logo"

interface LogoWithTextProps {
  className?: string
}

export function LogoWithText({ className }: LogoWithTextProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <Logo />
    </div>
  )
}
