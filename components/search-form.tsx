"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchForm() {
  const router = useRouter()
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (make) params.append("make", make)
    if (model) params.append("model", model)
    if (minPrice) params.append("minPrice", minPrice)
    if (maxPrice) params.append("maxPrice", maxPrice)

    router.push(`/inventory?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-5">
      <div className="space-y-2">
        <Select value={make} onValueChange={setMake}>
          <SelectTrigger>
            <SelectValue placeholder="Make" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="toyota">Toyota</SelectItem>
            <SelectItem value="honda">Honda</SelectItem>
            <SelectItem value="ford">Ford</SelectItem>
            <SelectItem value="chevrolet">Chevrolet</SelectItem>
            <SelectItem value="nissan">Nissan</SelectItem>
            <SelectItem value="bmw">BMW</SelectItem>
            <SelectItem value="mercedes">Mercedes</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger>
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="camry">Camry</SelectItem>
            <SelectItem value="corolla">Corolla</SelectItem>
            <SelectItem value="civic">Civic</SelectItem>
            <SelectItem value="accord">Accord</SelectItem>
            <SelectItem value="f150">F-150</SelectItem>
            <SelectItem value="silverado">Silverado</SelectItem>
            <SelectItem value="altima">Altima</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Button type="submit" className="w-full">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </form>
  )
}
