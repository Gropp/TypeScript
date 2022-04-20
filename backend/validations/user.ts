import { body } from "express-validator";

export const userStorevalidate = [
    body("firstName")
    .escape()
    .not()
    .isEmpty()
    .withMessage("Nome Obrigatório"),

    body("lasttName")
    .escape()
    .not()
    .isEmpty()
    .withMessage("Sobrenome Obrigatório"),

    body("email")
    .escape()
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("E-mail invalido"),

    body("password")
    .escape()
    .not()
    .isEmpty()
    .withMessage("Password Obrigatório"),
];