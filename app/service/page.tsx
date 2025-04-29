"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceAppointmentForm } from "@/components/service-appointment-form"
import { ServiceTestimonials } from "@/components/service-testimonials"

export default function ServiceCenterPage() {
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
            <div className="h-8 w-3/4 bg-muted rounded mb-6"></div>
            <div className="h-4 w-full bg-muted rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image src="/service-center.png" alt="Service Center background" fill className="object-cover" priority />
        <div className="container relative z-20 flex h-full flex-col items-start justify-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Service Center</h1>
          <p className="mt-4 max-w-lg text-lg text-gray-200">
            Professional automotive service and maintenance by factory-trained technicians.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Expert Service & Maintenance</h2>
              <p className="text-muted-foreground mb-6">
                Our state-of-the-art service center is staffed by factory-trained technicians who are committed to
                keeping your vehicle running at its best. We use the latest diagnostic equipment and genuine parts to
                ensure quality repairs and maintenance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Factory-Trained Technicians</h3>
                    <p className="text-muted-foreground">
                      Our technicians receive ongoing training to stay current with the latest automotive technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">State-of-the-Art Equipment</h3>
                    <p className="text-muted-foreground">
                      We use advanced diagnostic tools to quickly and accurately identify issues with your vehicle.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Customer Satisfaction</h3>
                    <p className="text-muted-foreground">
                      We're committed to providing exceptional service and ensuring your complete satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="#schedule">Schedule Service</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/service-technician.png"
                alt="Service Center"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Oil Changes & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular oil changes and maintenance services to keep your vehicle running smoothly and extend its
                  lifespan.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Synthetic & conventional oil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Filter replacement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Multi-point inspection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Brake Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive brake services to ensure your vehicle stops safely and effectively.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Brake pad replacement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Rotor resurfacing/replacement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Brake fluid flush</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tire Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete tire services including rotation, balancing, alignment, and replacement.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Tire rotation & balancing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Wheel alignment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Tire replacement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Engine & Transmission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Diagnostic and repair services for engine and transmission issues.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Engine diagnostics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Transmission service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Belt & hose replacement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Electrical Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Diagnosis and repair of electrical issues, including battery, alternator, and starter problems.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Battery testing & replacement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Alternator repair</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Electrical diagnostics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AC & Heating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive climate control services to keep you comfortable in any weather.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>AC recharge & repair</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Heater core service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Cabin filter replacement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Schedule Service</h2>
              <p className="text-muted-foreground mb-6">
                Book your service appointment online. Our team will confirm your appointment and answer any questions
                you may have.
              </p>
              <ServiceAppointmentForm />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Service Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:30 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Customer Testimonials</h3>
                <ServiceTestimonials />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
