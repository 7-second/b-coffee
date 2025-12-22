import { useState } from "react"
import yirgacheffe from "../assets/images/yirgacheffe.jpg"
import sidamo from "../assets/images/sidamo.jpg"
import harrar from "../assets/images/harrar.webp"

const coffees = [
  {
    name: "Yirgacheffe",
    desc: "Floral & Citrus — a delicate and aromatic coffee.",
    img: yirgacheffe,
    detail:
      "Yirgacheffe is famous for its light body, floral aroma, and citrus notes. Sourced from southern Ethiopia, it is carefully washed and sun-dried to preserve its delicate flavors.",
  },
  {
    name: "Sidamo",
    desc: "Rich & Fruity — full-bodied with a smooth finish.",
    img: sidamo,
    detail:
      "Sidamo coffee offers a rich and fruity flavor profile with a smooth, balanced finish. Grown in the Sidamo region, it is carefully hand-picked and processed with precision.",
  },
  {
    name: "Harrar",
    desc: "Bold & Spicy — strong flavors from eastern Ethiopia.",
    img: harrar,
    detail:
      "Harrar coffee is bold and full of character, with strong, spicy, and wine-like notes. Grown in eastern Ethiopia, it is traditionally dry-processed to enhance its intense flavors.",
  },
]

export default function Products() {
  const [selectedCoffee, setSelectedCoffee] = useState(null)

  return (
    <section id="products" className="py-20 bg-[#f5efe6]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-center text-[#4b2e1e] mb-12">
          Our Coffees
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coffees.map((coffee, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex flex-col"
            >
              <img
                src={coffee.img}
                alt={coffee.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#4b2e1e] mb-2">
                    {coffee.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{coffee.desc}</p>
                </div>
                <button
                  onClick={() => setSelectedCoffee(coffee)}
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
      {selectedCoffee && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCoffee(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCoffee(null)}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedCoffee.img}
              alt={selectedCoffee.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-3xl font-bold text-[#4b2e1e] mb-4">
                {selectedCoffee.name}
              </h3>
              <p className="text-gray-700">{selectedCoffee.detail}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
