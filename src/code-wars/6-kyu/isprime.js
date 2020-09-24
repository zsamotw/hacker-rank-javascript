function isPrime(num) {
  const helper = (n, divider) => {
    if (divider >= ~~(n / 2)) return false
    else {
      return n % divider === 0 ? true : helper(n, divider + 1)
    }
  }

  if (num <= 2) return false
  else return helper(num, 3)
}

module.exports = isPrime
