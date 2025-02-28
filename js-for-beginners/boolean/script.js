// Boolean e condicionais
var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}

//
var nome = "David";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não declarado");
}

// Exercicios
var nome = "Andre"; // truthy
var idade = 28; // truthy
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

var brasil = 207;
var china = 1340;
if (brasil === china) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
// Falso, pois brasil não é igual a china

if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
// Falso

if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
// Cão
