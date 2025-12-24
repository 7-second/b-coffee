import heroImage from "../assets/images/hero-coffee-mobile.png"

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#3b1f12] pt-28 pb-16"
    >
      <div className="max-w-md mx-auto px-4 text-center">

        {/* Text */}
        <h1 className="text-4xl font-serif text-[#f5efe6] leading-tight">
          Experience the Essence of Ethiopia
        </h1>

        <p className="text-[#e6d3b1] mt-4 text-sm leading-relaxed">
          Finest Ethiopian coffee from the land of origins — crafted with tradition and passion.
        </p>

        <button className="mt-6 bg-[#8b5a2b] text-white px-6 py-3 rounded hover:bg-[#6f4622] transition">
          Explore Our Coffee
        </button>

        {/* Image Card */}
        <div className="mt-10 bg-[#f5efe6] rounded-xl overflow-hidden shadow-md">
          <img
            src={heroImage}
            alt="Ethiopian Coffee Cup"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  )
}
