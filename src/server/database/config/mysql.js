import getDotenv from "../../utils/dotenv";

getDotenv();
module.exports = {
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    config: {
        host: process.env.HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql'
    }
};
