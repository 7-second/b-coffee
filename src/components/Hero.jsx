import heroImage from "../assets/images/hero.jpg"

export default function Hero() {
    return (
        <section id="hero"
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">
                    <h1
                        className="text-4xl md:text-6xl font-bold leading-tight"
                        data-aos="fade-up"
                    >
                        Ethiopian Coffee <br />
                        <span className="text-[#d6b17c]">From the Land of Origin</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg text-gray-200" data-aos="fade-up" data-aos-delay="200">
                        Experience premium Ethiopian coffee, carefully sourced from
                        the world’s most renowned coffee regions.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <button
                            className="mt-8 bg-[#8b5a2b] px-8 py-3 rounded-lg text-lg hover:bg-[#6f4622] transition"
                            data-aos="fade-up" data-aos-delay="400"
                        >
                            Explore Our Coffee
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
