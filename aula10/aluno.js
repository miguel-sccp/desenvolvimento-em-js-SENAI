class Aluno {
    constructor(nome, serie, nota) {
        this.nome = nome;
        this.serie = serie;
        this.nota = nota;
    }

    display() {
        console.log("Nome: " + this.nome);
        console.log("Série: " + this.serie);
        console.log("Nota: " + this.nota);
    }

    calcularMedia(nota1, nota2) {
        return (nota1 + nota2) / 2;
    }
}


let nome = prompt("Digite o nome do aluno: ");
let serie = prompt("Digite a série do aluno: ");
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));

let aluno1 = new Aluno(nome, serie, nota1);
aluno1.display();
let media = aluno1.calcularMedia(nota1, nota2);
console.log("A média do aluno é: " + media);


let aluno2 = new Aluno("Maria", "8ª Série", 7.5);
aluno2.display();
let media2 = aluno2.calcularMedia(8.0, 7.0);
console.log("A média do segundo aluno é: " + media2);
