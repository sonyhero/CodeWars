/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/
let param = "RapPEr";
console.log(param[0].toUpperCase()+param.toLowerCase().slice(1,param.length))

function getDrinkByProfession(param){
    switch (param.toUpperCase()) {
        case "Jabroni".toUpperCase():
            return "Patron Tequila";
            break;
        case "School Counselor".toUpperCase():
            return "Anything with Alcohol";
            break;
        case "Programmer".toUpperCase():
            return "Hipster Craft Beer";
            break;
        case "Bike Gang Member".toUpperCase():
            return "Moonshine";
            break;
        case "Politician".toUpperCase():
            return "Your tax dollars";
            break;
        case "Rapper".toUpperCase():
            return "Cristal";
            break;
        default: return "Beer"
            break;
    }
   }
