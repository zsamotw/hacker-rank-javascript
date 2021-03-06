function getMonySpent(keyboards, drives, b) {
  keyboards.sort()
  const result = keyboards.reduce(([lessThenBudget, driversInLoop], keyboard) => {
    const drivesFitCondition = driversInLoop.filter(driver => driver + keyboard <= b)
    const newLessThenBudget = drivesFitCondition.map(driver => driver + keyboard)
    return [[...lessThenBudget, ...newLessThenBudget], drivesFitCondition]
  }, [[], drives])
  const [ moneySpent, ] = result
  return moneySpent
}

module.exports = getMonySpent