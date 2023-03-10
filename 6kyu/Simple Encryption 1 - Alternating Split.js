/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {
  let arr = text.split("");
  let newArr = [];
  let newArr2 = [];

  
  for (let i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
    newArr2.push(arr[i - 1]);
  }
  arr = newArr.concat(newArr2);
  return arr;
}

function decrypt(encryptedText, n) {}

console.log(encrypt("012345", 3));
console.log(decrypt(encryptedText, n));
