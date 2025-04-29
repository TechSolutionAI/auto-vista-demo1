import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SellVehicleForm } from "@/components/sell-vehicle-form"
import { SellVehicleSteps } from "@/components/sell-vehicle-steps"

export default function SellVehiclePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="/placeholder.svg?height=300&width=1920"
          alt="Sell Your Vehicle background"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-start justify-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sell Your Vehicle</h1>
          <p className="mt-4 max-w-lg text-lg text-gray-200">
            Get a competitive offer for your vehicle with our simple and transparent process.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Sell to Auto Vista?</h2>
              <p className="text-muted-foreground mb-6">
                Selling your vehicle to Auto Vista offers numerous advantages over private sales or other dealerships.
                Our process is designed to be simple, fair, and convenient.
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Competitive Offers</h3>
                    <p className="text-muted-foreground">
                      We analyze market data to ensure you receive a fair and competitive offer for your vehicle.
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">No Hassle Process</h3>
                    <p className="text-muted-foreground">
                      Skip the stress of private sales - no strangers visiting your home or test drives with unknown
                      individuals.
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
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Same-Day Payment</h3>
                    <p className="text-muted-foreground">
                      Get paid quickly - we can often complete the entire process and provide payment on the same day.
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Expert Assistance</h3>
                    <p className="text-muted-foreground">
                      Our team handles all paperwork and administrative tasks, making the process smooth and efficient.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <a href="#get-offer">Get Your Offer</a>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sell Your Vehicle"
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
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">How It Works</h2>
          <SellVehicleSteps />
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8">What We Accept</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>All Makes & Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We purchase vehicles from all manufacturers, both domestic and imported. Whether you have a sedan,
                  SUV, truck, or sports car, we're interested.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Any Age & Condition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From nearly new to well-loved classics, we buy vehicles of all ages and conditions. Even if your
                  vehicle needs repairs, we'll make an offer.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Paid Off or Not</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Still making payments? No problem. We can work with your lender to pay off your loan and handle all
                  the paperwork for a smooth transition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="get-offer" className="py-12 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Get Your Vehicle Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to receive an initial estimate for your vehicle. One of our specialists will
              contact you to schedule an in-person appraisal.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <SellVehicleForm />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready for a Trade-In?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Looking to upgrade? We offer excellent trade-in values that can be applied to your next vehicle purchase.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Browse Inventory</Button>
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
