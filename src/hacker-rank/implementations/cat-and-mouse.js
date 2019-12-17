function catAndMouse(x, y, z) {
  const catADistance = Math.abs(z - x)
  const catBDistance = Math.abs(z - y)
  return catADistance === catBDistance ? 'Mouse C' : catADistance > catBDistance ? 'Cat B' : 'Cat A'
}

module.exports = catAndMouse