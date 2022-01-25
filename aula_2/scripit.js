//Tipos Primitivos
//Boolean
var VouF = false;
console.log(typeof(VouF));

//number
var numeroqualquer = 1;
console.log(typeof(numeroqualquer));

//String
var nome = 'jose';
console.log(typeof(nome));

//alterando valores
var nome2 = 'jose da silva';
nome2 = 'marcos antonio';
console.log(nome2);

//Variaveis let
let nome3 = 'maria';
nome3 = 'maria jose';
console.log(nome3);

//varivaies contante
const nome4 = 'Joao';
//nome4 = 'Joao Paulo';
console.log(nome4);


//escopo
var escopoglobal = 'global';
console.log(escopoglobal);

function escopolocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopolocal();

//atrribuição

var atribuicao = 'nomequalqyer';

var igual = 0;

igual == 0;

console.log(igual);

var soma = 2 + 2;
console.log(soma);

var divisao = 6 / 2;
console.log(divisao);

var multiplicacao = 3 * 3;
console.log(multiplicacao);

var subtracao = 8 - 3;
console.log(subtracao);

//resto divisao
var resto = 5 % 2;
console.log(resto);

//potenciacao
var potenciacao = 2 ** 10;
console.log(potenciacao);

//Maior Menor
var maior = 5 > 2;
console.log(maior);

var menor = 5 < 2;
console.log(menor);

//&&
var e = true && false;
console.log(e);

//Ou 
var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);

