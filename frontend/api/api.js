//Requisições
//Fetch ou Axios
//Fetch é nativo do JavaScript
//Axio é um pacote
import axios from "axios"


const API_URL = "http://localhost:3000";


const responseArtists = await axios.get(`${API_URL}/artists`);
const responseSongs = await axios.get(`${API_URL}/songs`);

export const artistsArray = responseArtists.data;
export const songsArray = responseSongs.data;