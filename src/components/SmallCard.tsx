import { useState } from "react"
import BookmarkEmptySVG from "./svg/BookmarkEmptySVG"
import BookmarkFullSVG from "./svg/BookmarkFullSVG"
import smallImg from "../../entertainment-web-app/starter-code/assets/thumbnails/no-land-beyond/regular/small.jpg"
import mediumImg from "../../entertainment-web-app/starter-code/assets/thumbnails/no-land-beyond/regular/medium.jpg"
import largeImg from "../../entertainment-web-app/starter-code/assets/thumbnails/no-land-beyond/regular/large.jpg"
import MovieSVG from "./svg/MovieSVG"

const SmallCard = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = () => setIsFavorite(!isFavorite)

  return (
    <div className="relative w-fit">
      <picture className="">
        <source srcSet={largeImg} media="(min-width: 1024px)" />
        <source srcSet={mediumImg} media="(min-width: 640px)" />
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
      </picture>
      <div>
        <p className="my-1 text-xs font-light opacity-75">
          2019 · <MovieSVG className="inline" /> Movie · PG
        </p>
        <h3 className="text-sm font-medium sm:text-xl">No Land Beyond</h3>
      </div>
    </div>
  )
}

export default SmallCard
