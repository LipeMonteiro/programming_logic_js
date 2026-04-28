//Ask for five number and show the average

/* const average = (n1, n2, n3, n4, n5) => {
    return (n1 + n2 + n3 + n4 + n5) / 5
}

console.log(average(5,5,5,5,5)); */

//Improved version using for

//Creates an empty array
const numbers = [];

//Creates a loop to insert 5 numbers into the array, using the push method
for (let i = 0; i < 5; i++){
    numbers.push(Number(prompt("Enter a number:")));
}

let average = (...nums) => { //...nums Means the received parameters will be grouped into an arrray called nums
    let sum = 0; //Variable to accumulate to sums
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]; //nums[i] Represents each item in the array
    };
    return sum / nums.length  //Average: Sum value divided by the number of array elements
}

console.log(`Average: ${average(...numbers)}`) //Executes the function passing the array as a parameter
