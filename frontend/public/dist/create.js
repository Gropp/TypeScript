// modularizando as funcoes do ALPINE - no JS
// NAO SERA USADO POIS ESTAMOS COM TS
// como estamos usando TS essa funcao vai para o create.ts dentro do src
function  create(){
    // a funcao retorna um objeto que é o esperado pelo x-data
    return {
        // chamando o AXIOS para requisitar o backend
        // como as requisicoes sao promisses a funcao é assincrona e precisamos
        // tratar os erros com try/catch
        create: async function(){
            try {
                // funcoes assincronas precisam ESPERAR O RESULTADO
                const {data} = await axios.post('http://localhost:3000/user/create');
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    }
}