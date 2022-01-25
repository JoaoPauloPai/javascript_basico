//array
let array = ['Primeiro', 1, true,['p.segundo','nome']];
console.log('imprimir 1:' + array);
console.log('imprimir 2:' + array[3][0]);

//forEach
array.forEach(function(item, index){console.log('forEach: ' + item,index)})

array.push('novo item');
console.log('push: ' + array);