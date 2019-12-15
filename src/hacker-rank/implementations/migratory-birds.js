function migratoryBirds(arr) {
  const birdDictionary = arr.reduce((acc, el) => {
    const value = el in acc ? acc[el] + 1 : 1
    acc[el] = value
    return acc
  }, {})
  const birdsCountIndex = 1
  return Object.entries(birdDictionary)
    .sort((a, b) => b[birdsCountIndex] - a[birdsCountIndex])
    .shift()
    .shift()
}

module.exports = migratoryBirds