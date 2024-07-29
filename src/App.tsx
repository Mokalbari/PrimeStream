import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import DisplaySelectionSection from "./components/DisplaySelectionSection"
import DisplayHorizontalSection from "./components/DisplayHorizontalSection"
import useFetch from "./hooks/useFetch"
import type { APIDataType } from "./components/types/APIDataType"

const App = () => {
  const { data, loading, error } = useFetch<APIDataType[]>(
    "http://localhost:4903/",
  )

  if (error && !loading) {
    throw new Error(
      "Error while fetching the data. Please check the url or server disponibility.",
    )
  }

  return (
    <>
      <div className="lg:flex">
        <Navbar />
        <main className="w-full">
          <SearchBar />
          <DisplayHorizontalSection
            data={data}
            loading={loading}
            title="Trending"
          />
          <DisplaySelectionSection
            data={data}
            loading={loading}
            title="Recommanded for you"
          />
        </main>
      </div>
    </>
  )
}

export default App
