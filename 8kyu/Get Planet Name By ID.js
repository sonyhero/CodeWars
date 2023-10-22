/*
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"
*/

function getPlanetName(id){
    let name;
    switch(id){
        case 1:
            name = 'Mercury'
            return name
        case 2:
            name = 'Venus'
            return name
        case 3:
            name = 'Earth'
            return name
        case 4:
            name = 'Mars'
            return name
        case 5:
            name = 'Jupiter'
            return name
        case 6:
            name = 'Saturn'
            return name
        case 7:
            name = 'Uranus'
            return name
        case 8:
            name = 'Neptune'
            return name
    }
}

console.log(getPlanetName(3))