import { useLoaderData } from "react-router-dom"
import DisplayHorizontalSection from "../components/DisplayHorizontalSection"
import DisplaySelectionSection from "../components/DisplaySelectionSection"
import AnimatedPage from "../components/AnimatedPage"
import type { APIDataType } from "../components/types/APIDataType"

const Home = () => {
  const primeStreamSelection = useLoaderData() as APIDataType[]
  const filterTrending = primeStreamSelection.filter(item => !item.isTrending)

  return (
    <AnimatedPage>
      <DisplayHorizontalSection title="Trending" data={primeStreamSelection} />
      <DisplaySelectionSection
        title="Recommended for you"
        data={filterTrending}
      />
    </AnimatedPage>
  )
}

export default Home
