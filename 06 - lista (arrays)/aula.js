const notas = [];

notas.push(5);
notas.push(10);
notas.push(8);
notas.push(2);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++){
    const nota = notas[i]
    soma += nota;
}
media = soma / notas.length;
console.log('Média: ' + media);