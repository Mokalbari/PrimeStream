import SmallCard from "./SmallCard"

type Props = {
  title: string
}

const DisplaySelectionSection = ({ title = "Recommanded for you" }: Props) => {
  return (
    <section className="mx-4 mt-8 sm:mx-6 lg:mx-8">
      <h2 className="mb-6 text-2xl">{title}</h2>
      <div className="lg:gap grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </section>
  )
}

export default DisplaySelectionSection

//
