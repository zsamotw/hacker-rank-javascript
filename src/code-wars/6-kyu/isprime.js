function isPrime(num) {
  const range = (start, end) =>
    end < start ? [] : [...Array(end - start + 1)].map((_, i) => start + i)

  const helper = (n, dividers) => {
    if (dividers.length <= 0) return true
    else {
      const [divider, ...restDividers] = dividers
      return n % divider === 0
        ? false
        : helper(
            n,
            restDividers.filter(d => d % divider !== 0)
          )
    }
  }

  if (num <= 1) return false
  else {
    const half = ~~(num / 2)
    const dividers = range(2, half)
    return helper(num, dividers)
  }
}

module.exports = isPrime
