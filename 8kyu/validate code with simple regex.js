function validateCode (code) {
    return /^[123]/.test(code)
}

console.log( validateCode(321))