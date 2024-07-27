import type { SVGProps } from "./SVGProps"

const BookmarkEmptySVG = ({
  width = "12",
  height = "14",
  className,
}: SVGProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Not bookmarked yet</title>
      <path
        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
        stroke="#FFF"
        stroke-width="1.5"
        fill="none"
      />
    </svg>
  )
}

export default BookmarkEmptySVG
