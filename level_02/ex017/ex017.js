//Count how many even numbers there are between 1 and 200.

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