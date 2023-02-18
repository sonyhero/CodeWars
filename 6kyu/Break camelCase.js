/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""            =>  ""

*/

function BreakCamelCase(str) {
 let regex = /[A-Z]/g;
 let find = str.match(regex);
 let arr = str.split('');

 for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < find.length; j++) {
         if(arr[i]==find[j]) {
            arr[i]=" "+find[j]
         }
    }
}
return arr.join('')
}


console.log(BreakCamelCase("caMelCasing"));
