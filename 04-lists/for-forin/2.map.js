const services = require("./services");

Array.prototype.meuMap = function(callBack) {
  const novoArrayMapiado = [];
  for (let indice = 0; indice < this.length; indice++) {
    const resultado = callBack(this[indice], indice);
    novoArrayMapiado.push(resultado);
  }
  return novoArrayMapiado;
};

async function main() {
  try {
    const response = await services.obterPessoas("a");
    //const names = [];
    // response.results.forEach(function(item) {
    //   names.push(item.name);
    // });
    // const names = response.results.map(function(item) {
    //   return item.name;
    // });
    // const names = response.results.map(item => item.name);
    const names = response.results.meuMap(function(item, indice) {
      return `[${indice}] ${item.name}`;
    });
    console.log("resultado", names);
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}
main();
