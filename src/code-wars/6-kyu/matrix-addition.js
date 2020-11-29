function matrixAddition(matrix1, matrix2) {
  function arrayAddition(arr1, arr2) {
    return arr1.map((a1, index) => a1 + arr2[index])
  }
  return matrix1.map((arr, index) => arrayAddition(arr, matrix2[index]))
}

module.exports = matrixAddition
