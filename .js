// Classe base: Produto
class Produto {
  constructor(nome, preco, categoria) {
      this.nome = nome;
      this.preco = preco;
      this.categoria = categoria;
  }

  // Método que exibe detalhes do produto
  exibirDetalhes() {
      console.log(`Produto: ${this.nome}\nPreço: R$${this.preco.toFixed(2)}\nCategoria: ${this.categoria}`);
  }
}

// Classe derivada: Acessorio
class Acessorio extends Produto {
  constructor(nome, preco, categoria, tipo) {
      super(nome, preco, categoria);
      this.tipo = tipo; // Ex: capa, carregador, suporte
  }

  exibirDetalhes() {
      super.exibirDetalhes();
      console.log(`Tipo de Acessório: ${this.tipo}`);
  }
}

// Classe derivada: Assistencia
class Assistencia extends Produto {
  constructor(nome, preco, categoria, servico) {
      super(nome, preco, categoria);
      this.servico = servico; // Ex: troca de tela, substituição de bateria
  }

  exibirDetalhes() {
      super.exibirDetalhes();
      console.log(`Serviço de Assistência: ${this.servico}`);
  }
}

// Instâncias de objetos
const capa = new Acessorio("Capa Protetora", 49.99, "Acessórios", "Capa");
const carregador = new Acessorio("Carregador Rápido", 89.99, "Acessórios", "Carregador");
const trocaTela = new Assistencia("Troca de Tela", 299.99, "Assistência Técnica", "Tela");

capa.exibirDetalhes();
console.log("\n");
carregador.exibirDetalhes();
console.log("\n");
trocaTela.exibirDetalhes();
