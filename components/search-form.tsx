"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Search } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface SearchFormProps {
  simplified?: boolean
}

// Mock data with stock quantities
const makeOptions = [
  { value: "toyota", label: "Toyota", stock: 24 },
  { value: "honda", label: "Honda", stock: 18 },
  { value: "ford", label: "Ford", stock: 15 },
  { value: "chevrolet", label: "Chevrolet", stock: 12 },
  { value: "nissan", label: "Nissan", stock: 9 },
  { value: "bmw", label: "BMW", stock: 7 },
  { value: "mercedes", label: "Mercedes", stock: 5 },
]

const modelOptions = [
  { value: "camry", label: "Camry", stock: 8 },
  { value: "corolla", label: "Corolla", stock: 6 },
  { value: "civic", label: "Civic", stock: 7 },
  { value: "accord", label: "Accord", stock: 5 },
  { value: "f150", label: "F-150", stock: 9 },
  { value: "silverado", label: "Silverado", stock: 6 },
  { value: "altima", label: "Altima", stock: 4 },
]

const locationOptions = [
  { value: "seattle", label: "Seattle, WA", stock: 42 },
  { value: "portland", label: "Portland, OR", stock: 35 },
  { value: "spokane", label: "Spokane, WA", stock: 18 },
  { value: "boise", label: "Boise, ID", stock: 15 },
  { value: "vancouver", label: "Vancouver, WA", stock: 12 },
]

export function SearchForm({ simplified = false }: SearchFormProps) {
  const router = useRouter()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Update state to handle multiple selections
  const [selectedMakes, setSelectedMakes] = useState<string[]>([])
  const [selectedModels, setSelectedModels] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])

  // Only render translated content after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()

    // Join selected values with commas for URL parameters
    if (selectedMakes.length > 0) {
      params.append("make", selectedMakes.join(","))
    }
    if (selectedModels.length > 0) {
      params.append("model", selectedModels.join(","))
    }
    if (selectedLocations.length > 0) {
      params.append("location", selectedLocations.join(","))
    }

    router.push(`/inventory?${params.toString()}`)
  }

  // Helper function to toggle selection in an array
  const toggleSelection = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value))
    } else {
      setSelected([...selected, value])
    }
  }

  // Helper function to get labels for selected values
  const getSelectedLabels = (
    selected: string[],
    options: { value: string; label: string; stock: number }[],
  ): string => {
    return selected.map((value) => options.find((option) => option.value === value)?.label || value).join(", ")
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-4">
      <div className="space-y-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" className="w-full justify-between flex-col h-auto py-2">
              <div className="w-full flex justify-between items-center">
                <span>{mounted ? t("search.make") : "Make"}</span>
                <Search className="h-4 w-4 shrink-0 opacity-50" />
              </div>
              {selectedMakes.length > 0 && (
                <div className="w-full text-left text-sm text-muted-foreground mt-1 truncate">
                  {getSelectedLabels(selectedMakes, makeOptions)}
                </div>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="center">
            <div className="max-h-60 overflow-y-auto p-2">
              {makeOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 rounded-md p-2 hover:bg-muted">
                  <Checkbox
                    id={`make-${option.value}`}
                    checked={selectedMakes.includes(option.value)}
                    onCheckedChange={() => toggleSelection(option.value, selectedMakes, setSelectedMakes)}
                  />
                  <label htmlFor={`make-${option.value}`} className="flex-1 cursor-pointer text-sm">
                    {option.label} <span className="text-muted-foreground">({option.stock})</span>
                  </label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" className="w-full justify-between flex-col h-auto py-2">
              <div className="w-full flex justify-between items-center">
                <span>{mounted ? t("search.model") : "Model"}</span>
                <Search className="h-4 w-4 shrink-0 opacity-50" />
              </div>
              {selectedModels.length > 0 && (
                <div className="w-full text-left text-sm text-muted-foreground mt-1 truncate">
                  {getSelectedLabels(selectedModels, modelOptions)}
                </div>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="center">
            <div className="max-h-60 overflow-y-auto p-2">
              {modelOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 rounded-md p-2 hover:bg-muted">
                  <Checkbox
                    id={`model-${option.value}`}
                    checked={selectedModels.includes(option.value)}
                    onCheckedChange={() => toggleSelection(option.value, selectedModels, setSelectedModels)}
                  />
                  <label htmlFor={`model-${option.value}`} className="flex-1 cursor-pointer text-sm">
                    {option.label} <span className="text-muted-foreground">({option.stock})</span>
                  </label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" className="w-full justify-between flex-col h-auto py-2">
              <div className="w-full flex justify-between items-center">
                <span>{mounted ? t("search.location") : "Location"}</span>
                <Search className="h-4 w-4 shrink-0 opacity-50" />
              </div>
              {selectedLocations.length > 0 && (
                <div className="w-full text-left text-sm text-muted-foreground mt-1 truncate">
                  {getSelectedLabels(selectedLocations, locationOptions)}
                </div>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="center">
            <div className="max-h-60 overflow-y-auto p-2">
              {locationOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 rounded-md p-2 hover:bg-muted">
                  <Checkbox
                    id={`location-${option.value}`}
                    checked={selectedLocations.includes(option.value)}
                    onCheckedChange={() => toggleSelection(option.value, selectedLocations, setSelectedLocations)}
                  />
                  <label htmlFor={`location-${option.value}`} className="flex-1 cursor-pointer text-sm">
                    {option.label} <span className="text-muted-foreground">({option.stock})</span>
                  </label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
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
