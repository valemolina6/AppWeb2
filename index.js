import express from 'express'
import { readFile, writeFile } from 'fs/promises'
import dotenv from 'dotenv'
import userRouter from './routes/users.routes.js'
import productRouter from './routes/products.routes.js'
import salesRouter from './routes/sales.routes.js'

/*Traer variables de entorno*/
dotenv.config()

/*Crear instancia de app*/
const app = express()

/*Configurar puerto*/
const port = process.env.PORT || 3000

app.use(express.json());

/*Levantar servidor*/
app.listen(port, () => (
    console.log(`Servidor levantado en puerto ${port}`)
))

/* rutas*/
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/sales', salesRouter)