let carinho=[];
let produtos=[];
let precos=[];
let opcao = prompt("Escolha uma opção: \n1. Adicionar item \n2. Remover item \n3. Listar itens \n4. Sair.");
while(opcao !== "4"){
    if(opcao==='1'){
        let produto = prompt("Digite o nome do produto:");
        let preco = parseFloat(prompt("Digite o preço do produto:"));
        produtos.push(produto);
        precos.push(preco);
        carinho.push({produto, preco});
        alert(`${produto} foi adicionado ao carrinho.`);}
    }