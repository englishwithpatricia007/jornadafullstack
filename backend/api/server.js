//Middleware (frontend/api/api.js)b-> permite as requisições

import express from 'express'
import cors from 'cors' 
import { db } from './connect.js';

const app = express();
app.use(cors())

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor está ouvindo na porta ${PORT}`)
})

app.get("/", (req, res) => {
    res.send("Olá, mundão! Be safe!")
})

app.get("/artists", async (req, res) => {
    res.send(await db.collection('artists').find({}).toArray()); //JavaScript Assíncrono await async
})

app.get("/songs", async (req, res) => {
    res.send(await db.collection('songs').find({}).toArray())
})

