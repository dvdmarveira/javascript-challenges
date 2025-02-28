// Strings, números, boolean, objetos e mais, possuem propriedades e métodos. Por isso são objetos.
// Uma string herda propriedades e métodos do construtor String()
var nome = "Deyvid";

nome.length; // 6
nome.charAt(0); // D
nome.replace("id", "ide"); //Deyvide
nome; // Deyvid

// Números
// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos
var altura = 1.75;

altura.toString(); //'1.75'
altura.toFixed(); // 2

// Funções
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
areaQuadrado.length; // 1
// ---- FIM

// Elementos do DOM
// Quase todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM. (interação do JAVASCRIPT com HTML).
// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.

/* <a class="btn">Clique</a>; */
var btn = document.querySelector(".btn");

btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});

// ----------------------- EXERCÍCIO -----------------------

// Nomeie 3 propriedades ou métodos de strings
// Nomeie 5 propriedades ou métodos de elementos do DOM
// Busque na web um objeto (método) capaz de interagir com o clipboard
// obs: clipboard é a parte do seu computador que lida com o CTRL + C
