function range(start, count) {
  return Array.apply(0, Array(count)).map((element, index) => index + start)
}

function isFactor(arr, el) {
  return arr.every(a => a % el === 0)
}

function hasFactor(arr, el) {
  return arr.every(a => el % a === 0)
}

export function getTotalX(a, b) {
  a.sort()
  b.sort()
  const start = a[a.length - 1]
  const end = b[0]
  const count = end - start + 1

  let result = []
  for (let i of range(start, count)) {
    if (hasFactor(a, i) && isFactor(b, i)) {
      result.push(i)
    }
  }

  return result.length
}

module.exports = range