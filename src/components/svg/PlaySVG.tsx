import type { SVGProps } from "../types/SVGProps"

const PlaySVG = ({ width = "30", height = "30", className }: SVGProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Play</title>
      <path
        d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
        fill="#FFF"
      />
    </svg>
  )
}

export default PlaySVG
