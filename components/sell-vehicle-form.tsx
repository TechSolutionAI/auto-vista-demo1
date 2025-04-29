"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function SellVehicleForm() {
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
          <h3 className="text-xl font-bold">Information Received</h3>
          <p className="text-muted-foreground">
            Thank you for submitting your vehicle information. One of our specialists will contact you within 24 hours
            with an initial offer.
          </p>
          <Button onClick={() => setSubmitted(false)}>Submit Another Vehicle</Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
      <div className="space-y-2">
        <h3 className="text-lg font-bold">Contact Information</h3>
      </div>
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

      <div className="space-y-2">
        <h3 className="text-lg font-bold">Vehicle Information</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="vehicle-year">Year</Label>
          <Input id="vehicle-year" type="number" min="1900" max="2099" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-make">Make</Label>
          <Input id="vehicle-make" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-model">Model</Label>
          <Input id="vehicle-model" required />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vehicle-trim">Trim Level</Label>
          <Input id="vehicle-trim" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-mileage">Mileage</Label>
          <Input id="vehicle-mileage" type="number" min="0" required />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vehicle-condition">Overall Condition</Label>
          <Select required>
            <SelectTrigger id="vehicle-condition">
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="excellent">Excellent - Like New</SelectItem>
              <SelectItem value="very-good">Very Good - Minor Wear</SelectItem>
              <SelectItem value="good">Good - Normal Wear for Age</SelectItem>
              <SelectItem value="fair">Fair - Some Mechanical Issues</SelectItem>
              <SelectItem value="poor">Poor - Significant Problems</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-ownership">Ownership Status</Label>
          <Select required>
            <SelectTrigger id="vehicle-ownership">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paid-off">Paid Off - I Own It Outright</SelectItem>
              <SelectItem value="financed">Financed - Still Making Payments</SelectItem>
              <SelectItem value="leased">Leased</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="vehicle-features">Notable Features</Label>
        <Textarea id="vehicle-features" placeholder="Premium sound system, leather seats, sunroof, etc." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="vehicle-issues">Known Issues</Label>
        <Textarea id="vehicle-issues" placeholder="Mechanical problems, body damage, warning lights, etc." />
      </div>
      <div className="flex items-start space-x-2">
        <Checkbox id="terms" required />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the terms and conditions
          </Label>
          <p className="text-sm text-muted-foreground">
            By submitting this form, you agree to be contacted by our team regarding your vehicle.
          </p>
        </div>
      </div>
      <Button type="submit" className="w-full">
        Submit Vehicle Information
      </Button>
    </form>
  )
}
