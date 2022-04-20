// chama o modulo express
import express from 'express';
// controllers
import {store} from '../controllers/User';

import {userStorevalidate} from '../validations/user';

// cria uma constante de caminho
const router = express.Router();

// pega o caminho raiz
// estava post
router.post('/store', userStorevalidate, store);

export default router;