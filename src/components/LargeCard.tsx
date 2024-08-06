import { useState } from "react"
import BookmarkEmptySVG from "./svg/BookmarkEmptySVG"
import BookmarkFullSVG from "./svg/BookmarkFullSVG"
import MovieSVG from "./svg/MovieSVG"
import TVShowSVG from "./svg/TVShowSVG"
import "./styles/LargeCard.css"

type Props = {
  title: string
  thumbnailSmall: string
  thumbnailLarge: string
  year: number
  category: string
  rating: string
}

const LargeCard = ({
  title,
  thumbnailSmall,
  thumbnailLarge,
  year,
  category,
  rating,
}: Props) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const handleClick = () => setIsFavorite(!isFavorite)

  return (
    <div className="large-card relative w-fit">
      <picture className="">
        <source srcSet={thumbnailLarge} media="(min-width: 640px)" />
        <img className="mb-2 rounded-xl" src={thumbnailSmall} alt={title} />
        <div className="absolute right-4 top-4 z-0 aspect-square rounded-full bg-black p-2 opacity-50 sm:p-3">
          {isFavorite ? (
            <BookmarkFullSVG onClick={handleClick} className="z-10" />
          ) : (
            <BookmarkEmptySVG onClick={handleClick} className="z-10" />
          )}
        </div>
        <div className="absolute bottom-4 left-4 z-20 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8">
          <p className="flex items-center gap-1 text-xs font-light opacity-75 sm:text-sm">
            {year} ·{" "}
            {category === "Movie" ? (
              <MovieSVG className="inline" />
            ) : (
              <TVShowSVG className="inline" />
            )}{" "}
            {category} · {rating}
          </p>
          <h3 className="text-s font-medium sm:text-2xl">{title}</h3>
        </div>
      </picture>
    </div>
  )
}

export default LargeCard
