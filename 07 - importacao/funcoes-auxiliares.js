
const entradas = [10, 5, 50, 19, 12, 23, 63, 34, 25, 27, 99];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}


module.exports = {gets, print};