import { useState } from "react"
import largeImg from "../../entertainment-web-app/starter-code/assets/thumbnails/beyond-earth/trending/large.jpg"
import smallImg from "../../entertainment-web-app/starter-code/assets/thumbnails/beyond-earth/trending/small.jpg"
import BookmarkEmptySVG from "./svg/BookmarkEmptySVG"
import BookmarkFullSVG from "./svg/BookmarkFullSVG"
import MovieSVG from "./svg/MovieSVG"

const LargeCard = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const handleClick = () => setIsFavorite(!isFavorite)

  return (
    <div className="relative w-fit">
      <picture className="">
        <source srcSet={largeImg} media="(min-width: 640px)" />
        <img
          className="mb-2 rounded-xl"
          src={smallImg}
          alt="Le titre du film"
        />
        <div className="absolute right-4 top-4 z-0 aspect-square rounded-full bg-black p-2 opacity-50 sm:p-3">
          {isFavorite ? (
            <BookmarkFullSVG onClick={handleClick} className="z-10" />
          ) : (
            <BookmarkEmptySVG onClick={handleClick} className="z-10" />
          )}
        </div>
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8">
          <p className="text-xs font-light opacity-75 sm:text-sm">
            2019 · <MovieSVG className="inline" /> Movie · PG
          </p>
          <h3 className="text-s font-medium sm:text-2xl">No Land Beyond</h3>
        </div>
      </picture>
    </div>
  )
}

export default LargeCard
