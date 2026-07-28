"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { submitMortgageLead } from "@/app/actions/mortgage";

import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const reasons = [
  "No cost or obligation",
  "Trusted mortgage professionals",
  "Quick response",
  "Personalized guidance",
];

export default function FormSection() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
  return (
    <section
      id="mortgage-form"
      className="bg-gray-50 py-24"
    >
      <div className="container mx-auto px-6">

        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* Left Side */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
              Let's Get Started
            </p>

            <h2 className="mt-4 text-5xl font-bold text-[#0a1628] leading-tight">
              Take the First Step
              <br />
              Toward Homeownership
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Whether you're buying your first home, upgrading,
              downsizing, or investing, getting your financing in
              place is the smartest way to begin.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Complete this short form and I'll personally connect
              you with one of my trusted mortgage professionals
              who can help you understand your options and move
              forward with confidence.
            </p>

            <div className="mt-10 space-y-5">

              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-[#c9a84c]"
                    size={22}
                  />

                  <span className="text-lg text-gray-700">
                    {reason}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl bg-white p-10 shadow-xl border border-gray-200">

            <p className="text-sm text-gray-500">
              Complete this form in less than a minute.
            </p>

            <form
  className="mt-8 space-y-5"
  action={(formData) =>
    startTransition(async () => {
      const result = await submitMortgageLead(formData);

      if (result.success) {
        router.push("/thank-you");
      } else {
        alert(result.error ?? "Something went wrong.");
      }
    })
  }
>

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="rounded-xl border border-gray-300 p-4 focus:border-[#c9a84c] focus:outline-none"
                />

                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="rounded-xl border border-gray-300 p-4 focus:border-[#c9a84c] focus:outline-none"
                />

              </div>

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#c9a84c] focus:outline-none"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#c9a84c] focus:outline-none"
              />

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  className="rounded-xl border border-gray-300 p-4 focus:border-[#c9a84c] focus:outline-none"
                />

                <input
                  name="province"
                  type="text"
                  placeholder="Province"
                  defaultValue="Ontario"
                  className="rounded-xl border border-gray-300 p-4 focus:border-[#c9a84c] focus:outline-none"
                />

              </div>

              <select
                className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#c9a84c] focus:outline-none"
              >
                <option>When are you planning to buy?</option>
                <option>Immediately</option>
                <option>Within 3 Months</option>
                <option>3–6 Months</option>
                <option>6–12 Months</option>
                <option>Just Exploring</option>
              </select>

              <textarea
  name="message"
  rows={5}
  placeholder="Tell me a little about your goals (optional)"
  className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#c9a84c] focus:outline-none"
/>

              <button
  type="submit"
  disabled={isPending}
  className="inline-flex w-full items-center justify-center rounded-full bg-[#c9a84c] px-8 py-4 text-lg font-semibold text-[#0a1628] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b95c] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
>
  {isPending ? "Sending..." : "Start My Home-Buying Journey"}

  {!isPending && (
    <ArrowRight
      className="ml-2"
      size={20}
    />
  )}
</button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}