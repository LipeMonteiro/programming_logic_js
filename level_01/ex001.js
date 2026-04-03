//Ask for two numbers and show which one is larger.

function compareNum (n1, n2) {
    if (n2 === n1 ) return "Equal numbers!"
    return n1 > n2 ? n1 : n2
};

console.log(compareNum(11, 10));