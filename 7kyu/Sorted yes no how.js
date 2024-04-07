// Complete the method which accepts an array of integers, and returns one of the following:
//
//   "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(arr) {
  let array = arr.join(' ')
  if (arr.sort((a,b) =>a - b).join(' ') === array) {
    return 'yes, ascending'
  }
  else if (arr.sort((a,b) =>b-a).join(' ') === array) {
    return 'yes, descending'
  }
  else return 'no'
}