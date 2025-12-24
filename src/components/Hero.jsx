import heroImage from "../assets/images/hero-coffee-mobile.png"

export default function Hero() {
  return (
    <section id="hero" className="pt-20 px-4">
      <div className="max-w-md mx-auto">

        {/* Hero Image with Overlay */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">

          {/* Image */}
          <img
            src={heroImage}
            alt="Ethiopian Coffee Cup"
            className="w-full h-[420px] object-cover"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Text Content */}
          <div className="absolute bottom-6 left-4 right-4 text-left">
            <h1 className="text-3xl font-serif text-[#f5efe6] leading-tight">
              Experience the <br /> Essence of Ethiopia
            </h1>

            <p className="text-[#e6d3b1] mt-2 text-sm leading-relaxed">
              Finest Ethiopian coffee from the land of origins.
            </p>

            <button className="mt-4 bg-[#8b5a2b] text-white px-5 py-2.5 rounded hover:bg-[#6f4622] transition">
              Explore Our Coffee
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
