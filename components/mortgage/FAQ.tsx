"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this service free?",
    answer:
      "Yes. Connecting you with one of my trusted mortgage professionals is completely free and comes with no obligation. The goal is simply to help you understand your options and take the first step toward homeownership.",
  },
  {
    question: "Will getting pre-approved affect my credit score?",
    answer:
      "Your mortgage professional will explain the process and let you know if a credit inquiry is required. They will guide you through every step so you know exactly what to expect before moving forward.",
  },
  {
    question: "I'm self-employed. Can I still qualify for a mortgage?",
    answer:
      "Absolutely. Many self-employed buyers successfully obtain mortgages every year. Your mortgage professional will review your situation and explain the financing options available to you.",
  },
  {
    question: "I'm new to Canada. Can I buy a home?",
    answer:
      "Yes. Many newcomers qualify for mortgage programs designed specifically for their situation. I'll connect you with professionals who can explain the available options.",
  },
  {
    question: "How much do I need for a down payment?",
    answer:
      "The required down payment depends on the purchase price and your individual situation. Your mortgage professional will explain the current requirements and help you understand what works best for you.",
  },
  {
    question: "I'm not ready to buy yet. Should I still get mortgage ready?",
    answer:
      "Absolutely. Getting mortgage ready early gives you a better understanding of your budget and allows you to plan with confidence, even if you're months away from purchasing a home.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0a1628]">
            Still Have Questions?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Buying a home is one of the biggest financial decisions you'll
            make. Here are answers to some of the questions I hear most often.
          </p>

        </div>

        {/* FAQ */}

        <div className="mx-auto mt-20 max-w-4xl space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-[#c9a84c]"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-xl font-semibold text-[#0a1628]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                  size={22}
                />

              </button>

              {open === index && (
                <div className="px-6 pb-6">

                  <p className="leading-8 text-gray-600">
                    {faq.answer}
                  </p>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}