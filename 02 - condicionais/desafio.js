
let precoGasolina = 6.66;
let precoEtanol = 5.79;
let custoKmGasolina = 11;
let custoKmEtanol = 9;
let distanciaKm = 50;

let gasolina = (distanciaKm / custoKmGasolina) * precoGasolina;
let etanol = (distanciaKm / custoKmEtanol) * precoEtanol;


console.log("Custo viagem com gasolina: \n $ ", gasolina.toFixed(2), '\n');
console.log("Custo viagem com etanol: \n $ ", etanol.toFixed(2));