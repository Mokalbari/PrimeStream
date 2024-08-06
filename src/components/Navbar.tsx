import { useNavigate } from "react-router-dom"
import HomeSVG from "./svg/HomeSVG"
import NavBookmarkSVG from "./svg/NavBookmarkSVG"
import NavHomeSVG from "./svg/NavHomeSVG"
import NavMoviesSVG from "./svg/NavMoviesSVG"
import NavTVShowSVG from "./svg/NavTVShowSVG"
import avatar from "../../public/image-avatar.png"

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className="flex items-center justify-between rounded-xl bg-darkGrey p-4 sm:m-6 sm:p-6 lg:sticky lg:top-8 lg:m-8 lg:max-h-[90vh] lg:w-fit lg:flex-col lg:justify-normal">
      <HomeSVG className="lg:mb-20" />
      <menu className="flex gap-6 sm:gap-8 lg:flex-1 lg:flex-col">
        <li onClick={() => navigate("/")}>
          <NavHomeSVG />{" "}
        </li>
        <li onClick={() => navigate("/movies")}>
          <NavMoviesSVG />{" "}
        </li>
        <li onClick={() => navigate("/tv-series")}>
          {" "}
          <NavTVShowSVG />
        </li>
        <li onClick={() => navigate("/bookmarked")}>
          <NavBookmarkSVG />{" "}
        </li>
      </menu>
      <img src={avatar} alt="current user" className="w-6 sm:w-9" />
    </nav>
  )
}

export default Navbar
