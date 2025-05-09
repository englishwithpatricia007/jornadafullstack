import express from 'express'
import {artistsArray} from "../../frontend/src/assets/database/artists.js"
import {songsArray} from "../../frontend/src/assets/database/songs.js"


const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor está ouvindo na porta ${PORT}`)
})

app.get("/", (req, res) => {
    res.send("Olá, mundão! Be safe!")
})

app.get("/artists", (req, res) => {
    res.send(artistsArray)
})

app.get("/songs", (req, res) => {
    res.send(songsArray)
})