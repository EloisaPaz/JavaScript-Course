var jogo1John = prompt('Insira a pontuação do time de John no primeiro jogo: ');
var jogo2John = prompt('Insira a pontuação do time de John no segundo jogo: ');
var jogo3John = prompt('Insira a pontuação do time de John no terceiro jogo: ');

var jogo1Mike = prompt('Insira a pontuação do time de Mike no primeiro jogo: ');
var jogo2Mike = prompt('Insira a pontuação do time de Mike no segundo jogo: ');
var jogo3Mike = prompt('Insira a pontuação do time de Mike no terceiro jogo: ');

var jogo1Mary = prompt('Insira a pontuação do time de Mary no primeiro jogo: ');
var jogo2Mary = prompt('Insira a pontuação do time de Mary no segundo jogo: ');
var jogo3Mary = prompt('Insira a pontuação do time de Mary no terceiro jogo: ');

var timeJohn = (parseInt(jogo1John) + parseInt(jogo2John) + parseInt(jogo3John))/3;
var timeMike = (parseInt(jogo1Mike) + parseInt(jogo2Mike) + parseInt(jogo3Mike))/3;
var timeMary = (parseInt(jogo1Mary) + parseInt(jogo2Mary) + parseInt(jogo3Mary))/3;

if(timeJohn > timeMike && timeJohn > timeMary){
    console.log('O time de John foi campeão com a média de ' + timeJohn + ' pontos!');
}else if(timeMike > timeJohn && timeMike > timeMary){
    console.log('O time de Mike foi campeão com a média de ' + timeMike + ' pontos!');
}else if(timeMary > timeJohn && timeMary > timeMike){
    console.log('O time de Mary foi campeão com a média de ' + timeMary + ' pontos!');
}else{
    console.log('Houve um empate entre os times!');
}