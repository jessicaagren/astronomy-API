import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let connection: mysql.Connection | null = null;

export const getConnection = async (): Promise<mysql.Connection> => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST!,
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_NAME!,
    });
  }
  return connection;
};
