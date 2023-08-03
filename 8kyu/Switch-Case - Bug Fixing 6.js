// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

function evalObject(value){
    const {a,b, operation} = value

    let result = 0;
    switch(operation){
        case'+': result = a + b;
        break
        case'-': result = a - b;
        break
        case'/': result = a / b;
        break
        case'*': result = a * b;
        break
        case'%': result = a % b;
        break
        case'^': result = Math.pow(a, b);
            break
    }
    return result;
}