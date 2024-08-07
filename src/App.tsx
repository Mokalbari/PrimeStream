import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import { AnimatePresence } from "framer-motion"

const App = () => {
  const location = useLocation()

  return (
    <div className="lg:flex">
      <Navbar />
      <main className="w-full">
        <SearchBar />
        <AnimatePresence mode="wait">
          {/* The key prop helps AnimatePresence detect route changes */}
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
