import { useState } from "react"
import harvest from "../assets/images/harvest.jpg"
import roast from "../assets/images/roast.jpg"
import cup from "../assets/images/cup.jpg"

const steps = [
  {
    title: "Harvest",
    desc: "Hand-picked coffee cherries from small Ethiopian farms.",
    img: harvest,
    detail:
      "Our farmers select the ripest cherries by hand, ensuring only the best quality beans are harvested. This traditional method preserves the natural flavors unique to Ethiopian coffee.",
  },
  {
    title: "Roasting",
    desc: "Carefully roasted to bring out unique flavors.",
    img: roast,
    detail:
      "We use slow roasting techniques in small batches to bring out the natural aroma and complex flavors. Each roast is crafted to highlight the origin’s signature taste.",
  },
  {
    title: "Brew & Enjoy",
    desc: "Delivered fresh for you to enjoy the perfect cup.",
    img: cup,
    detail:
      "Freshly brewed or packaged, our coffee delivers an authentic Ethiopian experience. Enjoy the rich flavors, smooth body, and natural sweetness with every sip.",
  },
]

export default function Process() {
  const [selectedStep, setSelectedStep] = useState(null)

  return (
    <section id="process" className="py-20 bg-[#f5efe6]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#4b2e1e] mb-6">
          Our Process
        </h2>
        <p className="text-gray-700 mb-12">
          From farm to cup, every step is crafted with care and tradition.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col"
            >
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#4b2e1e] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{step.desc}</p>
                </div>
                <button
                  onClick={() => setSelectedStep(step)}
                  className="mt-auto bg-[#8b5a2b] text-white px-6 py-2 rounded hover:bg-[#6f4622] transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drawer / Modal */}
      {selectedStep && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedStep(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStep(null)}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedStep.img}
              alt={selectedStep.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-3xl font-bold text-[#4b2e1e] mb-4">
                {selectedStep.title}
              </h3>
              <p className="text-gray-700">{selectedStep.detail}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
