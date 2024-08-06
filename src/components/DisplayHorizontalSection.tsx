import LargeCard from "./LargeCard"
import type { APIDataType } from "./types/APIDataType"

type Props = {
  title: string
  data: APIDataType[] | null
}

const DisplayHorizontalSection = ({ data, title }: Props) => {
  return (
    <section className="mx4 sm: mx-6 lg:mx-8">
      <h2 className="mb-4 mt-6 text-2xl">{title}</h2>
      <ul className="flex gap-4 overflow-hidden">
        {data
          ?.filter(item => item.isTrending)
          .map(item => (
            <li key={item.title}>
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
