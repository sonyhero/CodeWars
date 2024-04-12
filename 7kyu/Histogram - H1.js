// Kata in this series
//
// Histogram - H1
// Histogram - H2
// Histogram - V1
// Histogram - V2
// Background
// A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.
//
//   Example:
//
// 6|##### 5
// 5|
// 4|# 1
// 3|########## 10
// 2|### 3
// 1|####### 7

function histogram(arr) {
  let result = ''
  for (let i = arr.length; i > 0; i--) {
    result += `${i}|${'#'.repeat(arr[i - 1])}${!!arr[i - 1] ? ' ' + arr[i - 1] : ''}\n`
  }
  return result
}