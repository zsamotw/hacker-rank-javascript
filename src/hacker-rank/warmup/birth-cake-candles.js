const birthdayCakeCandles = arr => {
  arr.sort().reverse()
  const head = arr[0]
  return arr.filter(x => x === head).length
}

module.exports = birthdayCakeCandles