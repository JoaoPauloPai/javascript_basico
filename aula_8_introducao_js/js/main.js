function principal(){
const menu = Number(prompt('Digite uma opção\n 1 - Lista \n 2 - Dicionario'))

  // verificando se o menu é válido
  if (!menu ||  menu >= 3) {
    alert('erro - menu inválido');
    principal();
  }if (menu == 1) {
      lista();
  }else if (menu == 2) {
      dicionario();
  }{

  }

function lista(){
alert('Meu primeiro JS');
var nome = 'João Paulo'
var idade = 54;
var idade2 = 10;
var n1 = 6;
var n2 = 8;
var result;
var lista = [' maçã', ' pera', ' laranja'];
var frase = ('Japão é o melhor time do mundo!');
alert(nome + ' tem ' + idade +  ' anos.');
alert(idade + idade2);
console.log(nome);
alert(frase);
alert('sqn');
alert(frase.replace('Japão', 'Brasil'));
alert(frase.toLocaleLowerCase());
alert(frase.toLocaleUpperCase());
result = n1 + n2;
alert('Soma dos numeros : ' + result );
alert('Lista');
alert(lista);
alert(lista[2]);
lista.push(' uva');
alert(lista);
lista.pop('maçã');
alert(lista);
lista.reverse();
alert(lista);
alert(lista.toString());
alert(lista.join(' | '));

novaOperacao();
}
function dicionario(){
var fruta = {nome : 'maçã', cor: 'vermelha', tipo : 'frutas'};
var frutas = [{nome : "laranja", cor : "amarelo" },{nome : " abacaxi", cor : "branco"}];
console.log(fruta)
//console.log(frutas)
//alert('fruta nome : '+ fruta.nome + ' fruta cor : ' + cor);
//alert(frutas);
      novaOperacao();
}
 // nova operação
 function novaOperacao() {
    let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    if (opcao == 1) {
        principal();
    } else if (opcao == 2) {
        alert('Até mais!');
    } else {
        alert('Digite uma opção válida!');
        novaOperacao();
    }
}

}
principal();


