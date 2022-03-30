// chama o modulo express
import express from 'express';
// controllers
import {store} from '../controllers/User';

// cria uma constante de caminho
const router = express.Router();

// pega o caminho raiz
router.post('/create', store);

export default router;