// antiga chamda do modulo express
//const express = require('express');

//apos instalar o typescript no backend e o ts-node-dev, podemos chama o express da seguinte forma:
//agora sempre que mudar ele reinicia o servidor
import express from "express";

// importa a rota criada
import home from '../routes/home';

// essa chamada pode gerar um problema caso tenha outras paginas com o mesmo metodo index
// para isso tem que criar rotas bem definidas dentro da pasta route
// ou chamar {index as homeIndex} para separar os nomes na chamada
// apos criar a rota no home.js do diretorio routes o comando abaixo vai para esse arquivo
// import {index} from '../controllers/Home';

const app = express();

//rota para quando o usuario acessar o raiz da pagina ele abra o controller Home.ts
// associa index ao metodo acima importado do controller HOME
// com a criacao da rota a variavel index morreu
//app.use('/', index);
app.use('/', home);

// cria uma rota
// app.get('/', function(){

// });

//cria um evento para ouvir o servidor, se subir joga uma mensagem no console
app.listen(3000, function(){
    console.log('Servidor Rodando :P');
});