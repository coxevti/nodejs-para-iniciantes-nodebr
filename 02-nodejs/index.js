/**
 * 0 Obter um usuario
 * 1 Obter o numero de telefone de um usuario a partir do id
 * 2 Obter o endereco do usuario pelo id
 */
function obterUsuario(callBack) {
  setTimeout(() => {
    return callBack(null, {
      id: 1,
      nome: "Valdir",
      dataNascimento: new Date()
    });
  }, 3000);
}
function obterTelefone(idUsuario, callBack) {
  setTimeout(() => {
    return callBack(null, {
      telefone: "992395591",
      ddd: 67
    });
  }, 2000);
}
function obterEndereco(idUsuario, callBack) {
  setTimeout(() => {
    return callBack(null, {
      rua: "dina sfat",
      numero: 512
    });
  }, 2000);
}

obterUsuario(function resolveUsuario(errUsuario, usuario) {
  if (errUsuario) {
    console.error("DEU RUIM no USUARIO");
    return;
  }
  obterTelefone(usuario.id, function resolveTelefone(errTelefone, telefone) {
    if (errTelefone) {
      console.error("DEU RUIM no TELEFONE");
      return;
    }
    obterEndereco(usuario.id, function resolveEndereco(errEndereco, endereco) {
      if (errEndereco) {
        console.error("DEU RUIM no ENDEREÇO");
        return;
      }
      console.log(`
      Nome: ${usuario.nome}
      Endereço: ${endereco.rua},${endereco.numero}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
      `);
    });
  });
});
