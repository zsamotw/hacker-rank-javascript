function splitByValue(k, elements) {
  return elements.filter(el => el < k).concat(elements.filter(el => el >= k))
}

module.exports = splitByValue
