import { useState } from "react"
import yirgacheffe from "../assets/images/yirgacheffe.jpg"
import sidamo from "../assets/images/sidamo.jpg"
import harrar from "../assets/images/harrar.webp"

const coffees = [
  {
    name: "Yirgacheffe Coffee",
    desc: "Floral & Citrus — light body with bright aroma.",
    img: yirgacheffe,
    detail:
      "Yirgacheffe coffee is known for its floral aroma and citrus acidity. Grown in the highlands of southern Ethiopia, it is washed and sun-dried for clarity and elegance.",
  },
  {
    name: "Sidamo Coffee",
    desc: "Rich & Fruity — smooth and balanced.",
    img: sidamo,
    detail:
      "Sidamo coffee delivers fruity sweetness with a full body. Carefully cultivated at high altitudes, it reflects Ethiopia’s diverse coffee heritage.",
  },
  {
    name: "Harrar Coffee",
    desc: "Bold & Spicy — wine-like intensity.",
    img: harrar,
    detail:
      "Harrar is dry-processed and bold, offering deep spicy and chocolate notes. One of the oldest coffee regions in the world.",
  },
]

export default function Products() {
  const [activeCoffee, setActiveCoffee] = useState(null)

  return (
    <section id="products" className="bg-[#3b1f12] py-16">
      <div className="max-w-md mx-auto px-4">

        {/* Title */}
        <h2 className="text-center text-3xl font-serif text-[#f5efe6] mb-10">
          Our Coffees
        </h2>

        {/* Small List Cards */}
        <div className="space-y-6">
          {coffees.map((coffee, idx) => (
            <div
              key={idx}
              className="flex bg-[#f5efe6] rounded-xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={coffee.img}
                alt={coffee.name}
                className="w-28 h-28 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-[#4b2e1e] text-lg">
                    {coffee.name}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">
                    {coffee.desc}
                  </p>
                </div>

                <button
                  onClick={() => setActiveCoffee(coffee)}
                  className="text-sm text-[#8b5a2b] font-semibold mt-3 hover:underline"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CENTER DRAWER / MODAL */}
      {activeCoffee && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setActiveCoffee(null)}
        >
          <div
            className="bg-[#f5efe6] rounded-xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCoffee.img}
              alt={activeCoffee.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-serif text-[#4b2e1e] mb-3">
                {activeCoffee.name}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {activeCoffee.detail}
              </p>

              <button
                onClick={() => setActiveCoffee(null)}
                className="mt-6 w-full bg-[#8b5a2b] text-white py-2 rounded hover:bg-[#6f4622]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
