function squareEveryDigit(num) {
  return +`${num}`
    .split('')
    .map(n => +n * +n)
    .join('')
}

module.exports = squareEveryDigit
