import type { APIDataType } from "../types/APIDataType"

const fetchLocalApi = async (url: string): Promise<APIDataType[] | null> => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: APIDataType[] = await response.json()
    return data
  } catch (error) {
    throw new Error(`Error while loading API ${error}`)
  }
}

export default fetchLocalApi
