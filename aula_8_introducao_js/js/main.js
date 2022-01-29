function principal(){
const menu = Number(prompt('Digite uma opção\n 1 - Lista \n 2 - Dicionario \n 3 - condicionais \n 4 - Data'  ))

  // verificando se o menu é válido
  if (!menu ||  menu >= 5) {
    alert('erro - menu inválido');
    principal();
  }if (menu == 1) {
      lista();
  }else if (menu == 2) {
      dicionario();
  }else if (menu == 3) {
      condicioais();
  }else if(menu == 4){
      datas();
  }
  function datas(){
    var dt = new Date();
      const menu2 = Number(prompt('Digite uma opção\n 1 - Data Completa\n 2 - Mes\n 3 - Minutos\n 4 - Dia\n 5 - Hora'));

      if(menu2 == 1){
       dataCompleta();
      }else if(menu2 == 2){
    mesDoAno();
      }else if(menu2 == 3){
minutosAtual();
      }else if(menu2 == 4){
diaAtual();
      }else if(menu2 == 5){
horaAtual();
      }
      function horaAtual(){
alert('Hora Atual : '+ dt.getHours());
        novaOperacao();
      }
      function diaAtual(){
alert('dia Atual : '+ dt.getDay());
        novaOperacao();
      }
        function minutosAtual(){
alert('Minutos Atual : '+ dt.getUTCMinutes());
            novaOperacao();
        }

function mesDoAno(){
alert('Mes Atual : ' + dt.getMonth() + 1);
novaOperacao();
}

      function dataCompleta(){

        
        alert(dt);
      
          novaOperacao();
      }
 


  }

  
  function condicioais(){
    const menu1 = Number(prompt('Digite uma opção\n 1 - Idade \n 2 - Count \n 3 - Decr Count' ))
    // verificando se o menu1 é válido
    if(menu1 == 1){
        idade();
    }else if(menu1 == 2){
        countF();
    }else if(menu1 == 3){
        countFd();
    }

    function countF(){

        
      let count = 0;
      while(count <= 6){

      alert('Valor de count : '+ count)
      count++;
    

      }
      novaOperacao();
    }

function idade(){
    const idadeM = Number(prompt('Digite a Idade'));
    if (idadeM >= 18 && idadeM < 100) {
        alert("Maior de Idade!");
        
    }else if(idadeM < 18){
        alert('Menor de Idade!');
    }else{
alert("Parabéns, Você é um centenário.")
    }


    novaOperacao();
}
     

function countFd(){
    for(let ncount = 5; ncount > 0; ncount--){
        alert(ncount);
           }
           novaOperacao();
}
   

 
   

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
console.log(fruta.nome, fruta.tipo);
alert(fruta.nome +' ' + fruta.tipo);
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


