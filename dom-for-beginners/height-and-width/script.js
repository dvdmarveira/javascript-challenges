// Height e Width
// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

const section = document.querySelector(".animais");

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, menos dentro de scroll

// offsetTop e offsetLeft
const section2 = document.querySelector(".animais");

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento e o canto esquerdo da página
section.offsetLeft;

// getBoundingClientRect()
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const section3 = document.querySelector(".animais");

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// Window

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height da janela
window.outerWidth; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal, agora é scrollY
window.pageXOffset; // distância total do scroll vertical, agora é scrollX

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}

// matchMedia()
// Utilizar um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}

// ------------------ EXERCÍCIO ------------------

// Verifique a distância da primeira imagem em relação ao topo da página
const imgExer = document.querySelector("img");
const imgTop = imgExer.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgsExer = document.querySelectorAll("img");

  let soma = 0;
  imgsExer.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)

const linksExer = document.querySelectorAll("a");

linksExer.forEach((link) => {
  const linkWidth = linksExer.offsetWidth;
  const linkHeight = linksExer.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(linksExer, "Possui boa acessibilidade");
  } else {
    console.log(linksExer, "Não possui boa acessibilidade");
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia("(max-width: 720px)").matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
