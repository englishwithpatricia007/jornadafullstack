import { artistsArray } from "../../frontend/src/assets/database/artists.js"
import { songsArray } from "../../frontend/src/assets/database/songs.js"
import { db } from "./connect.js"

const newArtistsArray = artistsArray.map(
    (currentArtistObj) => {
        const newArtistObj = { ...currentArtistObj }
        delete newArtistObj.id
        return newArtistObj
    }
)

const newSongsArray = songsArray.map(
    (currentSongObj) => {
        const newSongObj = { ...currentSongObj }
        delete newSongObj.id
        return newSongObj
    }
)

const resSongs = await db.collection('songs').insertMany(newSongsArray)
const resArtists = await db.collection('artists').insertMany(newArtistsArray)

console.log(resSongs)
console.log(resArtists)