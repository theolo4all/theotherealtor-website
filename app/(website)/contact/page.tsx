"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success. Later we'll connect to a backend.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[#c9a84c] font-semibold text-sm tracking-wide uppercase">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Let&apos;s Talk Real Estate
            </h1>
            <p className="text-xl text-white/70">
              Ready to buy, sell, or lease? I&apos;m here to help. Reach out and let&apos;s discuss your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#0a1628] mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you&apos;re ready to make a move or just exploring your options, I&apos;m here to provide 
                honest advice and expert guidance. No pressure, just professional service.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#c9a84c]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0a1628]">Phone</p>
                    <p className="text-gray-600">Cell: 647-838-5184</p>
                    <p className="text-gray-600">Office: 416-289-2155</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#c9a84c]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0a1628]">Email</p>
                    <p className="text-gray-600">theo.tajou@century21.ca</p>
                    <p className="text-gray-600 text-sm">theolo4all@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#c9a84c]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0a1628]">Office</p>
                    <p className="text-gray-600">2100 Ellesmere Rd, Suite 116</p>
                    <p className="text-gray-600">Toronto, ON, M1H 3B7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#c9a84c]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0a1628]">Availability</p>
                    <p className="text-gray-600">Monday - Sunday</p>
                    <p className="text-gray-600 text-sm">By appointment. Evenings & weekends available.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#0a1628] rounded-2xl">
                <p className="text-[#c9a84c] font-semibold mb-2">Brokerage</p>
                <p className="text-white font-bold text-lg">CENTURY 21 TITANS REALTY INC.</p>
                <p className="text-white/60 text-sm mt-1">Independently Owned & Operated</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#0a1628] mb-6">Send a Message</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                  <h4 className="text-xl font-bold text-[#0a1628] mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0a1628] mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0a1628] mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0a1628] mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] outline-none transition-colors"
                        placeholder="647-000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0a1628] mb-1">I&apos;m Interested In *</label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] outline-none transition-colors bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="buying">Buying a Home</option>
                      <option value="selling">Selling a Home</option>
                      <option value="leasing">Leasing / Rentals</option>
                      <option value="investment">Investment Properties</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0a1628] mb-1">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] outline-none transition-colors resize-none"
                      placeholder="Tell me about your real estate goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#c9a84c] text-[#0a1628] font-semibold py-4 rounded-lg hover:bg-[#e8d5a3] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Your information is secure and will never be shared. By submitting, you agree to be contacted regarding your real estate inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
