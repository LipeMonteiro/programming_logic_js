//Ask for your salary and calculate a raise:
//Up to 1500 -> +20%
//Above 1500 -> 10%

function calculateRaise (salary) {
    let rate = salary <= 1500 ? 0.2 : 0.1
    let raise = salary * rate
    let total = salary + raise

    return {salary, raise, total}
}

console.log(calculateRaise(1500));
