import { useState } from "react"
import { Link } from "react-scroll"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold font-serif cursor-pointer hover:text-[#d6b17c] transition-colors">
          B Coffee
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {["hero", "about", "products", "process", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#d6b17c] transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 rounded hover:bg-white/20 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-black/80 backdrop-blur-md px-6 py-4 space-y-4">
          {["hero", "about", "products", "process", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-[#d6b17c] transition-colors block py-2"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
