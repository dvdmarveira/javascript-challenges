// classList
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector(".menu");

menu.className; // string
menu.classList; // lista de classes
menu.classList.add("ativo");
menu.classList.add("ativo", "mobile"); // duas classes
menu.classList.remove("ativo");
menu.classList.toggle("ativo"); // adiciona/remove a classe
menu.classList.contains("ativo"); // true ou false
menu.classList.replace("ativo", "inativo");

// Attributes
// Retorna uma array-like com os atributos do elemento.
const animais = document.querySelector(".animais");

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

// getAttribute e setAttribute
// Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector("img");

img.getAttribute("src"); // valor do src
img.setAttribute("alt", "Texto Alternativo"); // muda o alt
img.hasAttribute("id"); // true / false
img.removeAttribute("alt"); // remove o alt

img.hasAttribute(); // true / false se tem algum atributo

// Read Only vs Writable
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only.
const animais2 = document.querySelector(".animais");

animais.className; // string com o nome das classes
animais.clssName = "azul"; // substitui completamente a string
animais.className += " vermelho"; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read only.

// obs: podemos modificar o valor de uma propriedade objeto.propriedade = ''

// -------------- EXERCÍCIO --------------

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});
itensMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imgimg = document.querySelectorAll("img");

imgimg.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(possuiAtributo);
});

// Modifique o href do link externo no menu
const link = document.querySelector('.menu a[href^="http"]');

link.setAttribute("href", "#");
console.log(link);
