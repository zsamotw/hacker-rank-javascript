const helper = (acc, el) => {
  let [plus, minus, zero] = acc
  if (el === 0) {
    zero = zero + 1
  } else if (el < 0) {
    minus = minus + 1
  } else {
    plus = plus + 1
  }
  return [plus, minus, zero]
}

const plusMinus = arr => {
  return arr.reduce((acc, el) => helper(acc, el), [0, 0, 0])
}

module.exports = plusMinus
