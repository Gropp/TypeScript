// importa os tipos request e response do modulo express
import { Request, Response } from "express";

// os arqumentos da funcao serao dos tipos importados
const index = function(request:Request, response:Response){
    // a funcao retorna ao response a string test
    response.send('test');
}

export {index}