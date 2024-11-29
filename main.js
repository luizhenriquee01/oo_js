class Veiculo {
  constructor(marca, modelo) {
    if (this.constructor === Veiculo) {
      throw new Error('Classe abstrata não pode ser instanciada diretamente');
    }
    this.marca = marca;
    this.modelo = modelo;
  }

  detalhes() {
    throw new Error("Método 'detalhes()' deve ser implementado");
  }
}
class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    super(marca, modelo);
    this.portas = portas;
  }

  detalhes() {
    return `Carro: ${this.marca} ${this.modelo}, com ${this.portas} portas.`;
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, cilindradas) {
    super(marca, modelo);
    this.cilindradas = cilindradas;
  }

  detalhes() {
    return `Moto: ${this.marca} ${this.modelo}, com ${this.cilindradas}cc.`;
  }
}
const carro1 = new Carro('Toyota', 'Corolla', 4);
const carro2 = new Carro('Honda', 'Civic', 4);
const moto1 = new Moto('Yamaha', 'R1', 1000);

console.log(carro1.detalhes());
console.log(carro2.detalhes());
console.log(moto1.detalhes());
