import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <div className="lg:flex">
        <Navbar />
        <main className="w-full">
          <SearchBar />
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
