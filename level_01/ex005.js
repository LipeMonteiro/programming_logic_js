//Calcule o IMC de uma pessoa e imprima o resultado. 
// O IMC é calculado dividindo o peso da pessoa (em kg) pela altura ao quadrado (em metros).
// IMC = peso / (altura * altura)

function calcImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

console.log(calcImc(68, 1.87));
