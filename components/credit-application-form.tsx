"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Pencil } from "lucide-react"
import { US_STATES, YEARS_OPTIONS, MONTHS_OPTIONS, RESIDENCE_TYPES, EMPLOYER_TYPES } from "@/lib/constants"

export function CreditApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [expandedSection, setExpandedSection] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Applicant Information state
  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")
  const [ssn, setSsn] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>()
  const [licenseNumber, setLicenseNumber] = useState("")
  const [licenseState, setLicenseState] = useState("")
  const [licenseExpDate, setLicenseExpDate] = useState<Date | undefined>()
  const [mobilePhone, setMobilePhone] = useState("")
  const [homePhone, setHomePhone] = useState("")
  const [email, setEmail] = useState("")
  const [residenceYears, setResidenceYears] = useState("")
  const [residenceMonths, setResidenceMonths] = useState("")
  const [residenceType, setResidenceType] = useState("")
  const [rentMortgage, setRentMortgage] = useState("")

  // Employment Information state
  const [employer, setEmployer] = useState("")
  const [employerType, setEmployerType] = useState("")
  const [monthlyIncome, setMonthlyIncome] = useState("")
  const [occupation, setOccupation] = useState("")
  const [empAddress1, setEmpAddress1] = useState("")
  const [empAddress2, setEmpAddress2] = useState("")
  const [empCity, setEmpCity] = useState("")
  const [empState, setEmpState] = useState("")
  const [empZip, setEmpZip] = useState("")
  const [workPhone, setWorkPhone] = useState("")
  const [jobYears, setJobYears] = useState("")
  const [jobMonths, setJobMonths] = useState("")

  // Additional Information state
  const [additionalComments, setAdditionalComments] = useState("")
  const [acknowledgment1, setAcknowledgment1] = useState(false)
  const [acknowledgment2, setAcknowledgment2] = useState(false)

  // Form errors state
  const [formErrors, setFormErrors] = useState<{
    firstName?: string
    lastName?: string
    address1?: string
    city?: string
    state?: string
    zip?: string
    ssn?: string
    dateOfBirth?: string
    mobilePhone?: string
    email?: string
    residenceYears?: string
    residenceMonths?: string
    residenceType?: string
    rentMortgage?: string
    employer?: string
    employerType?: string
    monthlyIncome?: string
    occupation?: string
    empCity?: string
    empState?: string
    empZip?: string
    workPhone?: string
    jobYears?: string
    jobMonths?: string
    acknowledgment1?: string
    acknowledgment2?: string
  }>({})

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 10) {
      let formattedValue = value
      if (value.length > 3) {
        formattedValue = `(${value.slice(0, 3)}) ${value.slice(3)}`
        if (value.length > 6) {
          formattedValue = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`
        }
      }
      setter(formattedValue)
    }
  }

  const handleSsnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 9) {
      let formattedValue = value
      if (value.length > 3) {
        formattedValue = `${value.slice(0, 3)}-${value.slice(3)}`
        if (value.length > 5) {
          formattedValue = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5)}`
        }
      }
      setSsn(formattedValue)
    }
  }

  const handleCurrencyChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const value = e.target.value.replace(/[^\d.]/g, "")
    setter(value)
  }

  const handleContinue = () => {
    if (expandedSection === 1) {
      // Validate Applicant Information
      const errors: {
        firstName?: string
        lastName?: string
        address1?: string
        city?: string
        state?: string
        zip?: string
        ssn?: string
        dateOfBirth?: string
        mobilePhone?: string
        email?: string
        residenceYears?: string
        residenceMonths?: string
        residenceType?: string
        rentMortgage?: string
      } = {}

      if (!firstName.trim()) {
        errors.firstName = "First name is required"
      }

      if (!lastName.trim()) {
        errors.lastName = "Last name is required"
      }

      if (!address1.trim()) {
        errors.address1 = "Address is required"
      }

      if (!city.trim()) {
        errors.city = "City is required"
      }

      if (!state) {
        errors.state = "State is required"
      }

      if (!zip.trim()) {
        errors.zip = "Zip code is required"
      } else if (!/^\d{5}$/.test(zip)) {
        errors.zip = "Zip code must be 5 digits"
      }

      if (!ssn.trim()) {
        errors.ssn = "Social Security Number is required"
      } else if (!/^\d{3}-\d{2}-\d{4}$/.test(ssn)) {
        errors.ssn = "Please enter a valid SSN (###-##-####)"
      }

      if (!dateOfBirth) {
        errors.dateOfBirth = "Date of birth is required"
      }

      if (!mobilePhone.trim()) {
        errors.mobilePhone = "Mobile phone is required"
      } else if (!/^$$\d{3}$$ \d{3}-\d{4}$/.test(mobilePhone) && !/^\d{10}$/.test(mobilePhone.replace(/\D/g, ""))) {
        errors.mobilePhone = "Please enter a valid phone number"
      }

      if (!email.trim()) {
        errors.email = "Email is required"
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Please enter a valid email address"
      }

      if (!residenceYears) {
        errors.residenceYears = "Years at residence is required"
      }

      if (!residenceMonths) {
        errors.residenceMonths = "Months at residence is required"
      }

      if (!residenceType) {
        errors.residenceType = "Residence type is required"
      }

      if (!rentMortgage.trim()) {
        errors.rentMortgage = "Rent/Mortgage amount is required"
      }

      setFormErrors(errors)

      // Only proceed if there are no errors
      if (Object.keys(errors).length === 0) {
        const nextSection = 2
        setCurrentStep(nextSection)
        setExpandedSection(nextSection)
      }
    } else if (expandedSection === 2) {
      // Validate Employment Information
      const errors: {
        employer?: string
        employerType?: string
        monthlyIncome?: string
        occupation?: string
        empCity?: string
        empState?: string
        empZip?: string
        workPhone?: string
        jobYears?: string
        jobMonths?: string
      } = {}

      if (!employer.trim()) {
        errors.employer = "Employer name is required"
      }

      if (!employerType) {
        errors.employerType = "Employer type is required"
      }

      if (!monthlyIncome.trim()) {
        errors.monthlyIncome = "Monthly income is required"
      }

      if (!occupation.trim()) {
        errors.occupation = "Occupation is required"
      }

      if (!empCity.trim()) {
        errors.empCity = "City is required"
      }

      if (!empState) {
        errors.empState = "State is required"
      }

      if (!empZip.trim()) {
        errors.empZip = "Zip code is required"
      } else if (!/^\d{5}$/.test(empZip)) {
        errors.empZip = "Zip code must be 5 digits"
      }

      if (!workPhone.trim()) {
        errors.workPhone = "Work phone is required"
      } else if (!/^$$\d{3}$$ \d{3}-\d{4}$/.test(workPhone) && !/^\d{10}$/.test(workPhone.replace(/\D/g, ""))) {
        errors.workPhone = "Please enter a valid phone number"
      }

      if (!jobYears) {
        errors.jobYears = "Years at job is required"
      }

      if (!jobMonths) {
        errors.jobMonths = "Months at job is required"
      }

      setFormErrors(errors)

      // Only proceed if there are no errors
      if (Object.keys(errors).length === 0) {
        const nextSection = 3
        setCurrentStep(nextSection)
        setExpandedSection(nextSection)
      }
    } else if (expandedSection === 3) {
      // Validate Acknowledgment
      const errors: {
        acknowledgment1?: string
        acknowledgment2?: string
      } = {}

      if (!acknowledgment1) {
        errors.acknowledgment1 = "You must acknowledge and consent to the terms"
      }

      if (!acknowledgment2) {
        errors.acknowledgment2 = "You must acknowledge and consent to the terms"
      }

      setFormErrors(errors)

      // Only proceed if there are no errors
      if (Object.keys(errors).length === 0) {
        setIsSubmitted(true)
        alert("Application submitted! We'll contact you shortly.")
      }
    }
  }

  const resetAllFields = () => {
    // Reset Applicant Information
    setFirstName("")
    setMiddleName("")
    setLastName("")
    setAddress1("")
    setAddress2("")
    setCity("")
    setState("")
    setZip("")
    setSsn("")
    setDateOfBirth(undefined)
    setLicenseNumber("")
    setLicenseState("")
    setLicenseExpDate(undefined)
    setMobilePhone("")
    setHomePhone("")
    setEmail("")
    setResidenceYears("")
    setResidenceMonths("")
    setResidenceType("")
    setRentMortgage("")

    // Reset Employment Information
    setEmployer("")
    setEmployerType("")
    setMonthlyIncome("")
    setOccupation("")
    setEmpAddress1("")
    setEmpAddress2("")
    setEmpCity("")
    setEmpState("")
    setEmpZip("")
    setWorkPhone("")
    setJobYears("")
    setJobMonths("")

    // Reset Additional Information
    setAdditionalComments("")
    setAcknowledgment1(false)
    setAcknowledgment2(false)

    // Reset form state
    setFormErrors({})
    setCurrentStep(1)
    setExpandedSection(1)
    setIsSubmitted(false)
  }

  const renderApplicantInformationForm = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name: <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              className={`w-full p-2 border ${formErrors.firstName ? "border-red-500" : "border-gray-300"} rounded-md`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="middleName" className="block text-sm font-medium text-gray-700 mb-1">
              Middle Name:
            </label>
            <input
              id="middleName"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name: <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              className={`w-full p-2 border ${formErrors.lastName ? "border-red-500" : "border-gray-300"} rounded-md`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="address1" className="block text-sm font-medium text-gray-700 mb-1">
              Address 1: <span className="text-red-500">*</span>
            </label>
            <input
              id="address1"
              className={`w-full p-2 border ${formErrors.address1 ? "border-red-500" : "border-gray-300"} rounded-md`}
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              required
            />
            {formErrors.address1 && <p className="text-red-500 text-xs mt-1">{formErrors.address1}</p>}
          </div>

          <div>
            <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
              Address 2:
            </label>
            <input
              id="address2"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City: <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              className={`w-full p-2 border ${formErrors.city ? "border-red-500" : "border-gray-300"} rounded-md`}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            {formErrors.city && <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>}
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
              State: <span className="text-red-500">*</span>
            </label>
            <select
              id="state"
              className={`w-full rounded-md border ${formErrors.state ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option value="">Select State</option>
              {US_STATES.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
            {formErrors.state && <p className="text-red-500 text-xs mt-1">{formErrors.state}</p>}
          </div>

          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
              Zip: <span className="text-red-500">*</span>
            </label>
            <input
              id="zip"
              className={`w-full p-2 border ${formErrors.zip ? "border-red-500" : "border-gray-300"} rounded-md`}
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
              maxLength={5}
              required
            />
            {formErrors.zip && <p className="text-red-500 text-xs mt-1">{formErrors.zip}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="ssn" className="block text-sm font-medium text-gray-700 mb-1">
              Social Security: <span className="text-red-500">*</span>
            </label>
            <input
              id="ssn"
              className={`w-full p-2 border ${formErrors.ssn ? "border-red-500" : "border-gray-300"} rounded-md`}
              placeholder="###-##-####"
              value={ssn}
              onChange={handleSsnChange}
              required
            />
            {formErrors.ssn && <p className="text-red-500 text-xs mt-1">{formErrors.ssn}</p>}
          </div>

          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth: <span className="text-red-500">*</span>
            </label>
            <input
              id="dob"
              type="date"
              className={`w-full p-2 border ${formErrors.dateOfBirth ? "border-red-500" : "border-gray-300"} rounded-md`}
              value={dateOfBirth ? dateOfBirth.toISOString().split("T")[0] : ""}
              onChange={(e) => setDateOfBirth(e.target.value ? new Date(e.target.value) : undefined)}
              max={new Date().toISOString().split("T")[0]}
              required
            />
            {formErrors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{formErrors.dateOfBirth}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Drivers License Number:
            </label>
            <input
              id="licenseNumber"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="licenseState" className="block text-sm font-medium text-gray-700 mb-1">
              Drivers License State:
            </label>
            <select
              id="licenseState"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={licenseState}
              onChange={(e) => setLicenseState(e.target.value)}
            >
              <option value="">Select State</option>
              {US_STATES.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="licenseExp" className="block text-sm font-medium text-gray-700 mb-1">
              Drivers License Exp:
            </label>
            <input
              id="licenseExp"
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={licenseExpDate ? licenseExpDate.toISOString().split("T")[0] : ""}
              onChange={(e) => setLicenseExpDate(e.target.value ? new Date(e.target.value) : undefined)}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div>
            <label htmlFor="mobilePhone" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Phone: <span className="text-red-500">*</span>
            </label>
            <input
              id="mobilePhone"
              className={`w-full p-2 border ${formErrors.mobilePhone ? "border-red-500" : "border-gray-300"} rounded-md`}
              placeholder="(___) ___-____"
              value={mobilePhone}
              onChange={(e) => handlePhoneChange(e, setMobilePhone)}
              required
            />
            {formErrors.mobilePhone && <p className="text-red-500 text-xs mt-1">{formErrors.mobilePhone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="homePhone" className="block text-sm font-medium text-gray-700 mb-1">
              Home Phone:
            </label>
            <input
              id="homePhone"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="(___) ___-____"
              value={homePhone}
              onChange={(e) => handlePhoneChange(e, setHomePhone)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email: <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              className={`w-full p-2 border ${formErrors.email ? "border-red-500" : "border-gray-300"} rounded-md`}
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-md font-medium mb-2">Time at Residence:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="residenceYears" className="block text-sm font-medium text-gray-700 mb-1">
                Years: <span className="text-red-500">*</span>
              </label>
              <select
                id="residenceYears"
                className={`w-full rounded-md border ${formErrors.residenceYears ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={residenceYears}
                onChange={(e) => setResidenceYears(e.target.value)}
                required
              >
                {YEARS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formErrors.residenceYears && <p className="text-red-500 text-xs mt-1">{formErrors.residenceYears}</p>}
            </div>

            <div>
              <label htmlFor="residenceMonths" className="block text-sm font-medium text-gray-700 mb-1">
                Months: <span className="text-red-500">*</span>
              </label>
              <select
                id="residenceMonths"
                className={`w-full rounded-md border ${formErrors.residenceMonths ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={residenceMonths}
                onChange={(e) => setResidenceMonths(e.target.value)}
                required
              >
                {MONTHS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formErrors.residenceMonths && <p className="text-red-500 text-xs mt-1">{formErrors.residenceMonths}</p>}
            </div>

            <div>
              <label htmlFor="residenceType" className="block text-sm font-medium text-gray-700 mb-1">
                Residence Type: <span className="text-red-500">*</span>
              </label>
              <select
                id="residenceType"
                className={`w-full rounded-md border ${formErrors.residenceType ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={residenceType}
                onChange={(e) => setResidenceType(e.target.value)}
                required
              >
                {RESIDENCE_TYPES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formErrors.residenceType && <p className="text-red-500 text-xs mt-1">{formErrors.residenceType}</p>}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="rentMortgage" className="block text-sm font-medium text-gray-700 mb-1">
            Rent/Mortgage: <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              id="rentMortgage"
              className={`w-full p-2 pl-7 border ${formErrors.rentMortgage ? "border-red-500" : "border-gray-300"} rounded-md`}
              placeholder="Amount"
              value={rentMortgage}
              onChange={(e) => handleCurrencyChange(e, setRentMortgage)}
              required
            />
          </div>
          {formErrors.rentMortgage && <p className="text-red-500 text-xs mt-1">{formErrors.rentMortgage}</p>}
        </div>

        <div className="mt-6">
          <Button onClick={handleContinue} className="w-full md:w-auto">
            Continue <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  const renderEmploymentInformationForm = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label htmlFor="employer" className="block text-sm font-medium text-gray-700 mb-1">
              Employer: <span className="text-red-500">*</span>
            </label>
            <input
              id="employer"
              className={`w-full p-2 border ${formErrors.employer ? "border-red-500" : "border-gray-300"} rounded-md`}
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
              required
            />
            {formErrors.employer && <p className="text-red-500 text-xs mt-1">{formErrors.employer}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="employerType" className="block text-sm font-medium text-gray-700 mb-1">
              Employer Type: <span className="text-red-500">*</span>
            </label>
            <select
              id="employerType"
              className={`w-full rounded-md border ${formErrors.employerType ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={employerType}
              onChange={(e) => setEmployerType(e.target.value)}
              required
            >
              {EMPLOYER_TYPES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {formErrors.employerType && <p className="text-red-500 text-xs mt-1">{formErrors.employerType}</p>}
          </div>

          <div>
            <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Income: <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                id="monthlyIncome"
                className={`w-full p-2 pl-7 border ${formErrors.monthlyIncome ? "border-red-500" : "border-gray-300"} rounded-md`}
                placeholder="Amount"
                value={monthlyIncome}
                onChange={(e) => handleCurrencyChange(e, setMonthlyIncome)}
                required
              />
            </div>
            {formErrors.monthlyIncome && <p className="text-red-500 text-xs mt-1">{formErrors.monthlyIncome}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
              Occupation: <span className="text-red-500">*</span>
            </label>
            <input
              id="occupation"
              className={`w-full p-2 border ${formErrors.occupation ? "border-red-500" : "border-gray-300"} rounded-md`}
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              required
            />
            {formErrors.occupation && <p className="text-red-500 text-xs mt-1">{formErrors.occupation}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="empAddress1" className="block text-sm font-medium text-gray-700 mb-1">
              Address 1:
            </label>
            <input
              id="empAddress1"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={empAddress1}
              onChange={(e) => setEmpAddress1(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="empAddress2" className="block text-sm font-medium text-gray-700 mb-1">
              Address 2:
            </label>
            <input
              id="empAddress2"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={empAddress2}
              onChange={(e) => setEmpAddress2(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="empCity" className="block text-sm font-medium text-gray-700 mb-1">
              City: <span className="text-red-500">*</span>
            </label>
            <input
              id="empCity"
              className={`w-full p-2 border ${formErrors.empCity ? "border-red-500" : "border-gray-300"} rounded-md`}
              value={empCity}
              onChange={(e) => setEmpCity(e.target.value)}
              required
            />
            {formErrors.empCity && <p className="text-red-500 text-xs mt-1">{formErrors.empCity}</p>}
          </div>

          <div>
            <label htmlFor="empState" className="block text-sm font-medium text-gray-700 mb-1">
              State: <span className="text-red-500">*</span>
            </label>
            <select
              id="empState"
              className={`w-full rounded-md border ${formErrors.empState ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={empState}
              onChange={(e) => setEmpState(e.target.value)}
              required
            >
              <option value="">Select State</option>
              {US_STATES.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
            {formErrors.empState && <p className="text-red-500 text-xs mt-1">{formErrors.empState}</p>}
          </div>

          <div>
            <label htmlFor="empZip" className="block text-sm font-medium text-gray-700 mb-1">
              Zip: <span className="text-red-500">*</span>
            </label>
            <input
              id="empZip"
              className={`w-full p-2 border ${formErrors.empZip ? "border-red-500" : "border-gray-300"} rounded-md`}
              value={empZip}
              onChange={(e) => setEmpZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
              maxLength={5}
              required
            />
            {formErrors.empZip && <p className="text-red-500 text-xs mt-1">{formErrors.empZip}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label htmlFor="workPhone" className="block text-sm font-medium text-gray-700 mb-1">
              Work Phone: <span className="text-red-500">*</span>
            </label>
            <input
              id="workPhone"
              className={`w-full p-2 border ${formErrors.workPhone ? "border-red-500" : "border-gray-300"} rounded-md`}
              placeholder="(___) ___-____"
              value={workPhone}
              onChange={(e) => handlePhoneChange(e, setWorkPhone)}
              required
            />
            {formErrors.workPhone && <p className="text-red-500 text-xs mt-1">{formErrors.workPhone}</p>}
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-md font-medium mb-2">Time on Job:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="jobYears" className="block text-sm font-medium text-gray-700 mb-1">
                Years: <span className="text-red-500">*</span>
              </label>
              <select
                id="jobYears"
                className={`w-full rounded-md border ${formErrors.jobYears ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={jobYears}
                onChange={(e) => setJobYears(e.target.value)}
                required
              >
                {YEARS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formErrors.jobYears && <p className="text-red-500 text-xs mt-1">{formErrors.jobYears}</p>}
            </div>

            <div>
              <label htmlFor="jobMonths" className="block text-sm font-medium text-gray-700 mb-1">
                Months: <span className="text-red-500">*</span>
              </label>
              <select
                id="jobMonths"
                className={`w-full rounded-md border ${formErrors.jobMonths ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={jobMonths}
                onChange={(e) => setJobMonths(e.target.value)}
                required
              >
                {MONTHS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formErrors.jobMonths && <p className="text-red-500 text-xs mt-1">{formErrors.jobMonths}</p>}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button onClick={handleContinue} className="w-full md:w-auto">
            Continue <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  const renderAcknowledgmentForm = () => {
    return (
      <div className="space-y-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Additional Comments</h3>
          <Textarea
            id="additionalComments"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Any additional information you'd like us to know..."
            value={additionalComments}
            onChange={(e) => setAdditionalComments(e.target.value)}
            rows={5}
          />
        </div>

        <div className="p-6 border border-gray-200 rounded-lg mb-6">
          <div className="flex items-start space-x-3 mb-6">
            <div className="flex h-6 items-center">
              <Checkbox
                id="acknowledgment1"
                checked={acknowledgment1}
                onCheckedChange={(checked) => setAcknowledgment1(checked === true)}
                className={formErrors.acknowledgment1 ? "border-red-500" : ""}
              />
            </div>
            <div className="space-y-1 leading-none">
              <label
                htmlFor="acknowledgment1"
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                  formErrors.acknowledgment1 ? "text-red-500" : "text-gray-700"
                }`}
              >
                ACKNOWLEDGMENT AND CONSENT:
              </label>
              <p className="text-sm text-gray-600">
                I certify that the above information is complete and accurate to the best of my knowledge. Creditors
                receiving this application will retain the application whether or not it is approved. Creditors may rely
                on this application in deciding whether to grant the requested credit. False statements may subject me
                to criminal penalties. I authorize the creditors to obtain credit reports about me on an ongoing basis
                during this credit transaction and to check my credit and employment history on an ongoing basis during
                the term of the credit transaction. If this application is approved, I authorize the creditor to give
                credit information about me to its affiliates.
              </p>
            </div>
          </div>
          {formErrors.acknowledgment1 && (
            <p className="text-red-500 text-xs ml-9 -mt-4">{formErrors.acknowledgment1}</p>
          )}

          <div className="flex items-start space-x-3">
            <div className="flex h-6 items-center">
              <Checkbox
                id="acknowledgment2"
                checked={acknowledgment2}
                onCheckedChange={(checked) => setAcknowledgment2(checked === true)}
                className={formErrors.acknowledgment2 ? "border-red-500" : ""}
              />
            </div>
            <div className="space-y-1 leading-none">
              <label
                htmlFor="acknowledgment2"
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                  formErrors.acknowledgment2 ? "text-red-500" : "text-gray-700"
                }`}
              >
                ACKNOWLEDGMENT AND CONSENT:
              </label>
              <p className="text-sm text-gray-600">
                By checking this box I hereby consent to receive text messages and/or phone calls from or on behalf of
                Northwest Motors Inc or their employees to the mobile phone number I provided above. By opting in, I
                understand that message and data rates may apply. This acknowledgement constitutes my written consent to
                receive text messages to my cell phone and phone calls, including communications sent using an
                auto-dialer or pre-recorded message. You may withdraw your consent at any time by texting "STOP" or
                "HELP" for help. See our{" "}
                <a href="https://nw-motors.com/privacy" className="text-blue-600 hover:underline">
                  https://nw-motors.com/privacy
                </a>{" "}
                for more information.
              </p>
            </div>
          </div>
          {formErrors.acknowledgment2 && <p className="text-red-500 text-xs ml-9 mt-1">{formErrors.acknowledgment2}</p>}
        </div>

        <div className="mt-6">
          <Button onClick={handleContinue} className="w-full md:w-auto">
            Submit Application
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-gray-900">APPLY FOR CREDIT</h2>
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
              <h3 className="text-xl font-medium text-green-600 mb-4">Thank You For Your Application!</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We've received your credit application and will be in touch shortly to discuss financing options.
              </p>
              <Button
                onClick={() => {
                  resetAllFields()
                  setIsSubmitted(false)
                }}
                className="w-full md:w-auto"
              >
                Submit Another Application
              </Button>
            </div>
          )}

          {/* Main form content - hidden when submitted */}
          {!isSubmitted && (
            <>
              {/* Step 1: Applicant Information */}
              <div className={`border-b border-border ${expandedSection === 1 ? "p-6" : "p-0"}`}>
                <div className={`flex justify-between items-center ${expandedSection !== 1 ? "p-6" : ""}`}>
                  <h3 className="text-lg font-medium text-primary">Applicant Information</h3>
                  <div className="flex items-center">
                    {expandedSection !== 1 ? (
                      <span
                        className="text-sm text-primary underline flex items-center cursor-pointer"
                        onClick={() => setExpandedSection(1)}
                      >
                        Edit <Pencil className="h-3 w-3 ml-1" />
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground mr-2">1 / 3</span>
                    )}
                  </div>
                </div>
                {expandedSection === 1 && (
                  <>
                    <div className="w-full border-b border-gray-200 mt-4 mb-6"></div>
                    {renderApplicantInformationForm()}
                  </>
                )}
              </div>

              {/* Step 2: Employment Information */}
              <div className={`border-b border-border ${expandedSection === 2 ? "p-6" : "p-0"}`}>
                <div className={`flex justify-between items-center ${expandedSection !== 2 ? "p-6" : ""}`}>
                  <h3 className="text-lg font-medium text-primary">Employment Information</h3>
                  <div className="flex items-center">
                    {expandedSection !== 2 && currentStep >= 2 ? (
                      <span
                        className="text-sm text-primary underline flex items-center cursor-pointer"
                        onClick={() => setExpandedSection(2)}
                      >
                        Edit <Pencil className="h-3 w-3 ml-1" />
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground mr-2">2 / 3</span>
                    )}
                  </div>
                </div>

                {expandedSection === 2 && (
                  <>
                    <div className="w-full border-b border-border mt-4 mb-6"></div>
                    {renderEmploymentInformationForm()}
                  </>
                )}
              </div>

              {/* Step 3: Acknowledgment and Consent */}
              <div className={`border-b border-border ${expandedSection === 3 ? "p-6" : "p-0"}`}>
                <div className={`flex justify-between items-center ${expandedSection !== 3 ? "p-6" : ""}`}>
                  <h3 className="text-lg font-medium text-primary">Acknowledgment and Consent</h3>
                  <div className="flex items-center">
                    {expandedSection !== 3 && currentStep >= 3 ? (
                      <span
                        className="text-sm text-primary underline flex items-center cursor-pointer"
                        onClick={() => setExpandedSection(3)}
                      >
                        Edit <Pencil className="h-3 w-3 ml-1" />
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground mr-2">3 / 3</span>
                    )}
                  </div>
                </div>

                {expandedSection === 3 && (
                  <>
                    <div className="w-full border-b border-border mt-4 mb-6"></div>
                    {renderAcknowledgmentForm()}
                  </>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </>
  )
}
