"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight } from "lucide-react"

export function ServiceAppointmentForm() {
  const [submitted, setSubmitted] = useState(false)

  // Form fields state
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [homePhone, setHomePhone] = useState("")
  const [timeToCall, setTimeToCall] = useState("anytime")
  const [dateOfContact, setDateOfContact] = useState("")
  const [vin, setVin] = useState("")
  const [vehicleType, setVehicleType] = useState("car")
  const [vehicleYear, setVehicleYear] = useState("")
  const [vehicleMake, setVehicleMake] = useState("")
  const [vehicleModel, setVehicleModel] = useState("")
  const [problemDescription, setProblemDescription] = useState("")
  const [consentChecked, setConsentChecked] = useState(false)

  // Form errors state
  const [formErrors, setFormErrors] = useState<{
    firstName?: string
    lastName?: string
    email?: string
    consent?: string
  }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const errors: {
      firstName?: string
      lastName?: string
      email?: string
      consent?: string
    } = {}

    // Validate first name
    if (!firstName.trim()) {
      errors.firstName = "First name is required"
    }

    // Validate last name
    if (!lastName.trim()) {
      errors.lastName = "Last name is required"
    }

    // Validate email
    if (!email.trim()) {
      errors.email = "Email is required"
    } else {
      // More comprehensive email validation regex
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address"
      }
    }

    // Validate consent
    if (!consentChecked) {
      errors.consent = "Please check the box to verify acknowledgement and consent."
    }

    setFormErrors(errors)

    // Only proceed if there are no errors
    if (Object.keys(errors).length === 0) {
      // In a real app, you would submit the form data to your backend
      setSubmitted(true)
    }
  }

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setPhone: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 10) {
      let formattedValue = value
      if (value.length > 3) {
        formattedValue = `${value.slice(0, 3)}-${value.slice(3)}`
        if (value.length > 6) {
          formattedValue = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`
        }
      }
      setPhone(formattedValue)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-gold/30 bg-darkgray p-8 text-foreground shadow-lg">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="rounded-full bg-gold/10 p-4">
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
              className="h-8 w-8 text-gold"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gold">Appointment Request Received</h3>
          <p className="text-muted-foreground text-lg">
            Thank you for scheduling service with us. Our team will contact you shortly to confirm your appointment.
          </p>
          <Button
            onClick={() => {
              setSubmitted(false)
              // Reset form fields
              setFirstName("")
              setLastName("")
              setEmail("")
              setContactPhone("")
              setHomePhone("")
              setTimeToCall("anytime")
              setDateOfContact("")
              setVin("")
              setVehicleType("car")
              setVehicleYear("")
              setVehicleMake("")
              setVehicleModel("")
              setProblemDescription("")
              setConsentChecked(false)
              setFormErrors({})
            }}
            className="bg-gold hover:bg-gold/90 text-black font-semibold"
          >
            Schedule Another Appointment
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-gold/30 p-8 bg-darkgray shadow-lg">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name" className="text-gold">
            First Name: <span className="text-red-500">*</span>
          </Label>
          <Input
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`bg-charcoal border-border focus:border-gold focus:ring-gold ${formErrors.firstName ? "border-red-500" : ""}`}
          />
          {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name" className="text-gold">
            Last Name: <span className="text-red-500">*</span>
          </Label>
          <Input
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`bg-charcoal border-border focus:border-gold focus:ring-gold ${formErrors.lastName ? "border-red-500" : ""}`}
          />
          {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gold">
          Email: <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`bg-charcoal border-border focus:border-gold focus:ring-gold ${formErrors.email ? "border-red-500" : ""}`}
        />
        {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-phone" className="text-gold">
            Contact Phone:
          </Label>
          <Input
            id="contact-phone"
            type="tel"
            placeholder="###-###-####"
            value={contactPhone}
            onChange={(e) => handlePhoneChange(e, setContactPhone)}
            className="bg-charcoal border-border focus:border-gold focus:ring-gold"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="home-phone" className="text-gold">
            Home Phone:
          </Label>
          <Input
            id="home-phone"
            type="tel"
            placeholder="###-###-####"
            value={homePhone}
            onChange={(e) => handlePhoneChange(e, setHomePhone)}
            className="bg-charcoal border-border focus:border-gold focus:ring-gold"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="time-to-call" className="text-gold">
            Time to Call:
          </Label>
          <Select value={timeToCall} onValueChange={setTimeToCall}>
            <SelectTrigger id="time-to-call" className="bg-charcoal border-border focus:ring-gold">
              <SelectValue placeholder="Anytime" />
            </SelectTrigger>
            <SelectContent className="bg-darkgray border-border">
              <SelectItem value="anytime">Anytime</SelectItem>
              <SelectItem value="morning">Morning</SelectItem>
              <SelectItem value="afternoon">Afternoon</SelectItem>
              <SelectItem value="evening">Evening</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="date-of-contact" className="text-gold">
            Date of Contact:
          </Label>
          <Input
            id="date-of-contact"
            type="date"
            value={dateOfContact}
            onChange={(e) => setDateOfContact(e.target.value)}
            className="bg-charcoal border-border focus:border-gold focus:ring-gold"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vin" className="text-gold">
          VIN:
        </Label>
        <Input
          id="vin"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          className="bg-charcoal border-border focus:border-gold focus:ring-gold"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vehicle-type" className="text-gold">
            Vehicle Type:
          </Label>
          <Select value={vehicleType} onValueChange={setVehicleType}>
            <SelectTrigger id="vehicle-type" className="bg-charcoal border-border focus:ring-gold">
              <SelectValue placeholder="Car" />
            </SelectTrigger>
            <SelectContent className="bg-darkgray border-border">
              <SelectItem value="car">Car</SelectItem>
              <SelectItem value="truck">Truck</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="van">Van</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-year" className="text-gold">
            Vehicle Year:
          </Label>
          <Select value={vehicleYear} onValueChange={setVehicleYear}>
            <SelectTrigger id="vehicle-year" className="bg-charcoal border-border focus:ring-gold">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent className="bg-darkgray border-border max-h-60 overflow-y-auto">
              {Array.from({ length: 30 }, (_, i) => (
                <SelectItem key={i} value={(new Date().getFullYear() - i).toString()}>
                  {new Date().getFullYear() - i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vehicle-make" className="text-gold">
            Vehicle Make:
          </Label>
          <Input
            id="vehicle-make"
            value={vehicleMake}
            onChange={(e) => setVehicleMake(e.target.value)}
            className="bg-charcoal border-border focus:border-gold focus:ring-gold"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-model" className="text-gold">
            Vehicle Model:
          </Label>
          <Input
            id="vehicle-model"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            className="bg-charcoal border-border focus:border-gold focus:ring-gold"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="problem-description" className="text-gold">
          Describe the vehicle's problem:
        </Label>
        <Textarea
          id="problem-description"
          rows={4}
          value={problemDescription}
          onChange={(e) => setProblemDescription(e.target.value)}
          className="bg-charcoal border-border focus:border-gold focus:ring-gold"
        />
      </div>

      <div className="flex items-start space-x-2 pt-2">
        <Checkbox
          id="consent"
          checked={consentChecked}
          onCheckedChange={(checked) => setConsentChecked(checked === true)}
          className={`border-gold data-[state=checked]:bg-gold data-[state=checked]:text-black ${formErrors.consent ? "border-red-500" : ""}`}
        />
        <div className="space-y-1">
          <Label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground">
            ACKNOWLEDGMENT AND CONSENT: By checking this box I hereby consent to receive text messages and/or phone
            calls from or on behalf of Auto Vista or their employees to the mobile phone number I provided above. By
            opting in, I understand that message and data rates may apply. This acknowledgement constitutes my written
            consent to receive text messages to my cell phone and phone calls, including communications sent using an
            auto-dialer or pre-recorded message. You may withdraw your consent at any time by texting "STOP" or "HELP"
            for help. See our privacy policy for more information.
          </Label>
          {formErrors.consent && <p className="text-red-500 text-xs">{formErrors.consent}</p>}
        </div>
      </div>

      <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-black font-semibold h-14 text-lg">
        Submit Request
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  )
}
