function comp(a, b) {
  const helper = (a, b) => {
    if (!a.length && !b.length) {
      return true
    } else {
      const [aHead, ...aRest] = a
      if (b.includes(aHead)) {
        const index = b.indexOf(aHead)
        const bRest = b.splice(0, index).concat(b.splice(index + 1))
        return helper(aRest, bRest)
      } else {
        return false
      }
    }
  }

  if (!a || !b || !a.length || !b.length || a.length != b.length) {
    return false
  } else {
    return helper(a, b)
  }
}

module.exports = comp
