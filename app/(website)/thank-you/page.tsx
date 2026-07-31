import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0a1628] flex items-center justify-center px-6">
      <div className="max-w-xl rounded-3xl bg-white p-10 text-center shadow-2xl">
        <CheckCircle2
          className="mx-auto text-green-600"
          size={72}
        />

        <h1 className="mt-6 text-4xl font-bold text-[#0a1628]">
          Thank You!
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Your information has been received successfully.
        </p>

        <p className="mt-4 text-gray-600">
          I'll review your request and connect you with one of my trusted
          mortgage professionals as soon as possible.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-[#c9a84c] px-8 py-4 font-semibold text-[#0a1628] transition hover:bg-[#d8b95c]"
          >
            Return Home
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}