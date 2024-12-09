// 9 - Verifique a faixa etária de uma pessoa

function verificarFaixaEtaria(idade) {
    let faixa;

    if (idade >= 0 && idade <= 12) {
        faixa = 'Criança';
    } else if (idade >= 13 && idade <= 17) {
        faixa = 'Adolescente';
    } else if (idade >= 18 && idade <= 59) {
        faixa = 'Adulto';
    } else if (idade >= 60) {
        faixa = 'Idoso';
    } else {
        console.log("Idade inválida.");
        return;
    }

    switch (faixa) {
        case 'Criança':
            console.log("Faixa etária: Criança.");
            break;
        case 'Adolescente':
            console.log("Faixa etária: Adolescente.");
            break;
        case 'Adulto':
            console.log("Faixa etária: Adulto.");
            break;
        case 'Idoso':
            console.log("Faixa etária: Idoso.");
            break;
    }
}

verificarFaixaEtaria(10);  
verificarFaixaEtaria(16);  
verificarFaixaEtaria(30);  
verificarFaixaEtaria(65);  
