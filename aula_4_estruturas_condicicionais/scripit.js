var jogador1 = 0;
var jogador2 = 0;
var placar;
var dia = 7;

jogador1 != -1 && jogador2 != -1 ? console.log('Joagadores Válidos!') :
console.log('Joagadores Inválidos!');

if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}else if(jogador2 > 0 && jogador1 == 0){
    console.log('jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
}else{
    console.log('Ninguem marcou ponto!');
}

switch(placar){
    case placar = jogador1 > jogador2:
    console.log('jogador 1 está ganhando!');
    break;
case placar = jogador2 > jogador1:
    console.log('jogador 2 está ganhando!');
    break;
    default:
        console.log('nimguém gahou')
        break;

}

switch(dia){
    case dia = 1 :
        console.log('Domingo');
        break;
        case dia = 2 :
            console.log('Segunda');
            break;
            case dia = 3 :
                console.log('Terça');
                break;
                case dia = 4 :
                    console.log('Quarta');
                    break;
                    case dia = 5 :
                        console.log('Quinta');
                        break;
                        case dia = 6 :
                            console.log('Sexta');
                            break;
                            case dia = 7 :
                                console.log('Sábado');
                                break;
        default:
            console.log('Dia da semana inválido!')
            break;
}