// 7 - Calcule o valor de uma expressão matemática simples

function calcularValor(numero1, operador, numero2) {
    let resultado;
    
    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                console.log("Erro: Divisão por zero não permitida.");
                return; 
            }
            break;
        default:
            console.log("Operador inválido.");
            return; 
    }
    
    console.log(`Resultado: ${resultado}`);
}

calcularValor(10, '+', 5); 
calcularValor(10, '-', 3); 
calcularValor(10, '*', 4);  
calcularValor(10, '/', 2);  
calcularValor(10, '/', 0);  
calcularValor(10, '^', 2);  