const livro = {
    titulo: "Senhor do Anéis",
    autor: "Tolkien",
    paginas: 532,
    genero: "Aventura",
    disponivelEmEstoque: true
}

console.log(livro.titulo);

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    ligado: false,
    acelerar: () => {
        if (this.ligado){
            console.log("Acelerando...");
        } else {
            console.log("Ligue o carro primeiro...")
        }
    }
}

