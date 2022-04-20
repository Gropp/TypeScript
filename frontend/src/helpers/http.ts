// modulo para importar o axios e para direcionar as requisicoes para o backend
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    headers:{
        "Content-type": "application/jason",
    },
});

export default axiosInstance;