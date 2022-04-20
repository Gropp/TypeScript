// importando o axios e o caminho da aplicacao http://locahost:3000
import http from "./helpers/http";
import { userCreateInterface  } from "../interfaces/userCreateInterface";
import { errorValidateInterface } from "../interfaces/errorValidateInterface";
import { USER_CREATED } from "./helpers/contantes";

// exportando as funcoes do alpine para esse arquivo
// modularizando as funcoes

function create(): userCreateInterface {
    // a funcao retorna um objeto que é o esperado pelo x-data
    return {
        created:false,
        errors:{
            email_duplicated:false,
        }
        // chamando o AXIOS para requisitar o backend
        // como as requisicoes sao promisses a funcao é assincrona e precisamos
        // tratar os erros com try/catch
        user: {
            firstname: "Fernando",
            lastname: "Gropp",
            email: "fgropp@gmail.com",
            password:"********",
        },
        createUser: async function(){
            try {
                // console.log(this.user);
                // funcoes assincronas precisam ESPERAR O RESULTADO
                // const {data} = await http.post("/user/create");
                const {data} = await http.post("/user/store", this.user);
                console.log(data);
                if(data === USER_CREATED){
                   this.created = true;
                   setTimeout(() => {
                       this.created = false;
                   }, 3000);
                }
            } catch (error) {
                
                const errors = error.response?.data?.errors;
                // errors é só para validar os campos do formulario
                if (errors){
                    errors.forEach((element:errorValidateInterface) => {
                        const elementValidation = document.querySelector(
                            `#error-${element.user.param}`
                        ) as HTMLSpanElement;
                        elementValidation.innerHTML = element.user.msg;

                        setTimeout(() => {
                            elementValidation.innerHTML='';
                        }, 3000);
                    });
                } else {
                    switch(error?.response?.data){
                        case 'EMAIL_DUPLICATED':
                            errors.email_duplicated = true;
                            break;
                    }
                   setTimeout(() => {
                       this.errors.email_duplicated = false
                   }, 3000);
                }
            }
        }
    }
}

// manda o modulo exportar a funcao create
export default create;