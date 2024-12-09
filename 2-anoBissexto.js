// 2 - Verifique se um ano é bissexto

function anoBissexto(ano) {
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        console.log("O ano é bissexto.");
    } else {
        console.log("O ano não é bissexto");
    }
}
 

anoBissexto(2021);

// Exercício da minha cabeça: Percorrer uma lista de anos pra checar quais são bissextos.

// listagem = [2021, 2024, 2023, 1994];

// function selecionarBissextos(lista) {
//     for (i = 0; i < listagem.length; i++) {
//         let ano = lista[i];
//         if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
//             console.log(`${ano} é bissexto.`);
//         } else {
//             console.log(`${ano} não é bissexto.`);
//         }
//     }
// }

// selecionarBissextos(listagem);