class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Carrinho {
    constructor() {
        this.Carrinho = [];
    } 

    adicionarProduto(produto) {
        this.Carrinho.push(produto);
    }

    removerProduto(nome) { 
        this.Carrinho = this.Carrinho.filter(p => p.nome !== nome);
        console.log("produto", nome, "removido com sucesso");
    }

    mostrarCarrinho() {
        console.log("Carrinho:");
        this.Carrinho.forEach(p => console.log(p.nome, "R$", p.preco));
    }

    total() {
        const total = this.Carrinho.reduce((soma, p) => soma + p.preco, 0);
        console.log("Total do carrinho: R$", total.toFixed(2));
    }
}

const carrinho = new Carrinho();
const produto1 = new Produto("Camiseta", 29.99);
const produto2 = new Produto("Calça", 49.99);

carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.removerProduto("Calça");
carrinho.mostrarCarrinho();
carrinho.total();
