//Ask for five number and show the average

/* const average = (n1, n2, n3, n4, n5) => {
    return (n1 + n2 + n3 + n4 + n5) / 5
}

console.log(average(5,5,5,5,5)); */

//Improved version using for
let numbers = [];

for(let i = 0; i < 5; i++){
    numbers.push(Number(prompt("Enter a number:")))
}

const average = (...nums) => {
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
}

console.log("Average:", average(...numbers))