/*
Task
Given a list of digits, 
return the smallest number that could be formed from these digits, 
using the digits only once (ignore duplicates).

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications
*/

function minValue(values){
    return +Array.from(new Set(values)).sort((a,b)=>a-b).join('')
  }

  console.log(minValue([5, 7, 5, 9, 7]))