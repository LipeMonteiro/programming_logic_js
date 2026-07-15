//Ask for a number and tell him if he is prime

function isPrime(number){
    if(number <= 1){
        return "It is not prime"
    }

    for (let i = 2; i < number; i++){
        if(number % i === 0){
            return "It is not prime"
        }
    }

    return "It is prime"
}

console.log(isPrime(4));