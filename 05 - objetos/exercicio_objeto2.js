class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        const imc = this.imc();

        if (imc < 18.5) {
           return ('IMC = ' + imc.toFixed(2), 'Abaixo do peso');
        } else if (imc >= 18.5 && imc.toFixed(2) <= 25) {
            return ('IMC = ' + imc.toFixed(2), 'Peso normal');
        } else if (imc > 25 && imc < 30) {
            return ('IMC = ' + imc.toFixed(2), 'Acima do Peso');
        } else if (imc >= 30 && imc < 40) {
            return ('IMC = ' + imc.toFixed(2), 'Obesidade');
        } else {
            return ('IMC = ' + imc.toFixed(2), 'Obesidade Morbida');
        }
    }
    
}

const isaque = new Pessoa('Isaque', 90, 1.77);

console.log(isaque, 'Imc: ', isaque.imc().toFixed(2), isaque.classificarImc());