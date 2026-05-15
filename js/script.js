// ---------------------------- Aula 3 ----------------------------

//Declaração de variáveis com JS
//3 tipos = var / let / const
/*
*Comentário de Bloco
*/

// ---- Declaração com var: ----
// var nome = "Fiap";
// console.log("A melhor faculdade : " + nome);

// var nr1 = 10;
// var nr2 = "5";
// console.log("Resultado da soma : " + (nr1 + parseInt(nr2) ));

// var variavel = "Carolina"
// console.log(typeof variavel);

// var variavel = 10
// console.log(typeof variavel);

// var variavel = true
// console.log(typeof variavel);

// var variavel = null 
// console.log(typeof variavel);

// var variavel = 'a'
// console.log(typeof variavel);

// var variavel = {}
// console.log(typeof variavel);

// var variavel = []
// console.log(typeof variavel);

// var variavel = 100.456
// console.log(typeof variavel);

// // ---- Criando um ternário e mexendo com cálculos ----
// let idade = 20;
// //                                   True             False
// const resultado = idade > 18 ? "pode passear :3" : "não pode >:C"

// //Utilizando template literals '' com  interpolação ${} (print formatado)
// console.log(`O resultado é que ele ${resultado.toLowerCase()}.`);

// ---- Diferença entre var e let ----
// var nome1 = "Alê";
// let nome2 = "Carlos";

// if(true){
//     //Redeclarando
//     var nome1 = "Joaquim";
//     let nome2 = "das Couves";
// }

// // Imprimir as variáveis do escopo principal(aonde foram declaradas)! :>
// console.log(nome1);
// console.log(nome2);

/*---- var faz Hoisting - Içar ----
(Você não tem controle sobre valores de varoáveis com o mesmo nome.
Ela sempre soprepõe o valor de variáveis com o mesmo nome, independente
de onde foi declarada - escopo)
(O let faz o que seria o certo:
Em variáveis com o mesmo nome, ele prioriza o valor de onde foi declarado.)
*/

// ---------------------------- Aula 4 ----------------------------

// Conversões:
// let numero = "123";
// let numero2 = 123;
// console.log(numero + numero2); // 123
// console.log(numero2 + parseInt(numero)); // 123
// console.log(parseFloat("12.5")); // 12.5
// console.log(numero.toString()); // “123”


// Métodos de texto e de listas
// let frase = "Estão chegando as provas!";
// console.log(frase.length); // 25 – Retorna a quantidade de caracteres da string

// const frutas = ["maçã","banana","laranja","uva"];
// console.log(frutas.length); // 4 – Retorna a quantidade de itens na lista/array

// console.log(frase.indexOf("xx")); // 15 – Retorna a posição da string encontrada
// console.log(frutas.indexOf("limão")); // Retorna a posição na lista do item encontrado caso contrário, retorna -1

// console.log(frase.replace("provas", "férias")); // “Estão chegando as férias!”
// frutas.splice(1,1,"limão");//Em listas utilizamos o splice para remover e substituir elementos em determinadas posições.
// console.log(frutas);
// frutas[1] = "uva";
// console.log(frutas[1]);

// Formatação de número:
// let valor = 123.456;
// console.log(valor.toFixed(2)); // “123.46”
// console.log(valor.toPrecision(4)); // “123.5”

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

// console.log(2 > 2);
// console.log(2 >= 2);
// console.log(2 < 2);
// console.log(2 <= 2);
// console.log(2 == 2);
// console.log(2 != 2);
// console.log(2 === 2);
// console.log(2 !== 2);


//Variáveis pós e pré incrementada.
// let x = 10;
// console.log(x++);
// console.log(x);
// console.log(++x);


// //Exemplo de acumulação:
// x += 5;
// console.log(x);

// x -= 5;
// console.log(x);

// x *= 5;
// console.log(x);

// x /= 5;
// console.log(x);

// x %= 5;
// console.log(x);

// x **= 5;
// console.log(x);

// ---------------------------- Aula 5 ----------------------------

//Função tradicional:
// function soma(a=0, b=0){
//     let resultado = a+b;
//     console.log("Resultado da operação: ");
//     return resultado;
// } //função anônima - não está ligada à ninguém

// function soma(...args){
//     let resultado = 0;
//     for(let x = 0; x < args.length; x++){
//         resultado += args[x];
//     }
//     console.log("Resultado da operação: ", resultado);
//     return resultado;
// } //recebendo parâmentros através do operador SPREAD.

// // console.log("Executando no escopo principal.");

// soma(2,2,4,2);

//Arrow-function - função declarada e anônima 
//  const soma = (...args) => {
//     let resultado = 0;
    
//     for(let x = 0; x < args.length ; x++){
//         resultado += args[x];
//     }

//     console.log("Resultado da operação:", resultado);
//     return resultado;
// }

// //  console.log("Executado no escopo principal!");

// soma(2,2,4,2);

// // Utilizar esta:
// const valida = () => 2 > 1;

// Classe Window para manipular redirecionamento
const intervalo = setInterval( ()=>{
    window.location.href = "./index.html"
    clearInterval(intervalo);
}, 5000);
