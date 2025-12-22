import yirgacheffe from "../assets/images/yirgacheffe.jpg"
import sidamo from "../assets/images/sidamo.jpg"
import harrar from "../assets/images/harrar.webp"

const coffees = [
  {
    name: "Yirgacheffe",
    desc: "Floral & Citrus — a delicate and aromatic coffee.",
    img: yirgacheffe,
  },
  {
    name: "Sidamo",
    desc: "Rich & Fruity — full-bodied with a smooth finish.",
    img: sidamo,
  },
  {
    name: "Harrar",
    desc: "Bold & Spicy — strong flavors from eastern Ethiopia.",
    img: harrar,
  },
]

export default function Products() {
  return (
    <section 
     id="products"
    className="py-20 bg-[#f5efe6]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-center text-[#4b2e1e] mb-12">
          Our Coffees
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coffees.map((coffee, idx) => (
  <div
    key={idx}
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
    data-aos="fade-up"
    data-aos-delay={idx * 200}
  >
    <img src={coffee.img} alt={coffee.name} className="w-full h-64 object-cover"/>
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-[#4b2e1e] mb-2">{coffee.name}</h3>
      <p className="text-gray-700 mb-4">{coffee.desc}</p>
      <button className="bg-[#8b5a2b] text-white px-6 py-2 rounded hover:bg-[#6f4622] transition">
        Learn More
      </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
