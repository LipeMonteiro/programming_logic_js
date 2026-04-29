//Count how many even numbers there are between 1 and 200.

//Inefficient way, as there is a mathematical formula

let evenNumbers = [];

let evenBetween1and200 = () => {
    for(let i = 1; i <= 200; i++){
        if(i % 2 == 0){
            evenNumbers.push(i);
        };
    };
    return evenNumbers.length;
} 

console.log(evenBetween1and200());

// Correct resolution using mathematical formula

function returnEvens(x, y) {
    return Math.floor((y / 2) - ((x - 1) / 2));
}

console.log(returnEvens(37, 843));

//Logical Version (no ready-made formula)

function countEvens(x, y){
    let firstEven = x % 2 === 0 ? x : x + 1
    let lastEven = y % 2 === 0 ? y : y - 1

    return ((lastEven - firstEven) / 2) + 1
}

console.log(countEvens(37, 843))