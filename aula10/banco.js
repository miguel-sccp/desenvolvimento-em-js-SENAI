class ContaBancaria {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }

    display() {
        console.log("Titular: " + this.nome);
        console.log("Saldo: R$ " + this.saldo.toFixed(2));
    }

    depositar(valor) {
        this.saldo += valor;
        console.log("Depósito de R$ " + valor.toFixed(2) + " realizado com sucesso!");
    }

    sacar(valor) {
        if (this.saldo < valor) {
            console.log("Saldo insuficiente!");
        } else {
            this.saldo -= valor;
            console.log("Saque de R$ " + valor.toFixed(2) + " realizado com sucesso!");
        }
    }
}


let nome = prompt("Digite o nome: ");
let saldo = 50000;
let conta1 = new ContaBancaria(nome, saldo);

conta1.display();

let deposito = parseFloat(prompt("Digite o valor do depósito: "));
conta1.depositar(deposito);

let saque = parseFloat(prompt("Digite o valor do saque: "));
conta1.sacar(saque);

conta1.display();