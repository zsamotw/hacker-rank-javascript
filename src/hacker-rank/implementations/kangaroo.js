function kangaroo(x1, v1, x2, v2) {
  const dist = x2 - x1
  if (v2 >= v1) {
    return false
  } else if (v1 > dist + v2) {
    return false
  } else {
    return dist % (v1 - v2) === 0
  }
}

module.exports = kangaroo