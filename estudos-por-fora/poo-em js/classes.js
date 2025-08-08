class Pessoa{
    #nome;
    #idade;
    #endereco;

    constructor(nome, idade, endereco){
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
    }

    toString(){
        return `Nome: ${this.nome} | Idade: ${this.idade} | Endereço: ${this.endereco.cidade} - ${this.endereco.estado}`;
    }
}


let sla = new Pessoa('Edoardo',21, {'cidade': 'Palmas', 'estado': 'Tocantins'})


console.log(sla.toString())
console.log(func(5,3))