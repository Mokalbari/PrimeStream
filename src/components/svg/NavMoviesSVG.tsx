import type { SVGProps } from "./SVGProps"

const NavMoviesSVG = ({ width = "20", height = "20", className }: SVGProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Go to movies menu</title>
      <path
        d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
        fill="#5A698F"
      />
    </svg>
  )
}

export default NavMoviesSVG
