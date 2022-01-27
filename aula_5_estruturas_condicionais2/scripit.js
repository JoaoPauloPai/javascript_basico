let array = ['valor1', 'valor2', 'valoe3', 'valor4', 'valor4'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};
var a = 0;

for(let indice = 0; indice < array.length; indice ++){

    console.log(indice);

}

for(let i in array){
console.log(i);
}

for(let i in object){
    console.log(i);

}

for(let i of array){
console.log(i);
}

for(let i of object.propriedade1){
    console.log(i);

}

while(a < 10){
    a++;
console.log(a);
}

do{
a--;
console.log(a);
}while(a > 0);