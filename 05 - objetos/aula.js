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

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
}


const isaque = new Pessoa('Isaque', 22);
const paulo = new Pessoa('Paulo Ap', 40);


compararPessoas(isaque, paulo);

 