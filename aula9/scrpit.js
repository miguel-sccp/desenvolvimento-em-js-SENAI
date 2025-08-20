class pessoa{
    constructor(nome,ano_nascimento,endereco,curso,altura){ //auxiliador da classe
        this.nome = nome ;
        this.ano_nascimento = ano_nascimento ;
        this.endereco = endereco ;
        this.curso = curso ;
        this.altura = altura ;
        
    }

    display(){
        console.log(this.nome);
    }


calcular_idade(){
    let ano_atual = parseInt(prompt("Digite o ano atual:"));
    let ano_nascimento = parseInt(prompt("Digite seu ano de nascimento:"));
    let callculo = ano_atual - ano_nascimento;
    console.log("A idade de " + this.nome + " é: " + callculo);
}

calcular_imc(){
    let altura = parseFloat(prompt("digite sua altura"))
    let peso = parseFloat(prompt("digite sua peso"))
    let calculo=peso/(altura ** 2);
    console.log("O IMC de " + this.nome + " é: " + calculo);
}

}
//filho 1
outra_pessoa= new pessoa("João", 1990, "Rua A, 123", "python", 1.75);
//filho 2
outra_pessoa2 = new pessoa("Maria", 1995, "Rua B, 456", "JavaScript", 1.65);


outra_pessoa.display()
outra_pessoa2.display()
outra_pessoa.calcular_idade()
outra_pessoa2.calcular_idade()
outra_pessoa.calcular_imc()
outra_pessoa2.calcular_imc()