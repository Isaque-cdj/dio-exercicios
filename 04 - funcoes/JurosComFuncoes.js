
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));

}
function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));

}

const precoetiqueta = 100;
const formpagamento = 4;

if (formpagamento === 1) {
    console.log(aplicarDesconto(precoetiqueta, 10));
} else if (formpagamento === 2) {
    console.log(asplicarDesconto(precoetiqueta, 15));
} else if (formpagamento === 3) {
    console.log(precoetiqueta);
} else {
    console.log(aplicarJuros(precoetiqueta, 15));
}



