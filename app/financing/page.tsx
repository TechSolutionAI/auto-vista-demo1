"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreditApplicationForm } from "@/components/credit-application-form"

export default function FinancingPage() {
  // Use state to track client-side rendering
  const [mounted, setMounted] = useState(false)

  // Calculator states
  const [loanAmount, setLoanAmount] = useState("10000")
  const [interestRate, setInterestRate] = useState("22")
  const [downPayment, setDownPayment] = useState("0")
  const [loanTerm, setLoanTerm] = useState("55")
  const [monthlyPayment, setMonthlyPayment] = useState("290.16")

  // Calculate monthly payment
  const calculatePayment = () => {
    try {
      const principal = Number.parseFloat(loanAmount) - Number.parseFloat(downPayment || "0")
      const monthlyRate = Number.parseFloat(interestRate) / 100 / 12
      const months = Number.parseFloat(loanTerm)

      if (principal <= 0 || months <= 0) {
        setMonthlyPayment("0.00")
        return
      }

      if (monthlyRate === 0) {
        setMonthlyPayment((principal / months).toFixed(2))
      } else {
        const payment =
          (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
        setMonthlyPayment(payment.toFixed(2))
      }
    } catch (error) {
      console.error("Calculation error:", error)
      setMonthlyPayment("Error")
    }
  }

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Calculate payment on mount
  useEffect(() => {
    if (mounted) {
      calculatePayment()
    }
  }, [mounted])

  // Show a simplified placeholder during server-side rendering
  if (!mounted) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="h-[300px] bg-muted"></div>
        <div className="h-[600px] bg-white"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image src="/financing-hero.png" alt="Financing background" fill className="object-cover" priority />
        <div className="container relative z-20 flex h-full flex-col items-start justify-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Financing Options</h1>
          <p className="mt-4 max-w-lg text-lg text-gray-200">
            We offer flexible financing solutions to fit your budget and credit situation.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container">
          <div className="p-4 mb-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">FINANCING</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src="/car-finance.jpeg"
                alt="Car financing paperwork with blue model car"
                width={500}
                height={350}
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>

            <div>
              <p className="text-gray-700 mb-6">
                At Northwest Motors, we offer a full array of financing options to help you get into the car of your
                dreams, regardless of your financial situation. Feel free to browse our used car inventory online,
                schedule a test drive, submit an offer, or just stop by our dealership in person. Please fill up a
                credit application below so we can see you current financial situation and provide you with a best
                possible financial product at best possible rate.
              </p>
            </div>
          </div>

          <div className="mt-8 border border-gray-300 rounded-lg p-6">
            <p className="mb-4 text-gray-700">
              Type in the loan amount, annual interest rate and the term of the loan in years. Then press the
              'Calculate' button.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                  Car Loan Amount ($):
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                    $
                  </span>
                  <Input
                    id="loanAmount"
                    type="text"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value.replace(/[^0-9.]/g, ""))}
                    className="rounded-l-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Interest Rate:
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                    %
                  </span>
                  <Input
                    id="interestRate"
                    type="text"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value.replace(/[^0-9.]/g, ""))}
                    className="rounded-l-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700 mb-1">
                  Down Payment:
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                    $
                  </span>
                  <Input
                    id="downPayment"
                    type="text"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value.replace(/[^0-9.]/g, ""))}
                    className="rounded-l-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 mb-1">
                  Term of Loan (Months):
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-calendar"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </span>
                  <Input
                    id="loanTerm"
                    type="text"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value.replace(/[^0-9]/g, ""))}
                    className="rounded-l-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button
                onClick={calculatePayment}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6"
              >
                Calculate
              </Button>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-xl font-medium text-gray-700">Monthly Payment:</h3>
              <p className="text-3xl font-bold text-blue-600">${monthlyPayment}</p>
            </div>
          </div>

          <div className="mt-12">
            <CreditApplicationForm />
          </div>
        </div>
      </section>
    </div>
  )
}
