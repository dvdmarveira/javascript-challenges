// ID
// getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

// Retorna null caso não exista
const naoExiste = document.getElementById("teste");

// Classe e Tag
// getElementsByClassName e getElementsByTagName
// Selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
const contato = document.getElementsByClassName("grid-section contato");

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);

// Seletor Geral Único
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector(".animais");
const contato2 = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:lastchild");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

// Busca dentro do Ul aoenas
const navItem = primeiroUl.querySelector("li");
// ---- FIM

// NodeList e HTMLCollection
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

titulo.classList.add("grid-section");

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

// Retorne no console todas as imagens do site
const img = document.querySelectorAll("img");
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]');

console.log(imagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector(".animais-descricao h2");
console.log(h2Animais);
// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");

console.log(paragrafos[paragrafos.length - 1]);
