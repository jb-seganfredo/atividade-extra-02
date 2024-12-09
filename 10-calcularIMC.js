// 10 - Calcule o IMC e determine a categoria

function calcularIMC(altura, peso) {
   let imc = peso / (altura * altura);

   if (imc < 18.5) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}. Categoria: Abaixo do peso`);
    } else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}. Categoria: Peso normal`);
    } else if (imc >= 25 && imc <= 29.9) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}. Categoria: Sobrepeso`);
    } else if (imc >= 30 && imc <= 34.9) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}. Categoria: Obesidade grau I`);
    } else if (imc >= 35 && imc <= 39.9) {
    console.log(`Seu IMC é: ${imc.toFixed(2)}. Categoria: Obesidade grau II`);
    } else {
    console.log(`Seu IMC é: ${imc.toFixed(2)}. Categoria: Obesidade grau III`);
    }
}

calcularIMC(1.75, 70);

calcularIMC(1.80, 120)