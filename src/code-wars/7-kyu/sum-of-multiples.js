function sumOfMultiplesOf3Or5(num) {
  if (num <= 0) {
    return 0
  } else {
    const nums = [...Array(num).keys(), num]
    return nums.reduce((result, num) => {
      if (num % 3 === 0 || num % 5 === 0) return result + num
      else return result
    })
  }
}

module.exports = sumOfMultiplesOf3Or5
