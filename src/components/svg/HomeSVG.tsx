import type { SVGProps } from "../types/SVGProps"

const HomeSVG = ({ width = "33", height = "27", className }: SVGProps) => {
  return (
    <svg
      className={className || ""}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Home button</title>
      <path
        d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
        fill="#FC4747"
      />
    </svg>
  )
}

export default HomeSVG
