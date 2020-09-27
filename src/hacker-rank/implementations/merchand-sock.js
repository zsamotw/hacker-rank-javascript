function sockMerchant(n, ar) {
  const grouped = ar.reduce((acc, el) => {
    const value = el in acc ? acc[el] + 1 : 1
    acc[el] = value
    return acc
  }, {})
  return Object.entries(grouped).reduce(
    (acc, [, value]) => acc + ~~(value / 2),
    0
  )
}

module.exports = sockMerchant