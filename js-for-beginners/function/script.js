// Funções sao blocos de códigos que podem ser executados e reutilizados. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4)); // 16
console.log(areaQuadrado(5)); // 25
console.log(areaQuadrado(2)); // 4
// ---- FIM

// Utilizar parênteses () para executar a função
function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);
// ---- FIM

// Ao criar uma função, você pode definir parâmetros
// Ao executar uma função, você pode passar argumentos
// Peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(80, 1.8)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.7)); // 60 e 1.70 são os argumentos
// ---- FIM

// Algoritmo detalhado
function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta de azul";
  } else if (cor === "verde") {
    return "Você gosta de verde";
  } else {
    return "Você não gosta de cores";
  }
}

console.log(corFavorita()); // retorna 'Você não gosta de cores'

// Algoritmo ternário
function corFavorita2(cor) {
  return cor === "azul"
    ? `Você gosta de ${cor}`
    : cor === "verde"
    ? `Você gosta de ${cor}`
    : "Você não gosta nem de azul e nem de verde";
}

console.log(corFavorita2()); // retorna 'Você não gosta nem de azul e nem de verde'
// ---- FIM

// Argumentos podem ser funções
// Chamadas de callback, geralmente são funções que ocorrem após algum evento
// addEventListener é uma função nativa do JS
// Essa função possui dois parâmetros
// Primeiro é a string 'click', segundo é uma função anônima

addEventListener("click", function () {
  console.log("Clicou");
});
// ---- FIM

// Função pode ou não retornar um valor
// Quando não definimos o return, ela irá retornar 'undefined'. O código interno da função é executado normalmente, independente de existir valor de return ou não.
function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(80, 1.8); // retorna o imc
console.log(imc2(100, 1.9)); // retorna o imc e undefined
// ---- FIM

// Valores retornados
// Uma função pode retornar qualquer tipo de dado e até outras funções, mas não é o recomendado
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Favor, preencha com um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));

// Escopo
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países`;
}

// console.log(totalPaises); // totalPaises is not defined
// ---- FIM

// Escopo Léxico
// Funções conseguem acessar variáveis que foram criadas no contexto pai.
var profissao = "Designer";
function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro
// ---- FIM

// Hoisting
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória. Ou seja, mesmo que a função com o parâmetro tenha sido definida depois do argumento, ela ainda funciona.
imc3(80, 1.8);
function imc3(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
// ---- FIM

// ----------------------------- EXERCICIOS -----------------------------

// Crie uma função para verificar se um valor é Truthy
function myFunctionTruthy(valor) {
  return !!valor;
}

console.log(myFunctionTruthy(null));

// Crie uma função matemática que retorne o perímetro de um quadrado
// obs: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  const perimetro = lado * 4;
  return perimetro;
}

console.log(perimetroQuadrado(10));

// Crie uma função que retorne o seu nome completo
// obs: ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  const meuNome = `Meu nome é ${nome} ${sobrenome}`;
  return meuNome;
}

console.log(nomeCompleto("Dvd", "Marques"));

// Crie uma função que verifica se um número é par
function numeroParOuImpar(numero) {
  if (numero % 2 === 0) {
    return `${numero} é par!`;
  } else {
    return `${numero} é ímpar!`;
  }
}

console.log(numeroParOuImpar(3));
console.log(numeroParOuImpar(5));
console.log(numeroParOuImpar(8));

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}

console.log(tipoDeDado(5));
console.log(tipoDeDado("5"));
console.log(tipoDeDado(null));

// addEventListener é uma função nativa do JS
// o primeiro parâmetro é o evento que ocorre e o segundo o callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
const nomeCompleto2 = "Deyvid Marques";
addEventListener("click", function () {
  console.log("Deyvid Marques");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoConhecer(paisesConhecidos) {
  return `Ainda faltam ${totalPaises - paisesConhecidos} países para conhecer`;
}
function jaConheci(paisesConhecidos) {
  return `Já conheci ${paisesConhecidos} o total de ${totalPaises} países`;
}
console.log(precisoConhecer(20));
console.log(jaConheci(20));
// ---- FIM
