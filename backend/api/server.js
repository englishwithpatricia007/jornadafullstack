import express from 'express'
import {artistsArray} from "../../frontend/src/assets/database/artists.js"
import {songsArray} from "../../frontend/src/assets/database/songs.js"
import { db } from './connect.js';


const app = express();
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

