import Navbar from "../components/layout/Navbar"
import Hero from "../components/Hero"
import Products from "../components/Products"
import About from "../components/About"
import Process from "../components/Process"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
       <About />
        <Process />
        <Footer />
    </>
  )
}
