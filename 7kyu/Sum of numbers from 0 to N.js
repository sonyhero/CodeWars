/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
*/

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let result = []
    let sum = 0
    if(count<0) return `${count}<0`;
    if(count===0) return `${count}=0`;
    if(count>0){
      for ( let i = 0; i <= count; i++) {
        result.push(i)
        sum+=i
      } return `${result.join('+')} = ${sum}`
    } 
  };

  return SequenceSum;

})();

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));
