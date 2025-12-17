"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface FormData {
  name: string
  mobile_number: string
  service_type: string
}

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile_number: "",
    service_type: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener("openQuoteModal", handleOpen)
    return () => window.removeEventListener("openQuoteModal", handleOpen)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/quotes/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage({ type: "success", text: "Quote request submitted successfully!" })
        setFormData({ name: "", mobile_number: "", service_type: "" })
        setTimeout(() => setIsOpen(false), 2000)
      } else {
        const error = await response.json()
        setMessage({ type: "error", text: error.message || "Failed to submit quote" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

      {/* Modal */}
      <div
        className="relative w-full max-w-[944px] bg-white rounded-xl border border-[#E9E9E9] p-12"
        style={{
          boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.06)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-[48px] font-bold leading-tight mb-10">
          GET IN TOUCH
          <br />
          WITH US
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-base font-normal text-black mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e427e] focus:border-transparent text-base"
            />
          </div>

          {/* Mobile Number Field */}
          <div>
            <label htmlFor="mobile" className="block text-base font-normal text-black mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              required
              pattern="[6-9][0-9]{9}"
              value={formData.mobile_number}
              onChange={(e) => setFormData({ ...formData, mobile_number: e.target.value })}
              placeholder="Enter"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e427e] focus:border-transparent text-base"
            />
          </div>

          {/* Select Services Field */}
          <div>
            <label htmlFor="service" className="block text-base font-normal text-black mb-2">
              Select Services
            </label>
            <select
              id="service"
              required
              value={formData.service_type}
              onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e427e] focus:border-transparent text-base appearance-none bg-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.75rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="">Select</option>
              <option value="Domestic Long-Haul">Domestic Long-Haul</option>
              <option value="Domestic Short-Haul">Domestic Short-Haul</option>
              <option value="ODC Carrier and ODC TRUCK-PICK">ODC Carrier and ODC TRUCK-PICK</option>
              <option value="ODC/BULK/General PWC-SDL">ODC/BULK/General PWC-SDL</option>
            </select>
          </div>

          {/* Error/Success Message */}
          {message && (
            <div
              className={`p-4 rounded-lg ${
                message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#1e427e] hover:bg-[#1e427e]/90 text-white text-2xl font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  )
}
