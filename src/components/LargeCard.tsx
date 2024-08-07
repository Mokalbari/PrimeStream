import { useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import BookmarkEmptySVG from "./svg/BookmarkEmptySVG"
import BookmarkFullSVG from "./svg/BookmarkFullSVG"
import MovieSVG from "./svg/MovieSVG"
import TVShowSVG from "./svg/TVShowSVG"
import "./styles/LargeCard.css"
import PlaySVG from "./svg/PlaySVG"

type Props = {
  title: string
  thumbnailSmall: string
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
    x: "-35%",
    transition: {
      duration: 0.15,
    },
  },
}

const LargeCard = ({
  title,
  thumbnailSmall,
  thumbnailLarge,
  year,
  category,
  rating,
  isBookmarked,
}: Props) => {
  const [isFavorite, setIsFavorite] = useState(isBookmarked)
  const [isHovered, setIsHovered] = useState(false)

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

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <div
      className="large-card relative w-fit cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <picture className="">
        <source srcSet={thumbnailLarge} media="(min-width: 640px)" />
        <img className="mb-2 rounded-xl" src={thumbnailSmall} alt={title} />
        <div className="absolute right-4 top-4 z-0 aspect-square rounded-full bg-black p-2 opacity-50 sm:p-3">
          {isFavorite ? (
            <BookmarkFullSVG onClick={handleClick} className="z-30" />
          ) : (
            <BookmarkEmptySVG onClick={handleClick} className="z-30" />
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
      <motion.div
        className="play-overlay absolute left-1/2 top-1/2 z-20 flex origin-center items-center gap-4 rounded-full bg-white/25 py-2 pl-4 pr-6"
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        variants={variants}
      >
        <PlaySVG />
        <p className="font-bold">Play</p>
      </motion.div>
    </div>
  )
}

export default LargeCard
