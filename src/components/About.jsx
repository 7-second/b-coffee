import farmImg from "../assets/images/coffee_farm.jpg"

export default function About() {
  return (
    <section 
     id="about"
    className="py-20 bg-[#fffaf0]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={farmImg}
            alt="Ethiopian Coffee Farm"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#4b2e1e] mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 mb-6">
            Ethiopian coffee is renowned worldwide for its rich flavor and
            heritage. Our beans are sourced from small farms across Ethiopia,
            grown with care and tradition passed down through generations.
          </p>
          <p className="text-gray-700 mb-6">
            We bring the authentic taste of Ethiopia directly to your cup,
            preserving the quality, aroma, and story of each bean.
          </p>
          <button className="bg-[#8b5a2b] text-white px-8 py-3 rounded-lg hover:bg-[#6f4622] transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}
