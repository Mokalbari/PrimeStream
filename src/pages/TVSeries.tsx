import { useLoaderData } from "react-router-dom"
import type { APIDataType } from "../components/types/APIDataType"
import DisplaySelectionSection from "../components/DisplaySelectionSection"
import AnimatedPage from "../components/AnimatedPage"

const TVSeries = () => {
  const primeStreamSelection = useLoaderData() as APIDataType[]
  return (
    <AnimatedPage>
      <DisplaySelectionSection title="TV Series" data={primeStreamSelection} />
    </AnimatedPage>
  )
}

export default TVSeries
