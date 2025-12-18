"use client"

export default function TrustedBySection() {
  return (
    <section className="w-full bg-[#F5F7FA] py-16 lg:py-24 border-t border-b border-[#E5E7EB] font-clash">
      <div className="">

        {/* ================= HEADER ================= */}
        <div className="max-w-[1440px] mx-auto text-center mb-12 lg:mb-20 px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full border border-[#E5E7EB] mb-6">
            <span className="w-2 h-2 bg-[#fe0000] rounded-full" />
            <span className="text-sm sm:text-base font-medium">
              Our Clients
            </span>
          </div>

          <h2 className="font-bold leading-tight mb-5
                         text-[32px] sm:text-[42px] lg:text-[56px]">
            <span className="text-black">TRUSTED BY </span>
            <span className="text-[#fe0000]">🤝 INDUSTRY LEADERS</span>
          </h2>

          <p className="text-black/80 max-w-[900px] mx-auto
                        text-[16px] sm:text-[18px] lg:text-[22px] leading-relaxed">
            Serving automotive, e-commerce, FMCG, energy, and industrial sectors
            with 95% business through permanent contracts.
          </p>
        </div>

        {/* ================= MOBILE LOGOS =================
        <div className="block lg:hidden space-y-6 px-6 lg:px-10">
          {[ 
            ["/amazon-logo.png", "/ntpc-logo-blue.jpg", "/hfcl-logo-blue.jpg"],
            ["/hyundai-logo-blue.jpg", "/flipkart-logo.png", "/tata-logo-blue.jpg"]
          ].map((row, idx) => (
            <div
              key={idx}
              className="flex gap-6 overflow-x-auto scrollbar-hide"
            >
              {row.map((logo) => (
                <div
                  key={logo}
                  className="min-w-[140px] h-[90px] bg-white rounded-xl shadow-sm
                             flex items-center justify-center px-4"
                >
                  <img
                    src={logo}
                    alt="Client logo"
                    className="max-h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div> */}

        {/* ================= DESKTOP DIAGONAL STRIPS ================= */}
        <div className="relative h-[420px] overflow-x-clip">

          {/* STRIP 1 */}
          <div className="
            absolute left-1/2 top-[140px] -translate-x-1/2
            w-[2200px] h-[100px]
            bg-white border border-black/80 shadow-xl
            flex items-center justify-center gap-20
            rotate-[-10deg]
          ">
            {[
              "/images/logos/amazon.png",
              "/images/logos/NTPC.png",
              "/images/logos/HCFL.png",
              "/images/logos/ECL.png",
              "/images/logos/Hyundai.png",
              "/images/logos/Flipkart.png",
            ].map((logo) => (
              <img
                key={logo}
                src={logo}
                alt="Client"
                className="object-contain py-4 w-40"
              />
            ))}
          </div>

          {/* STRIP 2 */}
          <div className="
            absolute left-1/2 top-[230px] -translate-x-1/2
            w-[2200px] h-[100px]
            bg-white border border-black/80 shadow-xl
            flex items-center justify-center gap-20
            rotate-[10deg]
          ">
            {[
              "/images/logos/MarutiSuzuki.png",
              "/images/logos/Toyota.png",
              "/images/logos/Kajaria.png",
              "/images/logos/v-guard-logo.jpg",
              "/images/logos/tata-logo-blue.jpg",
            ].map((logo) => (
              <img
                key={logo}
                src={logo}
                alt="Client"
                className="h-10 object-contain"
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
