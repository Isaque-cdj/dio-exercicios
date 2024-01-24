const peso = 50;
const altura = 1.50;
const imc = peso / Math.pow(altura, 2);


if (imc < 18.5) {
    console.log('IMC = ' + imc.toFixed(2), 'Abaixo do peso' );
} else if (imc >= 18.5 && imc.toFixed(2) <= 25){
    console.log('IMC = ' + imc.toFixed(2), 'Peso normal' );
}else if(imc > 25 && imc < 30 ){
    console.log('IMC = ' + imc.toFixed(2), 'Acima do Peso' );
}else if(imc >= 30 && imc < 40){
    console.log('IMC = ' + imc.toFixed(2), 'Obesidade' );
}else {
    console.log('IMC = ' + imc.toFixed(2), 'Obesidade Morbida' );
}

