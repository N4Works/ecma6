function* retornaIterator() {
  yield 1
  yield 2
  yield 3
}

const iterator = retornaIterator();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
