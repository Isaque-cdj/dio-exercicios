
const pessoa = {
    nome: 'Isaque Coelho',
    idade: 22,

    descrever: function () {
       
        console.log(`Nome: ${this.nome}. \nIdade: ${this.idade}`);

    }

};

pessoa.nome = 'Fulano';
pessoa.idade = 30;

pessoa.descrever();

