var idade = 23;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4 -> 10/5 = 2(ok), sobra 4

// Operadores aritméticos (Strings)

var soma = "100" + 50; // 10050
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * "2"; // 200
var divisao = "Comprei 10" / 2; //NaN (Not a Number)
console.log(divisao);
console.log(isNaN(divisao));

// Ordem de resolução

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

var soma1 = 10 + 10 + 20 + (30 * 4) / 2 + 10;
console.log(soma1);

// Operadores aritméticos unários

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var frase = "Isso é um teste";
+frase;
-frase;
console.log(+frase); // NaN
console.log(-frase); // NaN

var idade = "28";
+idade; // 28(número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade);

// Exercicio

var segundos = "4s";
var minutos = 2;
console.log(
  "A quantidade de segundos somados com minutos é " + segundos * minutos
);

var frutas = "10 frutas";
var preco = 5;
var valorTotal = frutas * preco;
console.log("O valor total das frutas foi de " + valorTotal);

var stringUm = "200";
var numUm = 50;
var somaTotal = +stringUm + numUm;
console.log(somaTotal);

var increment = 5;
console.log(++increment);

var numero = "80";
var unidade = "kg";
var peso = numero + unidade;
console.log(peso);
var pesoPorDois = numero / 2;
console.log(pesoPorDois);
