class Pessoa {
  tipo = 'pessoa_normal';
  raca = 'humano';
}

class PessoaEspecial extends Pessoa {
  tipo = 'pessoa_especial'
}

console.log(new PessoaEspecial())
