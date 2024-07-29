import LargeCard from "./LargeCard"

type Props = {
  title: string
}

const DisplayHorizontalSection = ({ title }: Props) => {
  return (
    <section className="mx4 sm: mx-6 lg:mx-8">
      <h2 className="mb-4 mt-6 text-2xl">{title}</h2>
      <div className="flex gap-4 overflow-hidden">
        <LargeCard />
        <LargeCard />
      </div>
    </section>
  )
}

export default DisplayHorizontalSection
