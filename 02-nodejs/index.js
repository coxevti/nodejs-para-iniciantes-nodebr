/**
 * 0 Obter um usuario
 * 1 Obter o numero de telefone de um usuario a partir do id
 * 2 Obter o endereco do usuario pelo id
 */
const util = require("util");
const enderecoAsync = util.promisify(obterEndereco);
function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: "Valdir",
        dataNascimento: new Date()
      });
    }, 2000);
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

async function main() {
  try {
    console.time("tempo-promise");
    const usuario = await obterUsuario();
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      enderecoAsync(usuario.id)
    ]);
    const telefone = resultado[0];
    const endereco = resultado[1];
    console.log(`
    Nome: ${usuario.nome}
    Endereço: ${endereco.rua},${endereco.numero}
    Telefone: (${telefone.ddd}) ${telefone.telefone}
    `);
    console.timeEnd("tempo-promise");
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}
main();
