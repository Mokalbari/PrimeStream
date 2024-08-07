import { useLoaderData } from "react-router-dom"
import type { APIDataType } from "../components/types/APIDataType"
import DisplaySelectionSection from "../components/DisplaySelectionSection"
import AnimatedPage from "../components/AnimatedPage"

const Movies = () => {
  const primeStreamSelection = useLoaderData() as APIDataType[]
  return (
    <AnimatedPage>
      <DisplaySelectionSection title="Movies" data={primeStreamSelection} />
    </AnimatedPage>
  )
}

export default Movies
