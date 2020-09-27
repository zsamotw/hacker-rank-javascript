function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const filteredApples = apples.filter(ap => ap + a >= s && ap + a <= t).length
  const filteredOranges = oranges.filter(or => or + b <= t && or + b >= s).length
  return [filteredApples, filteredOranges]
}

module.exports = countApplesAndOranges