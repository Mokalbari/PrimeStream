import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import DisplaySelectionSection from "./components/DisplaySelectionSection"

const App = () => {
  return (
    <>
      <div className="lg:flex">
        <Navbar />
        <main className="w-full">
          <SearchBar />
          <DisplaySelectionSection title="Recommanded for you" />
        </main>
      </div>
    </>
  )
}

export default App
