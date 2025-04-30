"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight } from "lucide-react"

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
  const [entryMethod, setEntryMethod] = useState("make-model")
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedTrim, setSelectedTrim] = useState("")
  const [selectedDrivetrain, setSelectedDrivetrain] = useState("")
  const [keyCount, setKeyCount] = useState<string>("")
  const [loanStatus, setLoanStatus] = useState<string>("")

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
    setCurrentStep(currentStep + 1)
  }

  const resetVehicleSelection = () => {
    setSelectedYear("")
    setSelectedMake("")
    setSelectedModel("")
    setSelectedTrim("")
    setSelectedDrivetrain("")
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
              className="w-full p-2 border border-border rounded-md"
              placeholder="Exact Mileage"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Postal Code <span className="text-red-500">*</span>
            </label>
            <input type="text" className="w-full p-2 border border-border rounded-md" placeholder="_____" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Exterior Color <span className="text-red-500">*</span>
            </label>
            <Select>
              <SelectTrigger>
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
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Interior Color <span className="text-red-500">*</span>
            </label>
            <Select>
              <SelectTrigger>
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
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">
            How many keys do you have? <span className="text-red-500">*</span>
          </label>
          <Tabs value={keyCount} onValueChange={setKeyCount} className="w-full p-0">
            <TabsList className="grid grid-cols-2 w-full rounded-lg overflow-hidden border border-border [&>*]:px-0 p-0 bg-gray-100 dark:bg-slate-800">
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
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">
            Do you have a loan or lease on the vehicle? <span className="text-red-500">*</span>
          </label>
          <Tabs value={loanStatus} onValueChange={setLoanStatus} className="w-full">
            <TabsList className="grid grid-cols-3 w-full rounded-lg overflow-hidden border border-border [&>*]:px-0 p-0 bg-gray-100 dark:bg-slate-800">
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
        </div>
      </div>
    )
  }

  return (
    <Card className="border rounded-lg overflow-hidden">
      <CardContent className="p-0">
        {/* Step 1: Vehicle Information */}
        <div className="border-b border-border p-6">
          {shouldShowForm && (
            <>
              <div className="mb-6">
                <Button variant="outline" size="sm" onClick={resetVehicleSelection} className="text-sm">
                  ← Start Over
                </Button>
              </div>
              <div className="border-t border-border mb-6"></div>
            </>
          )}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-primary">Vehicle Information</h3>
            <span className="text-sm text-muted-foreground">{currentStep} / 4</span>
          </div>

          <p className="mb-4 text-muted-foreground">
            Get started by entering your Vehicle Identification Number (VIN), make and model, or your license plate.
          </p>

          <Tabs defaultValue="make-model" className="mb-6 p-0" onValueChange={setEntryMethod}>
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
                <label className="block mb-2 text-sm font-medium">License Plate Number</label>
                <input
                  type="text"
                  className="w-full p-2 border border-border rounded-md"
                  placeholder="Enter license plate number"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">State</label>
                <Select>
                  <SelectTrigger>
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
              </div>
            </div>
          )}

          {entryMethod === "vin" && (
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">VIN Number</label>
              <input
                type="text"
                className="w-full p-2 border border-border rounded-md"
                placeholder="Enter 17-digit VIN number"
              />
            </div>
          )}

          <Button onClick={handleContinue} className="w-full md:w-auto">
            Continue <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Step 2: History & Condition (collapsed) */}
        <div className="border-b border-border p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">History & Condition</h3>
            <span className="text-sm text-muted-foreground">2 / 4</span>
          </div>
        </div>

        {/* Step 3: Photos (collapsed) */}
        <div className="border-b border-border p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Photos (Optional)</h3>
            <span className="text-sm text-muted-foreground">3 / 4</span>
          </div>
        </div>

        {/* Step 4: Contact Information (collapsed) */}
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Contact Information</h3>
            <span className="text-sm text-muted-foreground">4 / 4</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
