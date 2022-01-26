//array
let array = ['Primeiro', 1, true,['p.segundo','nome']];
console.log('imprimir 1:' + array);
console.log('imprimir 2:' + array[3][0]);

//forEach
array.forEach(function(item, index){console.log('forEach: ' + item,index)})

array.push('novo item');
console.log('push: ' + array);

array.pop();
console.log('pop apaga no final : '+ array);


array.shift();
console.log('shift apaga no inicio :' + array);

array.unshift('novoItem');
console.log('unshift :' + array);

console.log(array.indexOf(true));

let arrayNovo = array.slice(0, 3);
console.log('Slice : '+ arrayNovo);

let object = {String: 'string', Number: 8, Boolean: true, array: ['Array'],objectInteno:{objectInteno: 'objeto Interno'} };
console.log(Object);