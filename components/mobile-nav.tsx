"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="/"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/inventory"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            Inventory
          </Link>
          <Link
            href="/financing"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            Financing
          </Link>
          <Link
            href="/service"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            Service Center
          </Link>
          <Link
            href="/sell"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            Sell Your Vehicle
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium transition-colors hover:text-primary uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
