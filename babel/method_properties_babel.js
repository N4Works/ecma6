let pessoa = {
  nome: 'fulano',
  idade: 999,
  dizBomDia() {
    console.log(`bom dia, eu sou ${this.nome}, tenho ${this.idade} anos.`)
  }
}

pessoa.dizBomDia();
