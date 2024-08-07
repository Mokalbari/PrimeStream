import { motion } from "framer-motion"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const pageVariants = {
  initial: { opacity: 0, y: 100, scale: 0.85 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -100, scale: 0.85 },
}

const pageTransition = {
  duration: 0.3,
}

const AnimatedPage = ({ children }: Props) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage
