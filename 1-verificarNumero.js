// 1 - Verifique se um número é positivo, negativo ou zero

function verificarNumero(number) {
    if (number > 0) {
        console.log("O número é positivo.");
    } else if (number < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é igual a zero.");
    }
}

verificarNumero(20);
verificarNumero(-20);
verificarNumero(0);