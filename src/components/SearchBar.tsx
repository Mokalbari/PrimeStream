import { useState } from "react"
import SearchSVG from "./svg/SearchSVG"
import Container from "./layout/Container"

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(event.target.value)

  return (
    <Container className="mt-7">
      <form className="flex items-center gap-4" action="get">
        <SearchSVG />
        <input
          className="bg-black focus:border-none"
          type="text"
          value={searchQuery}
          placeholder="Search for movies or TV series"
          onChange={handleChange}
        />
      </form>
    </Container>
  )
}

// Left to do :
// changing the cursor style in input field + removing the border

export default SearchBar
