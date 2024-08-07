import { useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import BookmarkEmptySVG from "./svg/BookmarkEmptySVG"
import BookmarkFullSVG from "./svg/BookmarkFullSVG"
import MovieSVG from "./svg/MovieSVG"
import TVShowSVG from "./svg/TVShowSVG"
import PlaySVG from "./svg/PlaySVG"
import "./styles/SmallCard.css"

type Props = {
  title: string
  thumbnailSmall: string
  thumbnailMedium: string
  thumbnailLarge: string
  year: number
  category: string
  rating: string
  isBookmarked: boolean
}

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.15,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: "5%",
    y: "-20%",
    transition: {
      duration: 0.15,
    },
  },
}

const SmallCard = ({
  title,
  thumbnailSmall,
  thumbnailMedium,
  thumbnailLarge,
  year,
  category,
  rating,
  isBookmarked,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(isBookmarked)

  const handleOnEnter = () => setIsHovered(true)
  const handleOnLeave = () => setIsHovered(false)

  const handleClick = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4903/primeStream/${title}/bookmark`,
        {
          isBookmarked: !isFavorite,
        },
      )
      setIsFavorite(response.data.item.isBookmarked)
    } catch (error) {
      throw new Error("Failed to update bookmark")
    }
  }

  return (
    <div
      className="relative w-fit cursor-pointer"
      onMouseEnter={handleOnEnter}
      onMouseLeave={handleOnLeave}
    >
      <div className="relative">
        <picture className={isHovered ? "small-card" : ""}>
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
        <motion.div
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={variants}
          className="absolute left-1/3 top-1/2 z-20 flex origin-center items-center gap-4 rounded-full bg-white/25 py-2 pl-4 pr-6"
        >
          <PlaySVG />
          <p className="font-bold">Play</p>
        </motion.div>
      </div>
      <div>
        <p className="my-1 flex items-center gap-1 text-xs font-light opacity-75">
          {year} ·{"   "}
          {category === "Movie" ? (
            <MovieSVG className="inline" />
          ) : (
            <TVShowSVG className="inline" />
          )}
          {"   "}
          {category} · {rating}
        </p>
        <h3 className="text-sm font-medium sm:text-xl">{title}</h3>
      </div>
    </div>
  )
}

export default SmallCard
