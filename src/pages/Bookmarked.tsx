import { useLoaderData } from "react-router-dom"
import type { APIDataType } from "../components/types/APIDataType"
import DisplaySelectionSection from "../components/DisplaySelectionSection"
import AnimatedPage from "../components/AnimatedPage"

const Bookmarked = () => {
  const primeStreamSelection = useLoaderData() as APIDataType[]
  const bookmarkedMovies = primeStreamSelection.filter(
    movies => movies.category === "Movie" && movies.isBookmarked,
  )

  const bookmarkedTVSeries = primeStreamSelection.filter(
    movies => movies.category === "TV Series" && movies.isBookmarked,
  )
  return (
    <AnimatedPage>
      <DisplaySelectionSection
        title="Bookmarked Movies"
        data={bookmarkedMovies}
      />
      <DisplaySelectionSection
        title="Bookmarked TV Series"
        data={bookmarkedTVSeries}
      />
    </AnimatedPage>
  )
}

export default Bookmarked
