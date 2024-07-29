import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"

const App = () => {
  return (
    <>
      <div className="lg:flex">
        <Navbar />
        <SearchBar />{" "}
      </div>
    </>
  )
}

export default App
