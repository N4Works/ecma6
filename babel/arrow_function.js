Promise.resolve(1)
       .then((info) => console.log(info))
       .catch((erro) => console.log(erro));

Promise.reject({erro: 'algum erro!'})
       .then((info) => console.log(info))
       .catch((erro) => console.log(erro));
