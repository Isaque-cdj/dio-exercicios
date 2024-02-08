
class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }
     calcularGastoViagem(distancia, precoCombustivel){
        return (distancia * this.gastoMedioKm) * precoCombustivel;
    }
}

const bmw = new Carro('BMW', 'Branco', 1 / 6);
const d20 = new Carro ('Chevrolet', 'Branco', 1 / 13);

console.log(bmw , 'Gasto  $ ', (bmw.calcularGastoViagem(70,5)));
console.log(d20 , 'Gasto  $ ', (bmw.calcularGastoViagem(100,4)));