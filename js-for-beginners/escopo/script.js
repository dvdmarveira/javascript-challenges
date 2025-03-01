// Escopo de função
// Variáveis declaradas dentro de funções não são acessadas fora

var carro = "Fusca"; // variável fora da função e por isso consegue ser acessada
function mostrarCarro() {
  var carro = "Fusca"; // variável dentro da função
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro carro is not defined
// Escopo evita o conflito entre nomes

// Variável global (erro)
// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessada em qualquer escopo (ou seja, uma variável global) e isso é um erro.
function mostrarCarro() {
  // carro = "Fusca";
  console.log(carro);
}
// 'use strict' impede essa prática.
// ---- FIM

// Escopo de função pai
// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções
var carro = "Fusca";

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca
// console.log(frase); // Variável apenas dentro da função, não consegue ser acessada fora
// ---- FIM

// Escopo de bloco
// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois respeitam o escopo de bloco.
if (true) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // Carro
// ---- FIM

// Const e Let ao invés de Var
if (true) {
  const carroconst = "Fusca";
  console.log(carroconst);
}
// console.log(carroconst); // error, carro is not defined

// {} cria um bloco
// Chaves {} criam um escopo de bloco e não deve ser confundido com a criação de objetos = {}
{
  var carrovar = "Fusca";
  const ano = 2025;
}
console.log(carrovar); // Fusca
// console.log(ano); // error, ano is not defined
// ---- FIM

// For Loop
// Ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existir fora do loop. O correto é usar let.
for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10
// ---- FIM

// Const
// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
const mes = "Dezembro";
// mes = "Janeiro"; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "fevereiro",
  ano: 2025,
};

data.dia = 29; // Esse tipo de redeclaração funciona
console.log(data.dia);
// data = "Janeiro"; // erro
// ---- FIM

// Let
// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável
// ---- FIM

// ---------------- EXERCÍCIO ----------------

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
// console.log(cor, marca, portas);

// Como corrigir o erro abaixo?
const dois = 2; // retirando a variável de dentro da função
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for (var numero = 0; numero < 10; numero++) {
  // substituir "var" do loop por "let"
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
