"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Upload, Pencil, X } from "lucide-react"

// Mock data for dropdowns
const years = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString())

// Expanded mock data with makes, models, and trim levels
const vehicleData = {
  makes: [
    "Acura",
    "Audi",
    "BMW",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Dodge",
    "Ford",
    "GMC",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jaguar",
    "Jeep",
    "Kia",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Mazda",
    "Mercedes-Benz",
    "Nissan",
    "Porsche",
    "Ram",
    "Subaru",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ],
  models: {
    Toyota: [
      "Camry",
      "Corolla",
      "RAV4",
      "Highlander",
      "4Runner",
      "Tacoma",
      "Tundra",
      "Prius",
      "Sienna",
      "Avalon",
      "Venza",
      "GR86",
    ],
    Honda: ["Civic", "Accord", "CR-V", "Pilot", "Odyssey", "Ridgeline", "HR-V", "Passport", "Insight", "Clarity"],
    Ford: ["F-150", "Escape", "Explorer", "Mustang", "Bronco", "Ranger", "Edge", "Expedition", "Maverick", "Mach-E"],
    Chevrolet: [
      "Silverado",
      "Equinox",
      "Tahoe",
      "Suburban",
      "Traverse",
      "Malibu",
      "Camaro",
      "Colorado",
      "Blazer",
      "Trailblazer",
    ],
    BMW: ["3 Series", "5 Series", "7 Series", "X3", "X5", "X7", "i4", "iX", "Z4", "8 Series"],
    "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLS", "A-Class", "EQS", "CLA", "GLB"],
    Audi: ["A3", "A4", "A6", "Q3", "Q5", "Q7", "e-tron", "TT", "R8", "A8"],
    Lexus: ["ES", "RX", "NX", "IS", "GX", "LX", "UX", "LC", "RC", "LS"],
    Subaru: ["Outback", "Forester", "Crosstrek", "Impreza", "Legacy", "Ascent", "WRX", "BRZ", "Solterra"],
    Nissan: ["Altima", "Rogue", "Sentra", "Pathfinder", "Frontier", "Murano", "Kicks", "Armada", "Titan", "Leaf"],
    Hyundai: ["Elantra", "Tucson", "Santa Fe", "Sonata", "Palisade", "Kona", "Venue", "Ioniq", "Accent", "Nexo"],
    Kia: ["Forte", "Sportage", "Sorento", "Telluride", "Soul", "Seltos", "K5", "Carnival", "Niro", "EV6"],
    Mazda: ["CX-5", "Mazda3", "CX-9", "CX-30", "Mazda6", "MX-5 Miata", "CX-50", "MX-30"],
    Volkswagen: ["Jetta", "Tiguan", "Atlas", "Passat", "Taos", "Golf", "ID.4", "Arteon", "Atlas Cross Sport"],
    Jeep: ["Grand Cherokee", "Wrangler", "Cherokee", "Compass", "Renegade", "Gladiator", "Wagoneer", "Grand Wagoneer"],
    Acura: ["MDX", "RDX", "TLX", "ILX", "NSX", "Integra"],
    Buick: ["Encore", "Enclave", "Envision", "Encore GX"],
    Cadillac: ["Escalade", "XT5", "CT5", "XT4", "CT4", "XT6", "LYRIQ"],
    Chrysler: ["Pacifica", "300"],
    Dodge: ["Charger", "Challenger", "Durango", "Hornet"],
    GMC: ["Sierra", "Terrain", "Acadia", "Yukon", "Canyon", "Hummer EV"],
    Infiniti: ["Q50", "QX60", "QX50", "QX80", "Q60"],
    Jaguar: ["F-PACE", "E-PACE", "I-PACE", "XF", "F-TYPE"],
    "Land Rover": [
      "Range Rover",
      "Discovery",
      "Defender",
      "Range Rover Sport",
      "Range Rover Evoque",
      "Range Rover Velar",
    ],
    Lincoln: ["Navigator", "Aviator", "Corsair", "Nautilus"],
    Porsche: ["911", "Cayenne", "Macan", "Panamera", "Taycan", "718 Cayman", "718 Boxster"],
    Ram: ["1500", "2500", "3500", "ProMaster"],
    Tesla: ["Model 3", "Model Y", "Model S", "Model X", "Cybertruck"],
    Volvo: ["XC90", "XC60", "XC40", "S60", "S90", "V60", "C40"],
  },
  trims: {
    Camry: ["LE", "SE", "XLE", "XSE", "TRD", "Hybrid LE", "Hybrid SE", "Hybrid XLE"],
    "F-150": ["XL", "XLT", "Lariat", "King Ranch", "Platinum", "Limited", "Raptor", "Tremor"],
    Civic: ["LX", "Sport", "EX", "Touring", "Si", "Type R"],
    Silverado: ["WT", "Custom", "LT", "RST", "LTZ", "High Country", "ZR2"],
    "3 Series": ["330i", "330e", "M340i", "M3"],
    "C-Class": ["C300", "C300 4MATIC", "AMG C43", "AMG C63"],
    RAV4: [
      "LE",
      "XLE",
      "XLE Premium",
      "Adventure",
      "TRD Off-Road",
      "Limited",
      "Hybrid LE",
      "Hybrid XLE",
      "Hybrid XSE",
      "Prime SE",
      "Prime XSE",
    ],
    Wrangler: ["Sport", "Sport S", "Sahara", "Rubicon", "4xe", "392"],
    Outback: ["Base", "Premium", "Onyx Edition", "Limited", "Touring", "Wilderness"],
    Altima: ["S", "SV", "SR", "SL", "SR VC-Turbo"],
    Elantra: ["SE", "SEL", "Limited", "N Line", "N"],
    Forte: ["FE", "LXS", "GT-Line", "EX", "GT"],
    "CX-5": ["S", "Select", "Preferred", "Premium", "Premium Plus", "Carbon Edition", "Turbo", "Turbo Signature"],
    Jetta: ["S", "Sport", "SE", "SEL", "GLI"],
    "Grand Cherokee": ["Laredo", "Limited", "Trailhawk", "Overland", "Summit", "SRT", "Trackhawk"],
    MDX: ["Standard", "Technology", "A-Spec", "Advance", "Type S", "Type S Advance"],
    Encore: ["Preferred"],
    Escalade: ["Luxury", "Premium Luxury", "Sport", "Premium Luxury Platinum", "Sport Platinum"],
    Pacifica: [
      "Touring",
      "Touring L",
      "Limited",
      "Pinnacle",
      "Hybrid Touring",
      "Hybrid Touring L",
      "Hybrid Limited",
      "Hybrid Pinnacle",
    ],
    Charger: ["SXT", "GT", "R/T", "Scat Pack", "SRT Hellcat", "SRT Hellcat Redeye"],
    Sierra: ["Pro", "SLE", "Elevation", "SLT", "AT4", "Denali", "AT4X", "Denali Ultimate"],
    Q50: ["Pure", "Luxe", "Sensory", "Red Sport 400"],
    "F-PACE": ["P250", "P250 S", "P340 S", "P400 R-Dynamic S", "SVR"],
    "Range Rover": ["Standard", "Westminster", "Autobiography", "SV"],
    Navigator: ["Standard", "Reserve", "Black Label"],
    "911": ["Carrera", "Carrera S", "Carrera 4", "Carrera 4S", "Targa 4", "Targa 4S", "Turbo", "Turbo S", "GT3"],
    "1500": ["Tradesman", "Big Horn", "Rebel", "Laramie", "Limited", "TRX"],
    "Model 3": ["Standard Range", "Long Range", "Performance"],
    XC90: ["Momentum", "R-Design", "Inscription", "Recharge"],
  },
  drivetrains: {
    "F-150": ["4x2", "4x4"],
    Silverado: ["2WD", "4WD"],
    RAV4: ["FWD", "AWD"],
    "Grand Cherokee": ["4x2", "4x4", "Quadra-Drive II", "Quadra-Trac I", "Quadra-Trac II"],
    Wrangler: ["4x4", "4x4 Rock-Trac", "4x4 Command-Trac"],
    Sierra: ["2WD", "4WD"],
    Explorer: ["RWD", "4WD", "AWD"],
    Bronco: ["4x4", "Advanced 4x4"],
    Tacoma: ["2WD", "4WD"],
    "4Runner": ["2WD", "4WD", "AWD"],
  },
}

export function MultiStepVehicleForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [expandedSection, setExpandedSection] = useState(1)
  const [entryMethod, setEntryMethod] = useState("make-model")
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedTrim, setSelectedTrim] = useState("")
  const [selectedDrivetrain, setSelectedDrivetrain] = useState("")
  const [keyCount, setKeyCount] = useState<string>("")
  const [loanStatus, setLoanStatus] = useState<string>("")

  const [lienHolder, setLienHolder] = useState<string>("")
  const [remainingBalance, setRemainingBalance] = useState<string>("")

  // License Plate and VIN state
  const [licensePlate, setLicensePlate] = useState<string>("")
  const [licensePlateState, setLicensePlateState] = useState<string>("")
  const [vinNumber, setVinNumber] = useState<string>("")

  const [mileage, setMileage] = useState<string>("")
  const [postalCode, setPostalCode] = useState<string>("")
  const [exteriorColor, setExteriorColor] = useState<string>("")
  const [interiorColor, setInteriorColor] = useState<string>("")

  // History & Condition state
  const [vehicleCondition, setVehicleCondition] = useState<string>("")
  const [hasCleanTitle, setHasCleanTitle] = useState<string>("")
  const [doesRun, setDoesRun] = useState<string>("")
  const [hasBeenInAccident, setHasBeenInAccident] = useState<string>("")
  const [hasWarningLights, setHasWarningLights] = useState<string>("")
  const [hasBeenSmoked, setHasBeenSmoked] = useState<string>("")
  const [damageTypes, setDamageTypes] = useState<string[]>([])

  // Photos state
  const [uploadedPhotos, setUploadedPhotos] = useState<File[]>([])

  // Contact Information state
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [contactPreference, setContactPreference] = useState<string>("email")
  const [questions, setQuestions] = useState<string>("")

  const [formErrors, setFormErrors] = useState<{
    mileage?: string
    postalCode?: string
    exteriorColor?: string
    interiorColor?: string
    keyCount?: string
    loanStatus?: string
    lienHolder?: string
    remainingBalance?: string
    vehicleCondition?: string
    hasCleanTitle?: string
    doesRun?: string
    hasBeenInAccident?: string
    hasWarningLights?: string
    hasBeenSmoked?: string
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
    contactPreference?: string
    photos?: string
    licensePlate?: string
    licensePlateState?: string
    vinNumber?: string
  }>({})

  const [isSubmitted, setIsSubmitted] = useState(false)

  // Get available models based on selected make
  const availableModels =
    selectedMake && vehicleData.models[selectedMake as keyof typeof vehicleData.models]
      ? vehicleData.models[selectedMake as keyof typeof vehicleData.models]
      : []

  // Get available trims based on selected model
  const availableTrims =
    selectedModel && vehicleData.trims[selectedModel as keyof typeof vehicleData.trims]
      ? vehicleData.trims[selectedModel as keyof typeof vehicleData.trims]
      : []

  // Get available drivetrains based on selected model
  const availableDrivetrains =
    selectedModel &&
    vehicleData.drivetrains &&
    vehicleData.drivetrains[selectedModel as keyof typeof vehicleData.drivetrains]
      ? vehicleData.drivetrains[selectedModel as keyof typeof vehicleData.drivetrains]
      : []

  // Determine if we should show the detailed form
  const shouldShowForm =
    selectedDrivetrain ||
    (selectedTrim && availableDrivetrains.length === 0) ||
    (selectedModel && availableTrims.length === 0)

  const handleContinue = () => {
    if (expandedSection === 1) {
      if (entryMethod === "license-plate") {
        // Validate license plate
        const errors: {
          licensePlate?: string
          licensePlateState?: string
        } = {}

        if (!licensePlate.trim()) {
          errors.licensePlate = "License plate number is required"
        } else if (!/^[A-Za-z0-9]{1,8}$/.test(licensePlate.trim())) {
          errors.licensePlate = "Please enter a valid license plate number"
        }

        if (!licensePlateState) {
          errors.licensePlateState = "State is required"
        }

        setFormErrors(errors)

        // Only proceed if there are no errors
        if (Object.keys(errors).length === 0) {
          const nextSection = 2
          setCurrentStep(nextSection)
          setExpandedSection(nextSection)
        }
      } else if (entryMethod === "vin") {
        // Validate VIN
        const errors: {
          vinNumber?: string
        } = {}

        if (!vinNumber.trim()) {
          errors.vinNumber = "VIN number is required"
        } else if (!/^[A-HJ-NPR-Za-hj-npr-z0-9]{17}$/.test(vinNumber.trim())) {
          errors.vinNumber = "Please enter a valid 17-character VIN"
        }

        setFormErrors(errors)

        // Only proceed if there are no errors
        if (Object.keys(errors).length === 0) {
          const nextSection = 2
          setCurrentStep(nextSection)
          setExpandedSection(nextSection)
        }
      } else if (shouldShowForm) {
        // Validate form inputs for step 1
        const errors: {
          mileage?: string
          postalCode?: string
          exteriorColor?: string
          interiorColor?: string
          keyCount?: string
          loanStatus?: string
          lienHolder?: string
          remainingBalance?: string
        } = {}

        // Validate mileage
        if (!mileage) {
          errors.mileage = "Mileage is required"
        } else if (Number.parseInt(mileage) < 0) {
          errors.mileage = "Mileage cannot be negative"
        }

        // Validate postal code
        if (!postalCode) {
          errors.postalCode = "Postal code is required"
        } else if (!/^\d{5}$/.test(postalCode)) {
          errors.postalCode = "Postal code must be 5 digits"
        }

        // Validate exterior color
        if (!exteriorColor) {
          errors.exteriorColor = "Exterior color is required"
        }

        // Validate interior color
        if (!interiorColor) {
          errors.interiorColor = "Interior color is required"
        }

        // Validate key count
        if (!keyCount) {
          errors.keyCount = "Please select how many keys you have"
        }

        // Validate loan status
        if (!loanStatus) {
          errors.loanStatus = "Please select your loan status"
        }

        // Validate lien holder if loan or lease is selected
        if ((loanStatus === "loan" || loanStatus === "lease") && !lienHolder) {
          errors.lienHolder = "Please enter the name of the bank or dealership"
        }

        // Validate remaining balance if loan or lease is selected
        if ((loanStatus === "loan" || loanStatus === "lease") && !remainingBalance) {
          errors.remainingBalance = "Please enter the remaining balance"
        }

        setFormErrors(errors)

        // Only proceed if there are no errors
        if (Object.keys(errors).length === 0) {
          const nextSection = 2
          setCurrentStep(nextSection)
          setExpandedSection(nextSection)
        }
      }
    } else if (expandedSection === 2) {
      // Validate form inputs for step 2
      const errors: {
        vehicleCondition?: string
        hasCleanTitle?: string
        doesRun?: string
        hasBeenInAccident?: string
        hasWarningLights?: string
        hasBeenSmoked?: string
      } = {}

      // Validate vehicle condition
      if (!vehicleCondition) {
        errors.vehicleCondition = "Please rate your vehicle's condition"
      }

      // Validate clean title
      if (!hasCleanTitle) {
        errors.hasCleanTitle = "Please indicate if the vehicle has a clean title"
      }

      // Validate if vehicle runs
      if (!doesRun) {
        errors.doesRun = "Please indicate if the vehicle runs and drives"
      }

      // Validate accident history
      if (!hasBeenInAccident) {
        errors.hasBeenInAccident = "Please indicate if the vehicle has been in an accident"
      }

      // Validate warning lights
      if (!hasWarningLights) {
        errors.hasWarningLights = "Please indicate if there are any active warning lights"
      }

      // Validate smoking history
      if (!hasBeenSmoked) {
        errors.hasBeenSmoked = "Please indicate if the vehicle has been smoked in"
      }

      setFormErrors(errors)

      // Only proceed if there are no errors
      if (Object.keys(errors).length === 0) {
        const nextSection = 3
        setCurrentStep(nextSection)
        setExpandedSection(nextSection)
      }
    } else if (expandedSection === 3) {
      // Validate photos
      const errors: {
        photos?: string
      } = {}

      // Validate that at least one photo is uploaded
      if (uploadedPhotos.length === 0) {
        errors.photos = "Please upload at least one photo of your vehicle"
      }

      setFormErrors(errors)

      // Only proceed if there are no errors
      if (Object.keys(errors).length === 0) {
        const nextSection = 4
        setCurrentStep(nextSection)
        setExpandedSection(nextSection)
      }
    } else if (expandedSection === 4) {
      // Validate contact information
      const errors: {
        firstName?: string
        lastName?: string
        email?: string
        phone?: string
        contactPreference?: string
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
        errors.email = "Email address is required"
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Please enter a valid email address"
      }

      // Validate phone
      if (!phone.trim()) {
        errors.phone = "Phone number is required"
      } else if (!/^$$\d{3}$$ \d{3}-\d{4}$/.test(phone) && !/^\d{10}$/.test(phone.replace(/\D/g, ""))) {
        errors.phone = "Please enter a valid phone number"
      }

      // Validate contact preference
      if (!contactPreference) {
        errors.contactPreference = "Please select a contact preference"
      }

      setFormErrors(errors)

      // Only proceed if there are no errors
      if (Object.keys(errors).length === 0) {
        // Submit the form or move to a confirmation step
        setIsSubmitted(true)
        alert("Form submitted successfully!")
      }
    } else {
      // For any other case, move to the next step and expand that section
      const nextSection = expandedSection + 1
      setCurrentStep(nextSection)
      setExpandedSection(nextSection)
    }
  }

  const resetVehicleSelection = () => {
    setSelectedYear("")
    setSelectedMake("")
    setSelectedModel("")
    setSelectedTrim("")
    setSelectedDrivetrain("")
  }

  const toggleDamageType = (value: string) => {
    setDamageTypes((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setUploadedPhotos((prev) => [...prev, ...newFiles])
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 10) {
      let formattedValue = value
      if (value.length > 3) {
        formattedValue = `(${value.slice(0, 3)}) ${value.slice(3)}`
        if (value.length > 6) {
          formattedValue = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`
        }
      }
      setPhone(formattedValue)
    }
  }

  const resetAllFields = () => {
    // Reset vehicle selection
    resetVehicleSelection()

    // Reset license plate and VIN
    setLicensePlate("")
    setLicensePlateState("")
    setVinNumber("")

    // Reset vehicle details
    setMileage("")
    setPostalCode("")
    setExteriorColor("")
    setInteriorColor("")
    setKeyCount("")
    setLoanStatus("")
    setLienHolder("")
    setRemainingBalance("")

    // Reset history & condition
    setVehicleCondition("")
    setHasCleanTitle("")
    setDoesRun("")
    setHasBeenInAccident("")
    setHasWarningLights("")
    setHasBeenSmoked("")
    setDamageTypes([])

    // Reset photos
    setUploadedPhotos([])

    // Reset contact information
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhone("")
    setContactPreference("email")
    setQuestions("")

    // Reset form errors
    setFormErrors({})

    // Reset steps
    setCurrentStep(1)
    setExpandedSection(1)
    setEntryMethod("make-model")
  }

  const renderVehicleDetailsForm = () => {
    if (!shouldShowForm) return null

    return (
      <div className="mt-6 border-t border-border pt-6">
        <h4 className="text-lg font-medium mb-4">
          {selectedYear} {selectedMake} {selectedModel} {selectedTrim} {selectedDrivetrain && `(${selectedDrivetrain})`}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Exact Mileage <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className={`w-full p-2 border ${formErrors.mileage ? "border-red-500" : "border-border"} rounded-md`}
              placeholder="Exact Mileage"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              min="0"
              required
            />
            {formErrors.mileage && <p className="text-red-500 text-xs mt-1">{formErrors.mileage}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Postal Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className={`w-full p-2 border ${formErrors.postalCode ? "border-red-500" : "border-border"} rounded-md`}
              placeholder="_____"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value.replace(/[^\d]/g, "").slice(0, 5))}
              maxLength={5}
              required
            />
            {formErrors.postalCode && <p className="text-red-500 text-xs mt-1">{formErrors.postalCode}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Exterior Color <span className="text-red-500">*</span>
            </label>
            <Select value={exteriorColor} onValueChange={setExteriorColor}>
              <SelectTrigger className={formErrors.exteriorColor ? "border-red-500" : ""}>
                <SelectValue placeholder="[Select]" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="silver">Silver</SelectItem>
                <SelectItem value="gray">Gray</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {formErrors.exteriorColor && <p className="text-red-500 text-xs mt-1">{formErrors.exteriorColor}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Interior Color <span className="text-red-500">*</span>
            </label>
            <Select value={interiorColor} onValueChange={setInteriorColor}>
              <SelectTrigger className={formErrors.interiorColor ? "border-red-500" : ""}>
                <SelectValue placeholder="[Select]" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="gray">Gray</SelectItem>
                <SelectItem value="tan">Tan</SelectItem>
                <SelectItem value="beige">Beige</SelectItem>
                <SelectItem value="brown">Brown</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {formErrors.interiorColor && <p className="text-red-500 text-xs mt-1">{formErrors.interiorColor}</p>}
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">
            How many keys do you have? <span className="text-red-500">*</span>
          </label>
          <Tabs value={keyCount} onValueChange={setKeyCount} className="w-full p-0">
            <TabsList
              className={`grid grid-cols-2 w-full rounded-lg overflow-hidden border ${formErrors.keyCount ? "border-red-500" : "border-border"} [&>*]:px-0 p-0 bg-gray-100 dark:bg-slate-800`}
            >
              <TabsTrigger
                value="1"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-l-lg border-r border-border"
              >
                1
              </TabsTrigger>
              <TabsTrigger
                value="2"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-r-lg"
              >
                2+
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {formErrors.keyCount && <p className="text-red-500 text-xs mt-1">{formErrors.keyCount}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">
            Do you have a loan or lease on the vehicle? <span className="text-red-500">*</span>
          </label>
          <Tabs value={loanStatus} onValueChange={setLoanStatus} className="w-full">
            <TabsList
              className={`grid grid-cols-3 w-full rounded-lg overflow-hidden border ${formErrors.loanStatus ? "border-red-500" : "border-border"} [&>*]:px-0 p-0 bg-gray-100 dark:bg-slate-800`}
            >
              <TabsTrigger
                value="loan"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-l-lg border-r border-border"
              >
                Loan
              </TabsTrigger>
              <TabsTrigger
                value="lease"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 border-r border-border"
              >
                Lease
              </TabsTrigger>
              <TabsTrigger
                value="none"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-r-lg"
              >
                No, I own it
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {formErrors.loanStatus && <p className="text-red-500 text-xs mt-1">{formErrors.loanStatus}</p>}
        </div>

        {(loanStatus === "loan" || loanStatus === "lease") && (
          <div className="mt-4 mb-6 space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Who holds the lien on the loan/lease? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`w-full p-2 border ${formErrors.lienHolder ? "border-red-500" : "border-border"} rounded-md`}
                placeholder="Name of bank or dealership"
                value={lienHolder}
                onChange={(e) => setLienHolder(e.target.value)}
                required
              />
              {formErrors.lienHolder && <p className="text-red-500 text-xs mt-1">{formErrors.lienHolder}</p>}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                What remaining balance do you owe? <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="text"
                  className={`w-full p-2 pl-7 border ${formErrors.remainingBalance ? "border-red-500" : "border-border"} rounded-md`}
                  placeholder="Loan Amount"
                  value={remainingBalance}
                  onChange={(e) => setRemainingBalance(e.target.value.replace(/[^\d.]/g, ""))}
                  required
                />
              </div>
              {formErrors.remainingBalance && (
                <p className="text-red-500 text-xs mt-1">{formErrors.remainingBalance}</p>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderHistoryConditionForm = () => {
    return (
      <div className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">
            How would you rate your vehicle overall? <span className="text-red-500">*</span>
          </label>
          <RadioGroup value={vehicleCondition} onValueChange={setVehicleCondition} className="space-y-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="like-new" id="like-new" />
              <label htmlFor="like-new" className="text-sm">
                Like-new condition with little signs of wear or tear
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="average" id="average" />
              <label htmlFor="average" className="text-sm">
                Average condition with normal wear and tear (dents, dings, scratches)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="visible-rust" id="visible-rust" />
              <label htmlFor="visible-rust" className="text-sm">
                Visible rust, cosmetic damage, or signs of vehicle repainting
              </label>
            </div>
          </RadioGroup>
          {formErrors.vehicleCondition && <p className="text-red-500 text-xs mt-1">{formErrors.vehicleCondition}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Does the vehicle have a clean title? <span className="text-red-500">*</span>
          </label>
          <Tabs value={hasCleanTitle} onValueChange={setHasCleanTitle} className="w-full">
            <TabsList className="grid grid-cols-2 w-full rounded-lg overflow-hidden border border-border [&>*]:px-0 p-0 bg-gray-100 dark:bg-slate-800">
              <TabsTrigger
                value="yes"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-l-lg border-r border-border"
              >
                Yes
              </TabsTrigger>
              <TabsTrigger
                value="no"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-r-lg"
              >
                No
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {formErrors.hasCleanTitle && <p className="text-red-500 text-xs mt-1">{formErrors.hasCleanTitle}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Does your vehicle run and drive? <span className="text-red-500">*</span>
          </label>
          <Tabs value={doesRun} onValueChange={setDoesRun} className="w-full">
            <TabsList className="grid grid-cols-2 w-full rounded-lg overflow-hidden border border-border [&>*]:px-0 p-0 bg-gray-100 dark:bg-slate-800">
              <TabsTrigger
                value="yes"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-l-lg border-r border-border"
              >
                Yes
              </TabsTrigger>
              <TabsTrigger
                value="no"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-r-lg"
              >
                No
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {formErrors.doesRun && <p className="text-red-500 text-xs mt-1">{formErrors.doesRun}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Has your vehicle been in an accident? <span className="text-red-500">*</span>
          </label>
          <Tabs value={hasBeenInAccident} onValueChange={setHasBeenInAccident} className="w-full">
            <TabsList className="grid grid-cols-2 w-full rounded-lg overflow-hidden border border-border [&>*]:px-0 p-0 bg-gray-100 dark:bg-slate-800">
              <TabsTrigger
                value="yes"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-l-lg border-r border-border"
              >
                Yes
              </TabsTrigger>
              <TabsTrigger
                value="no"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-r-lg"
              >
                No
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {formErrors.hasBeenInAccident && <p className="text-red-500 text-xs mt-1">{formErrors.hasBeenInAccident}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Are there any active warning or service lights? <span className="text-red-500">*</span>
          </label>
          <Tabs value={hasWarningLights} onValueChange={setHasWarningLights} className="w-full">
            <TabsList className="grid grid-cols-2 w-full rounded-lg overflow-hidden border border-border [&>*]:px-0 p-0 bg-gray-100 dark:bg-slate-800">
              <TabsTrigger
                value="yes"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-l-lg border-r border-border"
              >
                Yes
              </TabsTrigger>
              <TabsTrigger
                value="no"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-r-lg"
              >
                No
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {formErrors.hasWarningLights && <p className="text-red-500 text-xs mt-1">{formErrors.hasWarningLights}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Has the vehicle been smoked in? <span className="text-red-500">*</span>
          </label>
          <Tabs value={hasBeenSmoked} onValueChange={setHasBeenSmoked} className="w-full">
            <TabsList className="grid grid-cols-2 w-full rounded-lg overflow-hidden border border-border [&>*]:px-0 p-0 bg-gray-100 dark:bg-slate-800">
              <TabsTrigger
                value="yes"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-l-lg border-r border-border"
              >
                Yes
              </TabsTrigger>
              <TabsTrigger
                value="no"
                className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-r-lg"
              >
                No
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {formErrors.hasBeenSmoked && <p className="text-red-500 text-xs mt-1">{formErrors.hasBeenSmoked}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Does your vehicle have any of the following? <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="hail-damage"
                checked={damageTypes.includes("hail-damage")}
                onCheckedChange={() => toggleDamageType("hail-damage")}
              />
              <label
                htmlFor="hail-damage"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Hail damage
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="dents"
                checked={damageTypes.includes("dents")}
                onCheckedChange={() => toggleDamageType("dents")}
              />
              <label
                htmlFor="dents"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Dents
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="scratched-paint"
                checked={damageTypes.includes("scratched-paint")}
                onCheckedChange={() => toggleDamageType("scratched-paint")}
              />
              <label
                htmlFor="scratched-paint"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Scratched paint
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="fading-paint"
                checked={damageTypes.includes("fading-paint")}
                onCheckedChange={() => toggleDamageType("fading-paint")}
              />
              <label
                htmlFor="fading-paint"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Fading or chipping paint
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="interior-wear"
                checked={damageTypes.includes("interior-wear")}
                onCheckedChange={() => toggleDamageType("interior-wear")}
              />
              <label
                htmlFor="interior-wear"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Interior wear and tear, stains
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="none"
                checked={damageTypes.includes("none")}
                onCheckedChange={() => toggleDamageType("none")}
              />
              <label
                htmlFor="none"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                None of the above
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderPhotosForm = () => {
    return (
      <div className="space-y-6">
        <h4 className="text-lg font-medium">Recommended Photos</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Exterior: front left, front right, back left, back right</li>
          <li>Wheels and tires: front left, front right, back left, back right</li>
          <li>Dashboard, odometer, service lights</li>
          <li>Front seats, back seats</li>
          <li>Engine bay, including front bumper</li>
        </ul>

        <div className="mt-6 border border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 dark:bg-slate-800">
          <div className="flex flex-col items-center justify-center">
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Drag and drop images or click here to select files. Non-image files will be discarded.
            </p>
            <input
              type="file"
              id="photo-upload"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handlePhotoUpload}
            />
            <Button variant="outline" onClick={() => document.getElementById("photo-upload")?.click()} className="mt-2">
              Select Files
            </Button>
            {formErrors.photos && <p className="text-red-500 text-xs mt-2">{formErrors.photos}</p>}
          </div>
        </div>

        {uploadedPhotos.length > 0 && (
          <div className="mt-6">
            <h5 className="text-md font-medium mb-2">Uploaded Photos ({uploadedPhotos.length})</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {uploadedPhotos.map((photo, index) => (
                <div key={index} className="relative aspect-square bg-gray-100 rounded-md overflow-hidden">
                  <img
                    src={photo ? URL.createObjectURL(photo) : "/placeholder.svg"}
                    alt={`Uploaded photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setUploadedPhotos((prev) => prev.filter((_, i) => i !== index))
                    }}
                    className="absolute top-1 right-1 bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 transition-all"
                    aria-label="Remove photo"
                  >
                    <X className="h-4 w-4 text-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Button onClick={handleContinue} className="w-full md:w-auto">
            Continue <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setFormErrors((prev) => ({ ...prev, photos: undefined }))
              setCurrentStep(currentStep + 1)
              setExpandedSection(4)
            }}
            className="w-full md:w-auto ml-4"
          >
            Skip Photos
          </Button>
        </div>
      </div>
    )
  }

  const renderContactForm = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className={`w-full p-2 border ${formErrors.firstName ? "border-red-500" : "border-border"} rounded-md`}
              placeholder="First"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className={`w-full p-2 border ${formErrors.lastName ? "border-red-500" : "border-border"} rounded-md`}
              placeholder="Last"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className={`w-full p-2 border ${formErrors.email ? "border-red-500" : "border-border"} rounded-md`}
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className={`w-full p-2 border ${formErrors.phone ? "border-red-500" : "border-border"} rounded-md`}
              placeholder="(___) ___-____"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
            {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            What is the best way to contact you? <span className="text-red-500">*</span>
          </label>
          <RadioGroup value={contactPreference} onValueChange={setContactPreference} className="space-y-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="contact-email" />
              <label htmlFor="contact-email" className="text-sm">
                Email
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="text" id="contact-text" />
              <label htmlFor="contact-text" className="text-sm">
                Text Message
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="call" id="contact-call" />
              <label htmlFor="contact-call" className="text-sm">
                Phone Call
              </label>
            </div>
          </RadioGroup>
          {formErrors.contactPreference && <p className="text-red-500 text-xs mt-1">{formErrors.contactPreference}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">What questions can we answer for you?</label>
          <Textarea
            className="w-full p-2 border border-border rounded-md"
            placeholder="Add a question or comment"
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            rows={4}
          />
        </div>

        <Button onClick={handleContinue} className="w-full md:w-auto">
          Submit
        </Button>

        <p className="text-xs text-gray-500 mt-4">
          If you have entered a cell phone number, or another number that you later convert to a cell phone number, you
          agree that we may contact you at this number. You also agree to receive calls and messages such as,
          pre-recorded messages, calls and messages from automated dialing systems, or text messages. Normal cell phone
          charges may apply.
        </p>
      </div>
    )
  }

  const isFormValid = () => {
    if (entryMethod === "make-model") {
      return shouldShowForm
    } else if (entryMethod === "license-plate") {
      return licensePlate.trim() !== "" && licensePlateState !== ""
    } else if (entryMethod === "vin") {
      return vinNumber.trim() !== ""
    }
    return false
  }

  return (
    <Card className="border rounded-lg overflow-hidden">
      <CardContent className="p-0">
        {/* Reset Button - only shown after first step and before submission */}
        {currentStep > 1 && !isSubmitted && (
          <div className="p-6 border-b border-border">
            <Button variant="outline" onClick={resetAllFields} className="flex items-center">
              <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
              Start Over
            </Button>
          </div>
        )}

        {/* Submission confirmation */}
        {isSubmitted && (
          <div className="p-6 text-center">
            <h3 className="text-xl font-medium text-green-600 mb-4">Thank You For Your Submission!</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We've received your vehicle information and will be in touch shortly.
            </p>
            <Button
              onClick={() => {
                resetAllFields()
                setIsSubmitted(false)
              }}
              className="w-full md:w-auto"
            >
              Submit Another Vehicle
            </Button>
          </div>
        )}

        {/* Main form content - hidden when submitted */}
        {!isSubmitted && (
          <>
            {/* Step 1: Vehicle Information */}
            <div className={`border-b border-border ${expandedSection === 1 ? "p-6" : "p-0"}`}>
              <div className={`flex justify-between items-center ${expandedSection !== 1 ? "p-6" : ""}`}>
                <h3 className="text-lg font-medium text-primary">Vehicle Information</h3>
                <div className="flex items-center">
                  {expandedSection !== 1 ? (
                    <span
                      className="text-sm text-primary underline flex items-center cursor-pointer"
                      onClick={() => setExpandedSection(1)}
                    >
                      Edit <Pencil className="h-3 w-3 ml-1" />
                    </span>
                  ) : (
                    <span className="text-sm text-muted-foreground mr-2">1 / 4</span>
                  )}
                </div>
              </div>

              {expandedSection === 1 && (
                <>
                  {!shouldShowForm && (
                    <p className="mb-4 text-muted-foreground">
                      Get started by entering your Vehicle Identification Number (VIN), make and model, or your license
                      plate.
                    </p>
                  )}

                  {!shouldShowForm && (
                    <Tabs
                      value={entryMethod}
                      defaultValue="make-model"
                      className="mb-6 p-0"
                      onValueChange={setEntryMethod}
                    >
                      <TabsList className="grid grid-cols-3 w-full p-0 max-w-md rounded-lg overflow-hidden border border-border [&>*]:px-0 bg-gray-100 dark:bg-slate-800">
                        <TabsTrigger
                          value="make-model"
                          className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-l-lg border-r border-border"
                        >
                          Make & Model
                        </TabsTrigger>
                        <TabsTrigger
                          value="license-plate"
                          className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 border-r border-border"
                        >
                          License Plate
                        </TabsTrigger>
                        <TabsTrigger
                          value="vin"
                          className="h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300 rounded-r-lg"
                        >
                          VIN Number
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  )}

                  {entryMethod === "make-model" && (
                    <>
                      {!shouldShowForm ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                          <div>
                            <label className="block mb-2 text-sm font-medium">Year</label>
                            <Select value={selectedYear} onValueChange={setSelectedYear}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Year" />
                              </SelectTrigger>
                              <SelectContent>
                                {years.map((year) => (
                                  <SelectItem key={year} value={year}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <label className="block mb-2 text-sm font-medium">Make</label>
                            <Select
                              value={selectedMake}
                              onValueChange={(value) => {
                                setSelectedMake(value)
                                setSelectedModel("")
                                setSelectedTrim("")
                              }}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="[Select Make]" />
                              </SelectTrigger>
                              <SelectContent>
                                {vehicleData.makes.map((make) => (
                                  <SelectItem key={make} value={make}>
                                    {make}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <label className="block mb-2 text-sm font-medium">Model</label>
                            <Select
                              value={selectedModel}
                              onValueChange={(value) => {
                                setSelectedModel(value)
                                setSelectedTrim("")
                                setSelectedDrivetrain("")
                              }}
                              disabled={!selectedMake}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="[Select Model]" />
                              </SelectTrigger>
                              <SelectContent>
                                {availableModels.map((model) => (
                                  <SelectItem key={model} value={model}>
                                    {model}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          {selectedModel && availableTrims.length > 0 && (
                            <div className="lg:col-start-1">
                              <label className="block mb-2 text-sm font-medium">Trim</label>
                              <Select
                                value={selectedTrim}
                                onValueChange={(value) => {
                                  setSelectedTrim(value)
                                  setSelectedDrivetrain("")
                                }}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="[Select Trim]" />
                                </SelectTrigger>
                                <SelectContent>
                                  {availableTrims.map((trim) => (
                                    <SelectItem key={trim} value={trim}>
                                      {trim}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          )}

                          {selectedTrim && availableDrivetrains.length > 0 && (
                            <div>
                              <label className="block mb-2 text-sm font-medium">Drivetrain</label>
                              <Select value={selectedDrivetrain} onValueChange={setSelectedDrivetrain}>
                                <SelectTrigger>
                                  <SelectValue placeholder="[Select Drivetrain]" />
                                </SelectTrigger>
                                <SelectContent>
                                  {availableDrivetrains.map((drivetrain) => (
                                    <SelectItem key={drivetrain} value={drivetrain}>
                                      {drivetrain}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          )}
                        </div>
                      ) : null}

                      {renderVehicleDetailsForm()}
                    </>
                  )}

                  {entryMethod === "license-plate" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block mb-2 text-sm font-medium">
                          License Plate Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className={`w-full p-2 border ${formErrors.licensePlate ? "border-red-500" : "border-border"} rounded-md`}
                          placeholder="Enter license plate number"
                          value={licensePlate}
                          onChange={(e) => setLicensePlate(e.target.value)}
                          maxLength={8}
                        />
                        {formErrors.licensePlate && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.licensePlate}</p>
                        )}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium">
                          State <span className="text-red-500">*</span>
                        </label>
                        <Select value={licensePlateState} onValueChange={setLicensePlateState}>
                          <SelectTrigger className={formErrors.licensePlateState ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select State" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="AL">Alabama</SelectItem>
                            <SelectItem value="AK">Alaska</SelectItem>
                            <SelectItem value="AZ">Arizona</SelectItem>
                            <SelectItem value="AR">Arkansas</SelectItem>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="CO">Colorado</SelectItem>
                            <SelectItem value="CT">Connecticut</SelectItem>
                            <SelectItem value="DE">Delaware</SelectItem>
                            <SelectItem value="FL">Florida</SelectItem>
                            <SelectItem value="GA">Georgia</SelectItem>
                            <SelectItem value="HI">Hawaii</SelectItem>
                            <SelectItem value="ID">Idaho</SelectItem>
                            <SelectItem value="IL">Illinois</SelectItem>
                            <SelectItem value="IN">Indiana</SelectItem>
                            <SelectItem value="IA">Iowa</SelectItem>
                            <SelectItem value="KS">Kansas</SelectItem>
                            <SelectItem value="KY">Kentucky</SelectItem>
                            <SelectItem value="LA">Louisiana</SelectItem>
                            <SelectItem value="ME">Maine</SelectItem>
                            <SelectItem value="MD">Maryland</SelectItem>
                            <SelectItem value="MA">Massachusetts</SelectItem>
                            <SelectItem value="MI">Michigan</SelectItem>
                            <SelectItem value="MN">Minnesota</SelectItem>
                            <SelectItem value="MS">Mississippi</SelectItem>
                            <SelectItem value="MO">Missouri</SelectItem>
                            <SelectItem value="MT">Montana</SelectItem>
                            <SelectItem value="NE">Nebraska</SelectItem>
                            <SelectItem value="NV">Nevada</SelectItem>
                            <SelectItem value="NH">New Hampshire</SelectItem>
                            <SelectItem value="NJ">New Jersey</SelectItem>
                            <SelectItem value="NM">New Mexico</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="NC">North Carolina</SelectItem>
                            <SelectItem value="ND">North Dakota</SelectItem>
                            <SelectItem value="OH">Ohio</SelectItem>
                            <SelectItem value="OK">Oklahoma</SelectItem>
                            <SelectItem value="OR">Oregon</SelectItem>
                            <SelectItem value="PA">Pennsylvania</SelectItem>
                            <SelectItem value="RI">Rhode Island</SelectItem>
                            <SelectItem value="SC">South Carolina</SelectItem>
                            <SelectItem value="SD">South Dakota</SelectItem>
                            <SelectItem value="TN">Tennessee</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            <SelectItem value="UT">Utah</SelectItem>
                            <SelectItem value="VT">Vermont</SelectItem>
                            <SelectItem value="VA">Virginia</SelectItem>
                            <SelectItem value="WA">Washington</SelectItem>
                            <SelectItem value="WV">West Virginia</SelectItem>
                            <SelectItem value="WI">Wisconsin</SelectItem>
                            <SelectItem value="WY">Wyoming</SelectItem>
                            <SelectItem value="DC">District of Columbia</SelectItem>
                          </SelectContent>
                        </Select>
                        {formErrors.licensePlateState && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.licensePlateState}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {entryMethod === "vin" && (
                    <div className="mb-6">
                      <label className="block mb-2 text-sm font-medium">
                        VIN Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className={`w-full p-2 border ${formErrors.vinNumber ? "border-red-500" : "border-border"} rounded-md`}
                        placeholder="Enter 17-digit VIN number"
                        value={vinNumber}
                        onChange={(e) => setVinNumber(e.target.value.toUpperCase())}
                        maxLength={17}
                      />
                      {formErrors.vinNumber && <p className="text-red-500 text-xs mt-1">{formErrors.vinNumber}</p>}
                    </div>
                  )}

                  <Button onClick={handleContinue} className="w-full md:w-auto" disabled={!isFormValid()}>
                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            {/* Step 2: History & Condition */}
            <div className={`border-b border-border ${expandedSection === 2 ? "p-6" : "p-0"}`}>
              <div className={`flex justify-between items-center ${expandedSection !== 2 ? "p-6" : ""}`}>
                <h3 className="text-lg font-medium text-primary">History & Condition</h3>
                <div className="flex items-center">
                  {expandedSection !== 2 && currentStep >= 2 ? (
                    <span
                      className="text-sm text-primary underline flex items-center cursor-pointer"
                      onClick={() => setExpandedSection(1)}
                    >
                      Edit <Pencil className="h-3 w-3 ml-1" />
                    </span>
                  ) : (
                    <span className="text-sm text-muted-foreground mr-2">2 / 4</span>
                  )}
                </div>
              </div>

              {expandedSection === 2 && (
                <>
                  <div className="w-full border-b border-border mt-4 mb-6"></div>
                  {renderHistoryConditionForm()}
                  <div className="mt-6">
                    <Button onClick={handleContinue} className="w-full md:w-auto">
                      Continue <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>

            {/* Step 3: Photos (Optional) */}
            <div className={`border-b border-border ${expandedSection === 3 ? "p-6" : "p-0"}`}>
              <div className={`flex justify-between items-center ${expandedSection !== 3 ? "p-6" : ""}`}>
                <h3 className="text-lg font-medium text-primary">Photos (Optional)</h3>
                <div className="flex items-center">
                  {expandedSection !== 3 && currentStep >= 3 ? (
                    <span
                      className="text-sm text-primary underline flex items-center cursor-pointer"
                      onClick={() => setExpandedSection(3)}
                    >
                      Edit <Pencil className="h-3 w-3 ml-1" />
                    </span>
                  ) : (
                    <span className="text-sm text-muted-foreground mr-2">3 / 4</span>
                  )}
                </div>
              </div>

              {expandedSection === 3 && (
                <>
                  <div className="w-full border-b border-border mt-4 mb-6"></div>
                  {renderPhotosForm()}
                </>
              )}
            </div>

            {/* Step 4: Contact Information */}
            <div className={`${expandedSection === 4 ? "p-6" : "p-0"}`}>
              <div className={`flex justify-between items-center ${expandedSection !== 4 ? "p-6" : ""}`}>
                <h3 className="text-lg font-medium text-primary">Contact Information</h3>
                <div className="flex items-center">
                  {expandedSection !== 4 && currentStep >= 4 ? (
                    <span
                      className="text-sm text-primary underline flex items-center cursor-pointer"
                      onClick={() => setExpandedSection(4)}
                    >
                      Edit <Pencil className="h-3 w-3 ml-1" />
                    </span>
                  ) : (
                    <span className="text-sm text-muted-foreground mr-2">4 / 4</span>
                  )}
                </div>
              </div>

              {expandedSection === 4 && (
                <>
                  <div className="w-full border-b border-border mt-4 mb-6"></div>
                  {renderContactForm()}
                </>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
