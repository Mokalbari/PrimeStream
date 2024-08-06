import { useLoaderData } from "react-router-dom"
import DisplayHorizontalSection from "../components/DisplayHorizontalSection"
import DisplaySelectionSection from "../components/DisplaySelectionSection"
import type { APIDataType } from "../components/types/APIDataType"

const Home = () => {
  const primeStreamSelection = useLoaderData() as APIDataType[]
  const filterTrending = primeStreamSelection.filter(item => !item.isTrending)

  return (
    <>
      <DisplayHorizontalSection title="Trending" data={primeStreamSelection} />
      <DisplaySelectionSection
        title="Recommended for you"
        data={filterTrending}
      />
    </>
  )
}

export default Home
