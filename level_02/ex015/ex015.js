function factorial(x) {
    let total = 1
    for(let i = x; i > 1; i--){
        total *= i
    }
    return total
}

console.log(factorial(4));