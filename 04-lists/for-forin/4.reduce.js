const { obterPessoas } = require("./services");

Array.prototype.meuReduce = function(callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];
  for (let index = 0; index < this.length; index++) {
    valorFinal = callback(valorFinal, this[index], index, this);
  }
  return valorFinal;
};

async function main() {
  const { results } = await obterPessoas("a");
  // const pesos = results.map(pessoa => parseInt(pessoa.height));
  // const total = pesos.reduce(
  //   (acumulador, valorAtual) => acumulador + valorAtual
  // );
  // console.log("pesos", pesos);
  // console.log("total", total);
  const listaNomes = [["Erick", "Wendel"], ["NodeBR", "Nerdzão"]];
  const nome = listaNomes
    .meuReduce((acumulador, valorAtual) => {
      return acumulador.concat(valorAtual);
    }, [])
    .join(", ");
  console.log(nome);
}
main();
