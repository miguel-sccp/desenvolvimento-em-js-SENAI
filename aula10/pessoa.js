class Pessoa {
    constructor(nome, idade, endereco, formacao) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.formacao = formacao;
    }

    display() {
        console.log(this.nome);
        console.log(this.idade);
        console.log(this.endereco);
        console.log(this.formacao);
    }
}

let nome = prompt("Digite o nome: ");
let idade = prompt("Digite a idade: ");
let endereco = prompt("Digite o endereço: ");
let formacao = prompt("Digite a formação: ");

let pessoa1 = new Pessoa(nome, idade, endereco, formacao);
pessoa1.display();