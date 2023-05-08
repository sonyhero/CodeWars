/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters
*/

function kebabize(str) {
    let str1 = str.trim().replace(/[0-9]/g, '')
    return (str1.length < 2)
        ? str1.toLowerCase()
        : str1.slice(0, 1).toLowerCase() + str1.slice(1, str1.length).split('').map(el => el === el.toUpperCase() ? `-${el.toLowerCase()}` : el).join('')
}

console.log(kebabize('oF'))