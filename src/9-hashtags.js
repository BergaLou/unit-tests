export const hashtags = (text) => {
  const words = text.split(' ')

  return words.filter((word) => word.startsWith('#'))
}
