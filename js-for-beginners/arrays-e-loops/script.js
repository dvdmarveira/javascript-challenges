// Array
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
var videoGames = ["Switch", "PS4", "XBox"];

videoGames[0]; // Switch
videoGames[2]; // XBox

// Métodos e propriedades de uma array
var videoGames = ["Switch", "PS4", "XBOX"];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push("3DS"); // Adiciona ao final da array
videoGames.length; // 3
// ---- FIM

// For Loop
// Fazem algo repetidamente até que uma condição seja atingida.
// O for loop possui 3 partes: início, condição e incremento.
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console

// While Loop
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console

// Arrays e Loops
var videoGames = ["Switch", "PS4", "XBOX", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}
// ---- FIM

// Break
// O loop irá parar caso encontre a palavra break
// Arrays e Loops
var videoGames = ["Switch", "PS4", "XBOX", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}
// ---- FIM

// forEach
// forEach é um método que executa uma função para cada item da array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
var videoGames = ["Switch", "PS4", "XBOX", "3DS"];
videoGames.forEach(function (i) {
  console.log(i);
});
// O argumento item será atribuido dinamicamente
// Podemos passar os seguintes parâmetros item, index e array.
// ---- FIM

// Não se confundir com a sintaxe
var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}

// ----------------- EXERCÍCIOS -----------------

// Crie uma array com os anos que o Brasil ganhou a copa
// obs: 1959, 1962, 1970, 1994, 2002
var vitoriasBrasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem: "O Brasil ganhou a copa de ${ano}"
for (var ano = 0; ano < vitoriasBrasil.length; ano++) {
  console.log(`O Brasil ganhou a copa de ${vitoriasBrasil[ano]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];
for (var loopPera = 0; loopPera < frutas.length; loopPera++) {
  console.log(frutas[loopPera]);
  if (frutas[loopPera] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
