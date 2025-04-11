// QUESTION 1
// let x = 10;
// if (x > 5) {
//   console.log("Maior que 5");
// } else {
//   console.log("Menor ou igual a 5");
// }

const f = (a, b) => {
  return (n) => a + b;
};
const fu = f();
console.log(fu(2, 5));
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Qual é o seu nome? ", (nome) => {
//   console.log("Olá, " + nome + "!");
//   rl.close();
// });

// Qual a diferença entre let, const e var no JavaScript?
// 1 ponto
// let e var têm escopo de bloco, enquanto const não pode ser reatribuído.
// var tem escopo de bloco, let tem escopo global, e const pode ser reatribuído.
// var tem escopo de função, let tem escopo de bloco e const define uma constante que não pode ser reatribuída.
