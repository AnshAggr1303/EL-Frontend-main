export default function StatsSection() {
  const stats = [
    {
      number: "15+",
      label: "YEARS",
      description: "TRANSPORT EXPERIENCE",
    },
    {
      number: "400+",
      label: "HAPPY CLIENTS",
      description: "SATISFIED CUSTOMERS",
    },
    {
      number: "5,415+",
      label: "VEHICLES",
      description: "TRANSPORT EFFICIENCY",
    },
    {
      number: "10,000+",
      label: "ANNUAL",
      description: "DELIVERIES",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <h2 className="text-[12rem] md:text-[20rem] font-display font-black tracking-wider">ESHAAN</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Container Image */}
        <div className="flex justify-center mb-12">
          <svg viewBox="0 0 200 120" className="w-48 h-auto">
            {/* Container */}
            <rect x="20" y="20" width="160" height="80" fill="#1565C0" rx="4" />
            <rect x="25" y="25" width="35" height="70" fill="#2196F3" />
            <rect x="65" y="25" width="35" height="70" fill="#2196F3" />
            <rect x="105" y="25" width="35" height="70" fill="#2196F3" />
            <rect x="145" y="25" width="30" height="70" fill="#2196F3" />
            {/* Details */}
            <rect x="30" y="30" width="8" height="60" fill="#64B5F6" />
            <rect x="48" y="30" width="8" height="60" fill="#64B5F6" />
          </svg>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-bold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden">
              {/* Worker illustration placeholder */}
              <div className="w-full h-64 flex items-center justify-center">
                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold text-sm">Verified Team</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              WHY CHOOSE <span className="text-primary">ESHAAN</span> ?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">On-Time Delivery</h4>
                  <p className="text-gray-600">
                    99.8% on-time delivery rate ensures your goods reach their destination exactly when needed
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Pan-India Network</h4>
                  <p className="text-gray-600">Extensive coverage across all major cities and towns in India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
