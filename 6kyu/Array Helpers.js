/*
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!
*/

const numbers = [1, 2, 3, 4, 5]
Array.prototype.square = function () {
    let numbers = [...this]
    return numbers.map(el => el ** 2)
}

Array.prototype.cube = function () {
    let numbers = [...this]
    return numbers.map(el => el ** 3)
}

Array.prototype.average = function () {
    let numbers = [...this]
    return (numbers.length > 0) ? numbers.reduce((a, b) => a + b) / numbers.length : NaN
}

Array.prototype.sum = function () {
    let numbers = [...this]
    return (numbers.length > 0) ? numbers.reduce((a, b) => a + b) : NaN
}

Array.prototype.even = function () {
    let numbers = [...this]
    return numbers.filter(el => el % 2 === 0)
}

Array.prototype.odd = function () {
    let numbers = [...this]
    return numbers.filter(el => el % 2)
}


console.log(numbers.square())
console.log(numbers.cube())
console.log(numbers.average())
console.log(numbers.sum())
console.log(numbers.even())
console.log(numbers.odd())