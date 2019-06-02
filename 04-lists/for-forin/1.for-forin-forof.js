const service = require("./services");

async function pessoa() {
  try {
    const response = await service.obterPessoas("a");
    const nomes = [];
    console.time("for");
    for (let i = 0; i < response.results.length; i++) {
      const nome = response.results[i].name;
      nomes.push(nome);
    }
    console.timeEnd("for");
    console.time("forin");
    for (let i in response.results) {
      const nome = response.results[i].name;
      nomes.push(nome);
    }
    console.timeEnd("forin");
    console.time("forof");
    for (pessoa of response.results) {
      nomes.push(pessoa.name);
    }
    console.timeEnd("forof");
    console.log("Resultado", nomes);
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}
pessoa();
