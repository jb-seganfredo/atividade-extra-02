// 8 - Verifique a estação do ano

function verificarEstacao(estacao) {
    switch (estacao) {
        case 1:
            console.log("Primavera");
            break;
        case 2:
            console.log("Verão");
            break;
        case 3:
            console.log("Outono");
            break;
        case 4:
            console.log("Inverno");
            break;
        default:
            console.log("Número inválido. Digite um número de 1 a 4.");
    }
}

verificarEstacao(2); 