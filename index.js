import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import userRoutes from './routes/userRoutes.js'
import customerRoutes from './routes/customerRoutes.js'
import db from './config/db.js'

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

dotenv.config()
const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/users', userRoutes)
app.use('/api/customers', customerRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)) 