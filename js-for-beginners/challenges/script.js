// DESAFIO 1 -------------------------------------------------------------------------------------------------------------------
// Escreva uma função que recebe 6 parâmetros (a,b,c,d,e,f).
// Faça a soma de a com b.
// O resultado da soma, subtraia o valor de c.
// O resultado da subtração, multiplique por d e faça a divisão por e.
// Faça o resultado elevado a potência de f.

// Algoritmo detalhado
// Complete a função:
function myFunctionChallenge1(a, b, c, d, e, f) {
  const soma = a + b;
  const subtracao = soma - c;
  const multiplicacaoDivisao = (subtracao * d) / e;
  const resultado = multiplicacaoDivisao ** f;
  return console.log(
    `A soma é ` + soma,
    `a subtracao é ` + subtracao,
    `a multiplicacao e divisão é ` + multiplicacaoDivisao,
    `o resultado final é ` + resultado
  );
}

console.log(myFunctionChallenge1(6, 5, 4, 3, 2, 1)); // 10.5
console.log(myFunctionChallenge1(6, 2, 1, 4, 2, 3)); // 2744
console.log(myFunctionChallenge1(2, 3, 6, 4, 2, 3)); // -8

// Algoritmo direto
// Complete a função:
function myFunctionChallenge1Pt2(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}

console.log(myFunctionChallenge1Pt2(6, 5, 4, 3, 2, 1)); // 10.5
console.log(myFunctionChallenge1Pt2(6, 2, 1, 4, 2, 3)); // 2744
console.log(myFunctionChallenge1Pt2(2, 3, 6, 4, 2, 3)); // -8

// DESAFIO 2 -------------------------------------------------------------------------------------------------------------------
//Escreva uma função que recebe dois parâmetros (text, flag).
// Se a flag for igual a "start", deve retornar os 3 primeiros caracteres do parâmetro text.
// Se a flag for igual a "end", deve retornar os 3 últimos caracteres do parâmetro text.
// Se o parâmetro text tiver menos de 3 caracteres, apenas retornar o text.

// Algoritmo detalhado
// Complete a função:
function myFunctionChallenge2(text, flag = "start") {
  if (text.length < 3) {
    return text;
  }
  if (flag === "start") {
    return text.slice(0, 3);
  }

  return text.slice(text.length - 3);
}

console.log(myFunctionChallenge2("abcdefg", "start")); // abc
console.log(myFunctionChallenge2("abcdefg", "end")); // efg
console.log(myFunctionChallenge2("ab", "end")); // ab
console.log(myFunctionChallenge2("abcdefg")); // abc

// Algoritmo direto
// Complete a função:
function myFunctionChallenge2pt2(text, flag = "start") {
  return text.length < 3
    ? text
    : flag === "start"
    ? text.slice(0, 3)
    : text.slice(-3);
}

console.log(myFunctionChallenge2pt2("abcdefg", "start")); // abc
console.log(myFunctionChallenge2pt2("abcdefg", "end")); // efg
console.log(myFunctionChallenge2pt2("ab", "end")); // ab
console.log(myFunctionChallenge2pt2("abcdefg")); // abc

// DESAFIO 3 -------------------------------------------------------------------------------------------------------------------
// Escreva uma função que recebe dois parâmetros (fullname, flag).
// Se a flag for igual a "firstname", deve retornar apenas a primeira palavra do parâmetro fullname.
// Se a flag for igual a "lastname", deve retornar todo o texto, exceto a primeira palavra do parâmetro fullname.
// Se o parâmetro flag for vazio ou fullname conter apenas uma palavra, apenas retornar o conteúdo de fullname.

// Algoritmo detalhado
// Complete a função:
function myFunctionChallenge3(fullname, flag = "") {
  const parts = fullname.split(" ");
  if (flag.length == 0 || parts.length <= 1) {
    return fullname;
  } else if (flag === "firstname") {
    return parts[0];
  }
  return parts.slice(1).join(" ");
}

console.log(myFunctionChallenge3("Dvd Marveira", "firstname")); // Dvd
console.log(myFunctionChallenge3("Dvd Marveira", "lastname")); // Marveira
console.log(myFunctionChallenge3("Dvd Marveira")); // Dvd Marveira
console.log(myFunctionChallenge3("Dvd", "lastname")); // Dvd

// Algoritmo direto
// Complete a função:
function myFunctionChallenge3pt2(fullname, flag = "") {
  const parts = fullname.split(" ");
  return flag.length == 0 || parts.length <= 1
    ? fullname
    : flag === "firstname"
    ? parts[0]
    : parts.slice(1).join(" ");
}

console.log(myFunctionChallenge3pt2("Dvd Marveira", "firstname")); // Dvd
console.log(myFunctionChallenge3pt2("Dvd Marveira", "lastname")); // Marveira
console.log(myFunctionChallenge3pt2("Dvd Marveira")); // Dvd Marveira
console.log(myFunctionChallenge3pt2("Dvd", "lastname")); // Dvd

// DESAFIO 4 -------------------------------------------------------------------------------------------------------------------
// Escreva uma função que recebe um número como parâmetro.
// Se o número for par, retorna true e se for ímpar, retorna false.

// Algoritmo detalhado
// Operador de resto (módulo): %
// 10 % 2 = 0, pois 10 dividido por 2 é 5 e não sobra restos, já 5 % 2 = 1, pois 5 dividido por 2 resulta em 2 e resta 1.
// Complete a função:
function myFunctionChallenge4(num) {
  return num % 2 === 0;
}

console.log(myFunctionChallenge4(8)); // true
console.log(myFunctionChallenge4(-10)); // true
console.log(myFunctionChallenge4(7)); // false
console.log(myFunctionChallenge4(-41)); // false

// DESAFIO 5 -------------------------------------------------------------------------------------------------------------------
// Escreva uma função que recebe duas strings (a, b) como parâmetro e retorna o número de vezes que a string a é utilizada dentro de b.

// Algoritmo com Regex
function myFunctionChallenge5(a, b) {
  return b.match(new RegExp(a, "gi")).length;
}

console.log(
  myFunctionChallenge5("a", "Quantas vezes o valor de 'a' ocorre aqui?")
); // 5
console.log(
  myFunctionChallenge5("as", "Quantas vezes o valor de 'a' ocorre aqui?")
); // 1
console.log(
  myFunctionChallenge5("q", "Quantas vezes o valor de 'a' ocorre aqui?")
); // 2

// Algoritmo com split
function myFunctionChallenge5pt2(a, b) {
  return b.toLowerCase().split(a.toLowerCase()).length - 1;
}

console.log(
  myFunctionChallenge5pt2("a", "Quantas vezes o valor de 'a' ocorre aqui?")
); // 5
console.log(
  myFunctionChallenge5pt2("as", "Quantas vezes o valor de 'a' ocorre aqui?")
); // 1
console.log(
  myFunctionChallenge5pt2("q", "Quantas vezes o valor de 'a' ocorre aqui?")
); // 2
