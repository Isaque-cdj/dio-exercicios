
const precoetiqueta = 100;
const formpagamento = 1;

if (formpagamento === 1) {
    console.log(precoetiqueta - (precoetiqueta * 0.10));
} else if (formpagamento === 2) {
    console.log(precoetiqueta - (precoetiqueta * 0.15));
} else if (formpagamento === 3) {
    console.log(precoetiqueta);
} else {
    console.log(precoetiqueta + (precoetiqueta * 0.10));
}




