//Add all the numbers from 1 to 100.

/* let sum = 1;
for (let i = 2; i <= 100; i++) {
    sum += i
}
console.log(sum) */

//Applying Gauss's formula to sum numbers from 1 to n:
// S = n (n + 1) / 2

let sum1to100 = () => {
    return 100 * (100 + 1) / 2;
}

console.log(sum1to100());

//Gauss's formula for summing intervals that do not start at 1.
// Example: Add from 10 to 20
// S = (20 * (20 + 1) / 2) - (9 * (9 + 1) / 2)

let sum10to20 = () => {
    return (20 * (20 + 1) / 2) - (9 * (9 + 1) / 2);
}

console.log(sum10to20());