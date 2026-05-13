//declaração de variaveis com js
//3 tipos - var / let / const

/*
comentario de bloco
*/

//declaração de var:
//var nome = "Fiap";
// console.log("A melhor faculdade: " + nome);

// var nr1 = 10;
// var nr2 = "5";
// console.log("soma: " + (nr1 + parseInt(nr2)));


// var variavel = "Felipe" ;
// console.log(typeof variavel);

// variavel = 100 ;
// console.log(typeof variavel);

// variavel = true;
// console.log(typeof variavel);

// variavel = null ;
// console.log(typeof variavel);

// //criando um ternario e mexendo com cauculos

// let idade = 17;

// const resultado = idade > 18 ? "Pode passear" : "Não pode passear";

// //Utilizando template literals `` com interpretação ${}
// console.log(`O resultado é que ele ${resultado.toLocaleLowerCase()}.`)

//Diferença entre vare let:

// var nome1 = "Felipe";
// let nome2 = "Elias";

// if(true){
//     //Redeclarando as variaveis em escopo diferente
//     var nome1 = "Joaquim";
//     let nome2 = "das Couves";

// }
// //Imprimindo as variaveis do escopo principar
// console.log(nome1);
// console.log(nome2);
// Conversões:
let numero = "123";
console.log(parseInt(numero)); // 123
console.log(parseFloat("12.5")); // 12.5
console.log(numero.toString()); // “123”
// Métodos de texto e lista:
let frase = "Estão chegando as provas!";
console.log(frase.length); // 26 – Retorna a quantidade de caracteres da string

const frutas = ["maçã","banana","uva","laranja"]
console.log(frutas.length); // 4 – Retorna a quantidade de itens na lista


console.log(frase.indexOf("as")); // 15 – Retorna a posição da string encontrada
console.log(frutas.indexOf("limão")); //  – Retorna a posição da string encontrada, caso ao contrario  ele retorna -1

console.log(frase.replace("provas", "férias")); // “Estão chegando as férias!”
frutas.splice(1,1,"limão")// em listas utilizamos o splice para remover ou substituir elementos em uma determinada poscição
console.log(frutas);

// Formatação de número:
let valor = 123.456;
console.log(valor.toFixed(2)); // “123.46”
console.log(valor.toPrecision(4)); // “123.5”