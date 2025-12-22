import insta from "../assets/images/social/instagram.png"
import fb from "../assets/images/social/facebook.png"
import tiktok from "../assets/images/social/tiktok.png"
import twitter from "../assets/images/social/twitter.png"

export default function Footer() {
  const socialAccounts = [
    { name: "Instagram", logo: insta, handle: "@ethiopiancoffee" },
    { name: "Facebook", logo: fb, handle: "Ethiopian Coffee" },
    { name: "TikTok", logo: tiktok, handle: "@ethiopiancoffee" },
    { name: "Twitter", logo: twitter, handle: "@ethiopiancoffee" },
  ]

  return (
    <footer
      id="contact"
    className="bg-[#4b2e1e] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p>Email: info@ethiopiancoffee.com</p>
          <p>Phone: +251 985434363</p>
          <p>Address: Addis Ababa, Ethiopia</p>
        </div>

        {/* Social Accounts */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-4">
            {socialAccounts.map((acc, idx) => (
              <li key={idx} className="flex items-center gap-3 hover:text-[#d6b17c] transition cursor-pointer">
                <img src={acc.logo} alt={acc.name} className="w-6 h-6" />
                <span>{acc.handle}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Optional */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
          <p>Subscribe for the latest updates and offers.</p>
          <form className="mt-4 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded text-black flex-1"
            />
            <button className="bg-[#8b5a2b] px-6 py-2 rounded hover:bg-[#6f4622] transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-300">
        &copy; {new Date().getFullYear()} Ethiopian Coffee. All rights reserved.
      </div>
    </footer>
  )
}
