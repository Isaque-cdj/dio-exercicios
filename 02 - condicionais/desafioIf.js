// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let precoGasolina = 6.66;
let precoEtanol = 5.79;
let custoKmGasolina = 11;
let custoKmEtanol = 9;
let distanciaKm = 50;

let combustivel = 'Etanol'; 

if (combustivel === 'Gasolina') {
    const gasolina = (distanciaKm / custoKmGasolina) * precoGasolina;
    console.log("Custo viagem com gasolina: \n $ ", gasolina.toFixed(2), '\n');
} else {
   const etanol = (distanciaKm / custoKmEtanol) * precoEtanol;
    console.log("Custo viagem com etanol: \n $ ", etanol.toFixed(2));
}


