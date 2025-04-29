"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What credit score do I need to qualify for financing?",
    answer:
      "While a higher credit score typically results in better rates, we work with customers across the credit spectrum. We have financing options for all credit situations, from excellent to challenged credit. Our finance team works with multiple lenders to find the best solution for your specific situation.",
  },
  {
    question: "How much should my down payment be?",
    answer:
      "Down payment requirements vary based on your credit profile and the vehicle you're purchasing. Generally, we recommend at least 10-20% of the vehicle price, but we have options with lower down payments available. A larger down payment typically results in lower monthly payments and better loan terms.",
  },
  {
    question: "Can I get pre-approved before visiting the dealership?",
    answer:
      "Yes! We encourage customers to apply for pre-approval online before visiting. This helps you understand your budget and streamlines the purchasing process. Pre-approval is typically valid for 30 days and doesn't obligate you to purchase a vehicle.",
  },
  {
    question: "How long does the financing approval process take?",
    answer:
      "Many customers receive a decision within minutes of applying online. More complex situations may take a few hours or up to one business day. Our finance team works diligently to provide quick responses so you can move forward with your purchase.",
  },
  {
    question: "Can I finance a used vehicle?",
    answer:
      "Absolutely. We offer financing for both new and used vehicles. Interest rates may vary slightly between new and used vehicles, but we have competitive options for both. All of our used vehicles undergo thorough inspections to ensure they meet our quality standards.",
  },
  {
    question: "Do you offer refinancing for my current auto loan?",
    answer:
      "Yes, we can help you explore refinancing options for your existing auto loan. Many customers save money by refinancing at a lower interest rate or extending their loan term to reduce monthly payments. Contact our finance department to discuss your specific situation.",
  },
]

export function FinancingFAQ() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
