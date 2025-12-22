import { useState } from "react"
import { Link } from "react-scroll"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold font-serif">
          B Coffee
        </h1>

        {/* Desktop Links */}
       <ul className="hidden md:flex space-x-8 font-medium">
  <li>
    <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
      Home
    </Link>
  </li>
  <li>
    <Link to="about" smooth={true} duration={500} className="cursor-pointer">
      About
    </Link>
  </li>
  <li>
    <Link to="products" smooth={true} duration={500} className="cursor-pointer">
      Coffee
    </Link>
  </li>
  <li>
    <Link to="process" smooth={true} duration={500} className="cursor-pointer">
      Process
    </Link>
  </li>
  <li>
    <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
      Contact
    </Link>
  </li>
</ul>


        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
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
      {mobileMenuOpen && (
  <ul className="flex flex-col space-y-4">
    <li>
      <Link
        to="hero"
        smooth={true}
        duration={500}
        onClick={() => setMobileMenuOpen(false)}
        className="cursor-pointer hover:text-[#d6b17c] transition-colors"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="about"
        smooth={true}
        duration={500}
        onClick={() => setMobileMenuOpen(false)}
        className="cursor-pointer hover:text-[#d6b17c] transition-colors"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        to="products"
        smooth={true}
        duration={500}
        onClick={() => setMobileMenuOpen(false)}
        className="cursor-pointer hover:text-[#d6b17c] transition-colors"
      >
        Coffee
      </Link>
    </li>
    <li>
      <Link
        to="process"
        smooth={true}
        duration={500}
        onClick={() => setMobileMenuOpen(false)}
        className="cursor-pointer hover:text-[#d6b17c] transition-colors"
      >
        Process
      </Link>
    </li>
    <li>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        onClick={() => setMobileMenuOpen(false)}
        className="cursor-pointer hover:text-[#d6b17c] transition-colors"
      >
        Contact
      </Link>
    </li>
  </ul>
)}

    </nav>
  )
}
