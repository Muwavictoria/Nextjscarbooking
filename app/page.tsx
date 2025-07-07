import NavLinks from "./ui/components/nav-links/nav-links"
import HeroSection from "./ui/components/hero"
import PerfectCarSearch from "./ui/components/carserch"
import MarketSection from "./ui/components/Marketsection"
import ArrivalSection from "./ui/components/NewArrival"
import Footer from "./ui/components/footer"

export default function Home() {
  return(
    <>
    <header className="fixed top-0 left-0 z-50 w-full bg-white px-0 py-3 shadow-md dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-4 lg:px-8">
        <NavLinks/>
      </div>
    </header>

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
