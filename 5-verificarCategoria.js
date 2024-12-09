function verificarCategoria(idade) {
    if (idade >= 5 && idade <= 7) {
        console.log("Categoria: Infantil A.");
    } else if (idade >= 8 && idade <= 10) {
        console.log("Categoria: Infantil B.");
    } else if (idade >= 11 && idade <= 13) {
        console.log("Categoria: Juvenil A.");
    } else if (idade >= 14 && idade <= 17) {
        console.log("Categoria: Juvenil B.");
    } else if (idade >= 18) {
        console.log("Categoria: Adulto.");
    } else {
        console.log("Idade inválida para inscrição.");
    }
}

verificarCategoria(6);   
verificarCategoria(9);   
verificarCategoria(12);  
verificarCategoria(16);  
verificarCategoria(20);  
verificarCategoria(3);  