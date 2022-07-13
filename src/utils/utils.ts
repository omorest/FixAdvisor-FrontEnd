export const uuid = () => {
  const part1 = Date.now().toString(36)
  const part2 = Math.random().toString(36).substring(2)
  return `${part1}${part2}`
}

export const sortByString = (a: string, b: string) => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

type ObjectData = {[key: string]: any}

export const filterDataObjectWithInfo = (data: ObjectData) => {
  const keys = Object.keys(data)
  const dataFiltered = keys
    .filter((key: string) => data[key].length > 0)
    .reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: data[key]
      })
    }, {})

  return dataFiltered
}
