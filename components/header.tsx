import Link from "next/link"
import { MobileNav } from "./mobile-nav"
import { ThemeToggle } from "./theme-toggle"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Logo size="sm" />
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
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
