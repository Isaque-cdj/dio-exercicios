// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
//  1 - Preço do combustível;
//  2 - Gasto médio de combustível do carro por KM;
//  3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let combustivel = 5.79;
let custoKm = 20;
let distanciaKm = 50;
let gasto = (distanciaKm / custoKm) * combustivel;




console.log("Gasto $ ", gasto.toFixed(2));