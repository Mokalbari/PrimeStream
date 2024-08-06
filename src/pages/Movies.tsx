import { useLoaderData } from "react-router-dom"
import type { APIDataType } from "../components/types/APIDataType"
import DisplaySelectionSection from "../components/DisplaySelectionSection"

const Movies = () => {
  const primeStreamSelection = useLoaderData() as APIDataType[]
  return <DisplaySelectionSection title="Movies" data={primeStreamSelection} />
}

export default Movies
