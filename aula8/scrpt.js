// **Desafio: Criar um programa de array de compras interativo que:**
// **1 Use um array para armazenar os itens
// 2 Use while para manter o programa rodando até o usuário decidir sair
// 3 Use for para mostrar a lista de compras
// 4 Tenha opções para adicionar, remover e listar itens**
// faça  simples  
//use .pop
let produtos = [];
let opcao = prompt("Escolha uma opção: \n1. Adicionar item \n2. Remover último item \n3. Listar itens \n4. Sair.");
while (opcao !== "4") {
    if (opcao === "1") {
        let produto = prompt("Digite o nome do produto:");
        produtos.push(produto);
        alert(produto + " foi adicionado ao carrinho.");
    }
    if (opcao === "2") {
        if (produtos.length > 0) {
            let removido = produtos.pop();
            alert(removido + " foi removido do carrinho.");
        } else {
            alert("O carrinho está vazio.");
        }
    }
    if (opcao === "3") {
        if (produtos.length > 0) {
            alert("Itens no carrinho: " + produtos.join(", "));
        } else {
            alert("O carrinho está vazio.");
        }
    }
    opcao = prompt("Escolha uma opção: \n1. Adicionar item \n2. Remover último item \n3. Listar itens \n4. Sair.");
}
alert("Programa encerrado!");