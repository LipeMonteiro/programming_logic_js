//Ask for a number and tell me if it is even or odd
function verifyEvenOrOdd (number) {
    //Check if the number is a number
    if (typeof number !== "number" || Number.isNaN(number)) {
        throw new TypeError("Parameter must be a valid number");
    }

    //Returns wether the number is even or odd
    return number % 2 === 0 ? "Even" : "Odd"
}

console.log(`The number is ${verifyEvenOrOdd()}`);