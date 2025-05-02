"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ServiceAppointmentForm } from "@/components/service-appointment-form"

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
                Northwest Motors is committed to ensuring you have a safe and reliable vehicle for years to come. By
                providing a fully equipped service and repair shop, you can rest easy knowing that the maintenance or
                repairs of your used vehicle can be performed with ease and convenience, bringing the same great
                experience from our showroom right into our service department.
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-100 border border-gray-300 p-6 rounded-md flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-700">Preventative Maintenance</h3>
              <p className="text-gray-600">
                Having regularly performed maintenance on your vehicle is one of the best ways to avoid costly repairs
                in the future and keep your vehicle riding in tip top shape.
              </p>
            </div>

            <div className="bg-gray-100 border border-gray-300 p-6 rounded-md flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4.2-5.78v1.75l3.2-2.99L12.8 9v1.7c-3.11.43-4.35 2.56-4.8 4.7 1.11-1.5 2.58-2.18 4.8-2.18z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-700">Auto Diagnostics</h3>
              <p className="text-gray-600">
                Want to check the health of your vehicle? Our vehicle diagnostics will plug right into your car and let
                us know how everything is working as well as notify us of any repairs that need to be made.
              </p>
            </div>

            <div className="bg-gray-100 border border-gray-300 p-6 rounded-md flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-700">Auto Repairs</h3>
              <p className="text-gray-600">
                Maintenance lights, squeaks, squeals, rattles, rumbles, and other mechanical or electrical issues your
                vehicle might have provide valuable clues about problems and repairs needs. Don't wait till it get worth
                and get it fixed today.
              </p>
            </div>

            <div className="bg-gray-100 border border-gray-300 p-6 rounded-md flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
                  <circle cx="7.5" cy="14.5" r="1.5" />
                  <circle cx="16.5" cy="14.5" r="1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-700">Wheels and Tires Service</h3>
              <p className="text-gray-600">
                It is a time to check the wheels alignment if your vehicle is pulling to the side or when your steering
                wheel vibrates or it is off center when driving straight. Good tires and wheels alignment ensures a
                safer and comfortable ride experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-12">
        <div className="container max-w-4xl mx-auto">
          <ServiceAppointmentForm />
        </div>
      </section>
    </div>
  )
}
