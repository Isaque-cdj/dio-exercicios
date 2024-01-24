
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


