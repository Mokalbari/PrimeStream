interface TrendingSizes {
  small: string
  large: string
}

interface RegularSizes extends TrendingSizes {
  medium: string
}

interface Thumbnail {
  trending: TrendingSizes
  regular: RegularSizes
}

type Category = "Movie" | "TV Series"
type Rating = "PG" | "E" | "18+"

export type APIDataType = {
  title: string
  thumbnail: Thumbnail
  year: number
  category: Category
  rating: Rating
  isBookmarked: boolean
  isTrending: boolean
}
