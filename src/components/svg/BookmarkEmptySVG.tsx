import type { SVGProps } from "./SVGProps"

type clickableSVGProps = SVGProps & {
  onClick: () => void
}

const BookmarkEmptySVG = ({
  width = "12",
  height = "14",
  className,
  onClick,
}: clickableSVGProps) => {
  return (
    <svg
      onClick={onClick}
      width={width}
      height={height}
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Not bookmarked yet</title>
      <path
        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
        stroke="#FFF"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

export default BookmarkEmptySVG
