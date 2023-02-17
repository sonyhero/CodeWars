/*
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes.
[1, 2, 3]-->6
*/

function adjacentElementsProduct(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[array.length - 1]) {
      arr.push(array[i] * array[i + 1]);
    }
  } return Math.max(...arr)
}

console.log(adjacentElementsProduct([1, 2, 3]));
