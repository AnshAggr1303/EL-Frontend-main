"use client"

export default function ServicesSection() {
  const services = [
    {
      title: "Domestic Long-Haul",
      description: "Long-distance transportation solutions across India with real-time tracking",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Domestic Short-Haul",
      description: "Quick and efficient local and regional delivery services",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Car Carrier Services (FTM/FTB)",
      description: "Specialized vehicle transportation with full-truck and part-load options",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      title: "Container Transportation (ICD-3S)",
      description: "Inland Container Depot services with seamless cargo handling",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            HOW WE CAN <span className="text-primary inline-flex items-center">🔥</span>{" "}
            <span className="text-primary">HELP YOU</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Providing a complete suite of logistics solutions tailored to meet your specific needs with efficiency and
            reliability
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>

              {/* Check Mark */}
              <div className="mt-6 flex items-center space-x-2 text-green-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-semibold">Available 24/7</span>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openQuoteModal"))}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <span>Request a Quote</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
