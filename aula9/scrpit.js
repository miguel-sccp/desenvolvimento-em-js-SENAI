

function calcularValorHora(salario, horasTrabalhadas) {
    return salario / horasTrabalhadas;
}
function calcularHoraExtra(valorHora, horasExtras) {
    return valorHora * horasExtras * 1.5; 
}
function calcularTotal(salario, horasExtras, valorHora) {
    return salario + calcularHoraExtra(valorHora, horasExtras);
}
let salario = parseFloat(prompt("Digite o salário mensal do trabalhador:"));
let horasTrabalhadas = parseFloat(prompt("Digite a quantidade de horas trabalhadas no mês:"));
let horasExtras = parseFloat(prompt("Digite a quantidade de horas extras trabalhadas:"));
let valorHora = calcularValorHora(salario, horasTrabalhadas);
let total = calcularTotal(salario, horasExtras, valorHora);
prompt("O total a receber é: R$ " + total.toFixed(2) + "\nValor da hora: R$ " + valorHora.toFixed(2) + "\nValor das horas extras: R$ " + calcularHoraExtra(valorHora, horasExtras).toFixed(2));
