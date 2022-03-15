import Sequelize from 'sequelize'
import dotenv from 'dotenv'


dotenv.config()

const database = process.env.DB_NAME
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

const db = new Sequelize(database, user, password, {
    host: host,
    dialect: 'postgres',
});

export default db