import type { Knex } from "knex";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

const knexConfig: { [key: string]: Knex.Config } = {
    development: {
        client: "mysql2",
        connection: {
            port: parseInt(process.env.MYSQL_DEV_PORT || "5432"),
            user: process.env.MYSQL_DEV_USER,
            password: process.env.MYSQL_DEV_PASSWORD,
            database: process.env.MYSQL_DEV_DATABASE,
        },
        migrations: {
            directory: "./migrations",
            extension: "ts",
        },
        debug: true,
    },
    production: {
        client: "mysql2",
        connection: {
            host: process.env.MYSQL_HOST,
            port: parseInt(process.env.MYSQL_PORT || "5432"),
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        },
    },
};

export default knexConfig;
