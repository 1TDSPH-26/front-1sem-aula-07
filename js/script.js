
//Declaração de variáveis com JS
//3 tipos = var / let / const
/*
*Comentário de Bloco
*/

//Declaração com var:
// var nome = "Fiap";
// console.log("A melhor faculdade : " + nome);

// var nr1 = 10;
// var nr2 = "5";
// console.log("Resultado da soma : " + ( nr1 + parseInt(nr2) ));

// var variavel = "Alê";
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

// //Criando um ternário e mexendo com cálculos:

// let idade = 17;

// const resultado = idade > 18 ? "Pode passear" : "Não pode passear";

// //Utilizando template literals `` com interpolação ${ }
// console.log(`O resultado é que ele ${resultado.toLowerCase()}.`);


//Diferença entre var e let:
// var nome1 = "Alê";
// let nome2 = "Carlos";

// if(true){
//     //Redeclarando as variáveis em escopo diferente
//     var nome1 = "Joaquim";
//     let nome2 = "das Couves";
// }

// //Imprimir as variáveis do escopo principal!
// console.log(nome1);
// console.log(nome2);

// Conversões:
// let numero = "123";
// let numero2 = 123;
// console.log(numero + numero2); // 123
// console.log(numero2 + parseInt(numero)); // 123
// console.log(parseFloat("12.5")); // 12.5
// console.log(numero.toString()); // “123”


// // Métodos de texto e de listas
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

// // Formatação de número:
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

// function soma(a=0,b=0){
//     let resultado = a+b;
//     console.log("Resultado da operação:");
//     return resultado;
// }

//Recebendo parâmetros através do operador SPREAD:
// function soma(...args){
//     let resultado = 0;
    
//     for(let x = 0; x < args.length ; x++){
//         resultado += args[x];
//     }

//     console.log("Resultado da operação:", resultado);
//     return resultado;
// }

// //  console.log("Executado no escopo principal!");

// soma(2,2,4,2);

//Arrow-Function
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

// const valida = () => 2 > 1;

// const intervalo = setInterval( ()=>{
//     window.location.href = "./index.html"
//     clearInterval(intervalo);
// }, 5000);

// const botaoEntrar = document.getElementById("btnEntrar")
// console.log(botaoEntrar.textContent);
// botaoEntrar.textContent = "OK";
// botaoEntrar.style.backgroundColor = "yellow";
// const pessoa = {
//     nome : "nome",
//     idade : 33,
//     correr : ()=>{

//     }
// }

// function soma2 (){
//     return a+b;
// }

// const soma = () => {
//     return a+b;
// }

//Capturando o botão no DOM com o método getElementById()
//const botaoEntrar = document.getElementById("btnEntrar");

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

            if((userValidate.email === email.value) && (userValidate.senha === senha.value)){
                alert("Login realizado com sucesso!");
                //Redirecionando o usuário para a página inicial:
                // window.location.href = "../index.html";

                //Redirecionandor temporizado:
                let contador = 5;

                //Capturando a div que vai receber a mensagem:
                let divMsg = document.querySelector("#msg");

                //Injetando o contador na div capturada:
                divMsg.innerHTML = `<p style="color:#046104;background-color:#75dc75; font-size:20px;border:2px solid #046104;text-align:center; padding:10px"> Você será redirecionado em ${contador} segundos...</p>`;


            }else{
                throw new Error("Email ou senha incorretos!");
            }

        }else{
            throw new Error("Sistema de informações inoperante.");
        }

    } catch (error) {
        console.error(error.message);
        alert(`Erro: ${error.message}`);
    }


});