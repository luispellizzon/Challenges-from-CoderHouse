const firstName = prompt("Qual o seu primeiro nome?");
const lastName = prompt("Qual o seu sobrenome nome?");

let userDate = parseInt(prompt("Qual o seu ano de nascimento?"), 10);

let userAge = new Date().getFullYear() - userDate;

alert(
  `Nome de Usuario: ${
    firstName + " " + lastName
  }\nIdade Aproximada: ${userAge} anos`
);
