function birthday(s, d, m) {
  function helper(s, d, m, result) {
    if (s.length < m) {
      return result
    } else {
      const part = s.slice(0, m)
      const sum = part.reduce((acc, el) => acc + el, 0)
      s.shift()
      return sum === d ? helper(s, d, m, result + 1) : helper(s, d, m, result)
    }
  }

  return helper(s, d, m, 0)
}
