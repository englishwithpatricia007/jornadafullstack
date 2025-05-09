import { MongoClient} from "mongodb";


const URI ="mongodb+srv://glitchpsn007:866R@cluster0.lokqufz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(URI);


export const db = client.db("spotifyAula");
const songCollection = await db.collection('songs').find({}).toArray(); //JavaScript Assíncrono await async
console.log(songCollection);

const artistCollection = await db.collection('artists').find({}).toArray(); //JavaScript Assíncrono await async
console.log(artistCollection);