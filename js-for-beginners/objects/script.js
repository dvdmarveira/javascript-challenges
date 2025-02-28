// Objetos
// Conjunto de variáveis e funções, que são chmadas de propriedades e métodos
var pessoa = {
  nome: "Deyvid",
  idade: 28,
  profissao: "Desenvolvedor",
  possuiFaculdade: true,
};

console.log(pessoa.nome); // Deyvid
console.log(pessoa.possuiFaculdade); // true
// ---- FIM

// Métodos
// É uma propriedade que possui uma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20
// ---- FIM

// Métodos
// Abreviação de "area: function() {}" para "area() {}", no ES6+
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};
// ---- FIM

// Organizar o código
// Objetos servem para organizar o código em pequenas partes reutilizáveis
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14
// obs: Math é um objeto nativo de JavaScript.
// console é um objeto e log() um método do objeto console.
// ---- FIM

// Criar um objeto
// Um objeto é criado utilizando as chaves{}
var carro = {};
var pessoa = {};

console.log(typeof carro);
// ---- FIM

// Do Notation Get
// Acesse propriedades de um objeto utilizando o ponto .
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

var bg = menu.backgroundColor; // '#84E'

// Do Notation Set
// Acesse o valor de uma propriedade utilizando . e o = após o nome da mesma.
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#83E",
};

menu.backgroundColor = "#000";
console.log(menu.backgroundColor); // #'000'

// Adicionar propriedades e métodos
// Basta adicionar um novo nome e definir o valor.
var menu = {
  width: 800,
};

menu.height = 50;
menu.position = "fixed";
// ---- FIM

// Palavra-chave "this"
// this irá fazer uma referênciia ao próprio objeto.
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

menu.metadeHeight(); // 25
// sem o this, seria 60
// ---- FIM

// Protótipo e Herança
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var menu = {
  width: 800,
};

menu.hasOwnProperty("width"); // true
menu.hasOwnProperty("height"); // false
// hasOwnProperty é um método de Object
// ---- FIM

// --------------------------- EXERCÍCIO ---------------------------

// Crie um objeto com os seus dados pessoais
// obs: deve possuir pelo menos duas propriedades nome e sobrenome
var anoAtual = 2025;
var dadosPessoais = {
  nome: "Deyvid Diogo",
  sobrenome: "Marques de Oliveira",
  anoNascimento: 2001,
  idade(anoNascimento) {
    return anoAtual - this.anoNascimento;
  },
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

console.log(dadosPessoais);
console.log(dadosPessoais.nome);
console.log(dadosPessoais.idade(2005));
console.log(dadosPessoais.nomeCompleto());

// Crie um método no objeto anterior, que mostre o seu nome completo
// nomeCompleto() {
//   return this.nome + " " + this.sobrenome;
// },
// console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador preto com 10 anos que late ao ver um homem
var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10, // em anos
  latir(pessoa) {
    if (pessoa === "homem") {
      return "O cachorro está latindo";
    } else if (pessoa === "mulher") {
      return "O cachorro não está latindo";
    } else {
      return "Digite 'homem' ou 'mulher'.";
    }
  },
};

console.log(cachorro.latir("mulher"));
// ---- FIM
