import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const markets = [
  {
    title: "Primary Market",
    region: "Durham Region",
    cities: ["Oshawa", "Whitby", "Ajax", "Pickering"],
  },
  {
    title: "Primary Market",
    region: "Toronto",
    cities: ["Downtown", "North York", "Scarborough", "Etobicoke"],
  },
  {
    title: "Primary Market",
    region: "York Region",
    cities: ["Markham", "Vaughan", "Richmond Hill", "Newmarket"],
  },
  {
    title: "Additional Market",
    region: "Niagara",
    cities: ["Niagara Falls", "St. Catharines", "Welland", "Thorold"],
  },
  {
    title: "Additional Market",
    region: "Hamilton",
    cities: ["Hamilton", "Ancaster", "Stoney Creek", "Dundas"],
  },
  {
    title: "Additional Market",
    region: "London & Ottawa",
    cities: ["London", "Ottawa", "Surrounding Areas"],
  },
];

export default function Markets() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c]">
            Markets I Serve
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#0a1628]">
            Helping Clients Across Ontario
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're buying, selling or investing, I proudly help
            clients across Ontario's fastest-growing communities.
          </p>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {markets.map((market) => (

            <div
              key={market.region}
              className={`group min-h-[180px] rounded-3xl p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
  market.title === "Primary Market"
    ? "border-t-4 border-[#c9a84c] bg-white"
    : "border border-gray-200 bg-white"
}`}
            >

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-2xl bg-[#c9a84c]/10 p-3">

                  <MapPin
  size={24}
  className="text-[#c9a84c]"
/>

                </div>

                <div>

                  <p className="text-1xl font-semibold uppercase tracking-widest text-[#c9a84c]">
                    {market.title}
                  </p>

                  <h3 className="text-3xl font-bold text-[#0a1628] group-hover:text-[#c9a84c] transition-colors">
                    {market.region}
                  </h3>

                </div>

              </div>

              <div className="mt-6 space-y-4">

                {market.cities.map((city) => (

                  <div
                    key={city}
                    className="rounded-xl bg-gray-50 px-4 py-3 transition-colors group-hover:bg-[#c9a84c]/5"
                  >
                    <span className="font-medium text-gray-700">
                      {city}
                    </span>
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}