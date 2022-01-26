var jogador1 = 1;
var jogador2 = 0;
var placar;

if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 está ganhado!');
}else if(jogador2 > 0 && jogador1 == 0){
    console.log('jogador 2 esta ganhando!');
}else{
    console.log('Ninguem marcou ponto!');
}

switch(placar){
    case placar = jogador1 > jogador2:
    console.log('jogador 1 ganhou !');
    break;
case placar = jogador2 > jogador1:
    console.log('jogador 2 está ganhando!');
    break;
    default:
        console.log('nimguém gahou')
        break;

}