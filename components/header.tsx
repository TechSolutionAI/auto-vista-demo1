import Link from "next/link"
import { MobileNav } from "./mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-primary"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M19 12H5" />
                <path d="M12 19V5" />
              </svg>
            </div>
            <span className="hidden font-bold sm:inline-block">Auto Vista</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/inventory" className="text-sm font-medium transition-colors hover:text-primary">
            Inventory
          </Link>
          <Link href="/financing" className="text-sm font-medium transition-colors hover:text-primary">
            Financing
          </Link>
          <Link href="/service" className="text-sm font-medium transition-colors hover:text-primary">
            Service Center
          </Link>
          <Link href="/sell" className="text-sm font-medium transition-colors hover:text-primary">
            Sell Your Vehicle
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
