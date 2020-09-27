const plusMinus = require('../../hacker-rank/warmup/plus-minus')
const minMaxSum = require('../../hacker-rank/warmup/min-max-sum')
const birthdayCakeCandles = require('../../hacker-rank/warmup/birth-cake-candles')
const timeConversion = require('../../hacker-rank/warmup/time-conversion')

test('Plus minus for only plus', () => {
  expect(plusMinus([1, 2, 3])).toEqual([3, 0, 0])
})

test('Plus minus for empty array', () => {
  expect(plusMinus([])).toEqual([0, 0, 0])
})

test('Plus minus for different values', () => {
  expect(plusMinus([1, -1, 3, 0, 0, -6, 0, 2])).toEqual([3, 2, 3])
})

test('Min max sum for array with different values', () => {
  expect(minMaxSum([3, 2, 1, 4, 5])).toEqual([10, 14])
})

test('Min max sum for zeros', () => {
  expect(minMaxSum([0, 0, 0])).toEqual([0, 0])
})

test('Min max sum for empty array', () => {
  expect(minMaxSum([])).toEqual([0, 0])
})

test('Candles on the cake', () => {
  expect(birthdayCakeCandles([1, 2, 3, 2, 3])).toEqual(2)
})

test('Time conversions for midnight', () => {
  const result = timeConversion('12:00:00AM')
  expect('00:00:00').toEqual(expect.stringMatching(result))
})

test('Time conversions for noon', () => {
  const result = timeConversion('12:00:00PM')
  expect('12:00:00').toEqual(expect.stringMatching(result))
})

test('Time conversions for 13PM', () => {
  const result = timeConversion('01:00:00PM')
  expect('13:00:00').toEqual(expect.stringMatching(result))
})

test('Time conversions for 13PM', () => {
  const result = timeConversion('11:00:00PM')
  expect('23:00:00').toEqual(expect.stringMatching(result))
})
