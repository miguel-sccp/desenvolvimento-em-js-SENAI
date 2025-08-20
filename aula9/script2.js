export class calculadora {
    constructor(n1, n2) {
        this.n_1 = n1;
        this.n_2 = n2;
    }

    somar() {
        console.log("A soma é: " + (this.n_1 + this.n_2));
    }
    subtrair() {
        console.log("A subtração é: " + (this.n_1 - this.n_2));
    }
    multiplicar() {
        console.log("A multiplicação é: " + (this.n_1 * this.n_2));
    }
    dividir() {
        console.log("A divisão é: " + (this.n_1 / this.n_2));
    }
    potencia() {
        console.log("A potência é: " + (this.n_1 ** this.n_2));
    }
}
let c = new calculadora(5, 2);
c.somar();
c.subtrair();   
c.multiplicar();
c.dividir();
c.potencia();