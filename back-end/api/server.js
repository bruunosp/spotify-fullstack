// API => Application Programming Interface
// POST, GET, PUT, DELETE
// CRUD - Create, Read, Update, Delete
// Endpoint
// Middleware

import express from 'express'
import cors from "cors"
import { db } from "../api/connect.js"
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(cors())
// app.use(express.json())

app.get('/', (request, response) => {
    response.send('Ola, Mundo!')
});

app.get('/artists', async (request, response) => {
    response.send(await db.collection('artists').find({}).toArray())
});

app.get('/songs', async (request, response) => {
    response.send(await db.collection('songs').find({}).toArray())
});

app.listen(PORT, () => {
    console.log(`Servidor está escutando na ${PORT}`)
    }
);