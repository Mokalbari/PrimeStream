import { motion } from "framer-motion"
import type { SVGProps } from "../types/SVGProps"

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
    <motion.svg
      onClick={onClick}
      width={width}
      height={height}
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ stroke: "#FF0000", strokeWidth: 2, scale: 1.1 }}
      initial={{ stroke: "#FFF", strokeWidth: 1.5 }}
      transition={{ duration: 0.08 }}
    >
      <title>Add to bookmark</title>
      <motion.path
        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
        fill="none"
      />
    </motion.svg>
  )
}

export default BookmarkEmptySVG
