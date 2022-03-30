// chama o modulo express
import express from 'express';
// controllers
import {index} from '../controllers/Home';

// cria uma constante de caminho
const router = express.Router();

// pega o caminho raiz
router.get('/', index);

export default router;