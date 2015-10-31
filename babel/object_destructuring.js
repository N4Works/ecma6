// variáveis

let {propriedade, outraInfo} = {propriedade: 123, outraInfo: 'qqcoisa', informacaoInutil: true}

console.log(propriedade);
console.log(outraInfo);

console.log('-----');

// functions

let pessoa = {nome: 'eric', idade: 26, cpf: '123123123123'};

function bomDiaNormal(pessoa) {
  console.log(pessoa.nome);
  console.log(pessoa.idade);
  console.log(pessoa.cpf);
}

function bomDiaDestructuring({nome, idade, cpf}) {
  console.log(nome);
  console.log(idade);
  console.log(cpf);
}

bomDiaNormal(pessoa);

console.log('-----')

bomDiaDestructuring(pessoa);
