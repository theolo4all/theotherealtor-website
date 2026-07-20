import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const neighborhoods = [
  {
    name: "Oshawa",
    description: "A vibrant city with diverse neighborhoods, excellent transit, and growing investment opportunities.",
    tags: ["Downtown", "North Oshawa", "Lakeview"],
  },
  {
    name: "Whitby",
    description: "Family-friendly community with top schools, beautiful waterfront, and strong property values.",
    tags: ["Brooklin", "Port Whitby", "Downtown"],
  },
  {
    name: "Ajax",
    description: "Modern suburban living with excellent amenities, parks, and easy access to Toronto.",
    tags: ["South Ajax", "Central", "Westney"],
  },
  {
    name: "Pickering",
    description: "Rapidly growing area with new developments, waterfront communities, and great transit links.",
    tags: ["Seaton", "Frenchman&apos;s Bay", "Downtown"],
  },
  {
    name: "Clarington",
    description: "Affordable living with a small-town feel, perfect for families and first-time buyers.",
    tags: ["Bowmanville", "Courtice", "Newcastle"],
  },
  {
    name: "Toronto & GTA",
    description: "Full coverage of the Greater Toronto Area for buyers and investors seeking urban opportunities.",
    tags: ["Downtown", "North York", "Scarborough"],
  },
];

export default function Neighborhoods() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] font-semibold text-sm tracking-wide uppercase">Areas Served</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2 mb-4">
            Neighborhoods I Know Best
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deep local knowledge of Durham Region and the Greater Toronto Area. I help you find the right 
            neighborhood that fits your lifestyle and investment goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((area, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-[#c9a84c]" size={20} />
                <h3 className="text-xl font-bold text-[#0a1628]">{area.name}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-[#0a1628]/5 text-[#0a1628] text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/neighborhoods" className="btn-primary">
            View All Neighborhoods
            <ArrowRight className="inline ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
