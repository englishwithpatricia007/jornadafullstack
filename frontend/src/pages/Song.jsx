import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistsArray } from "../assets/database/artists";

const Song = () => {
    const { id } = useParams();


    const { image, name, artist, duration, audio} = songsArray.filter(
        (currentSongObj) => currentSongObj._id === id
    )[0];

    const artistObj = artistsArray.filter(
        (currentArtistObj) => currentArtistObj.name == artist)[0]


    const songsArrayFromArtist = songsArray
        .filter((currentSongObj) => currentSongObj.artist === artist)
    const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))
    const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))
    const randomSongIdFromArtist = songsArrayFromArtist[randomIndex]._id    
    const randomSongIdFromArtist2 = songsArrayFromArtist[randomIndex2]._id


    return (
        <div className="song">
            <div className="song__container">
                <div className="song__image-container>">
                    <img
                        src={image}
                        alt={`Imagem da Música ${name}`}
                    />
                </div>
            </div>

            <div className="song__bar">
                <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
                    <img
                        width={75}
                        heigth={75}
                        src={artistObj.image}
                        alt={`Imagem do artista ${artist}`}
                    />
                </Link>

                <Player duration={duration} randomSongIdFromArtist={randomSongIdFromArtist} randomSongIdFromArtist2={randomSongIdFromArtist2} 
                audio = {audio}/>

                <div>
                    <p className="song__name">{name}</p>
                    <p>{artist}</p>
                </div>
            </div>
        </div>
    )
}

export default Song;