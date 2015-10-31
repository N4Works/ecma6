// Map

let m = new Map();

m.set('chave1', 'valor1');
m.set('chave2', 'valor2');
m.set('chave3', 'valor3');

for (let valor of m) {
  console.log(valor);
}

// WeakMap

// let wk = new WeakMap();
//
// wk.set({a: 1}, 1);
// wk.set({b: 2}, 2);
// wk.set({c: 3}, 2);
//
// for (let valor of wk) {
//   console.log(valor);
// }

// Set

let s = new Set();

s.add(1);
s.add(2);
s.add(3);

for (let valor of s) {
  console.log(valor);
}

// WeakSet

// let ws = new WeakSet();
//
// ws.add({a: 1});
// ws.add({b: 2});
// ws.add({c: 3});
//
// for (let valor of ws) {
//   console.log(valor);
// }
