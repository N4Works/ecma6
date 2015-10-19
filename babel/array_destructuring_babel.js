// variáveis

let [pos0, pos1,,pos3] = [{a: true}, 1, 'whatever', {b: 2}];

console.log(pos0);
console.log(pos1);
console.log(pos3);

console.log('-----');

// functions

function informacaoNormal(array) {
  console.log(array[0]);
  console.log(array[1]);
  console.log(array[3]);
}

function informacaoDestructuring([primeiraPos, segundaPos,, quartaPos]) {
  console.log(primeiraPos);
  console.log(segundaPos);
  console.log(quartaPos);
}

informacaoNormal([1, 2, 3, 4]);

console.log('-----');

informacaoDestructuring([1, 2, 3, 4]);
