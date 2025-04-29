import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="/placeholder.svg?height=300&width=1920"
          alt="Contact Us background"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex h-full flex-col items-start justify-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-lg text-lg text-gray-200">
            We're here to help with any questions you may have about our vehicles or services.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a question about a vehicle in our inventory? Interested in financing options? Need to schedule
                service? Fill out the form below and one of our team members will get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Information</h2>
                <div className="grid gap-6">
                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <MapPin className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h3 className="font-bold">Address</h3>
                        <p className="text-muted-foreground">123 Auto Lane</p>
                        <p className="text-muted-foreground">Carville, CA 90210</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <Phone className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h3 className="font-bold">Phone</h3>
                        <p className="text-muted-foreground">Main: (555) 123-4567</p>
                        <p className="text-muted-foreground">Sales: (555) 123-4568</p>
                        <p className="text-muted-foreground">Service: (555) 123-4569</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <Mail className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-muted-foreground">General: info@autovista.com</p>
                        <p className="text-muted-foreground">Sales: sales@autovista.com</p>
                        <p className="text-muted-foreground">Service: service@autovista.com</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <Clock className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h3 className="font-bold">Hours of Operation</h3>
                        <div className="grid grid-cols-2 gap-x-4 text-muted-foreground">
                          <p>Monday - Friday:</p>
                          <p>9:00 AM - 7:00 PM</p>
                          <p>Saturday:</p>
                          <p>9:00 AM - 5:00 PM</p>
                          <p>Sunday:</p>
                          <p>Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Our Location</h2>
          <div className="rounded-lg overflow-hidden h-[400px] w-full">
            {/* In a real application, you would embed a Google Map or other map service here */}
            <div className="bg-gray-300 h-full w-full flex items-center justify-center">
              <p className="text-muted-foreground">Map Placeholder</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold mb-2">Directions</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're conveniently located just off Highway 101, exit 25. From the exit, head east on Main Street for 0.5
              miles. Auto Vista will be on your right. Ample parking is available in our lot.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Department Directory</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Sales Department</h3>
                <p className="text-muted-foreground mb-4">
                  Our sales team is ready to help you find the perfect vehicle for your needs and budget.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>(555) 123-4568</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>sales@autovista.com</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Service Department</h3>
                <p className="text-muted-foreground mb-4">
                  Our factory-trained technicians provide expert maintenance and repair services for all makes and
                  models.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>(555) 123-4569</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>service@autovista.com</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Finance Department</h3>
                <p className="text-muted-foreground mb-4">
                  Our finance experts can help you explore financing options and secure competitive rates.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>(555) 123-4570</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>finance@autovista.com</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
