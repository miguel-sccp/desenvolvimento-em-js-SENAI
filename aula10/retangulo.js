
class retangulo{
    calculararea(largura, altura){
        return largura * altura;
    }
}
let largura = prompt("Digite a largura: ");
let altura = prompt("Digite a altura: ");
let retangulo1 = new retangulo();
let area = retangulo1.calculararea(largura, altura);
console.log("A área do retângulo é: " + area);