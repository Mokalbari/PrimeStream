import { useLoaderData, useParams } from "react-router-dom"
import DisplaySelectionSection from "../components/DisplaySelectionSection"
import AnimatedPage from "../components/AnimatedPage"
import type { APIDataType } from "../components/types/APIDataType"

const Query = () => {
  const streamQuery = useLoaderData() as APIDataType[]
  const resultLength = streamQuery.length

  const { name } = useParams()

  return (
    <AnimatedPage>
      <DisplaySelectionSection
        title={`Found ${resultLength} result${resultLength > 1 ? "s" : ""} for '${name}'.`}
        data={streamQuery}
      />
    </AnimatedPage>
  )
}

export default Query
