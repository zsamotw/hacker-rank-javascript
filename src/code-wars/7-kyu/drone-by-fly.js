function flyBy(lamps, drone) {
  if (!lamps || !drone) return ''
  else {
    const droneMoves = drone.length
    const lampsList = lamps.split('')
    return lampsList.map((l, i) => (i < droneMoves ? 'o' : 'x')).join('')
  }
}

module.exports = flyBy
