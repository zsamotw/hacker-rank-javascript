function splitByValue(k, elements) {
  return [...elements.filter(el => el < k), ...elements.filter(el => el >= k)]
}

module.exports = splitByValue
