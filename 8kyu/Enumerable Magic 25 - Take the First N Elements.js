/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/

function take(arr, n) {
  let el = [];
  if (n > arr.length) n = arr.length;
  for (let i = 0; i < n; i++) {
    el.push(arr[i]);
  }
  return arr.length == 0 ? [] : el;
}

//or

function take(arr, n) {
  return arr.slice(0, n);
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3));
