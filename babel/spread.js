function soma(...numeros) {
  let soma = 0;

  numeros.forEach((num) => {
    soma += num;
  });

  console.log(soma);
}

soma(1, 2, 3, 4);
