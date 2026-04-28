//Ask for a number and show him his multiplication tables.

function multiTable(x){
    let total = 0;
    for(let i = 1; i <= 10; i++){
        total = x * i;
        console.log(`${x} x ${i} = ${total}`);
    };
}

multiTable(9);