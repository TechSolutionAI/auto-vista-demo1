import Link from "next/link"
import { MobileNav } from "./mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background">
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
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11 2 11.3V15c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <span className="hidden font-bold sm:inline-block">Auto Vista</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider">
            Home
          </Link>
          <Link
            href="/inventory"
            className="text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider"
          >
            Inventory
          </Link>
          <Link
            href="/financing"
            className="text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider"
          >
            Financing
          </Link>
          <Link
            href="/service"
            className="text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider"
          >
            Service Center
          </Link>
          <Link
            href="/sell"
            className="text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider"
          >
            Sell Your Vehicle
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider"
          >
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
