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
// let numero = "123";
// console.log(parseInt(numero)); // 123
// console.log(parseFloat("12.5")); // 12.5
// console.log(numero.toString()); // “123”
// // Métodos de texto e lista:
// let frase = "Estão chegando as provas!";
// console.log(frase.length); // 26 – Retorna a quantidade de caracteres da string

// const frutas = ["maçã","banana","uva","laranja"]
// console.log(frutas.length); // 4 – Retorna a quantidade de itens na lista


// console.log(frase.indexOf("as")); // 15 – Retorna a posição da string encontrada
// console.log(frutas.indexOf("limão")); //  – Retorna a posição da string encontrada, caso ao contrario  ele retorna -1

// console.log(frase.replace("provas", "férias")); // “Estão chegando as férias!”
// frutas.splice(1,1,"limão")// em listas utilizamos o splice para remover ou substituir elementos em uma determinada poscição
// console.log(frutas);

// // Formatação de número:
// let valor = 123.456;
// console.log(valor.toFixed(2)); // “123.46”
// console.log(valor.toPrecision(4)); // “123.5”

//Variaveis pós e pré icrementada
// let x = 10
// console.log(x++)
// console.log(x)
// console.log(++x)

/*

let energia = 100;
executar()

function executar(){
    const intervalo = setInterval(function(){
        energia -= 5;
        console.log("Sistema operando...", energia);
        if(energia <=0){
    clearInterval(intervalo)
    console.log("Sistema parando...")
}
    }, 2000);
}
//estrutura de repetição

// // while (energia > 0) {
//     // console.log("Sistema operando...");
//     // Reduz a cada ciclo
//     // } 
// */

// function soma(...args){
//     let resultado = 0;
//     for (let val of args){
//         resultado += val;
//     }
//     return resultado
// }
// console.log(soma(5, 5, 6))
// //
//

// const intervalo = setInterval( ()=>{
//     window.location.href = "../index.html";
//     clearInterval(intervalo);
// }, 5000 );

//Capturando o botão no DOM com o método querySelector()
//const botaoEntrar = document.querySelector("button type=['submit']");
const botaoEntrar = document.querySelector("#btnEntrar");
 
// botaoEntrar.addEventListener("evento" , função de callback anônima );
botaoEntrar.addEventListener("click" , (e)=>{
   
    //Controlando o comportamento padrão do evento "submit"
    e.preventDefault();
 
    //PARA CASA
    //Capture os campos de EMAIL e SENHA
    //Imprimir seus valores no console
    const email = document.querySelector("#idEmail");
    const senha = document.querySelector("#idSenha");
   
    console.log(email.value);
    console.log(senha.value);
 
    //Validação dos dados entrantes
    //Criando um objeto local para servir como base de validações
    const userValidate = {
        nome : "João",
        email : "email@email.com",
        senha : "12345",
        idade : 20,
        genero: "m",
        trabalhando: true,
        endereco:{
            rua:"Rua Dois",
            numero: 10,
            cep: "12345-678",
            cidade: "São Paulo",
            estado: "SP"
        },
        telefone: [
            {
                ddd : 11,
                numero: 123456789
            },
            {
                ddd : 11,
                numero: 987654321
            }
        ],
       
        //função para imprimir o objeto userValidate
        dados : function(){
            console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos. Sou do gênero ${this.genero === "m" ? "masculino" : "feminino"
            }. Atualmente  ${this.trabalhando ? "estou" : "não estou"} trabalhando. Estou residindo na ${this.endereco.rua}, número ${this.endereco.numero}, cep ${this.endereco.cep}, cidade ${this.endereco.cidade} e estado ${this.endereco.estado}. Caso queira falar comigo, meu telefone é (${this.telefone[0].ddd})${this.telefone[0].numero} ou pode deixar recado neste outro número: (${this.telefone[1].ddd})${this.telefone[1].numero}.`);
        }
    }
 
    //Função de validação dos dados:
    try {
       
        if(userValidate !== null){
            throw new Error("O usuário já está cadastrado");
        }else{
            throw new Error("O usuário não está cadastrado");
        }
 
    } catch (error) {
        console.error(error.message);
        alert(`Erro: ${error.message}`);
    }
 
 
});
 

