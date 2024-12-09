// 6 - Verifique o dia da semana

function verificarDiaSemana(dia) {
    switch (dia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        case 4:
            console.log("Quarta-feira");
            break;
        case 5:
            console.log("Quinta-feira");
            break;
        case 6:
            console.log("Sexta-feira");
            break;
        case 7:
            console.log("Sábado");
            break;
        default:
            console.log("Número inválido! Por favor, digite um número entre 1 e 7.");
            break;
    }
}

verificarDiaSemana(1); 
verificarDiaSemana(4); 
verificarDiaSemana(6); 
verificarDiaSemana(8);
