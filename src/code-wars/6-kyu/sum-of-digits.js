function sumOfDigits(num) {
  const digits = num.toString().split('')
  if (digits.length === 1) {
    return +digits[0]
  } else {
    const sum = digits.reduce((result, digit) => +digit + result, 0)
    return sumOfDigits(sum)
  }
}

module.exports = sumOfDigits
