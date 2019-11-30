function migratoryBirds(arr) {
  const birdDictionary = arr.reduce((acc, el) => {
    const value = el in acc ? acc[el] + 1 : 1
    acc[el] = value
    return acc
  }, {})
  return Object.entries(birdDictionary)
    .sort((a, b) => b[1] - a[1])
    .shift()
    .shift()
}
