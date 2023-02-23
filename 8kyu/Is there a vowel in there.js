/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/


function isVow(a){
    return a.map(x=>{
        if (/[aeiou]/.test(String.fromCodePoint(x))) {
            return String.fromCodePoint(x)
        } else return x;
    })

}

console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))