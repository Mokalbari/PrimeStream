import type { SVGProps } from "../types/SVGProps"

const NavHomeSVG = ({
  width = "20",
  height = "20",
  className,
  // fill = "#5A698F",
}: SVGProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={`cursor-pointer transition-colors hover:text-red ${className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Go to home menu</title>
      <path
        d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default NavHomeSVG
