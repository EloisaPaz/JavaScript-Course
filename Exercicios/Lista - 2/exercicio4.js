var nota1 = Number(prompt('Insira a primeira nota: '));
var nota2 = Number(prompt('Insira a segunda nota: '));
var nota3 = Number(prompt('Insira a terceira nota: '));
var nota4 = Number(prompt('Insira a quarta nota: '));

var peso1 = 2;
var peso2 = 3;
var peso3 = 4;
var peso4 = 1;

var mediaPonderada = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4);

if (mediaPonderada >= 7) {
    console.log('Aluno aprovado!');
} else if (mediaPonderada > 3.5 && mediaPonderada < 7) {
    var G2 = Number(prompt('Insira a nota G2: '));
    if (G2 >= 6) {
        prompt('Aluno aprovado!');
    } else {
        prompt('Aluno reprovado!');
    }
} else {
    prompt('Aluno reprovado!');
}
