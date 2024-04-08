function arr2bin(arr){
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result += arr[i]
    }
  }
  return result.toString(2)
}