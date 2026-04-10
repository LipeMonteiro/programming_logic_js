//Ask for three numbers and show the largest one

function verifyNumber(n1, n2, n3) {
    if(
        typeof n1 !== "number" || Number.isNaN(n1) || 
        typeof n2 !== "number" || Number.isNaN(n2) ||   
        typeof n3 !== "number" || Number.isNaN(n3)
    ) {
        throw new TypeError("Parameters must be valid numbers");
    }else if (n1 >= n2 && n1 >= n3) {
        return n1;
    }else if (n2 >= n1 && n2 >= n3) {
        return n2;
    }else {
        return n3;
    }
}

console.log(verifyNumber(5, 5, 5));