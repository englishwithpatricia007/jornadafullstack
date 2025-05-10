//Middleware (frontend/api/api.js)b-> permite as requisições

import express from 'express'
import cors from 'cors' 
import { db } from './connect.js';
import path from "path"

const __dirname = path.resolve()

const app = express();
app.use(cors())

const PORT = 3000;

app.get("/api/", (req, res) => {
    res.send("Olá, mundão! Be safe!")
})

app.get("/api/artists", async (req, res) => {
    res.send(await db.collection('artists').find({}).toArray()); //JavaScript Assíncrono await async
})

app.get("/api/songs", async (req, res) => {
    res.send(await db.collection('songs').find({}).toArray())
})

/*app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
})*/

app.listen(PORT, () => {
    console.log(`Servidor está ouvindo na porta ${PORT}`)
})
