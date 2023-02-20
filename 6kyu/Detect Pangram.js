/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.
*/

/*
function Pangram(string){
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
*/

console.log(Pangram("The quick brown fox jumps over the lazy dog"));

function isPangram(string) {
  let alp = "abcdefghijklmnopqrstuvwxyz".split("");
  let str = string
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");
  let panagram = true;
  for (let i = 0; i < alp.length; i++) {
    if (str.includes(alp[i])) {
      panagram = true;
    } else {
      panagram = false;
      break;
    }
  }
  return panagram;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// best practices

function Pangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}
