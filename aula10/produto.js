class produto{
    constructor(cor,tamanha){
        this.cor = cor;
        this.tamanho = tamanho;
    }
    display(){
        console.log(this.cor);
        console.log(this.tamanho);
    }

}
let cor = prompt("Digite a cor: ");
let tamanho = prompt("Digite o tamanho em cm: ");
let produto1 = new produto(cor, tamanho);
produto1.display();
let cor2 = prompt("Digite a cor do segundo produto: ");
let tamanho2 = prompt("Digite o tamanho em cm do segundo produto: ");
let produto2 = new produto(cor2, tamanho2);
produto2.display();