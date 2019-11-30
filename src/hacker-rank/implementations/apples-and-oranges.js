function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const apples = apples.filter(ap => ap + a >= s && ap + a <= t).length
  const oranges = oranges.filter(or => or + b <= t && or + b >= s).length
  return [apples, oranges]
}
