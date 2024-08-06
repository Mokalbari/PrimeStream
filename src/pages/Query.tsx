import { useLoaderData } from "react-router-dom"
import DisplaySelectionSection from "../components/DisplaySelectionSection"
import type { APIDataType } from "../components/types/APIDataType"

const Query = () => {
  const streamQuery = useLoaderData() as APIDataType[]

  return (
    <>
      <DisplaySelectionSection title="Recommended for you" data={streamQuery} />
    </>
  )
}

export default Query
