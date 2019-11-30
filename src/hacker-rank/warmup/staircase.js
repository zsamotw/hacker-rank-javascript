const helper = (n, max) => {
  if (n <= max) {
    for (let x of Array(n - 1)) {
      process.stdout.write('#')
    }
    process.stdout.write('#\n')
    helper(n + 1, max)
  } else {
    console.log('')
  }
}

const stairCase = n => helper(1, n)

module.exports = stairCase
