"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"

export function InventoryFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [priceRange, setPriceRange] = useState([0, 100000])
  const [yearRange, setYearRange] = useState([2010, 2023])
  const [mileageRange, setMileageRange] = useState([0, 150000])

  const makes = [
    { id: "toyota", label: "Toyota" },
    { id: "honda", label: "Honda" },
    { id: "ford", label: "Ford" },
    { id: "chevrolet", label: "Chevrolet" },
    { id: "nissan", label: "Nissan" },
    { id: "bmw", label: "BMW" },
    { id: "mercedes", label: "Mercedes" },
  ]

  const bodyTypes = [
    { id: "sedan", label: "Sedan" },
    { id: "suv", label: "SUV" },
    { id: "truck", label: "Truck" },
    { id: "convertible", label: "Convertible" },
    { id: "hatchback", label: "Hatchback" },
    { id: "minivan", label: "Minivan" },
  ]

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    params.set("minPrice", priceRange[0].toString())
    params.set("maxPrice", priceRange[1].toString())
    params.set("minYear", yearRange[0].toString())
    params.set("maxYear", yearRange[1].toString())
    params.set("minMileage", mileageRange[0].toString())
    params.set("maxMileage", mileageRange[1].toString())

    router.push(`/inventory?${params.toString()}`)
  }

  const resetFilters = () => {
    setPriceRange([0, 100000])
    setYearRange([2010, 2023])
    setMileageRange([0, 150000])
    router.push("/inventory")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <h3 className="font-medium">Filters</h3>
        <div className="flex gap-2">
          <Button onClick={applyFilters} className="flex-1">
            Apply
          </Button>
          <Button onClick={resetFilters} variant="outline" className="flex-1">
            Reset
          </Button>
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["price", "year", "make", "body"]}>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider value={priceRange} min={0} max={100000} step={1000} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <div className="text-sm">${priceRange[0].toLocaleString()}</div>
                <div className="text-sm">${priceRange[1].toLocaleString()}</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="year">
          <AccordionTrigger>Year Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider value={yearRange} min={1990} max={2023} step={1} onValueChange={setYearRange} />
              <div className="flex items-center justify-between">
                <div className="text-sm">{yearRange[0]}</div>
                <div className="text-sm">{yearRange[1]}</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="mileage">
          <AccordionTrigger>Mileage Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider value={mileageRange} min={0} max={150000} step={5000} onValueChange={setMileageRange} />
              <div className="flex items-center justify-between">
                <div className="text-sm">{mileageRange[0].toLocaleString()} miles</div>
                <div className="text-sm">{mileageRange[1].toLocaleString()} miles</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="make">
          <AccordionTrigger>Make</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {makes.map((make) => (
                <div key={make.id} className="flex items-center space-x-2">
                  <Checkbox id={`make-${make.id}`} />
                  <Label htmlFor={`make-${make.id}`}>{make.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="body">
          <AccordionTrigger>Body Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {bodyTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox id={`body-${type.id}`} />
                  <Label htmlFor={`body-${type.id}`}>{type.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
