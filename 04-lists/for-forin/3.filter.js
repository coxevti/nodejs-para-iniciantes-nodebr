const { obterPessoas } = require("./services");

Array.prototype.meuFilter = function(callBack) {
  const lista = [];
  for (let indice in this) {
    const item = this[indice];
    const resultado = callBack(item, indice, this);
    if (!resultado) continue;
    lista.push(item);
  }
  return lista;
};

async function main() {
  try {
    const { results } = await obterPessoas("a");
    // const searchLars = results.filter(
    //   item => item.name.toLowerCase().indexOf("lars") !== -1
    // );
    const searchLars = results.meuFilter((item, indice, lista) => {
      return item.name.toLowerCase().indexOf("lars") !== -1;
    });
    const names = searchLars.map(pessoa => pessoa.name);
    console.log(names);
  } catch (error) {
    console.log("DEU RUIM", error);
  }
}
main();
