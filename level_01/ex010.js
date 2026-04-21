/* Peça um ano e informe se é bissexto.
    - O que define um ano ser bissexto: 
        1 - É divisível por 4
        2 - Mas não é divisível por 100
        3 - Ou divisível por 400 */

let anoBissexto = ano => {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return "Bissexto"
    } 
    return "Não é bissexto"
}

console.log(anoBissexto(2023));