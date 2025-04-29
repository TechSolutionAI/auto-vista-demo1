"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface SearchFormProps {
  simplified?: boolean
}

// Mock data with stock quantities
const makeOptions = [
  { value: "alfa-romeo", label: "ALFA ROMEO", stock: 1 },
  { value: "aston-martin", label: "ASTON MARTIN", stock: 1 },
  { value: "audi", label: "AUDI", stock: 44 },
  { value: "bmw", label: "BMW", stock: 72 },
  { value: "chevrolet", label: "CHEVROLET", stock: 7 },
  { value: "daihatsu", label: "DAIHATSU", stock: 1 },
  { value: "ford", label: "FORD", stock: 9 },
  { value: "honda", label: "HONDA", stock: 18 },
  { value: "toyota", label: "TOYOTA", stock: 24 },
  { value: "nissan", label: "NISSAN", stock: 9 },
  { value: "mercedes", label: "MERCEDES", stock: 5 },
]

const modelOptions = [
  { value: "camry", label: "CAMRY", stock: 8 },
  { value: "corolla", label: "COROLLA", stock: 6 },
  { value: "civic", label: "CIVIC", stock: 7 },
  { value: "accord", label: "ACCORD", stock: 5 },
  { value: "f150", label: "F-150", stock: 9 },
  { value: "silverado", label: "SILVERADO", stock: 6 },
  { value: "altima", label: "ALTIMA", stock: 4 },
]

const locationOptions = [
  { value: "seattle", label: "SEATTLE, WA", stock: 42 },
  { value: "portland", label: "PORTLAND, OR", stock: 35 },
  { value: "spokane", label: "SPOKANE, WA", stock: 18 },
  { value: "boise", label: "BOISE, ID", stock: 15 },
  { value: "vancouver", label: "VANCOUVER, WA", stock: 12 },
]

export function SearchForm({ simplified = false }: SearchFormProps) {
  const router = useRouter()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

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
    if (selected.length === 0) return ""
    return selected.map((value) => options.find((option) => option.value === value)?.label || value).join(", ")
  }

  // Helper function to get all selected labels for display
  const getSelectedLabelsForDisplay = (
    selected: string[],
    options: { value: string; label: string; stock: number }[],
  ): string => {
    if (selected.length === 0) return ""
    return selected.map((value) => options.find((option) => option.value === value)?.label || value).join(", ")
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-4">
      <div className="space-y-2">
        <Popover open={openDropdown === "make"} onOpenChange={(open) => setOpenDropdown(open ? "make" : null)}>
          <PopoverTrigger asChild>
            <div className="relative">
              <div className="border border-input rounded-md bg-background h-16 px-4 flex items-center justify-between cursor-pointer">
                <div className="flex flex-col w-full overflow-hidden">
                  <span className="text-sm text-muted-foreground">Make</span>
                  {selectedMakes.length > 0 ? (
                    <span className="font-medium text-xs truncate">
                      {getSelectedLabelsForDisplay(selectedMakes, makeOptions)}
                    </span>
                  ) : (
                    <span className="font-medium">Select Make</span>
                  )}
                </div>
                {openDropdown === "make" ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                )}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 border border-input" align="start">
            <div className="h-80 overflow-y-auto">
              {makeOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center justify-between px-4 py-2 hover:bg-muted border-b border-input last:border-0"
                >
                  <div className="flex items-center">
                    <Checkbox
                      id={`make-${option.value}`}
                      checked={selectedMakes.includes(option.value)}
                      onCheckedChange={() => toggleSelection(option.value, selectedMakes, setSelectedMakes)}
                      className="mr-3"
                    />
                    <label htmlFor={`make-${option.value}`} className="cursor-pointer">
                      {option.label}
                    </label>
                  </div>
                  <span className="text-muted-foreground">({option.stock})</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Popover open={openDropdown === "model"} onOpenChange={(open) => setOpenDropdown(open ? "model" : null)}>
          <PopoverTrigger asChild>
            <div className="relative">
              <div className="border border-input rounded-md bg-background h-16 px-4 flex items-center justify-between cursor-pointer">
                <div className="flex flex-col w-full overflow-hidden">
                  <span className="text-sm text-muted-foreground">Model</span>
                  {selectedModels.length > 0 ? (
                    <span className="font-medium text-xs truncate">
                      {getSelectedLabelsForDisplay(selectedModels, modelOptions)}
                    </span>
                  ) : (
                    <span className="font-medium">Select Model</span>
                  )}
                </div>
                {openDropdown === "model" ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                )}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 border border-input" align="start">
            <div className="h-80 overflow-y-auto">
              {modelOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center justify-between px-4 py-2 hover:bg-muted border-b border-input last:border-0"
                >
                  <div className="flex items-center">
                    <Checkbox
                      id={`model-${option.value}`}
                      checked={selectedModels.includes(option.value)}
                      onCheckedChange={() => toggleSelection(option.value, selectedModels, setSelectedModels)}
                      className="mr-3"
                    />
                    <label htmlFor={`model-${option.value}`} className="cursor-pointer">
                      {option.label}
                    </label>
                  </div>
                  <span className="text-muted-foreground">({option.stock})</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Popover open={openDropdown === "location"} onOpenChange={(open) => setOpenDropdown(open ? "location" : null)}>
          <PopoverTrigger asChild>
            <div className="relative">
              <div className="border border-input rounded-md bg-background h-16 px-4 flex items-center justify-between cursor-pointer">
                <div className="flex flex-col w-full overflow-hidden">
                  <span className="text-sm text-muted-foreground">Location</span>
                  {selectedLocations.length > 0 ? (
                    <span className="font-medium text-xs truncate">
                      {getSelectedLabelsForDisplay(selectedLocations, locationOptions)}
                    </span>
                  ) : (
                    <span className="font-medium">Select Location</span>
                  )}
                </div>
                {openDropdown === "location" ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                )}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 border border-input" align="start">
            <div className="h-80 overflow-y-auto">
              {locationOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center justify-between px-4 py-2 hover:bg-muted border-b border-input last:border-0"
                >
                  <div className="flex items-center">
                    <Checkbox
                      id={`location-${option.value}`}
                      checked={selectedLocations.includes(option.value)}
                      onCheckedChange={() => toggleSelection(option.value, selectedLocations, setSelectedLocations)}
                      className="mr-3"
                    />
                    <label htmlFor={`location-${option.value}`} className="cursor-pointer">
                      {option.label}
                    </label>
                  </div>
                  <span className="text-muted-foreground">({option.stock})</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Button type="submit" className="w-full h-16 text-base flex items-center justify-center">
          <Search className="mr-2 h-5 w-5" />
          <span>{mounted ? t("search.button") : "Search"}</span>
        </Button>
      </div>
    </form>
  )
}
