"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface SearchFormProps {
  simplified?: boolean
}

export function SearchForm({ simplified = false }: SearchFormProps) {
  const router = useRouter()
  const { t } = useLanguage()
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [location, setLocation] = useState("")
  const [mounted, setMounted] = useState(false)

  // Only render translated content after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (make) params.append("make", make)
    if (model) params.append("model", model)
    if (location) params.append("location", location)

    router.push(`/inventory?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-4">
      <div className="space-y-2">
        <Select value={make} onValueChange={setMake}>
          <SelectTrigger>
            <SelectValue placeholder={mounted ? t("search.make") : "Make"} />
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
            <SelectValue placeholder={mounted ? t("search.model") : "Model"} />
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
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger>
            <SelectValue placeholder={mounted ? t("search.location") : "Location"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="seattle">Seattle, WA</SelectItem>
            <SelectItem value="portland">Portland, OR</SelectItem>
            <SelectItem value="spokane">Spokane, WA</SelectItem>
            <SelectItem value="boise">Boise, ID</SelectItem>
            <SelectItem value="vancouver">Vancouver, WA</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Button type="submit" className="w-full uppercase tracking-wider">
          <Search className="mr-2 h-4 w-4" />
          {mounted ? t("search.button") : "Search"}
        </Button>
      </div>
    </form>
  )
}
