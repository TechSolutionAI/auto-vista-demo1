import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AccessibilityWidget } from "@/components/accessibility-widget"
import { UserwayStyles } from "@/components/userway-styles"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Northwest Motors - Premium Vehicles",
  description: "Find your perfect vehicle with Northwest Motors",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            <Header />
            <main className="pt-16">{children}</main>
            <Footer />
            <ScrollToTop />
            <AccessibilityWidget size="medium" />
            <UserwayStyles />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
