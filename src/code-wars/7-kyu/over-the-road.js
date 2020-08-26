function overTheRoad(address, n) {
  if (!address || !n) return undefined
  else {
    return n * 2 - address + 1
  }
}

module.exports = overTheRoad
