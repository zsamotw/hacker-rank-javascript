function change(money, price) {
  const rest = money - price
  if (rest <= 0 || price <= 0) return []
  else return helper(rest, [5, 2, 1], [])
}

function helper(money, coins, change) {
  if (money === 0) return change
  else {
    const coin = coins[0]
    const num = ~~(money / coin)
    if (num > 0) {
      const rest = money - num * coin
      const nextChange = change.concat(Array(num).fill(coin))
      const nextCoins = coins.splice(1)
      return helper(rest, nextCoins, nextChange)
    } else {
      const nextCoins = coins.splice(1)
      return helper(money, nextCoins, change)
    }
  }
}