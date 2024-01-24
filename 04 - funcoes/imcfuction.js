function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return  'IMC = ' + imc.toFixed(2) + ' Abaixo do peso';
    } else if  (imc >= 18.5 && imc.toFixed(2) <= 25 ) {
       return 'IMC = ' + imc.toFixed(2) + ' Peso normal' ;
    } else if  (imc > 25 && imc < 30)  {
        return 'IMC = ' + imc.toFixed(2)+ ' Acima do Peso' ;
    } else if  (imc >= 30 && imc < 40)  {
        return 'IMC = ' + imc.toFixed(2)+ ' Obesidade' ;
    } else {
        return 'IMC = ' + imc.toFixed(2)+ ' Obesidade Morbida' ;
    }
    
}
(function (){
const peso = 90;
const altura = 1.77;
const imc = calcularImc(peso, altura)
console.log(classificarImc(imc));
})();


