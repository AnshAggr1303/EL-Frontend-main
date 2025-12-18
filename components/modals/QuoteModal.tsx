"use client";
import type React from "react";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface FormData {
  name: string;
  mobile_number: string;
  service_type: string;
}

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile_number: "",
    service_type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openQuoteModal", handleOpen);
    return () => window.removeEventListener("openQuoteModal", handleOpen);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/quotes/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Quote request submitted successfully!" });
        setFormData({ name: "", mobile_number: "", service_type: "" });
        setTimeout(() => {
          setIsOpen(false);
          setMessage(null);
        }, 2000);
      } else {
        const error = await response.json();
        setMessage({ type: "error", text: error.message || "Failed to submit quote" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-4 animate-fadeIn">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-[500px] md:max-w-[700px] lg:max-w-[944px] bg-white rounded-xl md:rounded-2xl border border-[#E9E9E9] p-6 md:p-10 lg:p-12 shadow-2xl transform transition-all duration-300 animate-slideUp max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-200 hover:rotate-90 group"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform" />
        </button>

        {/* Title */}
        <h2
          id="modal-title"
          className="[font-family:'Clash_Display_Variable',Helvetica] font-bold text-[28px] leading-tight md:text-[36px] lg:text-[48px] lg:leading-tight mb-6 md:mb-8 lg:mb-10 text-[#131313]"
        >
          GET IN TOUCH
          <br />
          <span className="text-[#1e427e]">WITH US</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          {/* Name Field */}
          <div className="group">
            <label
              htmlFor="name"
              className="[font-family:'Clash_Display',Helvetica] block text-sm md:text-base font-medium text-black mb-2 transition-colors group-focus-within:text-[#1e427e]"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="[font-family:'Clash_Display',Helvetica] w-full px-3 py-2.5 md:px-4 md:py-3 lg:py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e427e] focus:border-transparent text-sm md:text-base transition-all duration-200 hover:border-gray-400"
            />
          </div>

          {/* Mobile Number Field */}
          <div className="group">
            <label
              htmlFor="mobile"
              className="[font-family:'Clash_Display',Helvetica] block text-sm md:text-base font-medium text-black mb-2 transition-colors group-focus-within:text-[#1e427e]"
            >
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              required
              pattern="[6-9][0-9]{9}"
              value={formData.mobile_number}
              onChange={(e) => setFormData({ ...formData, mobile_number: e.target.value })}
              placeholder="Enter 10-digit mobile number"
              className="[font-family:'Clash_Display',Helvetica] w-full px-3 py-2.5 md:px-4 md:py-3 lg:py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e427e] focus:border-transparent text-sm md:text-base transition-all duration-200 hover:border-gray-400"
            />
            <p className="[font-family:'Clash_Display',Helvetica] text-xs md:text-sm text-gray-500 mt-1.5">
              Must start with 6-9 and be 10 digits long
            </p>
          </div>

          {/* Select Services Field */}
          <div className="group">
            <label
              htmlFor="service"
              className="[font-family:'Clash_Display',Helvetica] block text-sm md:text-base font-medium text-black mb-2 transition-colors group-focus-within:text-[#1e427e]"
            >
              Select Services <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              required
              value={formData.service_type}
              onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
              className="[font-family:'Clash_Display',Helvetica] w-full px-3 py-2.5 md:px-4 md:py-3 lg:py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e427e] focus:border-transparent text-sm md:text-base appearance-none bg-white cursor-pointer transition-all duration-200 hover:border-gray-400"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.75rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="">Select a service</option>
              <option value="Domestic Long-Haul">Domestic Long-Haul</option>
              <option value="Domestic Short-Haul">Domestic Short-Haul</option>
              <option value="ODC Carrier and ODC TRUCK-PICK">ODC Carrier and ODC TRUCK-PICK</option>
              <option value="ODC/BULK/General PWC-SDL">ODC/BULK/General PWC-SDL</option>
            </select>
          </div>

          {/* Error/Success Message */}
          {message && (
            <div
              className={`p-3 md:p-4 rounded-lg border transition-all duration-300 animate-slideDown ${
                message.type === "success"
                  ? "bg-green-50 text-green-800 border-green-200"
                  : "bg-red-50 text-red-800 border-red-200"
              }`}
              role="alert"
            >
              <div className="flex items-start gap-2">
                <span className="text-lg">
                  {message.type === "success" ? "✓" : "✗"}
                </span>
                <p className="[font-family:'Clash_Display',Helvetica] text-sm md:text-base font-medium">
                  {message.text}
                </p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="[font-family:'Clash_Display',Helvetica] w-full py-3 md:py-3.5 lg:py-4 bg-[#1e427e] hover:bg-[#1e427e]/90 text-white text-lg md:text-xl lg:text-2xl font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transform"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      {/* Custom Animations - Add to your global CSS or tailwind.config */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}