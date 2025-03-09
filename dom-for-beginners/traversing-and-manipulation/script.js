// outerHTML, innerHTML e innerText
// Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas.
// element.innerText = 'Novo Texto'.
const menu = document.querySelector(".menu");

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = "<p>Texto</p>"; // a tag vai como texto
menu.innerHTML = "<p>Texto</p>"; // a tag é renderizada

// Tranversing
// Como navegar pelo DOM utilizando suas propriedades e métodos.
const lista = document.querySelector(".technologies-lista");

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll("li"); // todas as LI's
lista.querySelector("li:last-child"); // último filho

// ---- FIM

// Element vs Node
// Elements representam um elemento HTML, ou seja, uma tag. Node representa um nó e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
const lista2 = document.querySelector(".technologies-lista");

lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child

// Geralmente estamos atrás de um elemento e não de qualquer node em si.

// Manipulando Elementos
// É possível mover elementos no DOM com métodos de Node.
const lista3 = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = document.querySelector(".titulo");

contato.appendChild(lista); // move lista para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista, titulo); // substitui titulo por lista

// ---- FIM

// Novos Elementos
// Podemos criar novos elementos com o método createElement()
const technologies = document.querySelector(".technologies");

const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo título";
novoH1.classList.add("titulo");

animais.appendChild(novoH1);

// Clonar elementos
// Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
const titulo3 = document.querySelector("h1");
const titulo4 = document.querySelector("h1");
const novoTitulo = titulo3;
// titulo3, titulo4 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);
const contato3 = document.querySelector(".contact");
contato.appendChild(cloneTitulo);
// true sinaliza para incluir os filhos

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);

faq.appendChild(cloneH1);

// ---------------- EXERCÍCIO ----------------

// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copyright = document.querySelector(".copyright");

const menuClone = menu.cloneNode(true);

copyright.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const faq2 = document.querySelector(".faq");
const primeiroDt = faq2.querySelector("dt");

console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD);

// Substitua o conteúdo html de .faq pelo de .animais
const faq3 = document.querySelector(".faq");
const tech = document.querySelector(".technologies");

faq3.innerHTML = tech.innerHTML;
