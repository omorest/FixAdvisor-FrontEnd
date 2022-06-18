export const uuid = () => {
  const part1 = Date.now().toString(36)
  const part2 = Math.random().toString(36).substring(2)
  return `${part1}${part2}`
}
