
function calculadora(){
    const operacao = prompt('Escolha uma opcao!\n 1 - soma(+) \n 2 - subtração(-)\n 3 - multiplicação(*) \n 4 - divisão real(/) \n 5 - divisão inteira(%)\n 6 - potenciação(**)');
    console.log(operacao);


let n1 = Number(prompt('insira o primeiro valor'));
let n2 = Number(prompt('insira o segundo valor'));
let resultado;

function soma(){
    resultado = n1 + n2;
     alert(`${n1} + ${n2} = ${resultado}`)

   
}
function subtracao(){
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
}
function multiplicacao(){
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
}
if(operacao == 1) {
    soma();
}else if(operacao == 2){
    subtracao();
}else if(operacao == 3){
multiplicacao();
}/*else if(operacao == 4){
divisaoReal();
}else if(operacao == 5){
divisaoInteira();
}else if(operacao == 6){
potenciacao();
}else{
    console.log('Digite um número valido!');
};
*/
}
calculadora();