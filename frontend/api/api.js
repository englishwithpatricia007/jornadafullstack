//Requisições
//Fetch ou Axios
//Fetch é nativo do JavaScript
//Axios é um pacote
import axios from "axios"

const API_URL =  "https://jornadafullstack-6jz5.onrender.com/api"

const responseArtists = await axios.get(`${API_URL}/artists`);
const responseSongs = await axios.get(`${API_URL}/songs`);

export const artistsArray = responseArtists.data;
export const songsArray = responseSongs.data;