import "alpinejs";
import create from "./create";
import { userCreateInterface } from "../interfaces/userCreateInterface";
// declarar a funcao de forma global para todos enxergarem
declare global {
    interface Window {
        create: () => userCreateInterface;
    }
}

window.create = create;