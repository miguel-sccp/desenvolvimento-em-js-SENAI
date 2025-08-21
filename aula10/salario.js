class Colaborador {
    // 1. O 'constructor' recebe os dados iniciais e os guarda no objeto
    constructor(salarioBase, horasMensais, horasExtras) {
        this.salarioBase = salarioBase;
        this.horasMensais = horasMensais;
        this.horasExtras = horasExtras;
    }

    // 2. Método para calcular o valor da hora normal
    calcularValorHora() {
        return this.salarioBase / this.horasMensais;
    }

    // 3. Método para calcular o salário final (já somando as horas extras)
    calcularSalarioFinal() {
        const valorDaHora = this.calcularValorHora();
        // De acordo com sua regra, o valor da hora extra é o mesmo da hora normal
        const valorTotalExtras = this.horasExtras * valorDaHora;
        
        return this.salarioBase + valorTotalExtras;
    }

    // 4. Método para mostrar tudo de uma vez
    exibirResumo() {
        console.log("--- Resumo do Colaborador ---");
        console.log("Salário Base: R$ " + this.salarioBase);
        console.log("Valor da Hora: R$ " + this.calcularValorHora());
        console.log("Salário Final com Extras: R$ " + this.calcularSalarioFinal());
    }
}


// --- Execução do Programa ---

// Pega os dados do usuário
let salario = parseFloat(prompt("Digite o salário do colaborador:"));
let horasTrabalhadas = parseFloat(prompt("Digite a quantidade de horas trabalhadas no mês:"));
let horasExtras = parseFloat(prompt("Digite a quantidade de horas extras trabalhadas:"));

// Cria um novo objeto "colaborador" com os dados informados
const funcionario = new Colaborador(salario, horasTrabalhadas, horasExtras);

// Chama o método que mostra o resumo completo
funcionario.exibirResumo();