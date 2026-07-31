import { MapPin, TrendingUp, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

const areas = [
  {
    name: "Oshawa",
    type: "Primary Market",
    description: "Oshawa is one of the fastest-growing cities in Ontario, offering a mix of historic charm and modern development. With excellent transit via GO Train, affordable housing compared to Toronto, and major investments in downtown revitalization, Oshawa presents strong opportunities for both homeowners and investors.",
    highlights: ["GO Train access to Toronto", "University of Ontario Institute of Technology", "Affordable entry prices", "Growing tech sector"],
    neighborhoods: ["Downtown Oshawa", "North Oshawa", "Lakeview", "Windfields", "Taunton", "Samac"],
    avgPrice: "$650K - $900K",
    trend: "+8.5% YoY",
  },
  {
    name: "Whitby",
    type: "Family-Friendly",
    description: "Whitby combines small-town charm with urban amenities. Known for excellent schools, beautiful waterfront parks, and a strong sense of community, it&apos;s a top choice for families looking to put down roots in Durham Region.",
    highlights: ["Top-rated schools", "Waterfront trails", "Brooklin village charm", "Easy 401 access"],
    neighborhoods: ["Brooklin", "Port Whitby", "Downtown Whitby", "Rolling Acres", "Pringle Creek"],
    avgPrice: "$750K - $1.1M",
    trend: "+7.2% YoY",
  },
  {
    name: "Ajax",
    type: "Suburban Growth",
    description: "Ajax offers modern suburban living with excellent amenities, diverse communities, and strong property values. The town continues to attract young families and professionals seeking space and convenience.",
    highlights: ["Diverse community", "Modern developments", "Ajax Waterfront", "Strong transit links"],
    neighborhoods: ["South Ajax", "Central Ajax", "Westney", "Applecroft", "Riverside"],
    avgPrice: "$700K - $950K",
    trend: "+6.8% YoY",
  },
  {
    name: "Pickering",
    type: "Development Hub",
    description: "Pickering is experiencing rapid growth with major new developments, including the Seaton community. With waterfront properties, urban intensification, and excellent transit, it&apos;s becoming a major player in the GTA real estate market.",
    highlights: ["Seaton master-planned community", "Frenchman&apos;s Bay waterfront", "Pickering Town Centre", "Durham Live entertainment district"],
    neighborhoods: ["Seaton", "Frenchman&apos;s Bay", "Downtown Pickering", "Rosebank", "Liverpool"],
    avgPrice: "$725K - $1M",
    trend: "+9.1% YoY",
  },
  {
    name: "Clarington",
    type: "Value & Space",
    description: "Clarington offers some of the best value in Durham Region, with larger lots, newer developments, and a more relaxed pace of life. Perfect for families seeking space and affordability without sacrificing access to amenities.",
    highlights: ["Most affordable in Durham", "Large lot sizes", "Bowmanville charm", "Easy 401/407 access"],
    neighborhoods: ["Bowmanville", "Courtice", "Newcastle", "Orono", "Kinsmen"],
    avgPrice: "$600K - $850K",
    trend: "+7.5% YoY",
  },
  {
    name: "Toronto & GTA",
    type: "Urban Core",
    description: "For clients seeking urban living or premium investment opportunities, I provide full coverage of Toronto and the Greater Toronto Area. From downtown condos to North York family homes, I have the network and knowledge to serve you.",
    highlights: ["Downtown condos", "North York family homes", "Scarborough value", "Etobicoke growth", "Pre-construction opportunities"],
    neighborhoods: ["Downtown Core", "North York", "Scarborough", "Etobicoke", "Midtown", "East York"],
    avgPrice: "$800K - $2M+",
    trend: "+5.2% YoY",
  },
];

export default function NeighborhoodsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[#c9a84c] font-semibold text-sm tracking-wide uppercase">Neighborhoods</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Areas I Serve
            </h1>
            <p className="text-xl text-white/70">
              Deep local knowledge of Durham Region and the Greater Toronto Area. 
              Data-driven insights for every neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="text-[#c9a84c]" size={20} />
                      <h2 className="text-2xl font-bold text-[#0a1628]">{area.name}</h2>
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#0a1628] text-white text-xs rounded-full font-medium">
                      {area.type}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Avg. Price Range</p>
                      <p className="font-bold text-[#0a1628]">{area.avgPrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Trend</p>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="text-green-600" size={16} />
                        <p className="font-bold text-green-600">{area.trend}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#0a1628] mb-3 flex items-center gap-2">
                      <Home size={16} className="text-[#c9a84c]" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-1">
                      {area.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <ArrowRight className="text-[#c9a84c] mt-1 flex-shrink-0" size={12} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0a1628] mb-3 flex items-center gap-2">
                      <MapPin size={16} className="text-[#c9a84c]" />
                      Popular Neighborhoods
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {area.neighborhoods.map((n, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs rounded-full"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:underline"
                >
                  Interested in {area.name}? Let&apos;s talk
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
