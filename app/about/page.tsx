import { Award, Code, MapPin, Phone, Mail, Building2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[#c9a84c] font-semibold text-sm tracking-wide uppercase">About Me</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Theo Tajou
            </h1>
            <p className="text-xl text-white/70">
              The Other Realtor — Where Technology Meets Real Estate
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0a1628] mb-6">My Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I&apos;m Theo Tajou, a real estate agent with a difference. While most agents rely solely on 
                  traditional methods, I bring a tech-driven approach to every transaction. My background in 
                  cloud platforms and DevOps gives me unique tools to analyze markets, automate processes, and 
                  deliver better results for my clients.
                </p>
                <p>
                  Based in Oshawa and serving all of Ontario, I specialize in helping buyers, sellers, and 
                  lessees navigate the complex Durham Region and Greater Toronto Area markets. Whether you&apos;re 
                  a first-time buyer looking for guidance or an investor seeking data-driven insights, I provide 
                  the expertise and technology to make informed decisions.
                </p>
                <p>
                  As part of Century 21 Titans Realty Inc., I combine the power of a global brand with 
                  personalized, tech-forward service. I believe real estate should be transparent, efficient, 
                  and backed by data — not just gut feelings.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <Code className="text-[#c9a84c] mb-2" size={24} />
                  <p className="font-bold text-[#0a1628]">Tech Background</p>
                  <p className="text-sm text-gray-600">Cloud & DevOps expertise</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <MapPin className="text-[#c9a84c] mb-2" size={24} />
                  <p className="font-bold text-[#0a1628]">Local Expert</p>
                  <p className="text-sm text-gray-600">Oshawa & Durham Region</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <Award className="text-[#c9a84c] mb-2" size={24} />
                  <p className="font-bold text-[#0a1628]">Century 21</p>
                  <p className="text-sm text-gray-600">Titans Realty Inc.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <Building2 className="text-[#c9a84c] mb-2" size={24} />
                  <p className="font-bold text-[#0a1628]">Full Service</p>
                  <p className="text-sm text-gray-600">Buy, Sell & Lease</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-[#0a1628] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-[#c9a84c] mt-1" size={20} />
                  <div>
                    <p className="font-medium text-[#0a1628]">Cell</p>
                    <p className="text-gray-600">647-838-5184</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-[#c9a84c] mt-1" size={20} />
                  <div>
                    <p className="font-medium text-[#0a1628]">Office</p>
                    <p className="text-gray-600">416-289-2155</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-[#c9a84c] mt-1" size={20} />
                  <div>
                    <p className="font-medium text-[#0a1628]">Fax</p>
                    <p className="text-gray-600">416-289-2156</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-[#c9a84c] mt-1" size={20} />
                  <div>
                    <p className="font-medium text-[#0a1628]">Email</p>
                    <p className="text-gray-600">theo.tajou@century21.ca</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#c9a84c] mt-1" size={20} />
                  <div>
                    <p className="font-medium text-[#0a1628]">Office Address</p>
                    <p className="text-gray-600">2100 Ellesmere Rd, Suite 116</p>
                    <p className="text-gray-600">Toronto, ON, M1H 3B7</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#0a1628] rounded-xl">
                <p className="text-[#c9a84c] font-semibold text-sm mb-2">Brokerage</p>
                <p className="text-white font-bold">CENTURY 21 TITANS REALTY INC.</p>
                <p className="text-white/60 text-sm mt-1">Brokerage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
