import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import DisplaySelectionSection from "./components/DisplaySelectionSection"
import DisplayHorizontalSection from "./components/DisplayHorizontalSection"
import useFetch from "./hooks/useFetch"

const App = () => {
  // const { data, loading, error } = useFetch("http://localhost:4903/")

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
