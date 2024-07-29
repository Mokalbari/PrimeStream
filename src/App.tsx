import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import DisplaySelectionSection from "./components/DisplaySelectionSection"
import LargeCard from "./components/LargeCard"
import DisplayHorizontalSection from "./components/DisplayHorizontalSection"

const App = () => {
  return (
    <>
      <div className="lg:flex">
        <Navbar />
        <main className="w-full">
          <SearchBar />
          <DisplayHorizontalSection title="Trending" />
          <DisplaySelectionSection title="Recommanded for you" />
        </main>
      </div>
    </>
  )
}

export default App
