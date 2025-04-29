"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function ServiceAppointmentForm() {
  const [date, setDate] = useState<Date>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="rounded-full bg-primary/10 p-3">
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
              className="h-6 w-6 text-primary"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Appointment Request Received</h3>
          <p className="text-muted-foreground">
            Thank you for scheduling service with us. Our team will contact you shortly to confirm your appointment.
          </p>
          <Button onClick={() => setSubmitted(false)}>Schedule Another Appointment</Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" required />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" required />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vehicle-make">Vehicle Make</Label>
          <Input id="vehicle-make" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-model">Vehicle Model</Label>
          <Input id="vehicle-model" required />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vehicle-year">Vehicle Year</Label>
          <Input id="vehicle-year" type="number" min="1900" max="2099" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-mileage">Vehicle Mileage</Label>
          <Input id="vehicle-mileage" type="number" min="0" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="service-type">Service Type</Label>
        <Select required>
          <SelectTrigger id="service-type">
            <SelectValue placeholder="Select service type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="oil-change">Oil Change</SelectItem>
            <SelectItem value="brake-service">Brake Service</SelectItem>
            <SelectItem value="tire-service">Tire Service</SelectItem>
            <SelectItem value="engine-repair">Engine Repair</SelectItem>
            <SelectItem value="transmission">Transmission Service</SelectItem>
            <SelectItem value="electrical">Electrical System</SelectItem>
            <SelectItem value="ac-heating">AC & Heating</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Preferred Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="preferred-time">Preferred Time</Label>
          <Select required>
            <SelectTrigger id="preferred-time">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (8:00 AM - 11:00 AM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12:00 PM - 3:00 PM)</SelectItem>
              <SelectItem value="evening">Evening (4:00 PM - 6:00 PM)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="comments">Additional Comments</Label>
        <Textarea id="comments" rows={4} />
      </div>
      <Button type="submit" className="w-full">
        Schedule Appointment
      </Button>
    </form>
  )
}
