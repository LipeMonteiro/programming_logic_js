//Reverse a number (exemple: 123 → 321).

function reverseNumber(number){
   return String(number).split("").reverse().join("");
}

console.log(reverseNumber("123"));
