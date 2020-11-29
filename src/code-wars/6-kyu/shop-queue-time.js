function queueTime(queue, tills) {
  function makeTills(tills) {
    const keys = [...Array(tills).keys()]
    return keys.reduce((result, key) => {
      return { ...result, [key]: [] }
    }, {})
  }

  function handle(tills, customer) {
    const [key] = Object.entries(tills).reduce(
      ([minKey, minValue], [key, till]) => {
        const value = till.reduce((acc, el) => acc + el, 0)
        if (value <= minValue) {
          return [key, value]
        } else {
          return [minKey, minValue]
        }
      }
    )
    tills[key] = [...tills[key], ...[customer]]
    return tills
  }

  return Math.max(
    ...Object.values(queue.reduce(handle, makeTills(tills))).map(arr =>
      arr.reduce((acc, el) => el + acc, 0)
    )
  )
}

module.exports = queueTime
