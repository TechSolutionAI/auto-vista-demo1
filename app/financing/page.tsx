"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FinancingCalculator } from "@/components/financing-calculator"
import { FinancingFAQ } from "@/components/financing-faq"
import { FinancingSteps } from "@/components/financing-steps"

export default function FinancingPage() {
  // Use state to track client-side rendering
  const [mounted, setMounted] = useState(false)

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Show a simplified placeholder during server-side rendering
  if (!mounted) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="h-[300px] bg-muted"></div>
        <div className="py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="h-8 w-3/4 bg-muted rounded"></div>
                <div className="h-4 w-full bg-muted rounded"></div>
                <div className="h-4 w-full bg-muted rounded"></div>
                <div className="h-[400px] bg-muted rounded"></div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-[400px] w-full bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image src="/financing-hero.png" alt="Financing background" fill className="object-cover" priority />
        <div className="container relative z-20 flex h-full flex-col items-start justify-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Financing Options</h1>
          <p className="mt-4 max-w-lg text-lg text-gray-200">
            We offer flexible financing solutions to fit your budget and credit situation.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Calculate Your Payment</h2>
              <p className="text-muted-foreground mb-6">
                Use our payment calculator to estimate your monthly payments based on vehicle price, down payment,
                interest rate, and loan term.
              </p>
              <FinancingCalculator />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/financing-calculator.png"
                alt="Financing illustration"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Financing Process</h2>
          <FinancingSteps />
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Financing Options</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>First-Time Buyers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Special programs for first-time car buyers with limited or no credit history.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>No credit history required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Competitive interest rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Flexible down payment options</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Traditional Financing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Conventional auto loans with competitive rates for buyers with established credit.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Low interest rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Terms from 36-72 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Quick approval process</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Credit Rebuilding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Specialized financing options for customers with challenged credit histories.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>All credit situations considered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Opportunity to rebuild credit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Flexible approval criteria</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our financing process and options.
            </p>
          </div>
          <FinancingFAQ />
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Apply for financing today and get pre-approved before you visit our dealership.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Apply Now</Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
