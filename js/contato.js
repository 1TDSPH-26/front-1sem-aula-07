


//Capturar o botão de trigger / botão de enviar
const botaoEnviar = document.querySelector("#btnEnviar");

//Adicionar um evento ao botão de enviar
botaoEnviar.addEventListener("click", (e)=>{
    //Bloqueando o comportamento padrão do FORM através do (e) evento.
    e.preventDefault();

    //Capturando os campos...
    const email = document.querySelector("#idEmail");
    const nome = document.querySelector("#idNome");

    try {
        

         const regexEmail = /\^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
        
        email.addEventListener("change",()=>{
            // //Iniciando a validação dos campos
            // if(email.value === ""){
            //     email.classList.add("danger");
            // }else{
            //     email.classList.add("success");
            // }
            
            if(regexEmail.test(email.value)){
                email.classList.remove("danger");
                email.classList.add("success");
            }else{
                email.classList.remove("success");
                email.classList.add("danger");
            }

        });

            //Iniciando a validação dos campos
            if(email.value === ""){
                email.classList.add("danger");
                const msgEmail = document.querySelector("#msg-email");
                msgEmail.innerHTML = "* Campo Obrigatório!!";
                msgEmail.classList.add("danger");

            }else{
                email.classList.add("success");
            }    

            if(nome.value === ""){
                nome.classList.add("danger");

            }else{
                nome.classList.add("success");
            }

    } catch (error) {
        
    }


} );

