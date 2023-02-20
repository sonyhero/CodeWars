/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
    console.log(
        string
        .toLowerCase()
        .replace(/[^a-z]/g, "")
        .split('')
        .map(x=>x.codePointAt(0))
        .sort((a,b)=>a-b)
        .map(x=>String.fromCodePoint(x))
        )
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog"))

function Pangram(string) {
 let alphabet = "abcdefghijklmnopqrstuvwxyz";
 alphabet.split('');
 let str = string.toLowerCase().replace(/[^a-z]/g, "").split('');
 for (let i = 0; i < alphabet.length; i++) {
    // to be continued
 }
}

console.log(Pangram("The quick brown fox jumps over the lazy dog"))