function pageCount(n, p) {
  const doublePagesFromBeginning = p % 2 === 0 ? p / 2 : (p - 1) / 2
  const doublePagesFromEnd = n % 2 === 0 ? (n - p) / 2 : (n - p - 1) / 2
  return doublePagesFromBeginning <= doublePagesFromEnd
    ? doublePagesFromBeginning
    : doublePagesFromEnd
}

module.exports = pageCount