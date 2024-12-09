// 3 - Calcule a média de três números e determine o conceito

function calcularMedia(nota1, nota2, nota3) {

    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 9) {
        console.log("Você recebeu a conceito A.");
    } else if (media >= 7) {
        console.log("Você recebeu a conceito B.");
    } else if (media >= 6) {
        console.log("Você recebeu a conceito C.");
    } else if (media >= 4) {
        console.log("Você recebeu a conceito D.");
    } else if (media >= 2) {
        console.log("Você recebeu a conceito E.");
    } else {
        console.log("Você recebeu a conceito F.");
    }
}

calcularMedia(3, 5, 4);
calcularMedia(9, 10, 10);