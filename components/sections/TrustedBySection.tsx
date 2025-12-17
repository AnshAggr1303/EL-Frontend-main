"use client"

export default function TrustedBySection() {
  return (
    <section className="w-full bg-[#F5F7FA] py-20 relative overflow-hidden border-t border-b border-[#E5E7EB]">
      <div className="max-w-[1440px] mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full border border-[#E5E7EB] mb-6">
            <div className="w-2 h-2 bg-[#fe0000] rounded-full"></div>
            <span className="text-lg font-medium text-black">Our Clients</span>
          </div>

          <h2 className="text-[64px] font-bold leading-tight mb-6">
            <span className="text-black">TRUSTED BY </span>
            <span className="text-[#fe0000]">🤝 INDUSTRY LEADERS</span>
          </h2>

          <p className="text-[24px] text-black leading-relaxed max-w-[900px] mx-auto">
            Serving automotive, e-commerce, FMCG, energy, and industrial sectors with
            <br />
            95% business through permanent contracts.
          </p>
        </div>

        {/* Diagonal Stripes with Logos */}
        <div className="relative h-[500px] mt-8">
          {/* Stripe 1 - Top */}
          <div
            className="absolute flex items-center justify-around overflow-hidden"
            style={{
              width: "2102.773877881766px",
              height: "102.74999765943838px",
              transform: "rotate(-10deg)",
              opacity: 1,
              gap: "21px",
              background: "#FFFFFF",
              border: "1px solid #141414",
              boxShadow: "0px 13px 16px 0px #0000001A",
              top: "150.36px",
              left: "-222.8px",
              padding: "0 80px",
            }}
          >
            <img src="/amazon-logo.png" alt="Amazon" className="h-12 object-contain" />
            <img src="/ntpc-logo-blue.jpg" alt="NTPC" className="h-12 object-contain" />
            <img src="/hfcl-logo-blue.jpg" alt="HFCL" className="h-16 object-contain" />
            <img src="/eastern-coalfields-limited-logo.jpg" alt="EGL" className="h-14 object-contain" />
            <img src="/hyundai-logo-blue.jpg" alt="Hyundai" className="h-12 object-contain" />
            <img src="/flipkart-logo.png" alt="Flipkart" className="h-10 object-contain" />
          </div>

          {/* Stripe 2 - Bottom */}
          <div
            className="absolute flex items-center overflow-hidden"
            style={{
              width: "2030.9998292622295px",
              height: "102.74999136223244px",
              transform: "rotate(10deg)",
              opacity: 1,
              gap: "501px",
              background: "#FFFFFF",
              border: "0.75px solid #141414",
              boxShadow: "0px 13px 16px 0px #0000001A",
              top: "200px",
              left: "-222.8px",
              padding: "0 80px",
            }}
          >
            <img src="/maruti-suzuki-logo.jpg" alt="Maruti Suzuki" className="h-12 object-contain" />
            <img src="/toyota-logo-red.jpg" alt="Toyota" className="h-10 object-contain" />
            <img src="/kajaria-logo-blue.jpg" alt="Kajaria" className="h-12 object-contain" />
            <img src="/v-guard-logo.jpg" alt="V-Guard" className="h-10 object-contain" />
            <img src="/tata-logo-blue.jpg" alt="TATA" className="h-12 object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
