import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Northwest Motors - Premium Vehicles",
  description: "Find your perfect vehicle with Northwest Motors",
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }, { locale: "ru" }, { locale: "uk" }]
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
