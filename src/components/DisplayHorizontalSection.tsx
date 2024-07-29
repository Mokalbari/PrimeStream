import LargeCard from "./LargeCard"
import type { APIDataType } from "./types/APIDataType"

type Props = {
  title: string
  loading: boolean
  data: APIDataType[] | null
}

const DisplayHorizontalSection = ({ data, loading, title }: Props) => {
  return (
    <section className="mx4 sm: mx-6 lg:mx-8">
      <h2 className="mb-4 mt-6 text-2xl">{title}</h2>
      <ul className="flex gap-4 overflow-hidden">
        {loading ? (
          <p>loading...</p>
        ) : (
          data
            ?.filter(item => item.isTrending)
            .map(item => (
              <li key={item.title}>
                <LargeCard />
              </li>
            ))
        )}
      </ul>
    </section>
  )
}

export default DisplayHorizontalSection
