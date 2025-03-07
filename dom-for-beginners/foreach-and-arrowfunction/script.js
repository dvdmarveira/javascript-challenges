// forEach
// Método para interagir com uma lista de itens do DOM.
const imgs = document.querySelectorAll("img");

imgs.forEach(function (item) {
  console.log(item);
});

// Parâmetros do forEach
// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: valorAtual, index e array;
const imgs2 = document.querySelectorAll("img");

imgs2.forEach(function (item, index, array) {
  console.log(item);
  console.log(index);
  console.log(array);
});

// forEach e Array
// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-lo em uma array.
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});

// Arrow Function
// Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
const imgs3 = document.querySelectorAll("img");

imgs.forEach((item) => {
  console.log(item);
});

// Argumentos e Parênteses
const imgs4 = document.querySelectorAll("img");

// argumento único não precisa de parênteses
imgs.forEach((item) => {
  console.log(item);
});

// múltiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem argumento precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

// Return
// É possível omitir as chaves {} para uma função que retorna uma linha
const imgs5 = document.querySelectorAll("img");

imgs5.forEach((item) => console.log(item));

// ----------- EXERCÍCIO -----------

// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs6 = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let eu = 0;
imgs.forEach(() => {
  console.log(eu++);
});
