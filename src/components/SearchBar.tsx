import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SearchSVG from "./svg/SearchSVG"
import Container from "./layout/Container"
import "./styles/SearchBar.modules.css"

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(event.target.value)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchQuery.trim() && navigate(`/query/${searchQuery}`)
  }

  return (
    <Container className="mt-7 lg:mx-0 lg:mt-14 lg:flex-1">
      <form
        className="flex items-center gap-4"
        action="get"
        onSubmit={handleSubmit}
      >
        <SearchSVG />
        <input
          className="search-bar bg-black lg:border-b-lightGrey"
          type="text"
          value={searchQuery}
          placeholder="Search for movies or TV series"
          onChange={handleChange}
        />
      </form>
    </Container>
  )
}

export default SearchBar
