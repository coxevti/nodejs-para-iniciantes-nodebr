/**
 * 0 Obter um usuario
 * 1 Obter o numero de telefone de um usuario a partir do id
 * 2 Obter o endereco do usuario pelo id
 */
const util = require("util");
const resolveEndereco = util.promisify(obterEndereco);
function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: "Valdir",
        dataNascimento: new Date()
      });
    }, 3000);
  });
}
function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: "992395591",
        ddd: 67
      });
    }, 2000);
  });
}
function obterEndereco(idUsuario, callBack) {
  setTimeout(() => {
    return callBack(null, {
      rua: "dina sfat",
      numero: 512
    });
  }, 2000);
}

obterUsuario()
  .then(function(resultado) {
    return obterTelefone().then(function(resultadoTelefone) {
      return {
        usuario: resultado,
        telefone: resultadoTelefone
      };
    });
  })
  .then(function(resultado) {
    return resolveEndereco(resultado.usuario.id).then(function(
      resultadoEndereco
    ) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: resultadoEndereco
      };
    });
  })
  .then(function(resultado) {
    console.log(`
    Nome: ${resultado.usuario.nome}
    Endereço: ${resultado.endereco.rua},${resultado.endereco.numero}
    Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });
