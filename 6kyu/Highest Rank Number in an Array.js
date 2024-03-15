// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//
//   Note: no empty arrays will be given.
//
//   Examples
//   [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//   [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//   [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  const counts = {}

  for (let key of arr) {
    if (key in counts) {
      counts[key] +=1
    } else {
      counts[key] = 1
    }
  }

  let maxCount = 0
  let maxCountKey

  for (const countsKey in counts) {
    if (maxCount <= counts[countsKey])  {
      maxCount = counts[countsKey]
      maxCountKey = +countsKey
    }
  }

  return maxCountKey
}

highestRank([12,10,8,12,7,6,4,10,10,12])