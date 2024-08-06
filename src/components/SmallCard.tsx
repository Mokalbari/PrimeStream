import { useState } from "react"
import BookmarkEmptySVG from "./svg/BookmarkEmptySVG"
import BookmarkFullSVG from "./svg/BookmarkFullSVG"
import MovieSVG from "./svg/MovieSVG"
import TVShowSVG from "./svg/TVShowSVG"

type Props = {
  title: string
  thumbnailSmall: string
  thumbnailMedium: string
  thumbnailLarge: string
  year: number
  category: string
  rating: string
}

const SmallCard = ({
  title,
  thumbnailSmall,
  thumbnailMedium,
  thumbnailLarge,
  year,
  category,
  rating,
}: Props) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = () => setIsFavorite(!isFavorite)

  return (
    <div className="relative w-fit">
      <picture className="">
        <source srcSet={thumbnailLarge} media="(min-width: 1024px)" />
        <source srcSet={thumbnailMedium} media="(min-width: 640px)" />
        <img className="mb-2 rounded-xl" src={thumbnailSmall} alt={title} />
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
          {year} ·{" "}
          {category === "Movie" ? (
            <MovieSVG className="inline" />
          ) : (
            <TVShowSVG className="inline" />
          )}{" "}
          {category} · {rating}
        </p>
        <h3 className="text-sm font-medium sm:text-xl">{title}</h3>
      </div>
    </div>
  )
}

export default SmallCard
