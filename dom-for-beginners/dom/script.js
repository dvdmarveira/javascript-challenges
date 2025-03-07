// Document Object Model (DOM)
// Interface que representa documentos HTML e XML através de objetos, sendo possível manipular a estrutura, estilo e conteúdo destes documentos.
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser
// ao inspecionar elemento com o chrome, vemos a representação oficial do dom.

// Window e Document
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.
// window.alert("Isso é um alerta"); // Funciona
// alert("Isso é um alerta"); // Funciona

document.querySelector("h1"); // Seleciona o primeiro h1
// DIFERENÇA ENTRE querySelector e getElementById >> querySelector utiliza o seletor css, ex: class, id, tag; getElementById seleciona apenas pelo id de forma isolada.

console.log(document.body); // Retorna o body
// window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e prorpiedades.

// Node
// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.
const titulo = document.querySelector("h1");

console.log(titulo.innerText); // retorna o texto;
console.log(titulo.classList); // retorna as classes;
console.log(titulo.id); // retorna o id;
console.log(titulo.offsetHeight); // retorna a altura do elemento;

function callbackh1() {
  console.log("Clicou em", titulo.innerText);
}

titulo.addEventListener("click", callbackh1);
// ativa a função callback ao click no título

// ------------------- EXERCÍCIO -------------------

// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);
console.log(window.document.URL);

// Seleciona o primeiro elemento da página que possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");
// Retorne a linguagem do navegador
console.log(window.navigator.language);
// Retorne a largura da janela
console.log(window.innerWidth);
