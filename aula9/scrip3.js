import { calculadora } from "./script2.js";
import { formulario } from "./formulario.js";

function calcular() {
    let d = new formulario('a', 25, "@gmail.com", "Rua a");
    d.display();
    d.done();

    let c = new calculadora(10, 20);
    c.somar();
    c.subtrair();
    c.multiplicar();
    c.dividir();
    c.potencia();
}
calcular();