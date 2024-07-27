type Props = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-9 ${className || ""}`}
    >
      {children}
    </div>
  )
}

export default Container
