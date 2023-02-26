/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291

*/

function uniTotal (str) {
    return (str.length==0) ? 0 : str.split('').map(x=>x.codePointAt(0)).reduce((a,b)=>a+b)
    }


console.log(uniTotal("Mary Had A Little Lamb"));
