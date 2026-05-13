// Declaração de variáveis
// 3 tipos
// Var, Let e Const
/* var nome = "Fiap";
console.log("A melhor faculdade: " + nome);

var nr1 = 10;
var nr2 = "5";
console.log("O resultado da soma: " + (nr1 + parent(nr2))); */

// var variavel = "Giovanni";
// console.log(typeof variavel);

// variavel = 100;
// console.log(typeof variavel);

// variavel = true;
// console.log(typeof variavel);

// variavel = null;
// console.log(typeof variavel);

// variavel = 'a';
// console.log(typeof variavel);

// variavel = {};
// console.log(typeof variavel);

// variavel = [];
// console.log(typeof variavel);

// variavel = 100.456;
// console.log(typeof variavel);

// // Criando um ternário e mexendo com cálculos:
// let idade = 17;

// const resultado = idade > 18 ? "Pode passear" : "Não pode passear";
// // Ultilizando template literals `` com interpolação ${}
// console.log(`O resultado é que ele ${resultado.toLowerCase}.`);

// Diferença entre var e let
// var nome1 = "Giovanni";
// let nome2 = "Carlos";

// if(true){
//     // Redeclaração as variáveis em escopo diferente
//     var nome1 = "Cristiano";
//     let nome2 = "Ronaldo";
// }

// // Imprimir as variáveis do escopo principal
// console.log(nome1);
// console.log(nome2);

// Conversões
let numero = 123;
let numero2 = "123";
console.log(numero + numero2); //123123
console.log(numero + parent(numero2)); //246
console.log(parseFloat(numero)); //12.3
console.log(numero.toString()); //"123"

// Métodos de texto
let frase = "Estão chegando as provas";
const frutas = ["maçã", "banana", "laranja", "uva"]; //Lista (Array) em JavaScript
console.log(frase.length); //25 - quantidade de caracteres na String com os espaços
console.log(frutas.length); //Quantidade de indices na lista
console.log(frase.indexOf("as")); //15 - posição da string especificada
console.log(frutas.indexOf("maçã")); //0 - retorna a posição do item na lista, caso contrário retorna -1
console.log(frase.replace("provas", "férias")); //"Estão chegando as férias"
frutas.splice(1, 1, "limão"); //Replace em listas
console.log(frutas);

//Formatação de números
let valor = 123.456
console.log(valor.toFixed(2)); //Retorna o número com 2 casas decimáis
console.log(valor.toPrecision(4)); //valor com 4 dígitos apenas
