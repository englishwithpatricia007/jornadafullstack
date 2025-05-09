//Requisições
//Fetch ou Axios
//Fetch é nativo do JavaScript
//Axio é um pacote
import axios from "axios"

const URL = "http://localhost:3000"

const resArtists = await axios.get(`${URL}/artists`) //Promise -> await
const resSongs = await axios.get(`${URL}/songs`) //Promise -> await

export const artistsArray = resArtists.data
export const songsArray = resSongs.data

//console.log(artistsArray)
//console.log(songsArray)
