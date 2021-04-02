function queueTime(queue, tillsNumber) {
  function makeTills(tillsNumber) {
    return Array(tillsNumber).fill(0)
  }

  function handleCustomer(tills, customer) {
    const [head, ...rest] = tills.sort()
    return [...[head + customer], ...rest]
  }
  return Math.max(...queue.reduce(handleCustomer, makeTills(tillsNumber)))
}

module.exports = queueTime
