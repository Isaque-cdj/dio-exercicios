const lista = [5, 7, 9, 3, 98, 56, 67, 0, 43, 6, 8, 2];

for (let i = 0; i < lista.length; i++) {
    const numero = lista[i];
   
    if (numero % 2 === 0) {
        console.log(numero + " é um número par.");
    }
}