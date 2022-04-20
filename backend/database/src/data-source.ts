import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "admin",
    password: "3l1s1nh4.",
    database: "site_typescript",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ["database/src/migrations/**/*.ts"],
    subscribers: ["database/src/subscribers/**/*.ts"]
})
