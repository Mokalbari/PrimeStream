import { useRef, useEffect } from "react"
import LargeCard from "./LargeCard"
import type { APIDataType } from "./types/APIDataType"
import "./styles/DisplayHorizontalSection.css"

type Props = {
  title: string
  data: APIDataType[] | null
}

const DisplayHorizontalSection = ({ data, title }: Props) => {
  const scrollContainerRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollContainerRef.current) {
        e.preventDefault()
        scrollContainerRef.current.scrollLeft += e.deltaY
      }
    }

    const currentRef = scrollContainerRef.current
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel)
      }
    }
  }, [])

  return (
    <section className="mx-4 sm:mx-6 lg:mx-8">
      <h2 className="mb-4 mt-6 text-2xl">{title}</h2>
      <ul
        ref={scrollContainerRef}
        className="media-scroll gap-4"
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
      >
        {data
          ?.filter(item => item.isTrending)
          .map(item => (
            <li key={item.title} style={{ display: "inline-block" }}>
              <LargeCard
                title={item.title}
                thumbnailSmall={item.thumbnail.trending.small}
                thumbnailLarge={item.thumbnail.trending.large}
                year={item.year}
                category={item.category}
                rating={item.rating}
              />
            </li>
          ))}
      </ul>
    </section>
  )
}

export default DisplayHorizontalSection
