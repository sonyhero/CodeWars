/*


If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
*/
console.log(
  "The sunset sets at twelve o' clock."
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map((x) => x.codePointAt(0) - 96)
    .join(" ")
);

function wordsToMarks(string) {
  return string
    .toLowerCase()
    .split("")
    .map(x => x.codePointAt(0) - 96).reduce((a,b)=>a+b)
}

console.log(wordsToMarks('friendship'))