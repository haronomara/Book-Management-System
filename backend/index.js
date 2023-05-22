import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRouter from './models/routes/book-routes'
import cors from 'cors'
dotenv.config()
const app = express()
//middleware
app.use(express.json())
app.use(cors())
app.use('/books',bookRouter)


mongoose.connect(`mongodb+srv://haronomara1:${process.env.MONGODB_PASSWORD}@cluster0.96zvahm.mongodb.net/?retryWrites=true&w=majority`).then(()=>app.listen(9000,()=>console.log(`Connected to the Database and Running on port ${9000}`))).catch((e)=>console.log(e))

