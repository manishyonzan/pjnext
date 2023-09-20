
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Topsales from "@/components/Topsales";

export default function Home() {
  return (
    <main >
      <Navbar/>
      <Hero/>
      <Products/>
      <Topsales/>
      <Footer/>
    </main>
  )
}
