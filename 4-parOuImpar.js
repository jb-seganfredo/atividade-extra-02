// 4 - Verifique se um número é par ou ímpar

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else if (numero % 2 !== 0) {
        console.log("O número é ímpar.");
    } else {
        console.log("Entrada inválida.");
    }
}

parOuImpar(0); 
parOuImpar(7); 
parOuImpar(220);