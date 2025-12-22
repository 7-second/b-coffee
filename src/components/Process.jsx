import harvest from "../assets/images/harvest.jpg"
import roast from "../assets/images/roast.jpg"
import cup from "../assets/images/cup.jpg"

const steps = [
  {
    title: "Harvest",
    desc: "Hand-picked coffee cherries from small Ethiopian farms.",
    img: harvest,
  },
  {
    title: "Roasting",
    desc: "Carefully roasted to bring out unique flavors.",
    img: roast,
  },
  {
    title: "Brew & Enjoy",
    desc: "Delivered fresh for you to enjoy the perfect cup.",
    img: cup,
  },
]

export default function Process() {
  return (
    <section 
      id="process"
    className="py-20 bg-[#f5efe6]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#4b2e1e] mb-6">
          Our Process
        </h2>
        <p className="text-gray-700 mb-12">
          From farm to cup, every step is crafted with care and tradition.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src={step.img} alt={step.title} className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#4b2e1e] mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
