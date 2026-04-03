/* Peça a idade de uma pessoa e informe se ela é:

- Criança (0–12)
- Adolescente (13–17)
- Adulto (18–59)
- Idoso (60+) */

function calcAge (age) {
    if (age <= 12) return "Criança";
    if (age <= 17) return "Adolescente";
    if (age <= 59) return "Adulto";
    return "Idoso";
}

console.log(calcAge(60));