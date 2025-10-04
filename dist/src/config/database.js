import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
let connection = null;
export const getConnection = async () => {
    if (!connection) {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT) || 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
    }
    return connection;
};
//# sourceMappingURL=database.js.map