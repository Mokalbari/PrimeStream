const formatName = (str: string): string => {
  const words = str.split(" ")
  words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  return words.join(" ")
}

export default formatName
