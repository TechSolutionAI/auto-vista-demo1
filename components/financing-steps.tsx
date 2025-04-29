import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    title: "Apply Online",
    description: "Complete our secure online application in just a few minutes.",
  },
  {
    title: "Get Pre-Approved",
    description: "Receive a financing decision, often within hours.",
  },
  {
    title: "Choose Your Vehicle",
    description: "Browse our inventory with confidence knowing your budget.",
  },
  {
    title: "Finalize Paperwork",
    description: "Complete the necessary paperwork at our dealership.",
  },
  {
    title: "Drive Away",
    description: "Drive off in your new vehicle the same day in many cases.",
  },
]

export function FinancingSteps() {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
      <div className="space-y-12 relative">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className={`md:text-right ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              <div className={`hidden md:flex items-center justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
              <div className="md:hidden absolute left-0 top-0 flex items-center justify-center">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
