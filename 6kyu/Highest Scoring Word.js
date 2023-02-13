/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

high('man i need a taxi up to ubud') --> 'taxi'
*/

function high(x) {
  let arr = x.split(" ");
  console.log(arr);
  let arr1 = arr.map(x=>x.split(''))
  console.log(arr1)
  let arr2 = arr1.map(x=>x.map(x=>x.charCodeAt(0)).reduce((a,b)=>a+b))
  console.log(arr2)
  console.log(
    arr.map(x=>x.split('').map(x=>x.charCodeAt(0)).reduce((a,b)=>a+b))
    )

}

console.log(high("man i need a taxi up to ubud"));
