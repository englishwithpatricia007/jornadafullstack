//Requisições
//Fetch ou Axios
//Fetch é nativo do JavaScript
//Axios é um pacote
import "dotenv/config"
import axios from "axios"

const { NODE_ENV } = process.env


const API_URL = NODE_ENV === "development" ? "http://localhost:3000/api" : "/api"


const responseArtists = await axios.get(`${API_URL}/artists`);
const responseSongs = await axios.get(`${API_URL}/songs`);

export const artistsArray = responseArtists.data;
export const songsArray = responseSongs.data;