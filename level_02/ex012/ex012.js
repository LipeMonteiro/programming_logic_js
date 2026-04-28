//Show only the even numbers from 1 to 50

/* for(let i = 1; i <= 50; i++){
    if(i % 2 == 0) console.log(i)
} */

//Improved version

let even1from50 = () => {
    let result = [];
    for(let i = 1; i <= 50; i++){
        result.push(i);
    }
    return result
}

console.log(even1from50());