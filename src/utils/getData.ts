import axios from "axios"

export const getData = async (url: string) => {
  const result = await axios.get(url)
  return result.data
}
