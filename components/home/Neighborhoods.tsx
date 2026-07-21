import Link from "next/link";

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
        <div className="text-center mb-10">
          <span className="text-[#c9a84c] font-semibold text-sm tracking-wide uppercase">Areas Served</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mt-2 mb-3">
            Neighborhoods I Know Best
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Deep local knowledge of Durham Region and the Greater Toronto Area. I help you find the right 
            neighborhood that fits your lifestyle and investment goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {neighborhoods.map((area, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-3">
                <svg width="20" height="20" fill="none" stroke="#c9a84c" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <h3 className="text-lg font-bold text-[#0a1628]">{area.name}</h3>
              </div>
              <p className="text-gray-600 mb-3 text-sm leading-relaxed">{area.description}</p>
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

        <div className="text-center mt-10">
          <Link href="/neighborhoods" className="btn-primary">
            View All Neighborhoods
            <span className="inline-block ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
