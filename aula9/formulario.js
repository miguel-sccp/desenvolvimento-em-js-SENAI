export class formulario {
    constructor(nome, idade, email, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.endereco = endereco;
    }
    display() {
        console.log("Nome: " + this.nome);
        console.log("Idade: " + this.idade);
        console.log("Email: " + this.email);
        console.log("Endereço: " + this.endereco);
    }

    done() {
        if (this.nome && this.idade && this.email && this.endereco) {
            console.log("Formulário enviado com sucesso!");
        } else {
            console.log("Preencha todos os campos!");
        }
    }
}