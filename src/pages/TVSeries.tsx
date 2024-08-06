import { useLoaderData } from "react-router-dom"
import type { APIDataType } from "../components/types/APIDataType"
import DisplaySelectionSection from "../components/DisplaySelectionSection"

const TVSeries = () => {
  const primeStreamSelection = useLoaderData() as APIDataType[]
  return (
    <DisplaySelectionSection title="TV Series" data={primeStreamSelection} />
  )
}

export default TVSeries
