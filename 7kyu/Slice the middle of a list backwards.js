// Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

function reverseMiddle(array) {
  let startIndex
  let endIndex
  if (!!(array.length % 2)) {
    startIndex = (array.length -3 )/2
    endIndex = startIndex + 3

  } else {
    startIndex = array.length/2 -1
    endIndex = startIndex + 2
  }
  return array.slice(startIndex, endIndex).reverse()
}
