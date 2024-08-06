import { useLoaderData, useParams } from "react-router-dom"
import formatName from "../components/functions/formatName"
import DisplaySelectionSection from "../components/DisplaySelectionSection"
import type { APIDataType } from "../components/types/APIDataType"

const Query = () => {
  const streamQuery = useLoaderData() as APIDataType[]
  const resultLength = streamQuery.length

  const { name } = useParams()
  const formattedName = name ? formatName(name) : ""

  return (
    <>
      {console.info(name)}
      <DisplaySelectionSection
        title={`Found ${resultLength} result${resultLength > 1 ? "s" : ""} for ${formattedName}`}
        data={streamQuery}
      />
    </>
  )
}

export default Query
