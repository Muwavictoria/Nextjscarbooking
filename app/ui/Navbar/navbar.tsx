import NavLinks from "../components/nav-links/nav-links"
 export default function Navbar(){
    return(
        <header className="fixed top-0 left-0 z-50 w-full bg-white px-0 py-3 shadow-md dark:bg-gray-900">
              <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-4 lg:px-8">
                <NavLinks/>
              </div>
            </header>
    )
 }