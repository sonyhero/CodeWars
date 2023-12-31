// You will get an array of numbers.
//
//     Every preceding number is smaller than the one following it.
//
//     Some numbers will be missing, for instance:
//
// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:
//
//     [-1,0,2,3,4]

const findMissingNumbers = (array) => {
    const newArr = []
    const resultArray = []
    for (let i = array[0]; i <= array[array.length - 1] ; i++) {
        newArr.push(i)
    }

    newArr.forEach(el => {
        if (!array.includes(el)) {
            resultArray.push(el)
        }
    })

  return resultArray
}

findMissingNumbers([-3,-2,1,5])