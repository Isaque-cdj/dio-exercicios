class Pessoa {
    nome;
    idade;
    anoDeNasciento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNasciento = 2024 - idade;
      }
    descrever() {
        console.log(`Nome: ${this.nome}. \nIdade: ${this.idade}`);
    }

}


const isaque = new Pessoa('Isaque', 22);

const fulano = new Pessoa('fulano', 34);

console.log(isaque);








// const pessoa = {
//     nome: 'Isaque Coelho',
//     idade: 22,

//     descrever: function () {
//         console.log(`Nome: ${this.nome}. \nIdade: ${this.idade}`);
//     }
// };


