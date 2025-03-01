// Atribuições
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

var numero = 20;
var numero2 = 10;
numero += numero2; // numero = numero + numero2
console.log(numero);
// ---- FIM

// Operador Ternário
// abreviação de condicionais com if e else
var idade = 19;
var naoPossuiDiabetes = true;

var podeBeber =
  idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // Pode beber
// condição ? true : false
// Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição
// ---- FIM

// If Abreviado
// Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código
var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui faculdade");
else console.log("Não possui faculdade");

// ----------------- EXERCÍCIO -----------------

// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500; // scroll = scroll + 500
console.log(scroll);

// Atribua true para a variável darCredito, caso o cliente possua carro e casa.
// False caso o contrário
var possuiCarro = true;
var possuiCasa = true;

var darCredito = possuiCarro && possuiCasa; // possuiCarro === true && possuiCasa === true ? true : false;
var darCredito =
  possuiCarro && possuiCasa
    ? "Dar crédito ao cliente"
    : "Negar crédito ao cliente";
console.log(darCredito);
