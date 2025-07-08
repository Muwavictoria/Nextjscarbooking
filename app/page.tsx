
import HeroSection from "./ui/components/hero"
import PerfectCarSearch from "./ui/components/carserch"
import MarketSection from "./ui/components/Marketsection"
import ArrivalSection from "./ui/components/NewArrival"
import Footer from "./ui/components/footer"
import Navbar from "./ui/Navbar/navbar"

export default function Home() {
  return(
    <>
    <Navbar/>

    <main className="pt-15">
        <HeroSection />
        <PerfectCarSearch/>
        <MarketSection/>
        <ArrivalSection/>
    </main>

    <footer>
      <Footer/>
    </footer>
    

    </>
  ) 
}
