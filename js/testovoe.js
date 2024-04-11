const newFunc = (x, fullValue = false) => {
  try {
    const numberString = x.toString()
    const numberStringLength = numberString.length

    if (fullValue || numberStringLength < 7) {
      let parts = numberString.split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      return parts.join('.')
    }
    if (numberStringLength > 12) {
      return '999B+'
    }

    const getDotWithNumber = (numberValue) => (numberValue ? '.' : '') + numberValue
    const getNumber = (index) => numberString[index] === '0' ? '' : numberString[index]
    const sliceWithNumber = (suffix, index, numberValue = '') => numberString.slice(0, index) + getDotWithNumber(getNumber(index)) + numberValue + suffix

    const formattedResults = {
      12: sliceWithNumber('B', 3),
      11: sliceWithNumber('B', 2, getNumber(3)),
      10: sliceWithNumber('B', 1, getNumber(2)),
      9: sliceWithNumber('M', 3),
      8: sliceWithNumber('M', 2, getNumber(3)),
      7: sliceWithNumber('M', 1, getNumber(2)),
    }

    return formattedResults[numberStringLength]

  } catch (e) {
    const errorMessage = `[newFunc] error with ${e}`
    console.log(errorMessage)
    return errorMessage
  }
}


const numberWithSpaces = (x, fullValue) => {
  try {
    if (fullValue) {
      let parts = x.toString().split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      return parts.join('.')
    } else {
      const secondNumber = x.toString()[2] === '0' ? '' : x.toString()[2]
      const needDot = secondNumber ? '.' : ''
      const thirdNumber = x.toString()[3] === '0' ? '' : x.toString()[3]
      const needDot3 = thirdNumber ? '.' : ''
      if (x.toString().length > 12) {
        return '999B+'
      } else if (x.toString().length === 12) {
        return x.toString()[0] + x.toString()[1] + x.toString()[2] + needDot3 + thirdNumber + 'B'
      } else if (x.toString().length === 11) {
        if (thirdNumber) {
          return x.toString()[0] + x.toString()[1] + '.' + x.toString()[2] + x.toString()[3] + 'B'
        } else {
          return x.toString()[0] + x.toString()[1] + needDot + secondNumber + 'B'
        }
      } else if (x.toString().length === 10) {
        return x.toString()[0] + '.' + x.toString()[1] + secondNumber + 'B'
      } else if (x.toString().length === 9) {
        return x.toString()[0] + x.toString()[1] + x.toString()[2] + needDot3 + thirdNumber + 'M'
      } else if (x.toString().length === 8) {
        if (thirdNumber) {
          return x.toString()[0] + x.toString()[1] + '.' + x.toString()[2] + x.toString()[3] + 'M'
        } else {
          return x.toString()[0] + x.toString()[1] + needDot + secondNumber + 'M'
        }
      } else if (x.toString().length === 7) {
        return x.toString()[0] + '.' + x.toString()[1] + secondNumber + 'M'
      } else {
        let parts = x.toString().split('.')
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        return parts.join('.')
      }
    }
  } catch (e) {
    console.log(`[numberWithSpaces] error with ${e}`)
  }
};


(() => {
  const tests = [
    123, 10001, 153056, 5132.51321, -1, -5561321313, 99999, 12345678, 912321561321, 912301561321, 51231411.31313131, 0
  ]

  tests.forEach((number, index) => {
    const old = numberWithSpaces(number, false)
    const old1 = numberWithSpaces(number, true)
    const newN = newFunc(number, false)?.replace(/\xa0/g, ' ')?.replace(/\u202f/g, ' ')
    const newN1 = newFunc(number, true)?.replace(/\xa0/g, ' ')?.replace(/\u202f/g, ' ')
    const status = (old == newN && old1 == newN1)
    console.log(`#${index + 1}`, status ? 'OK' : 'FAILED', !status ? `${old} == ${newN} | ${old1} == ${newN1}` : '')
  })
})()


