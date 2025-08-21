class carro{
constructor(combustivel,kilometros){
    this.combustivel = combustivel;
    this.kilometros = kilometros;
}
display(){
    console.log("Combustível: " + this.combustivel);
    console.log("Quilômetros: " + this.kilometros);
}
calcularAutonomia(){
    return this.kilometros / this.combustivel;
}
}
let combustivel = prompt("Digite a quantidade de combustível (em litros): ");
let quilometros = prompt("Digite a quantidade de quilômetros percorridos: ");
let carro1 = new carro(combustivel, quilometros);
let autonomia = carro1.calcularAutonomia();
console.log("A autonomia do carro é: " + autonomia + " km/l");