import SmallCard from "./SmallCard"
import type { APIDataType } from "./types/APIDataType"

type Props = {
  title: string

  data: APIDataType[] | null
}
const DisplaySelectionSection = ({ data, title }: Props) => {
  return (
    <section className="mx-4 mt-8 sm:mx-6 lg:mx-8">
      <h2 className="mb-6 text-2xl">{title}</h2>
      <ul className="lg:gap grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {data?.map(item => (
          <li key={item.title}>
            <SmallCard
              title={item.title}
              thumbnailSmall={item.thumbnail.regular.small}
              thumbnailMedium={item.thumbnail.regular.medium}
              thumbnailLarge={item.thumbnail.regular.large}
              year={item.year}
              rating={item.rating}
              category={item.category}
            />{" "}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DisplaySelectionSection

//
