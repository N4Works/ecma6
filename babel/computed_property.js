let pessoa = {
  nome: 'fulano',
  idade: 999,
  [`1+outra_prop-https://alguma-coisa.com`]: true
}

pessoa.dizBomDia();

console.log(pessoa[`1+outra_prop-https://alguma-coisa.com`]);
