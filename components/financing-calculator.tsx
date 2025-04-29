"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"

export function FinancingCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(25000)
  const [downPayment, setDownPayment] = useState(5000)
  const [interestRate, setInterestRate] = useState(4.5)
  const [loanTerm, setLoanTerm] = useState(60)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  useEffect(() => {
    calculatePayment()
  }, [vehiclePrice, downPayment, interestRate, loanTerm])

  const calculatePayment = () => {
    const principal = vehiclePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm

    if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
      const payment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      setMonthlyPayment(payment)
    } else {
      setMonthlyPayment(principal / numberOfPayments)
    }
  }

  const handleVehiclePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value.replace(/,/g, ""))
    if (!isNaN(value)) {
      setVehiclePrice(value)
    }
  }

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value.replace(/,/g, ""))
    if (!isNaN(value)) {
      setDownPayment(value)
    }
  }

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value)
    if (!isNaN(value)) {
      setInterestRate(value)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="vehicle-price">Vehicle Price</Label>
          <span>${vehiclePrice.toLocaleString()}</span>
        </div>
        <Slider
          id="vehicle-price"
          min={5000}
          max={100000}
          step={500}
          value={[vehiclePrice]}
          onValueChange={(value) => setVehiclePrice(value[0])}
        />
        <Input type="text" value={vehiclePrice.toLocaleString()} onChange={handleVehiclePriceChange} className="mt-2" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="down-payment">Down Payment</Label>
          <span>${downPayment.toLocaleString()}</span>
        </div>
        <Slider
          id="down-payment"
          min={0}
          max={vehiclePrice / 2}
          step={500}
          value={[downPayment]}
          onValueChange={(value) => setDownPayment(value[0])}
        />
        <Input type="text" value={downPayment.toLocaleString()} onChange={handleDownPaymentChange} className="mt-2" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="interest-rate">Interest Rate (%)</Label>
          <span>{interestRate.toFixed(2)}%</span>
        </div>
        <Slider
          id="interest-rate"
          min={0}
          max={20}
          step={0.25}
          value={[interestRate]}
          onValueChange={(value) => setInterestRate(value[0])}
        />
        <Input
          type="number"
          value={interestRate}
          onChange={handleInterestRateChange}
          step={0.25}
          min={0}
          max={20}
          className="mt-2"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="loan-term">Loan Term (months)</Label>
          <span>{loanTerm} months</span>
        </div>
        <Slider
          id="loan-term"
          min={12}
          max={84}
          step={12}
          value={[loanTerm]}
          onValueChange={(value) => setLoanTerm(value[0])}
        />
        <div className="grid grid-cols-6 gap-2 mt-2">
          {[12, 24, 36, 48, 60, 72].map((term) => (
            <Button
              key={term}
              type="button"
              variant={loanTerm === term ? "default" : "outline"}
              size="sm"
              onClick={() => setLoanTerm(term)}
              className="w-full"
            >
              {term}
            </Button>
          ))}
        </div>
      </div>

      <Card className="mt-6">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Estimated Monthly Payment</h3>
            <p className="text-3xl font-bold text-primary">${monthlyPayment.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Total Loan Amount: ${(vehiclePrice - downPayment).toLocaleString()}
            </p>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full">Apply for Financing</Button>
    </div>
  )
}
